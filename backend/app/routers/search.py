from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.search import SearchQuery, SearchResponse
from app.services.search_service import execute_smart_search

router = APIRouter(prefix="/api/search", tags=["Search"])

@router.get("/", response_model=SearchResponse)
def search_documents_get(
    query: str = Query(..., min_length=1),
    filter_type: str = Query("all"),
    min_confidence: float = Query(0.0),
    db: Session = Depends(get_db)
):
    results = execute_smart_search(db, query, filter_type=filter_type, min_confidence=min_confidence)
    return SearchResponse(**results)

@router.post("/", response_model=SearchResponse)
def search_documents_post(
    payload: SearchQuery,
    db: Session = Depends(get_db)
):
    results = execute_smart_search(db, payload.query, filter_type=payload.filter_type or "all", min_confidence=payload.min_confidence or 0.0)
    return SearchResponse(**results)
