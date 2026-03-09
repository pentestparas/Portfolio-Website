/* global process */
import { Resend } from 'resend';

export const config = {
  maxDuration: 10,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message, metadata } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'MISSING_PAYLOAD' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'MISSING_API_KEY_ON_SERVER' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.EMAIL_TO || 'paras615@gmail.com';
  const fromEmail = process.env.EMAIL_FROM || 'onboarding@resend.dev';

  const { ip = 'Unknown', city = 'Unknown', country = 'Unknown', userAgent = 'Unknown' } = metadata || {};

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <${fromEmail}>`,
      to: [toEmail],
      subject: `[SECURE-LEAD] Message from ${name}`,
      reply_to: email,
      text: `
SENDER INFORMATION:
-------------------
Name: ${name}
Email: ${email}
IP: ${ip}
Location: ${city}, ${country}
UA: ${userAgent}

MESSAGE:
--------
${message}
      `.trim(),
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Vercel Function Error:', err);
    return res.status(500).json({ 
      error: 'INTERNAL_SERVER_ERROR',
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
}
