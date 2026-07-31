import os

def read_text_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

def clean_text(text):
    return " ".join(text.split())

def allowed_file(filename):
    allowed_extensions = [".txt", ".pdf", ".docx"]

    ext = os.path.splitext(filename)[1].lower()

    return ext in allowed_extensions