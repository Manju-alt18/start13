from fastapi import APIRouter, UploadFile, File
from app.services.document_loader import save_document

router = APIRouter()


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    filepath = await save_document(file)

    return {
        "message": "Document uploaded successfully",
        "file": filepath
    }