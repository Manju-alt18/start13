from sqlalchemy.orm import Session

from app.db.models import (
    User,
    ChatHistory,
    Document
)


# --------------------
# USERS
# --------------------

def create_user(
    db: Session,
    username: str,
    email: str
):

    user = User(
        username=username,
        email=email
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


def get_user(
    db: Session,
    user_id: int
):

    return db.query(User).filter(
        User.id == user_id
    ).first()


# --------------------
# CHAT HISTORY
# --------------------

def save_chat(
    db: Session,
    user_id: int,
    query: str,
    response: str
):

    chat = ChatHistory(
        user_id=user_id,
        query=query,
        response=response
    )

    db.add(chat)
    db.commit()
    db.refresh(chat)

    return chat


def get_chat_history(
    db: Session,
    user_id: int
):

    return db.query(ChatHistory).filter(
        ChatHistory.user_id == user_id
    ).all()


# --------------------
# DOCUMENTS
# --------------------

def save_document_metadata(
    db: Session,
    filename: str,
    filepath: str
):

    document = Document(
        filename=filename,
        filepath=filepath
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    return document


def get_documents(db: Session):

    return db.query(Document).all()