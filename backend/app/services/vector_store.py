import chromadb

client = chromadb.PersistentClient(
    path="vectorstore/chroma_db"
)

collection = client.get_or_create_collection(
    name="knowledge_base"
)