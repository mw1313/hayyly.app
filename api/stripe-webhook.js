import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

export const config = {
api: { bodyParser: false }
}

async function getRawBody(req) {
const chunks = []
for await (const chunk of req) {
chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
}
return Buffer.concat(chunks)
}

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" })
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const signature = req.headers["stripe-signature"]
const rawBody = await getRawBody(req)

let event
try {
event = stripe.webhooks.constructEvent(
rawBody,
signature,
process.env.STRIPE_WEBHOOK_SECRET
)
} catch (err) {
console.log("Webhook signature verification failed:", err.message)
return res.status(400).json({ error: "Invalid signature" })
}

if (event.type === "checkout.session.completed") {
const session = event.data.object
const userId = session.client_reference_id || session.metadata?.userId

if (!userId) {
console.log("No userId in completed session")
return res.status(200).json({ received: true })
}

const supabase = createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
)

const { error } = await supabase
.from("profiles")
.update({ is_paid: true })
.eq("id", userId)

if (error) {
console.log("Supabase update error:", error.message)
return res.status(500).json({ error: error.message })
}

console.log("Marked user as paid:", userId)
}

return res.status(200).json({ received: true })
}
