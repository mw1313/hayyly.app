export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
 
  const { prompt } = req.body
 
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" })
  }
 
  const apiKey = process.env.GEMINI_API_KEY
 
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set")
    return res.status(500).json({ error: "API key not configured" })
  }
 
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    )
 
    const data = await response.json()
 
    if (!response.ok) {
      console.error("Gemini error:", JSON.stringify(data))
      return res.status(500).json({ error: "Gemini API error", details: data })
    }
 
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I could not generate a response."
    return res.status(200).json({ text })
 
  } catch (err) {
    console.error("Server error:", err.message)
    return res.status(500).json({ error: "Server error", details: err.message })
  }
}
 
