const API_URL = "http://localhost:8000/api";

export async function sendMessage(query) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return await response.json();
}

export async function uploadDocument(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return await response.json();
}