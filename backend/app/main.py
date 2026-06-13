from fastapi import FastAPI

from app.api.routes_chat import router as chat_router
from app.api.routes_docs import router as docs_router

app = FastAPI(
    title="Mistral RAG AI Agent"
)

app.include_router(
    chat_router,
    prefix="/api"
)

app.include_router(
    docs_router,
    prefix="/api"
)


@app.get("/")
def root():
    return {
        "message": "Mistral RAG Agent Running"
    }