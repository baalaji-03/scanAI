from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel

class DocumentChunkOut(BaseModel):
    id: int
    chunk_index: int
    content: str
    token_count: int

    class Config:
        from_attributes = True

class DocumentOut(BaseModel):
    id: int
    user_id: Optional[int] = None
    category_id: Optional[int] = None
    title: str
    original_filename: str
    file_type: str
    file_size_bytes: int
    page_count: int
    token_count: int
    trust_badge: str
    trust_label: str
    status: str
    parse_duration_ms: int
    created_at: datetime
    chunks_count: int = 0

    class Config:
        from_attributes = True

class DocumentDetailOut(DocumentOut):
    extracted_text: Optional[str] = None
    chunks_count: int = 0
    entities_count: int = 0
    chunks: Optional[List[DocumentChunkOut]] = None
