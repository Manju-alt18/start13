from pydantic import BaseModel
from datetime import datetime


class ChatRequest(BaseModel):
    query: str


class ChatResponse(BaseModel):
    response: str


class ChatHistorySchema(BaseModel):

    id: int
    query: str
    response: str
    created_at: datetime

    class Config:
        from_attributes = True