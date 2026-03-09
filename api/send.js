/* global process */
import { Resend } from "resend";

export const config = {
  maxDuration: 10,
};

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    const { name, email, message, metadata } = req.body;

    /* ---------------------------
       Basic Validation
    ----------------------------*/

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format provided.",
      });
    }

    /* ---------------------------
       Environment Validation
    ----------------------------*/

    if (!process.env.VITE_RESEND_API_KEY) {
      return res.status(500).json({
        error: "Missing Resend API key on server.",
      });
    }

    /* ---------------------------
       Initialize Resend
    ----------------------------*/

    const resend = new Resend(process.env.VITE_RESEND_API_KEY);

    const toEmail =
      process.env.VITE_EMAIL_TO || "paras615@gmail.com";

    const fromEmail =
      process.env.VITE_EMAIL_FROM || "onboarding@resend.dev";

    /* ---------------------------
       Metadata / Tracking Info
    ----------------------------*/

    const {
      ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "Unknown",
      city = "Unknown",
      country = "Unknown",
      userAgent = req.headers["user-agent"] || "Unknown",
    } = metadata || {};

    /* ---------------------------
       Send Email
    ----------------------------*/

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `New Portfolio Message from ${name}`,
      reply_to: email,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">

<table align="center" width="100%" cellpadding="0" cellspacing="0"
style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:12px;
overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.05);">

<tr>
<td style="background:linear-gradient(135deg,#6366f1,#4f46e5);
padding:30px;text-align:center;color:#ffffff;">
<h1 style="margin:0;font-size:22px;">📩 New Portfolio Message</h1>
<p style="margin:6px 0 0 0;font-size:14px;opacity:0.9;">
Someone contacted you through your website
</p>
</td>
</tr>

<tr>
<td style="padding:25px 30px 10px 30px;color:#333;">
<p style="font-size:16px;margin:0 0 10px 0;">
Hello 👋,
</p>
<p style="font-size:14px;margin:0;">
You have received a new message from your portfolio contact form.
</p>
</td>
</tr>

<tr>
<td style="padding:10px 30px;">
<table width="100%" cellpadding="8" cellspacing="0"
style="border-collapse:collapse;font-size:14px;">
<tr>
<td style="font-weight:bold;width:130px;">Name:</td>
<td>${name}</td>
</tr>

<tr>
<td style="font-weight:bold;">Email:</td>
<td>${email}</td>
</tr>

<tr>
<td style="font-weight:bold;">IP Address:</td>
<td>${ip}</td>
</tr>

<tr>
<td style="font-weight:bold;">Location:</td>
<td>${city}, ${country}</td>
</tr>

<tr>
<td style="font-weight:bold;">User Agent:</td>
<td style="word-break:break-all;">
${userAgent}
</td>
</tr>

<tr>
<td style="font-weight:bold;">Received At:</td>
<td>${new Date().toISOString()}</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding:20px 30px;">
<p style="font-weight:bold;margin-bottom:10px;">Message:</p>
<div style="background:#f9fafb;padding:18px;border-radius:8px;
border:1px solid #e5e7eb;">
<p style="white-space:pre-wrap;margin:0;font-size:14px;">
${message}
</p>
</div>
</td>
</tr>

<tr>
<td style="background:#f9fafb;padding:20px;text-align:center;
font-size:12px;color:#6b7280;">
This email was automatically generated from your portfolio website.<br/>
© ${new Date().getFullYear()} Portfolio
</td>
</tr>

</table>
</body>
</html>
`,
    });

    /* ---------------------------
       Error Handling
    ----------------------------*/

    if (error) {
      console.error("Resend Error:", error);

      return res.status(500).json({
        error: "Failed to send message.",
      });
    }

    /* ---------------------------
       Success Response
    ----------------------------*/

    return res.status(200).json({
      success: true,
      id: data.id,
      message: "Email sent successfully!",
    });

  } catch (err) {
    console.error("Serverless Function Error:", err);

    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}