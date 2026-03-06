import { Resend } from 'resend';

/**
 * Service to handle email transmissions using Resend.
 * Securely uses environment variables for config.
 */
class EmailService {
  constructor() {
    this.resend = null;
    this.apiKey = import.meta.env.VITE_RESEND_API_KEY;
    this.toEmail = import.meta.env.VITE_EMAIL_TO;
    this.fromEmail = import.meta.env.VITE_EMAIL_FROM || 'onboarding@resend.dev';

    if (this.apiKey && this.apiKey !== 're_placeholder_key_12345') {
      this.resend = new Resend(this.apiKey);
    }
  }

  /**
   * Sends an email payload through Resend.
   * @param {Object} payload - { name, email, message }
   * @param {Object} metadata - { ip, location, userAgent }
   */
  async sendEmail(payload, metadata = {}) {
    if (!this.resend) {
      console.warn('EmailService: Resend API Key missing or using placeholder. Simulation mode active.');
      return { success: true, simulated: true };
    }

    const { ip = 'Unknown', city = 'Unknown', country = 'Unknown', userAgent = 'Unknown' } = metadata;

    try {
      const { data, error } = await this.resend.emails.send({
        from: `Portfolio <${this.fromEmail}>`,
        to: [this.toEmail],
        subject: `[LEAD] Message from ${payload.name}`,
        reply_to: payload.email,
        text: `
SENDER INFORMATION:
-------------------
Name: ${payload.name}
Email: ${payload.email}
IP: ${ip}
Location: ${city}, ${country}
UA: ${userAgent}

MESSAGE:
--------
${payload.message}
        `.trim(),
      });

      if (error) {
        console.error('Resend Error:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (err) {
      console.error('EmailService Exception:', err);
      return { success: false, error: 'SERVICE_UNAVAILABLE' };
    }
  }
}

export const emailService = new EmailService();
