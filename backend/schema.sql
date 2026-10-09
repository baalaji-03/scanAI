-- ============================================================================
-- SYNAPSE AI // INTELLIGENT INFORMATION UNDERSTANDING & PROCESSING ENGINE
-- MASTER MYSQL RELATIONAL DATABASE SCHEMA (DDL)
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `infomind_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `infomind_db`;

-- 1. USERS & ACCESS CONTROL TABLE
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `hashed_password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(150) NULL,
  `role` VARCHAR(50) NOT NULL DEFAULT 'analyst',
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_users_email` (`email`),
  INDEX `idx_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. KNOWLEDGE DOMAIN CATEGORIES & TAXONOMY
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NULL,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `color_code` VARCHAR(30) NOT NULL DEFAULT '#06b6d4',
  `description` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. INGESTED DOCUMENTS TABLE
CREATE TABLE IF NOT EXISTS `documents` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NULL,
  `category_id` INT NULL,
  `title` VARCHAR(255) NOT NULL,
  `original_filename` VARCHAR(255) NOT NULL,
  `file_path` VARCHAR(500) NOT NULL,
  `file_type` VARCHAR(50) NOT NULL, -- pdf, docx, txt, csv, md
  `file_size_bytes` BIGINT NOT NULL DEFAULT 0,
  `extracted_text` LONGTEXT NULL,
  `page_count` INT NOT NULL DEFAULT 1,
  `token_count` INT NOT NULL DEFAULT 0,
  `trust_badge` VARCHAR(50) NOT NULL DEFAULT 'trust-high',
  `trust_label` VARCHAR(100) NOT NULL DEFAULT 'Verified Ingest',
  `status` VARCHAR(50) NOT NULL DEFAULT 'ready', -- parsing, vectorized, ready, failed
  `parse_duration_ms` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_docs_user` (`user_id`),
  INDEX `idx_docs_category` (`category_id`),
  INDEX `idx_docs_status` (`status`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. SEMANTIC DOCUMENT CHUNKS TABLE
CREATE TABLE IF NOT EXISTS `document_chunks` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `document_id` INT NOT NULL,
  `chunk_index` INT NOT NULL,
  `content` TEXT NOT NULL,
  `token_count` INT NOT NULL DEFAULT 0,
  `embedding_json` LONGTEXT NULL, -- JSON vector representation (e.g. 1536-D)
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_chunks_doc` (`document_id`),
  INDEX `idx_chunks_index` (`document_id`, `chunk_index`),
  FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. EXTRACTED ENTITIES & KEY DETAILS TABLE
CREATE TABLE IF NOT EXISTS `extracted_entities` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `document_id` INT NOT NULL,
  `entity_type` VARCHAR(50) NOT NULL, -- METRIC, CRITICAL RISK, ORGANIZATION, STRATEGIC MILESTONE, STANDARD
  `entity_name` VARCHAR(255) NOT NULL,
  `confidence` DECIMAL(5, 2) NOT NULL DEFAULT 95.00,
  `description` TEXT NULL,
  `source_reference` VARCHAR(255) NULL,
  `verification_status` VARCHAR(100) NOT NULL DEFAULT 'Verified',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_entities_doc` (`document_id`),
  INDEX `idx_entities_type` (`entity_type`),
  FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. CROSS-SOURCE CONFLICTS & ARBITRATION MATRIX
CREATE TABLE IF NOT EXISTS `conflicts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `severity` VARCHAR(50) NOT NULL DEFAULT 'critical', -- critical, high, moderate
  `severity_label` VARCHAR(100) NOT NULL DEFAULT 'CRITICAL INCONSISTENCY',
  `doc_a_id` INT NOT NULL,
  `doc_b_id` INT NOT NULL,
  `claim_a` TEXT NOT NULL,
  `claim_b` TEXT NOT NULL,
  `arbitration_verdict` TEXT NULL,
  `arbitration_reasoning` TEXT NULL,
  `score_a` INT NOT NULL DEFAULT 50,
  `score_b` INT NOT NULL DEFAULT 50,
  `is_resolved` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_conflicts_user` (`user_id`),
  INDEX `idx_conflicts_severity` (`severity`),
  INDEX `idx_conflicts_resolved` (`is_resolved`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`doc_a_id`) REFERENCES `documents`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`doc_b_id`) REFERENCES `documents`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. KNOWLEDGE GRAPH TOPOLOGY (NODES & SYNAPSE EDGES)
CREATE TABLE IF NOT EXISTS `knowledge_nodes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `node_key` VARCHAR(100) NOT NULL UNIQUE,
  `label` VARCHAR(200) NOT NULL,
  `node_type` VARCHAR(50) NOT NULL DEFAULT 'concept', -- concept, metric, conflict, baseline
  `radius` INT NOT NULL DEFAULT 22,
  `color_hex` VARCHAR(30) NOT NULL DEFAULT '#38bdf8',
  `metadata_json` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `knowledge_links` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `source_node_id` INT NOT NULL,
  `target_node_id` INT NOT NULL,
  `relationship` VARCHAR(100) NOT NULL DEFAULT 'related_to',
  `weight` DECIMAL(4, 2) NOT NULL DEFAULT 1.0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`source_node_id`) REFERENCES `knowledge_nodes`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`target_node_id`) REFERENCES `knowledge_nodes`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. SYSTEM PROCESSING HISTORY & AUDIT LOG TABLE
CREATE TABLE IF NOT EXISTS `processing_history` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NULL,
  `document_id` INT NULL,
  `event_type` VARCHAR(100) NOT NULL, -- INGESTION, EXTRACTION, ARBITRATION, SEARCH, SYNTHESIS
  `status` VARCHAR(50) NOT NULL DEFAULT 'SUCCESS', -- SUCCESS, PENDING, ERROR
  `details` TEXT NULL,
  `execution_time_ms` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_history_user` (`user_id`),
  INDEX `idx_history_event` (`event_type`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`document_id`) REFERENCES `documents`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
