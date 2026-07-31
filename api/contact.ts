/**
 * Vercel serverless function — contact form → Resend.
 * The RESEND_API_KEY lives ONLY in Vercel env vars (never in the browser).
 * Sent to: romoveall@gmail.com (Alfiano) via Resend test domain.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node'

const RESEND_URL = 'https://api.resend.com/emails'
const FROM = 'onboarding@resend.dev'
const TO = 'romoveall@gmail.com'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only POST
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY missing')
    res.status(500).json({ error: 'Server not configured for mail yet.' })
    return
  }

  // Parse + validate body
  const { name: rawName, email: rawEmail, message: rawMessage } = req.body ?? {}
  const name = String(rawName ?? '').trim()
  const email = String(rawEmail ?? '').trim()
  const message = String(rawMessage ?? '').trim()

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' })
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Please enter a valid email address.' })
    return
  }
  if (name.length > 120 || message.length > 5000) {
    res.status(400).json({ error: 'Message too long.' })
    return
  }

  // Call Resend API
  try {
    const r = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New message from ${name} — Diamond Cafe website`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    const data = await r.json().catch(() => null)

    if (!r.ok) {
      console.error('[contact] Resend error:', r.status, JSON.stringify(data))
      res.status(r.status).json({ error: 'Failed to send message. Please try again.' })
      return
    }

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
