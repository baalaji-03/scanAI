from typing import Optional, List
from pydantic import BaseModel

class SearchQuery(BaseModel):
    query: str
    filter_type: Optional[str] = "all" # all, high_conf, conflicts
    min_confidence: Optional[float] = 0.0

class SearchResultItem(BaseModel):
    document_id: int
    document_title: str
    chunk_index: int
    similarity_score: float
    matched_snippet: str
    meta_info: str

class SearchResponse(BaseModel):
    query: str
    total_matches: int
    expanded_queries: List[str]
    results: List[SearchResultItem]
    latency_ms: int
