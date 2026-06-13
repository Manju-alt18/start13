import ChatBox from "../components/ChatBox";
import UploadDocs from "../components/UploadDocs";

function Home() {
  return (
    <div className="container">
      <h1>Mistral RAG AI Agent</h1>

      <UploadDocs />

      <ChatBox />
    </div>
  );
}

export default Home;