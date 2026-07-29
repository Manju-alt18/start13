from app.core.llm import generate_answer
from app.core.retriever import retrieve_documents


def generate_rag_response(question):

    docs = retrieve_documents(question)

    context = "\n".join(docs)

    prompt = f"""
    Context:
    {context}

    Question:
    {question}

    Answer using the context above.
    """

    return generate_answer(prompt)