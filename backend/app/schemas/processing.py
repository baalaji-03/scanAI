from datetime import datetime
from typing import Optional, List, Dict, Any
from pydantic import BaseModel

class SummarizeRequest(BaseModel):
    document_ids: Optional[List[int]] = None
    mode: str = "detailed" # brief, detailed, bullets

class SummarizeResponse(BaseModel):
    mode: str
    summary_text: str
    bullet_points: List[str]
    grounded_confidence: float
    source_document_ids: List[int]
    radar_metrics: Dict[str, int]

class EntityOut(BaseModel):
    id: int
    document_id: int
    entity_type: str
    entity_name: str
    confidence: float
    description: Optional[str] = None
    source_reference: Optional[str] = None
    verification_status: str

    class Config:
        from_attributes = True

class ConflictOut(BaseModel):
    id: int
    subject: str
    severity: str
    severity_label: str
    doc_a_id: int
    doc_b_id: int
    doc_a_title: Optional[str] = None
    doc_b_title: Optional[str] = None
    claim_a: str
    claim_b: str
    arbitration_verdict: Optional[str] = None
    arbitration_reasoning: Optional[str] = None
    score_a: int
    score_b: int
    is_resolved: bool
    created_at: datetime

    class Config:
        from_attributes = True

class ArbitrateRequest(BaseModel):
    verdict_action: str = "adopt_recommended"
    custom_notes: Optional[str] = None

class CompareRequest(BaseModel):
    doc_a_id: int
    doc_b_id: int

class CompareSection(BaseModel):
    section_title: str
    content_a: str
    content_b: str
    is_divergent: bool
    discrepancy_note: Optional[str] = None

class CompareResponse(BaseModel):
    doc_a_id: int
    doc_a_title: str
    doc_b_id: int
    doc_b_title: str
    divergence_count: int
    sections: List[CompareSection]
