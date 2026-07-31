import React, { useState } from "react";
import { askQuestion } from "./services/api";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Mistral RAG AI Agent. Upload documents and ask questions."
    }
  ]);

  const [question, setQuestion] = useState("");

  const handleSend = async () => {
  if (!question.trim()) return;

  const userQuestion = question;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      content: userQuestion,
    },
  ]);

  setQuestion("");

  try {
    const result = await askQuestion(
      userQuestion
    );

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: result.answer,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Error connecting to AI backend.",
      },
    ]);
  }
};


  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🤖 Mistral RAG AI Agent</h1>
        <p>Document Intelligence & Conversational AI</p>
      </header>

      <div style={styles.content}>
        <div style={styles.sidebar}>
          <h2>📄 Upload Documents</h2>

          <input type="file" />

          <button style={styles.uploadButton}>
            Upload
          </button>

          <hr />

          <h3>Supported Files</h3>

          <ul>
            <li>PDF</li>
            <li>TXT</li>
            <li>DOCX</li>
          </ul>
        </div>

        <div style={styles.chatSection}>
          <div style={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  backgroundColor:
                    msg.role === "user"
                      ? "#dbeafe"
                      : "#f3f4f6",
                  alignSelf:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start"
                }}
              >
                <strong>
                  {msg.role === "user"
                    ? "You"
                    : "Agent"}
                </strong>

                <p>{msg.content}</p>
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              style={styles.input}
            />

            <button
              onClick={handleSend}
              style={styles.sendButton}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  <div className="response-card">
  <h2>{data.title}</h2>

  <h3>Overview</h3>
  <p>{data.overview}</p>

  <h3>Key Points</h3>
  <ul>
    {data.key_points.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h3>Example</h3>
  <p>{data.example}</p>

  <h3>Conclusion</h3>
  <p>{data.conclusion}</p>
</div>
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "Arial, sans-serif"
  },

  header: {
    background: "#2563eb",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },

  content: {
    display: "flex",
    padding: "20px",
    gap: "20px"
  },

  sidebar: {
    width: "300px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  chatSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },

  chatWindow: {
    height: "70vh",
    overflowY: "auto",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  message: {
    padding: "12px",
    borderRadius: "10px",
    maxWidth: "70%"
  },

  inputArea: {
    display: "flex",
    gap: "10px",
    marginTop: "15px"
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },

  sendButton: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  uploadButton: {
    marginTop: "10px",
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default App;