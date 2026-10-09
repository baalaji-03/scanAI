import logging
from pathlib import Path
from sqlalchemy import create_engine, text
from sqlalchemy.engine import make_url
from sqlalchemy.orm import declarative_base, sessionmaker
from app.config import settings

logger = logging.getLogger("synapse.database")
logging.basicConfig(level=logging.INFO)

Base = declarative_base()
active_db_type = "mysql"

def create_resilient_engine():
    global active_db_type
    try:
        # Attempt MySQL connection
        mysql_engine = create_engine(
            settings.DATABASE_URL,
            pool_recycle=3600,
            pool_pre_ping=True,
            echo=False
        )
        with mysql_engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        logger.info(f"Connected successfully to MySQL Database at {settings.MYSQL_HOST}:{settings.MYSQL_PORT}/{settings.MYSQL_DATABASE}")
        active_db_type = "mysql"
        return mysql_engine
    except Exception as e:
        logger.warning("Could not connect to MySQL: %s", e)
        if settings.FALLBACK_SQLITE:
            sqlite_url = make_url(settings.SQLITE_URL)
            if sqlite_url.database and sqlite_url.database != ":memory:":
                sqlite_path = Path(sqlite_url.database)
                if not sqlite_path.is_absolute():
                    sqlite_path = Path(__file__).resolve().parents[2] / sqlite_path
                sqlite_url = sqlite_url.set(database=str(sqlite_path.resolve()))
            logger.info("Falling back gracefully to SQLite: %s", sqlite_url)
            sqlite_engine = create_engine(
                sqlite_url,
                connect_args={"check_same_thread": False},
                echo=False
            )
            active_db_type = "sqlite"
            return sqlite_engine
        else:
            raise e

engine = create_resilient_engine()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
