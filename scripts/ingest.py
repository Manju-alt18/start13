import os
import sys

sys.path.append(
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            "..",
            "backend"
        )
    )
)

from app.utils.helpers import read_text_file, clean_text
from app.services.chunking import chunk_text
from app.core.embeddings import get_embedding
from app.services.vector_store import collection


DATA_FOLDER = "data/raw"


def ingest_documents():

    files = os.listdir(DATA_FOLDER)

    if not files:
        print("No files found in data/raw/")
        return

    doc_count = 0

    for file in files:

        filepath = os.path.join(
            DATA_FOLDER,
            file
        )

        print(f"Ingesting: {file}")

        text = read_text_file(filepath)

        cleaned_text = clean_text(text)

        chunks = chunk_text(cleaned_text)

        for index, chunk in enumerate(chunks):

            embedding = get_embedding(chunk)

            collection.add(
                ids=[f"{file}_{index}"],
                documents=[chunk],
                embeddings=[embedding]
            )

        doc_count += 1

    print(f"Successfully ingested {doc_count} documents")


if __name__ == "__main__":
    ingest_documents()