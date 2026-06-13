import { useState } from "react";
import { uploadDocument } from "../services/api";

function UploadDocs() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Choose a file first");
      return;
    }

    try {
      const result = await uploadDocument(file);

      alert(result.message);
    } catch (error) {
      console.error(error);

      alert("Upload Failed");
    }
  };

  return (
    <div className="upload-box">
      <h3>Upload Document</h3>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default UploadDocs;