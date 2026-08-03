const MAILERLITE_GROUP_ID = '194767288957667114'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  const { firstName, lastName, email } = req.body ?? {}

  if (
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof firstName !== 'string' ||
    !firstName.trim() ||
    typeof lastName !== 'string' ||
    !lastName.trim()
  ) {
    return res.status(400).json({ error: 'Invalid input' })
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName.trim(),
          last_name: lastName.trim(),
        },
        groups: [MAILERLITE_GROUP_ID],
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('MailerLite error:', response.status, errorBody)
      return res.status(502).json({ error: 'Failed to save subscriber' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Subscribe handler error:', err)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
