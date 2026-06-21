-- Create database
CREATE DATABASE ai_agent;

-- Connect to database
\c ai_agent;

--------------------------------------------------
-- USERS TABLE
--------------------------------------------------

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------
-- CHAT HISTORY TABLE
--------------------------------------------------

CREATE TABLE chat_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    query TEXT NOT NULL,
    response TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------
-- DOCUMENTS TABLE
--------------------------------------------------

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    filepath TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------
-- INDEXES FOR PERFORMANCE
--------------------------------------------------

CREATE INDEX idx_users_email
ON users(email);

CREATE INDEX idx_chat_user_id
ON chat_history(user_id);

CREATE INDEX idx_documents_filename
ON documents(filename);