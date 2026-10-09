from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Conflict(Base):
    __tablename__ = "conflicts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=True, index=True)
    subject = Column(String(255), nullable=False)
    severity = Column(String(50), default="critical", nullable=False, index=True) # critical, high, moderate
    severity_label = Column(String(100), default="CRITICAL INCONSISTENCY", nullable=False)
    doc_a_id = Column(Integer, ForeignKey("documents.id", ondelete="CASCADE"), nullable=False)
    doc_b_id = Column(Integer, ForeignKey("documents.id", ondelete="CASCADE"), nullable=False)
    claim_a = Column(Text, nullable=False)
    claim_b = Column(Text, nullable=False)
    arbitration_verdict = Column(Text, nullable=True)
    arbitration_reasoning = Column(Text, nullable=True)
    score_a = Column(Integer, default=50, nullable=False)
    score_b = Column(Integer, default=50, nullable=False)
    is_resolved = Column(Boolean, default=False, nullable=False, index=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    user = relationship("User", back_populates="conflicts")
    doc_a = relationship("Document", foreign_keys=[doc_a_id])
    doc_b = relationship("Document", foreign_keys=[doc_b_id])
