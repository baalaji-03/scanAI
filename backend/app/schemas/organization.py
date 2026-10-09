from datetime import datetime
from typing import Optional, List, Any
from pydantic import BaseModel

class CategoryCreate(BaseModel):
    name: str
    slug: str
    color_code: Optional[str] = "#06b6d4"
    description: Optional[str] = None

class CategoryOut(BaseModel):
    id: int
    name: str
    slug: str
    color_code: str
    description: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class KnowledgeNodeOut(BaseModel):
    id: int
    node_key: str
    label: str
    node_type: str
    radius: int
    color_hex: str

    class Config:
        from_attributes = True

class KnowledgeLinkOut(BaseModel):
    source: str
    target: str
    relationship: str
    weight: float

class KnowledgeGraphOut(BaseModel):
    nodes: List[KnowledgeNodeOut]
    links: List[KnowledgeLinkOut]

class ProcessingHistoryOut(BaseModel):
    id: int
    user_id: Optional[int] = None
    document_id: Optional[int] = None
    event_type: str
    status: str
    details: Optional[str] = None
    execution_time_ms: int
    created_at: datetime

    class Config:
        from_attributes = True
