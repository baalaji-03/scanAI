import os
import time
import shutil
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Form, status
from sqlalchemy import func
from sqlalchemy.orm import Session
from app.config import settings
from app.database import get_db
from app.models.user import User
from app.models.document import Document, DocumentChunk
from app.models.extraction import ExtractedEntity
from app.models.history import ProcessingHistory
from app.schemas.document import DocumentOut, DocumentDetailOut
from app.services.auth_service import get_optional_current_user
from app.services.text_extractor import extract_text_from_file, chunk_text, count_tokens
from app.services.ai_engine import extract_entities_from_text

router = APIRouter(prefix="/api/documents", tags=["Documents"])

@router.post("/upload", response_model=DocumentOut, status_code=status.HTTP_201_CREATED)
async def upload_document(
    file: UploadFile = File(...),
    title: Optional[str] = Form(None),
    category_id: Optional[int] = Form(None),
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_optional_current_user)
):
    start_time = time.time()
    original_filename = file.filename or "uploaded_document"
    ext = os.path.splitext(original_filename)[1].lower().replace(".", "")
    doc_title = title or os.path.splitext(original_filename)[0].replace("_", " ").title()

    # Save to disk
    safe_filename = f"{int(time.time())}_{original_filename.replace(' ', '_')}"
    file_path = os.path.join(settings.STORAGE_DIR, safe_filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    file_size = os.path.getsize(file_path)

    # Extract text
    extracted_text, page_count = extract_text_from_file(file_path, ext)
    token_count = count_tokens(extracted_text)
    parse_duration_ms = int((time.time() - start_time) * 1000)

    # Create Document record
    document = Document(
        user_id=current_user.id if current_user else None,
        category_id=category_id,
        title=doc_title,
        original_filename=original_filename,
        file_path=file_path,
        file_type=ext or "txt",
        file_size_bytes=file_size,
        extracted_text=extracted_text,
        page_count=page_count,
        token_count=token_count,
        trust_badge="trust-high",
        trust_label="Ingested & Indexed",
        status="ready",
        parse_duration_ms=parse_duration_ms
    )
    db.add(document)
    db.commit()
    db.refresh(document)

    # Generate and save semantic chunks
    chunks_data = chunk_text(extracted_text)
    for c in chunks_data:
        chunk_obj = DocumentChunk(
            document_id=document.id,
            chunk_index=c["index"],
            content=c["content"],
            token_count=c["tokens"],
            embedding_json=None
        )
        db.add(chunk_obj)

    # Extract and save key entities automatically
    entities_data = extract_entities_from_text(extracted_text, document.id)
    for e in entities_data:
        entity_obj = ExtractedEntity(
            document_id=document.id,
            entity_type=e["entity_type"],
            entity_name=e["entity_name"],
            confidence=e["confidence"],
            description=e["description"],
            source_reference=e["source_reference"],
            verification_status=e["verification_status"]
        )
        db.add(entity_obj)

    # Log to processing history
    history_entry = ProcessingHistory(
        user_id=current_user.id if current_user else None,
        document_id=document.id,
        event_type="INGESTION",
        status="SUCCESS",
        details=f"Ingested '{doc_title}' ({file_size / 1024:.1f} KB, {page_count} pages, {len(chunks_data)} chunks)",
        execution_time_ms=parse_duration_ms
    )
    db.add(history_entry)
    db.commit()

    return DocumentOut.model_validate(document).model_copy(
        update={"chunks_count": len(chunks_data)}
    )

@router.get("/", response_model=List[DocumentOut])
def list_documents(db: Session = Depends(get_db)):
    docs = db.query(Document).order_by(Document.id.asc()).all()
    chunk_counts = dict(
        db.query(DocumentChunk.document_id, func.count(DocumentChunk.id))
        .group_by(DocumentChunk.document_id)
        .all()
    )
    return [
        DocumentOut.model_validate(doc).model_copy(
            update={"chunks_count": chunk_counts.get(doc.id, 0)}
        )
        for doc in docs
    ]

@router.get("/{document_id}", response_model=DocumentDetailOut)
def get_document_details(document_id: int, db: Session = Depends(get_db)):
    doc = db.query(Document).filter(Document.id == document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    chunks_count = db.query(DocumentChunk).filter(DocumentChunk.document_id == document_id).count()
    entities_count = db.query(ExtractedEntity).filter(ExtractedEntity.document_id == document_id).count()

    detail = DocumentDetailOut.model_validate(doc)
    detail.chunks_count = chunks_count
    detail.entities_count = entities_count
    return detail

@router.delete("/{document_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_document(document_id: int, db: Session = Depends(get_db)):
    doc = db.query(Document).filter(Document.id == document_id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    if os.path.exists(doc.file_path):
        try:
            os.remove(doc.file_path)
        except OSError:
            pass

    db.delete(doc)
    db.commit()
    return None
