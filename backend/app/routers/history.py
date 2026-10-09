from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.history import ProcessingHistory
from app.schemas.organization import ProcessingHistoryOut

router = APIRouter(prefix="/api/history", tags=["History & Telemetry"])

@router.get("/", response_model=List[ProcessingHistoryOut])
def get_processing_history(
    limit: int = Query(50, ge=1, le=200),
    event_type: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(ProcessingHistory)
    if event_type:
        query = query.filter(ProcessingHistory.event_type == event_type.upper())
    events = query.order_by(ProcessingHistory.id.desc()).limit(limit).all()
    return [ProcessingHistoryOut.model_validate(e) for e in events]
