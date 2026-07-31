function MessageBubble({ sender, text }) {
    return (
      <div className={`message ${sender.toLowerCase()}`}>
        <strong>{sender}:</strong>
        <div
  style={{
    whiteSpace: "pre-wrap",
    lineHeight: "1.8"
  }}
>
  {message.answer}
</div>
      </div>
    );
  }
  
  export default MessageBubble;