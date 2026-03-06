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

      let data = {};
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON Error Response:', text);
        return { 
          success: false, 
          error: `SERVER_ERROR: ${response.status} (${response.statusText})` 
        };
      }

      if (!response.ok) {
        return { success: false, error: data.error || `API_ERROR_${response.status}` };
      }

      return { success: true, data };
    } catch (err) {
      console.error('EmailService Client Exception:', err);
      return { 
        success: false, 
        error: `CLIENT_EXCEPTION: ${err.message}` 
      };
    }
  }
}

export const emailService = new EmailService();
