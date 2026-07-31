import requests

def generate_answer(question):
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "mistral",
            "prompt": question,
            "stream": False
        }
    )

    return response.json()["response"]