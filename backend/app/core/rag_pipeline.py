from app.core.retriever import retrieve_documents
from app.core.llm import generate_answer


def generate_rag_response(query: str):

    docs = retrieve_documents(query)

    context = "\n".join(docs)

    answer = generate_answer(
        context=context,
        query=query
    )

    return answer