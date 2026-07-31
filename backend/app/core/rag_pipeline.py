from app.core.llm import generate_answer

def generate_rag_response(question):

    prompt = f"""
You are a professional AI assistant.

Answer in this format only:

# Overview
Brief explanation.

# Key Points
• Point 1
• Point 2
• Point 3

# Detailed Explanation
- Explanation 1
- Explanation 2
- Explanation 3

# Example
Provide an example if relevant.

# Conclusion
Short final conclusion.

Question:
{question}
"""

    return generate_answer(prompt)