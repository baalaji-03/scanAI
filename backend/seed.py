import os
import sys
from pathlib import Path

# Add backend directory to path
sys.path.insert(0, str(Path(__file__).resolve().parent))

from sqlalchemy.orm import Session
from app.database import SessionLocal, Base, engine
from app.models.user import User
from app.models.document import Document, DocumentChunk
from app.models.extraction import ExtractedEntity
from app.models.conflict import Conflict
from app.models.organization import Category, KnowledgeNode, KnowledgeLink
from app.models.history import ProcessingHistory
from app.services.auth_service import hash_password
from app.services.text_extractor import chunk_text

def seed_initial_knowledge_base(db: Session):
    # Ensure tables exist
    Base.metadata.create_all(bind=engine)

    # Check if already seeded
    if db.query(User).count() > 0:
        return

    print("Seeding initial Synapse AI database records...")

    # 1. Create Default Analyst User
    admin = User(
        email="analyst@synapse.ai",
        username="lead_analyst",
        hashed_password=hash_password("synapse123"),
        full_name="Dr. Elena Vance (Lead AI Analyst)",
        role="admin"
    )
    db.add(admin)
    db.commit()
    db.refresh(admin)

    # 2. Categories
    cat_battery = Category(
        user_id=admin.id,
        name="Quantum Solid-State Battery",
        slug="battery",
        color_code="#06b6d4",
        description="Next-generation battery chemistry and automotive stress benchmarks."
    )
    cat_fintech = Category(
        user_id=admin.id,
        name="Q3 FinTech M&A Due Diligence",
        slug="fintech",
        color_code="#8b5cf6",
        description="SaaS ARR verification, customer concentration, and covenant analysis."
    )
    cat_biomed = Category(
        user_id=admin.id,
        name="Oncology Multi-Study Synthesis",
        slug="biomed",
        color_code="#ec4899",
        description="HER2 antibody drug conjugate clinical trials, response rates, and safety."
    )
    db.add_all([cat_battery, cat_fintech, cat_biomed])
    db.commit()
    db.refresh(cat_battery)

    # 3. Documents for Quantum Battery
    doc1_text = (
        "NeoBattery silicon-anode solid-state cells demonstrate 850 Wh/L volumetric energy density "
        "and 390 Wh/kg specific energy under baseline room-temperature conditions (STP: 25°C). "
        "Cell testing under inert argon confirms thermal stability up to 180°C with 12-minute 80% "
        "fast charging capability. Target commercial automotive pilot integration scheduled for Q2 2027."
    )
    doc1 = Document(
        user_id=admin.id,
        category_id=cat_battery.id,
        title="NeoBattery Tech Whitepaper v2.4",
        original_filename="NeoBattery_Whitepaper_v2.4.pdf",
        file_path="./storage/NeoBattery_Whitepaper_v2.4.pdf",
        file_type="pdf",
        file_size_bytes=3421000,
        extracted_text=doc1_text,
        page_count=14,
        token_count=180,
        trust_badge="trust-high",
        trust_label="Lab Verified",
        status="ready",
        parse_duration_ms=210
    )

    doc2_text = (
        "UL Solutions Independent Third-Party Stress Audit conducted under ASTM-D48 Environmental Standards. "
        "Under sustained heat duty cycles (45°C - 60°C ambient), volumetric energy density drops to 680 Wh/L "
        "(a 20% degradation from manufacturer claims). Destructive physical analysis identifies separator "
        "micro-cracking and internal short circuit risks at 135°C. Ceramic tooling revisions require realistic "
        "high-yield production ramp delayed to Q4 2028."
    )
    doc2 = Document(
        user_id=admin.id,
        category_id=cat_battery.id,
        title="UL Solutions Third-Party Stress Audit",
        original_filename="UL_Solutions_Audit_Report.docx",
        file_path="./storage/UL_Solutions_Audit_Report.docx",
        file_type="docx",
        file_size_bytes=4812000,
        extracted_text=doc2_text,
        page_count=28,
        token_count=230,
        trust_badge="trust-high",
        trust_label="Audited Baseline",
        status="ready",
        parse_duration_ms=315
    )

    doc3_text = (
        "SEC 10-K Commercialization Capex Filing. Commercial gigafactory ramp targeting $78/kWh pack-level cost. "
        "Capital disbursements require separator yield > 88%. Production scale up timeline revised to Q4 2028 "
        "to accommodate active liquid chiller cooling engineering mandated by thermal audit."
    )
    doc3 = Document(
        user_id=admin.id,
        category_id=cat_battery.id,
        title="SEC 10-K Commercialization Capex Filing",
        original_filename="SEC_10K_Filing.csv",
        file_path="./storage/SEC_10K_Filing.csv",
        file_type="csv",
        file_size_bytes=1280000,
        extracted_text=doc3_text,
        page_count=42,
        token_count=150,
        trust_badge="trust-med",
        trust_label="Regulatory Target",
        status="ready",
        parse_duration_ms=180
    )

    db.add_all([doc1, doc2, doc3])
    db.commit()
    db.refresh(doc1)
    db.refresh(doc2)
    db.refresh(doc3)

    # 4. Chunks for Documents
    for doc in [doc1, doc2, doc3]:
        chunks = chunk_text(doc.extracted_text)
        for c in chunks:
            db.add(DocumentChunk(
                document_id=doc.id,
                chunk_index=c["index"],
                content=c["content"],
                token_count=c["tokens"]
            ))

    # 5. Extracted Entities
    entities = [
        ExtractedEntity(document_id=doc1.id, entity_type="METRIC", entity_name="850 Wh/L Volumetric Density", confidence=98.9, description="Measured at room temperature (25°C) without external mechanical load.", source_reference="Doc 1 §3.1", verification_status="⚠️ Contradicted by Audit"),
        ExtractedEntity(document_id=doc1.id, entity_type="ORGANIZATION", entity_name="NeoBattery Labs", confidence=99.4, description="Primary R&D engineering entity.", source_reference="Doc 1 §1", verification_status="Primary Originator"),
        ExtractedEntity(document_id=doc2.id, entity_type="CRITICAL RISK", entity_name="680 Wh/L (20% Degradation)", confidence=99.5, description="Actual volumetric capacity observed under 45°C continuous cycling.", source_reference="Doc 2 §5.2", verification_status="⚠️ Critical Discrepancy"),
        ExtractedEntity(document_id=doc2.id, entity_type="STANDARD", entity_name="ASTM-D48 Environmental Protocol", confidence=99.1, description="Standard automotive environmental stress protocol.", source_reference="Doc 2 §2", verification_status="Standard Baseline"),
        ExtractedEntity(document_id=doc2.id, entity_type="CRITICAL RISK", entity_name="Separator Micro-Fractures at 135°C", confidence=98.8, description="Micro-cracking in solid ceramic electrolyte allows dendrite growth.", source_reference="Doc 2 §6.4", verification_status="⚠️ Safety Warning"),
        ExtractedEntity(document_id=doc3.id, entity_type="STRATEGIC MILESTONE", entity_name="$78/kWh Pack-Level Cost", confidence=94.5, description="Commercial parity target for electric vehicle adoption.", source_reference="Doc 3 §Item 7", verification_status="Economic Target"),
        ExtractedEntity(document_id=doc3.id, entity_type="STRATEGIC MILESTONE", entity_name="Q4 2028 Commercial Ramp", confidence=96.2, description="Revised realistic production date reflecting ceramic tooling delay.", source_reference="Doc 3 §Item 1", verification_status="Timeline Reality")
    ]
    db.add_all(entities)

    # 6. Conflicts
    conflicts = [
        Conflict(
            user_id=admin.id,
            subject="Volumetric Energy Density Under Sustained Operating Heat",
            severity="critical",
            severity_label="CRITICAL INCONSISTENCY",
            doc_a_id=doc1.id,
            doc_b_id=doc2.id,
            claim_a="850 Wh/L volumetric energy density claimed at STP (25°C).",
            claim_b="680 Wh/L observed under 45°C ambient road-duty testing (20% drop).",
            arbitration_verdict="ARBITRATION: Audit Findings Supersede (680 Wh/L Real-World Baseline)",
            arbitration_reasoning="ASTM-D48 automotive standard testing by independent accredited lab represents operational reality. 850 Wh/L reflects ideal non-pressurized room-temperature condition.",
            score_a=62,
            score_b=96,
            is_resolved=False
        ),
        Conflict(
            user_id=admin.id,
            subject="Thermal Runaway & Separator Decomposition Temperature",
            severity="critical",
            severity_label="SAFETY CRITICAL",
            doc_a_id=doc1.id,
            doc_b_id=doc2.id,
            claim_a="Cell architecture claimed stable up to 180°C without mechanical failure.",
            claim_b="Optical tomography observed separator micro-cracking and internal short risks at 135°C.",
            arbitration_verdict="ARBITRATION: 135°C Limit Upheld with Active Liquid Cooling Mandate",
            arbitration_reasoning="Physical destructive testing verified catastrophic micro-cracking at 135°C. Vehicle battery packs cannot rely on passive cooling.",
            score_a=55,
            score_b=98,
            is_resolved=False
        ),
        Conflict(
            user_id=admin.id,
            subject="Commercial Pilot Production Timeline",
            severity="high",
            severity_label="SCHEDULE DIVERGENCE",
            doc_a_id=doc1.id,
            doc_b_id=doc3.id,
            claim_a="Targeted pilot integration in OEM test fleets scheduled for Q2 2027.",
            claim_b="Retooling to resolve separator cracking pushes realistic high-yield ramp to Q4 2028.",
            arbitration_verdict="ARBITRATION: Realistic Target Q4 2028 Adopted",
            arbitration_reasoning="Supply chain tooling re-engineering requires minimum 14-month validation window to satisfy regulatory certifications.",
            score_a=40,
            score_b=92,
            is_resolved=False
        )
    ]
    db.add_all(conflicts)

    # 7. Knowledge Graph Nodes & Links
    n1 = KnowledgeNode(node_key="n1", label="Quantum Battery Core", node_type="concept", radius=26, color_hex="#38bdf8")
    n2 = KnowledgeNode(node_key="n2", label="850 Wh/L (Lab STP)", node_type="metric", radius=20, color_hex="#a855f7")
    n3 = KnowledgeNode(node_key="n3", label="680 Wh/L (Audit Heat)", node_type="conflict", radius=22, color_hex="#f59e0b")
    n4 = KnowledgeNode(node_key="n4", label="UL Solutions Stress Audit", node_type="concept", radius=24, color_hex="#06b6d4")
    n5 = KnowledgeNode(node_key="n5", label="135°C Thermal Wall", node_type="conflict", radius=22, color_hex="#ef4444")
    n6 = KnowledgeNode(node_key="n6", label="ASTM-D48 Standard", node_type="baseline", radius=18, color_hex="#10b981")
    n7 = KnowledgeNode(node_key="n7", label="$78/kWh Cost Target", node_type="metric", radius=19, color_hex="#a855f7")
    n8 = KnowledgeNode(node_key="n8", label="Q4 2028 Commercial Ramp", node_type="baseline", radius=18, color_hex="#10b981")
    db.add_all([n1, n2, n3, n4, n5, n6, n7, n8])
    db.commit()

    db.add_all([
        KnowledgeLink(source_node_id=n1.id, target_node_id=n2.id, relationship_type="reports", weight=1.0),
        KnowledgeLink(source_node_id=n2.id, target_node_id=n3.id, relationship_type="contradicts", weight=1.2),
        KnowledgeLink(source_node_id=n4.id, target_node_id=n3.id, relationship_type="measured", weight=1.0),
        KnowledgeLink(source_node_id=n4.id, target_node_id=n6.id, relationship_type="complies_with", weight=1.0),
        KnowledgeLink(source_node_id=n4.id, target_node_id=n5.id, relationship_type="discovered", weight=1.0),
        KnowledgeLink(source_node_id=n1.id, target_node_id=n5.id, relationship_type="thermal_limit", weight=1.0),
        KnowledgeLink(source_node_id=n1.id, target_node_id=n7.id, relationship_type="targets", weight=1.0),
        KnowledgeLink(source_node_id=n7.id, target_node_id=n8.id, relationship_type="timeline", weight=1.0)
    ])

    # 8. Processing History
    db.add(ProcessingHistory(
        user_id=admin.id,
        event_type="INGESTION",
        status="SUCCESS",
        details="Seeded core Quantum Solid-State Battery corpus (3 documents, 7 entities, 3 conflicts)",
        execution_time_ms=145
    ))

    db.commit()
    print("Database seeding completed successfully.")

if __name__ == "__main__":
    db = SessionLocal()
    try:
        seed_initial_knowledge_base(db)
    finally:
        db.close()
