export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
 
  const { prompt } = req.body
 
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" })
  }
 
  const apiKey = process.env.ANTHROPIC_API_KEY
 
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY is not set in environment variables" })
  }
 
  const systemPrompt = `You are a real estate exam visual explainer. When asked to explain a concept visually, you MUST respond with a valid SVG diagram only — no prose, no markdown, no explanation outside the SVG itself.
 
Rules:
- Output ONLY raw SVG starting with <svg and ending with </svg>
- viewBox must be "0 0 700 380"
- Background is transparent (dark app — use light text colors)
- Text colors: titles #f4f4f5, body #a1a1aa, accents use #3b82f6 (blue), #22c55e (green), #f97316 (orange), #a855f7 (purple), #ef4444 (red)
- Font: DM Sans, sans-serif
- Use rectangles, arrows, connecting lines, and labels to show relationships
- Always include a title at y=26
- Keep it exam-focused — show relationships, hierarchies, or step flows
- Max complexity: ~15 labeled elements
- If you cannot create a meaningful diagram for the topic, respond with: CANNOT_VISUALIZE`
 
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          { role: "user", content: `Create an SVG diagram explaining: ${prompt}` }
        ]
      })
    })
 
    const data = await response.json()
 
    if (!response.ok) {
      return res.status(500).json({
        error: "Anthropic API error",
        status: response.status,
        details: data
      })
    }
 
    const text = data.content?.[0]?.text || "CANNOT_VISUALIZE"
    return res.status(200).json({ text })
 
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message })
  }
}
 
