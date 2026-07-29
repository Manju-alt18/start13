from fastapi import APIRouter
from pydantic import BaseModel
from app.core.rag_pipeline import generate_rag_response

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
async def chat(request: ChatRequest):

    answer = generate_rag_response(
        request.question
    )

    return {
        "answer": answer
    }