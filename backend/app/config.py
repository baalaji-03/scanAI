import os
from pathlib import Path
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent.parent

class Settings(BaseSettings):
    ENVIRONMENT: str = "development"
    APP_NAME: str = "Synapse AI Information Engine"

    # MySQL Configuration
    MYSQL_HOST: str = "localhost"
    MYSQL_PORT: int = 3306
    MYSQL_USER: str = "root"
    MYSQL_PASSWORD: str = ""
    MYSQL_DATABASE: str = "infomind_db"
    DATABASE_URL: str = "mysql+pymysql://root:@localhost:3306/infomind_db"

    # Fallback to SQLite if MySQL service is not currently running locally
    FALLBACK_SQLITE: bool = True
    SQLITE_URL: str = f"sqlite:///{(BASE_DIR.parent / 'infomind_dev.db').as_posix()}"

    # Security & JWT
    JWT_SECRET_KEY: str = "synapse-ai-deep-space-neural-jwt-key-481940294819412"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440

    # Storage
    STORAGE_DIR: str = str(BASE_DIR / "storage")
    MAX_UPLOAD_SIZE_MB: int = 50

    class Config:
        env_file = str(BASE_DIR / ".env")
        env_file_encoding = "utf-8"
        extra = "allow"

settings = Settings()

# Ensure storage directory exists
os.makedirs(settings.STORAGE_DIR, exist_ok=True)
