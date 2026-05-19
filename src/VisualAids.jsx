import { useState } from "react"

// ─── Pre-built concept diagrams ───────────────────────────────────────────────

const DIAGRAMS = [
{
id: "ownership_types",
category: "Ownership",
title: "Types of Property Ownership",
description: "The ownership hierarchy from strongest to most limited",
svg: `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
<defs>
<linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1"/>
<stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1"/>
</linearGradient>
<linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#22c55e;stop-opacity:1"/>
<stop offset="100%" style="stop-color:#15803d;stop-opacity:1"/>
</linearGradient>
<linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#f97316;stop-opacity:1"/>
<stop offset="100%" style="stop-color:#c2410c;stop-opacity:1"/>
</linearGradient>
<linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#a855f7;stop-opacity:1"/>
<stop offset="100%" style="stop-color:#7e22ce;stop-opacity:1"/>
</linearGradient>
</defs>
<text x="350" y="30" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Property Ownership Types</text>
<rect x="220" y="50" width="260" height="56" rx="12" fill="url(#g1)"/>
<text x="350" y="75" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Fee Simple Absolute</text>
<text x="350" y="93" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Full ownership · No conditions · Strongest form</text>
<line x1="350" y1="106" x2="350" y2="128" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
<polygon points="344,124 356,124 350,134" fill="#3b82f6"/>
<rect x="220" y="134" width="260" height="56" rx="12" fill="url(#g2)"/>
<text x="350" y="159" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Fee Simple Defeasible</text>
<text x="350" y="177" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Ownership with conditions · Can be lost if violated</text>
<line x1="350" y1="190" x2="350" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
<line x1="350" y1="210" x2="200" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
<line x1="350" y1="210" x2="500" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
<polygon points="194,204 194,216 188,210" fill="#22c55e"/>
<polygon points="506,204 506,216 512,210" fill="#22c55e"/>
<rect x="50" y="216" width="180" height="52" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
<text x="140" y="238" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Determinable</text>
<text x="140" y="253" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Ends automatically</text>
<text x="140" y="264" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">when violated</text>
<rect x="470" y="216" width="180" height="52" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
<text x="560" y="236" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Subject to Condition</text>
<text x="560" y="251" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Grantor must act</text>
<text x="560" y="262" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">to reclaim</text>
<line x1="350" y1="190" x2="350" y2="296" stroke="#f97316" stroke-width="2" stroke-dasharray="4"/>
<polygon points="344,292 356,292 350,302" fill="#f97316"/>
<rect x="220" y="302" width="260" height="56" rx="12" fill="url(#g3)"/>
<text x="350" y="327" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Life Estate</text>
<text x="350" y="345" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Ownership for duration of a life · Remainderman inherits</text>
<line x1="350" y1="358" x2="350" y2="374" stroke="#a855f7" stroke-width="2" stroke-dasharray="4"/>
<polygon points="344,370 356,370 350,380" fill="#a855f7"/>
<rect x="220" y="380" width="260" height="34" rx="10" fill="url(#g4)"/>
<text x="350" y="401" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Leasehold Estate · Possession only · Most limited</text>
</svg>`
}
]

const CATEGORIES = ["All", ...Array.from(new Set(DIAGRAMS.map(d => d.category)))]

const AI_SYSTEM_PROMPT = `You are a real estate exam visual explainer.`

export default function VisualAids({ addXP }) {
const [catFilter, setCatFilter] = useState("All")
const [activeDiagram, setActiveDiagram] = useState(null)
const [aiMode, setAiMode] = useState(false)
const [aiPrompt, setAiPrompt] = useState("")
const [aiResult, setAiResult] = useState(null)
const [aiLoading, setAiLoading] = useState(false)
const [aiError, setAiError] = useState("")
const [viewed, setViewed] = useState(new Set())

const filtered = catFilter === "All" ? DIAGRAMS : DIAGRAMS.filter(d => d.category === catFilter)

const openDiagram = (d) => {
setActiveDiagram(d)
setAiMode(false)
setAiResult(null)
if (!viewed.has(d.id)) {
setViewed(prev => new Set([...prev, d.id]))
addXP && addXP(5)
}
}

const generateAiDiagram = async () => {
const prompt = aiPrompt.trim()
if (!prompt || aiLoading) return
setAiLoading(true)
setAiError("")
setAiResult(null)

try {
const res = await fetch("/api/diagram", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ prompt })
})
const data = await res.json()
const text = data.text || ""

if (text.includes("CANNOT_VISUALIZE")) {
setAiError("This topic doesn't have a clear visual structure. Try asking about a process, hierarchy, or comparison.")
} else {
const svgMatch = text.match(/<svg[\s\S]*<\/svg>/)
if (svgMatch) {
setAiResult(svgMatch[0])
addXP && addXP(10)
} else {
setAiError("Couldn't generate a clean diagram. Try rephrasing.")
}
}
} catch {
setAiError("Connection error. Please try again.")
}
setAiLoading(false)
}

const QUICK_TOPICS = [
"Types of easements",
"Leasehold estate types",
"TRID disclosure timeline",
"Foreclosure process steps",
"Co-ownership comparison",
"Depreciation types",
]

return (
<div className="section">
<div className="section-header">
<h2 className="gradient-text">Visual Aids</h2>
<p className="muted-text">{DIAGRAMS.length} diagrams · {viewed.size} viewed · +5 XP each</p>
</div>

<div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
<button
className={`btn ${!aiMode ? "btn-gradient" : "btn-ghost"}`}
onClick={() => { setAiMode(false); setActiveDiagram(null) }}
>
📊 Browse Diagrams
</button>
<button
className={`btn ${aiMode ? "btn-gradient" : "btn-ghost"}`}
onClick={() => { setAiMode(true); setActiveDiagram(null) }}
>
✨ Generate a Diagram
</button>
</div>

{aiMode && (
<div className="dark-card" style={{ marginBottom: 20 }}>
<p className="muted-text" style={{ marginBottom: 12, fontSize: "0.85rem" }}>
Describe any real estate concept and get an AI-generated diagram.
</p>
<div className="quick-prompts" style={{ marginBottom: 12 }}>
{QUICK_TOPICS.map((t, i) => (
<button key={i} className="quick-prompt-btn" onClick={() => setAiPrompt(t)}>{t}</button>
))}
</div>
<div className="chat-row">
<input
className="chat-input"
placeholder="e.g. types of easements, lien priority order..."
value={aiPrompt}
onChange={e => setAiPrompt(e.target.value)}
onKeyDown={e => e.key === "Enter" && generateAiDiagram()}
/>
<button className="btn btn-gradient" onClick={generateAiDiagram} disabled={aiLoading}>
{aiLoading ? "Generating..." : "Generate"}
</button>
</div>
{aiError && (
<p style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: 10 }}>{aiError}</p>
)}
{aiLoading && (
<div style={{ marginTop: 20, textAlign: "center", color: "#a1a1aa", fontSize: "0.9rem" }}>
Building your diagram...
</div>
)}
{aiResult && (
<div style={{ marginTop: 20 }}>
<div style={{
background: "rgba(255,255,255,0.03)",
border: "1px solid rgba(255,255,255,0.08)",
borderRadius: 14,
padding: "1rem",
overflowX: "auto"
}}
dangerouslySetInnerHTML={{ __html: aiResult }}
/>
<p style={{ color: "#22c55e", fontSize: "0.8rem", marginTop: 8 }}>+10 XP earned</p>
</div>
)}
</div>
)}

{!aiMode && (
<>
<div className="category-pills">
{CATEGORIES.map(cat => (
<button
key={cat}
className={"cat-pill " + (catFilter === cat ? "active" : "")}
onClick={() => { setCatFilter(cat); setActiveDiagram(null) }}
>
{cat}
</button>
))}
</div>

{!activeDiagram && (
<div style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
gap: 12,
marginTop: 16
}}>
{filtered.map(d => (
<button
key={d.id}
onClick={() => openDiagram(d)}
style={{
background: "rgba(255,255,255,0.03)",
border: `1px solid ${viewed.has(d.id) ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.08)"}`,
borderRadius: 14,
padding: "1rem",
textAlign: "left",
cursor: "pointer",
transition: "all 0.2s",
color: "var(--color-text)"
}}
>
<div style={{
fontSize: "0.65rem",
fontWeight: 700,
textTransform: "uppercase",
letterSpacing: "0.06em",
color: "#3b82f6",
marginBottom: 6
}}>
{d.category} {viewed.has(d.id) ? "✓" : ""}
</div>
<div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 6 }}>{d.title}</div>
<div style={{ fontSize: "0.8rem", color: "#71717a" }}>{d.description}</div>
</button>
))}
</div>
)}

{activeDiagram && (
<div style={{ marginTop: 16 }}>
<button
className="btn-ghost-sm"
onClick={() => setActiveDiagram(null)}
style={{ marginBottom: 16 }}
>
← Back to diagrams
</button>
<div className="dark-card">
<div style={{ marginBottom: 12 }}>
<span style={{
fontSize: "0.65rem",
fontWeight: 700,
textTransform: "uppercase",
letterSpacing: "0.06em",
color: "#3b82f6"
}}>
{activeDiagram.category}
</span>
<h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: 4, marginBottom: 4 }}>
{activeDiagram.title}
</h3>
<p className="muted-text" style={{ fontSize: "0.85rem" }}>{activeDiagram.description}</p>
</div>
<div style={{
background: "rgba(0,0,0,0.2)",
borderRadius: 12,
padding: "1rem",
overflowX: "auto"
}}
dangerouslySetInnerHTML={{ __html: activeDiagram.svg }}
/>
</div>
<div className="card-controls" style={{ marginTop: 12 }}>
{filtered.indexOf(activeDiagram) > 0 && (
<button className="btn btn-ghost" onClick={() => openDiagram(filtered[filtered.indexOf(activeDiagram) - 1])}>
← Prev
</button>
)}
<span className="muted-text">
{filtered.indexOf(activeDiagram) + 1} / {filtered.length}
</span>
{filtered.indexOf(activeDiagram) < filtered.length - 1 && (
<button className="btn btn-gradient" onClick={() => openDiagram(filtered[filtered.indexOf(activeDiagram) + 1])}>
Next →
</button>
)}
</div>
</div>
)}
</>
)}
</div>
)
}
