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

from app.core.embeddings import get_embedding


def test_embedding():

    sample_text = """
    Mistral is a powerful open-source LLM.
    """

    embedding = get_embedding(sample_text)

    print("Embedding generated successfully")
    print(f"Vector length: {len(embedding)}")
    print(f"Sample values: {embedding[:10]}")


if __name__ == "__main__":
    test_embedding()