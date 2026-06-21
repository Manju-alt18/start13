from .routes_chat import router as chat_router
from .routes_docs import router as docs_router

__all__ = [
    "chat_router",
    "docs_router"
]

from app.api import chat_router, docs_router

from fastapi import FastAPI
from app.api import chat_router, docs_router

app = FastAPI()

app.include_router(chat_router, prefix="/api")
app.include_router(docs_router, prefix="/api")