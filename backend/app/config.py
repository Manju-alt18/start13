from dotenv import load_dotenv
import os

load_dotenv()

MISTRAL_API_KEY = os.getenv(
    "MISTRAL_API_KEY"
)

DATABASE_URL = os.getenv(
    "DATABASE_URL"
)

VECTOR_DB_PATH = os.getenv(
    "VECTOR_DB_PATH"
)