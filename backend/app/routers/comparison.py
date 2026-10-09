from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.document import Document
from app.schemas.processing import CompareRequest, CompareResponse
from app.services.comparator_service import compare_documents_side_by_side

router = APIRouter(prefix="/api/compare", tags=["Comparison"])

@router.post("/sources", response_model=CompareResponse)
def compare_document_sources(payload: CompareRequest, db: Session = Depends(get_db)):
    doc_a = db.query(Document).filter(Document.id == payload.doc_a_id).first()
    doc_b = db.query(Document).filter(Document.id == payload.doc_b_id).first()

    if not doc_a or not doc_b:
        raise HTTPException(status_code=404, detail="One or both documents not found for comparison")

    comparison = compare_documents_side_by_side(
        doc_a.id, doc_a.title, doc_a.extracted_text or "",
        doc_b.id, doc_b.title, doc_b.extracted_text or ""
    )

    return CompareResponse(**comparison)
