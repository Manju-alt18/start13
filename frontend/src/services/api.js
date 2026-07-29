const API_URL = "http://127.0.0.1:8000/api/chat";

export const askQuestion = async (question) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get response");
  }

  return await response.json();
};