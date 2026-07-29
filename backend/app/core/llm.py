from mistralai import Mistral
import os

client = Mistral(
    api_key=os.getenv("MISTRAL_API_KEY")
)


def generate_answer(prompt):

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