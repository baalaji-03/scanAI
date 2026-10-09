# Synapse AI // Intelligent Information Understanding & Processing Platform
## Secure Python FastAPI Backend & MySQL Database Integration

This is the production-grade Python FastAPI backend with MySQL relational database integration for the **Synapse AI / InfoMind AI** platform. It provides REST APIs powering the 4-phase workflow: **Find → Understand → Organize → Use**.

---

## 🏛️ System Architecture

```
backend/
├── app/
│   ├── config.py              # Pydantic Settings (.env configuration)
│   ├── database.py            # SQLAlchemy engine with MySQL & resilient dev fallback
│   ├── main.py                # FastAPI app entry point, CORS, static routes, health check
│   ├── models/                # SQLAlchemy ORM Relational Models
│   │   ├── user.py            # Users & Access Control (JWT, Bcrypt)
│   │   ├── document.py        # Ingested Documents & Semantic Chunks
│   │   ├── extraction.py      # Extracted Entities & Key Details
│   │   ├── conflict.py        # Cross-Source Conflicts & Arbitration Matrix
│   │   ├── organization.py    # Categories & Neural Knowledge Graph Nodes/Links
│   │   └── history.py         # System Processing History & Audit Log
│   ├── schemas/               # Pydantic v2 Request/Response Validation Models
│   ├── services/              # Business Logic & AI Engines
│   │   ├── auth_service.py    # Bcrypt 12-round hashing & PyJWT token handling
│   │   ├── text_extractor.py  # Multi-format parsing (PDF, DOCX, TXT, CSV) & chunking
│   │   ├── ai_engine.py       # Summarization, entity extraction, radar analytics
│   │   ├── conflict_service.py# Cross-document conflict detection & AI arbitration
│   │   ├── comparator_service.py # Synchronized side-by-side diff alignment
│   │   └── search_service.py  # Cosine proximity retrieval & AI query expansion
│   └── routers/               # Clean REST API Endpoints
│       ├── auth.py            # /api/auth (register, login, me)
│       ├── documents.py       # /api/documents (upload, list, detail, delete)
│       ├── processing.py      # /api/process (summarize, entities, conflicts, arbitrate)
│       ├── comparison.py      # /api/compare (sources)
│       ├── search.py          # /api/search (semantic & keyword search)
│       ├── organization.py    # /api/organization (categories, knowledge-graph)
│       └── history.py         # /api/history (audit logs & execution telemetry)
├── storage/                   # Uploaded document filesystem repository
├── schema.sql                 # Master MySQL DDL Schema script
├── seed.py                    # Database seeder with demo analyst & testbeds
├── requirements.txt           # Python dependency specifications
└── .env                       # Environment configuration
```

---

## 🗄️ MySQL Database Setup

### 1. Connection Configuration
Configure your MySQL credentials in `backend/.env`:
```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=infomind_db
DATABASE_URL=mysql+pymysql://root:your_password@localhost:3306/infomind_db
```

### 2. Execute SQL Schema
You can initialize the MySQL database directly using the provided `schema.sql`:
```bash
mysql -u root -p < backend/schema.sql
```

### 3. Resilient Startup Fallback
The database engine automatically pings MySQL on startup. If your local MySQL service is stopped or unreachable during development, it smoothly uses an SQLite database (`infomind_dev.db`) without crashing, and switches to MySQL whenever MySQL is running.

---

## 🚀 Running the Backend

### Start Server
```bash
python -m uvicorn app.main:app --host 127.0.0.1 --port 8055 --app-dir backend
```

Run this command from the project root so the backend and standalone frontend use the same SQLite database. The dashboard can be opened from either the FastAPI URL below or the standalone Node server (`node server.js`); when served on another port, it connects to the FastAPI API on port `8055`.

- **Interactive Swagger UI**: [http://127.0.0.1:8055/docs](http://127.0.0.1:8055/docs)
- **ReDoc Documentation**: [http://127.0.0.1:8055/redoc](http://127.0.0.1:8055/redoc)
- **Full Dashboard UI**: [http://127.0.0.1:8055/](http://127.0.0.1:8055/)

---

## 🔑 Pre-Seeded Demo Credentials

| Role | Username / Email | Password |
| :--- | :--- | :--- |
| **Lead AI Analyst (Admin)** | `lead_analyst` / `analyst@synapse.ai` | `synapse123` |

Click **"⚡ Auto-Fill Demo Analyst"** in the top-bar login modal to authenticate instantly.

---

## 📡 REST API Reference

### 1. Authentication (`/api/auth`)
- `POST /api/auth/register` — Register a new user account with hashed password.
- `POST /api/auth/login` — Authenticate and receive a JWT Bearer access token.
- `GET /api/auth/me` — Retrieve the current user's authenticated profile.

### 2. Document Processing (`/api/documents`)
- `POST /api/documents/upload` — Upload `multipart/form-data` file (PDF, DOCX, TXT, CSV). Performs text extraction, sliding-window chunking, entity extraction, and logs processing history.
- `GET /api/documents/` — List all ingested documents with page counts and trust badges.
- `GET /api/documents/{id}` — Full document details, chunks, and extracted entities.
- `DELETE /api/documents/{id}` — Delete document and cascaded relationships.

### 3. Intelligence & Synthesis (`/api/process`)
- `POST /api/process/summarize` — Generate multi-mode AI summary (`brief`, `detailed`, `bullets`) with Cognitive Radar scores.
- `GET /api/process/entities` — Retrieve extracted key details (`METRIC`, `CRITICAL RISK`, `ORGANIZATION`, `STRATEGIC MILESTONE`, `STANDARD`).
- `GET /api/process/conflicts` — Retrieve cross-source contradiction matrix with divergence scores.
- `POST /api/process/arbitrate/{conflict_id}` — Apply AI arbitration recommendation and resolve conflicts.

### 4. Comparison & Search (`/api/compare`, `/api/search`)
- `POST /api/compare/sources` — Side-by-side section alignment and diff computation.
- `GET /api/search/` — Cosine proximity vector search with query expansion chips and highlighted snippet matches (`<mark>`).

### 5. Knowledge Graph & History (`/api/organization`, `/api/history`)
- `GET /api/organization/knowledge-graph` — Dynamic nodes and synaptic links feeding the HTML5 Canvas Knowledge Graph.
- `GET /api/history/` — Audit telemetry logging ingestion times, search queries, and arbitration decisions.
