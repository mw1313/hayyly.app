import { useState } from "react"
import { supabase } from "./supabaseClient"

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setError("")
    setMessage("")

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.")
      return
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    setLoading(true)

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        setError(error.message)
      } else {
        setMessage("Account created. You can now log in.")
        setIsSignUp(false)
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError("Incorrect email or password.")
      }
    }

    setLoading(false)
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#09090b",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        background: "#1a1a20",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "2.5rem"
      }}>
        <div style={{
          width: 48, height: 48,
          background: "linear-gradient(135deg, #3b82f6, #22c55e)",
          borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: "1rem", color: "#fff",
          marginBottom: "1.5rem"
        }}>HY</div>

        <h2 style={{ color: "#f4f4f5", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.4rem" }}>
          {isSignUp ? "Create your account" : "Welcome back"}
        </h2>
        <p style={{ color: "#a1a1aa", fontSize: "0.875rem", marginBottom: "2rem", lineHeight: 1.6 }}>
          {isSignUp ? "Sign up to start studying." : "Log in to continue studying."}
        </p>

        <label style={{ color: "#a1a1aa", fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</label>
        <input
          style={{
            width: "100%", padding: "0.8rem 1rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10, color: "#f4f4f5",
            fontSize: "0.95rem", marginBottom: "1rem",
            outline: "none", boxSizing: "border-box"
          }}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => { setEmail(e.target.value); setError("") }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
        />

        <label style={{ color: "#a1a1aa", fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Password</label>
        <input
          style={{
            width: "100%", padding: "0.8rem 1rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10, color: "#f4f4f5",
            fontSize: "0.95rem", marginBottom: "1rem",
            outline: "none", boxSizing: "border-box"
          }}
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={e => { setPassword(e.target.value); setError("") }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
        />

        {error && <p style={{ color: "#ef4444", fontSize: "0.82rem", marginBottom: "1rem" }}>{error}</p>}
        {message && <p style={{ color: "#22c55e", fontSize: "0.82rem", marginBottom: "1rem" }}>{message}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", padding: "0.9rem",
            background: "linear-gradient(90deg, #3b82f6, #22c55e, #f97316)",
            color: "#fff", border: "none",
            borderRadius: 10, fontWeight: 700,
            fontSize: "0.95rem", cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? "Please wait..." : (isSignUp ? "Sign Up" : "Log In")}
        </button>

        <p style={{ color: "#71717a", fontSize: "0.8rem", textAlign: "center", marginTop: "1.5rem" }}>
          {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
          <span
            onClick={() => { setIsSignUp(!isSignUp); setError(""); setMessage("") }}
            style={{ color: "#3b82f6", cursor: "pointer", fontWeight: 600 }}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  )
}