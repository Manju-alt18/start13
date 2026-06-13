import os
from mistralai import Mistral

api_key = os.getenv("MISTRAL_API_KEY")

client = Mistral(api_key=api_key)


def generate_answer(context: str, query: str):

    prompt = f"""
    Context:
    {context}

    Question:
    {query}

    Answer:
    """

    response = client.chat.complete(
        model="mistral-large-latest",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content