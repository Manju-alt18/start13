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
                      ? "#2b627f"
                      : "#0c2453",
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
};




const styles = {
  container: {
    minHeight: "80vh",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "20px",

    display: "flex",
    flexDirection: "column",
  },

  header: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  content: {
    display: "flex",
    height: "calc(100vh - 90px)",
    padding: "20px",
    gap: "20px",
},

  sidebar: {
    width: "300px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },

  chatSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  chatWindow: {
    flex: 1,
    overflowY: "auto",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },

  userMessage: {
    alignSelf: "flex-end",
    background:
      "linear-gradient(135deg, #06b6d4, #2563eb)",
    color: "#3e052e",
    padding: "14px 18px",
    borderRadius: "18px",
    maxWidth: "70%",
    boxShadow: "0 0 20px rgba(37,99,235,0.4)",
  },

  aiMessage: {
    alignSelf: "flex-start",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#490435",
    padding: "14px 18px",
    borderRadius: "18px",
    maxWidth: "75%",
    backdropFilter: "blur(20px)",
  },

  inputArea: {
    display: "flex",
    alignItems: "center",
    gap: "15px",

    padding: "15px",

    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",

    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",

    marginTop: "20px",
},

  input: {
    flex: 1,
    padding: "14px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    borderRadius: "14px",
    outline: "none",
    fontSize: "15px",
  },

  sendButton: {
    background:
      "linear-gradient(135deg,#06b6d4,#8b5cf6)",
    color: "#fff",
    border: "none",
    padding: "14px 24px",
    borderRadius: "14px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 20px rgba(139,92,246,0.4)",
  },

  uploadButton: {
    marginTop: "15px",
    background:
      "linear-gradient(135deg,#10b981,#059669)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 0 20px rgba(16,185,129,0.4)",
  },
};

export default App;