/**
 * Vercel serverless function — contact form → Resend.
 * The RESEND_API_KEY lives ONLY in Vercel env vars (never in the browser).
 * Sent to: romoveall@gmail.com (Alfiano) via Resend test domain.
 */

const RESEND_URL = 'https://api.resend.com/emails'
const FROM = 'onboarding@resend.dev'
const TO = 'romoveall@gmail.com'

export default async function handler(req: Request): Promise<Response> {
  // Only POST
  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY missing')
    return json({ error: 'Server not configured for mail yet.' }, 500)
  }

  // Parse + validate body
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return json({ error: 'Name, email, and message are required.' }, 400)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }
  if (name.length > 120 || message.length > 5000) {
    return json({ error: 'Message too long.' }, 400)
  }

  // Call Resend API
  try {
    const res = await fetch(RESEND_URL, {
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

    const data = await res.json().catch(() => null)

    if (!res.ok) {
      console.error('[contact] Resend error:', res.status, JSON.stringify(data))
      return json({ error: 'Failed to send message. Please try again.' }, res.status)
    }

    return json({ ok: true }, 200)
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return json({ error: 'Something went wrong. Please try again.' }, 500)
  }
}

function json(payload: unknown, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
