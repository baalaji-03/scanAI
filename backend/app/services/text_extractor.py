import os
import re
from typing import Tuple, List
from pathlib import Path

def count_tokens(text: str) -> int:
    """Approximate token count based on word and sub-word heuristics."""
    words = len(text.split())
    return int(words * 1.3)

def extract_text_from_file(file_path: str, file_type: str) -> Tuple[str, int]:
    """
    Extracts plain text and page count from supported file types.
    Returns (extracted_text, page_count).
    """
    file_type = file_type.lower().replace(".", "")
    text = ""
    pages = 1

    try:
        if file_type == "pdf":
            import pypdf
            reader = pypdf.PdfReader(file_path)
            pages = len(reader.pages)
            extracted_pages = []
            for i, page in enumerate(reader.pages):
                page_text = page.extract_text() or ""
                if page_text.strip():
                    extracted_pages.append(f"[Page {i + 1}]\n{page_text}")
            text = "\n\n".join(extracted_pages)

        elif file_type in ["docx", "doc"]:
            import docx
            doc = docx.Document(file_path)
            paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
            text = "\n\n".join(paragraphs)
            pages = max(1, len(paragraphs) // 15)

        else: # txt, csv, md, json
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                text = f.read()
            pages = max(1, len(text.splitlines()) // 40)

    except Exception as e:
        # Fallback to binary/raw string decode
        try:
            with open(file_path, "rb") as f:
                raw = f.read()
                text = raw.decode("utf-8", errors="ignore")
        except Exception:
            text = f"Error extracting text: {str(e)}"

    if not text.strip():
        text = "No readable text content extracted from document."

    return text.strip(), pages

def chunk_text(text: str, chunk_size_words: int = 400, overlap_words: int = 60) -> List[dict]:
    """
    Chunks document text into overlapping semantic windows.
    Returns list of {'index': int, 'content': str, 'tokens': int}.
    """
    # Split text into paragraphs first to respect boundaries
    paragraphs = re.split(r'\n\s*\n', text)
    words = []
    for p in paragraphs:
        p_words = p.split()
        if p_words:
            words.extend(p_words)

    if not words:
        words = text.split()

    if not words:
        return [{"index": 0, "content": text, "tokens": count_tokens(text)}]

    chunks = []
    start = 0
    chunk_idx = 0

    while start < len(words):
        end = min(start + chunk_size_words, len(words))
        chunk_words = words[start:end]
        chunk_str = " ".join(chunk_words)
        
        chunks.append({
            "index": chunk_idx,
            "content": chunk_str,
            "tokens": count_tokens(chunk_str)
        })

        chunk_idx += 1
        if end >= len(words):
            break
        start += (chunk_size_words - overlap_words)

    return chunks
