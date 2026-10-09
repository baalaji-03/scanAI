from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    name = Column(String(100), nullable=False)
    slug = Column(String(100), unique=True, nullable=False)
    color_code = Column(String(30), default="#06b6d4", nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    documents = relationship("Document", back_populates="category")

class KnowledgeNode(Base):
    __tablename__ = "knowledge_nodes"

    id = Column(Integer, primary_key=True, index=True)
    node_key = Column(String(100), unique=True, nullable=False)
    label = Column(String(200), nullable=False)
    node_type = Column(String(50), default="concept", nullable=False) # concept, metric, conflict, baseline
    radius = Column(Integer, default=22, nullable=False)
    color_hex = Column(String(30), default="#38bdf8", nullable=False)
    metadata_json = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    outgoing_links = relationship("KnowledgeLink", foreign_keys="KnowledgeLink.source_node_id", cascade="all, delete-orphan")
    incoming_links = relationship("KnowledgeLink", foreign_keys="KnowledgeLink.target_node_id", cascade="all, delete-orphan")

class KnowledgeLink(Base):
    __tablename__ = "knowledge_links"

    id = Column(Integer, primary_key=True, index=True)
    source_node_id = Column(Integer, ForeignKey("knowledge_nodes.id", ondelete="CASCADE"), nullable=False)
    target_node_id = Column(Integer, ForeignKey("knowledge_nodes.id", ondelete="CASCADE"), nullable=False)
    relationship_type = Column(String(100), default="related_to", nullable=False)
    weight = Column(Float, default=1.0, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    source_node = relationship("KnowledgeNode", foreign_keys=[source_node_id], back_populates="outgoing_links")
    target_node = relationship("KnowledgeNode", foreign_keys=[target_node_id], back_populates="incoming_links")
