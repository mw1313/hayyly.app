import Stripe from "stripe"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { userId } = req.body
  if (!userId) {
    return res.status(400).json({ error: "Missing userId" })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      success_url: `${req.headers.origin}/?paid=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      client_reference_id: userId,
      metadata: { userId }
    })
    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.log("Stripe error:", err.message)
    return res.status(500).json({ error: err.message })
  }
}