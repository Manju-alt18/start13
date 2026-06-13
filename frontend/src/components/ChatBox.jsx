import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { sendMessage } from "../services/api";

function ChatBox() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "User",
        text: query,
      },
    ]);

    try {
      const result = await sendMessage(query);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: result.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "Server Error",
        },
      ]);
    }

    setQuery("");
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Ask a question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;