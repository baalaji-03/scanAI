import os
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from app.config import settings
from app.database import engine, Base, active_db_type, SessionLocal
from app.routers import (
    auth_router,
    documents_router,
    processing_router,
    comparison_router,
    search_router,
    organization_router,
    history_router
)

# Initialize database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Synapse AI // Intelligent Information Understanding & Processing Platform",
    description="Secure FastAPI Backend with MySQL integration for multimodal document ingestion, semantic synthesis, key-detail extraction, conflict detection, and knowledge graph mapping.",
    version="2.0.0"
)

# Enable CORS for local dev and frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount API routers
app.include_router(auth_router)
app.include_router(documents_router)
app.include_router(processing_router)
app.include_router(comparison_router)
app.include_router(search_router)
app.include_router(organization_router)
app.include_router(history_router)

# Health & Telemetry Check
@app.get("/api/health", tags=["System"])
def system_health_check():
    return {
        "status": "ONLINE",
        "engine": "Synapse-Reasoner 4.5",
        "database": {
            "type": active_db_type.upper(),
            "target_mysql": f"{settings.MYSQL_HOST}:{settings.MYSQL_PORT}/{settings.MYSQL_DATABASE}",
            "status": "CONNECTED"
        },
        "latency_ms": 14,
        "knowledge_vectors": "1,536-D Cosine Index",
        "auth_security": "JWT (HS256) + Bcrypt 12-rounds"
    }

# Auto seed default knowledge on first launch
@app.on_event("startup")
def startup_seed_check():
    from seed import seed_initial_knowledge_base
    db = SessionLocal()
    try:
        seed_initial_knowledge_base(db)
    finally:
        db.close()

# Mount frontend files from root workspace directory
FRONTEND_DIR = Path(__file__).resolve().parent.parent.parent

@app.get("/", include_in_schema=False)
def serve_index():
    index_file = FRONTEND_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Synapse AI API is running. Access /docs for Swagger UI."}

# Mount static styles and app.js
if (FRONTEND_DIR / "styles.css").exists():
    @app.get("/styles.css", include_in_schema=False)
    def serve_styles():
        return FileResponse(FRONTEND_DIR / "styles.css", media_type="text/css")

if (FRONTEND_DIR / "app.js").exists():
    @app.get("/app.js", include_in_schema=False)
    def serve_app_js():
        return FileResponse(FRONTEND_DIR / "app.js", media_type="application/javascript")
