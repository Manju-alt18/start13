from fastapi import APIRouter
from pydantic import BaseModel
from app.core.llm import generate_answer

router = APIRouter()

class ChatRequest(BaseModel):
    question: str

@router.post("/chat")
async def chat(request: ChatRequest):

    answer = generate_answer(
        request.question
    )

    return {
        "answer": answer
    }