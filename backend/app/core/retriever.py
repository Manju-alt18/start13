from app.services.vector_store import collection
from app.core.embeddings import get_embedding


def retrieve_documents(query: str, k: int = 3):

    embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[embedding],
        n_results=k
    )

    return results["documents"][0]