/**
 * Service to handle email transmissions via secure Vercel Serverless Function.
 */
class EmailService {
  /**
   * Sends an email payload through the secure API endpoint.
   * @param {Object} payload - { name, email, message }
   * @param {Object} metadata - { ip, location, userAgent }
   */
  async sendEmail(payload, metadata = {}) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          metadata
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || 'API_ERROR' };
      }

      return { success: true, data };
    } catch (err) {
      console.error('EmailService Client Exception:', err);
      // Fallback for local development if serverless is not running
      if (import.meta.env.DEV) {
         console.warn('Local Dev: Serverless function not detected. This is expected if running with vite alone.');
      }
      return { success: false, error: 'SERVICE_UNAVAILABLE' };
    }
  }
}

export const emailService = new EmailService();
