import os
from pathlib import Path

UPLOAD_DIR = "data/raw"

Path(UPLOAD_DIR).mkdir(
    parents=True,
    exist_ok=True
)


async def save_document(file):

    filepath = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    content = await file.read()

    with open(filepath, "wb") as f:
        f.write(content)

    return filepath