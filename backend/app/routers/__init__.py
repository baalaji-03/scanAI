from app.routers.auth import router as auth_router
from app.routers.documents import router as documents_router
from app.routers.processing import router as processing_router
from app.routers.comparison import router as comparison_router
from app.routers.search import router as search_router
from app.routers.organization import router as organization_router
from app.routers.history import router as history_router

__all__ = [
    "auth_router",
    "documents_router",
    "processing_router",
    "comparison_router",
    "search_router",
    "organization_router",
    "history_router"
]
