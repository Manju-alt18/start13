from fastapi import APIRouter
from pydantic import BaseModel

from app.core.rag_pipeline import generate_rag_response

router = APIRouter()


class ChatRequest(BaseModel):
    query: str


@router.post("/chat")
async def chat(request: ChatRequest):
    response = generate_rag_response(request.query)

    return {
        "query": request.query,
        "response": response
    }