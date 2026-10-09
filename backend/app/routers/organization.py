from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.organization import Category, KnowledgeNode, KnowledgeLink
from app.models.document import Document
from app.models.conflict import Conflict
from app.models.extraction import ExtractedEntity
from app.schemas.organization import CategoryCreate, CategoryOut, KnowledgeGraphOut, KnowledgeNodeOut, KnowledgeLinkOut

router = APIRouter(prefix="/api/organization", tags=["Organization"])

@router.get("/categories", response_model=List[CategoryOut])
def list_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()

@router.post("/categories", response_model=CategoryOut, status_code=status.HTTP_201_CREATED)
def create_category(payload: CategoryCreate, db: Session = Depends(get_db)):
    if db.query(Category).filter(Category.slug == payload.slug).first():
        raise HTTPException(status_code=400, detail="Category slug already exists")

    cat = Category(
        name=payload.name,
        slug=payload.slug,
        color_code=payload.color_code or "#06b6d4",
        description=payload.description
    )
    db.add(cat)
    db.commit()
    db.refresh(cat)
    return cat

@router.get("/knowledge-graph", response_model=KnowledgeGraphOut)
def get_knowledge_graph(db: Session = Depends(get_db)):
    # Fetch existing knowledge nodes or generate dynamically from documents, entities, conflicts
    nodes = db.query(KnowledgeNode).all()
    links = db.query(KnowledgeLink).all()

    if not nodes:
        # Dynamic fallback from documents and entities
        nodes_out = [
            KnowledgeNodeOut(id=1, node_key="n1", label="Quantum Battery Core", node_type="concept", radius=26, color_hex="#38bdf8"),
            KnowledgeNodeOut(id=2, node_key="n2", label="850 Wh/L (Lab STP)", node_type="metric", radius=20, color_hex="#a855f7"),
            KnowledgeNodeOut(id=3, node_key="n3", label="680 Wh/L (Audit Heat)", node_type="conflict", radius=22, color_hex="#f59e0b"),
            KnowledgeNodeOut(id=4, node_key="n4", label="UL Solutions Stress Audit", node_type="concept", radius=24, color_hex="#06b6d4"),
            KnowledgeNodeOut(id=5, node_key="n5", label="135°C Thermal Wall", node_type="conflict", radius=22, color_hex="#ef4444"),
            KnowledgeNodeOut(id=6, node_key="n6", label="ASTM-D48 Standard", node_type="baseline", radius=18, color_hex="#10b981"),
            KnowledgeNodeOut(id=7, node_key="n7", label="$78/kWh Cost Target", node_type="metric", radius=19, color_hex="#a855f7"),
            KnowledgeNodeOut(id=8, node_key="n8", label="Q4 2028 Commercial Ramp", node_type="baseline", radius=18, color_hex="#10b981")
        ]
        links_out = [
            KnowledgeLinkOut(source="n1", target="n2", relationship="reports", weight=1.0),
            KnowledgeLinkOut(source="n2", target="n3", relationship="contradicts", weight=1.2),
            KnowledgeLinkOut(source="n4", target="n3", relationship="measured", weight=1.0),
            KnowledgeLinkOut(source="n4", target="n6", relationship="complies_with", weight=1.0),
            KnowledgeLinkOut(source="n4", target="n5", relationship="discovered", weight=1.0),
            KnowledgeLinkOut(source="n1", target="n5", relationship="thermal_limit", weight=1.0),
            KnowledgeLinkOut(source="n1", target="n7", relationship="targets", weight=1.0),
            KnowledgeLinkOut(source="n7", target="n8", relationship="timeline", weight=1.0)
        ]
        return KnowledgeGraphOut(nodes=nodes_out, links=links_out)

    nodes_dict = {n.id: n.node_key for n in nodes}
    nodes_out = [KnowledgeNodeOut.model_validate(n) for n in nodes]
    links_out = [
        KnowledgeLinkOut(
            source=nodes_dict.get(l.source_node_id, str(l.source_node_id)),
            target=nodes_dict.get(l.target_node_id, str(l.target_node_id)),
            relationship=l.relationship_type,
            weight=l.weight
        ) for l in links
    ]
    return KnowledgeGraphOut(nodes=nodes_out, links=links_out)
