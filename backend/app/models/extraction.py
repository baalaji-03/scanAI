from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class ExtractedEntity(Base):
    __tablename__ = "extracted_entities"

    id = Column(Integer, primary_key=True, index=True)
    document_id = Column(Integer, ForeignKey("documents.id", ondelete="CASCADE"), nullable=False, index=True)
    entity_type = Column(String(50), nullable=False, index=True) # METRIC, CRITICAL RISK, ORGANIZATION, STRATEGIC, STANDARD
    entity_name = Column(String(255), nullable=False)
    confidence = Column(Float, default=95.0, nullable=False)
    description = Column(Text, nullable=True)
    source_reference = Column(String(255), nullable=True)
    verification_status = Column(String(100), default="Verified", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    document = relationship("Document", back_populates="entities")
