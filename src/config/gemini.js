import Groq from "groq-sdk";

const tempkeynotbestole = "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"; // Replace with your actual Groq API key
console.log("Using Groq API Key:", tempkeynotbestole ? "Provided" : "Not Provided");
async function runChat(prompt) {
  // Basic validation
  if (!tempkeynotbestole || tempkeynotbestole === "your-groq-api-key-here") {
    console.error("Please add your Groq API key");
    return;
  }
  
  if (!prompt) {
    console.error("Prompt cannot be empty.");
    return;
  }

  try {
    const groq = new Groq({ apiKey: tempkeynotbestole , dangerouslyAllowBrowser: true});
    
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant", // Fastest free model
      temperature: 0.7, // Lower for more consistent results
      max_tokens: 1024, // Lower to save tokens
      stream: false
    });

    const text = completion.choices[0]?.message?.content || "No response generated";
    return text;

  } catch (error) {
    console.error("Error:", error.message);
    return "Sorry, I couldn't process that request.";
  }
}

export default runChat;