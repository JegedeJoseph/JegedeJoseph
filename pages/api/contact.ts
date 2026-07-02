import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = { ok: boolean; message?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing fields' })
  }

  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const CONTACT_TO = process.env.CONTACT_TO || 'jjegede78@gmail.com'

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn('SMTP not fully configured. Payload:', { name, email, subject, message })
    return res.status(501).json({ ok: false, message: 'SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })

    const mailSubject = subject ? `[Portfolio] ${subject} — from ${name}` : `[Portfolio] Message from ${name}`

    const mail = {
      from: `"${name}" <${SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: CONTACT_TO,
      subject: mailSubject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '—'}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Subject:</strong> ${subject || '—'}</p><hr/><div>${message.replace(/\n/g, '<br/>')}</div>`
    }

    await transporter.sendMail(mail)

    return res.status(200).json({ ok: true, message: 'Message sent' })
  } catch (err) {
    console.error('Error sending mail', err)
    return res.status(500).json({ ok: false, message: 'Error sending message' })
  }
}
