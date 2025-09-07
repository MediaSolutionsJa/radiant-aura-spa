export function bookingHtml(payload: {
  fullName: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate: string;
  message?: string;
  submittedAtISO: string;
  origin?: string;
}) {
  const submittedAt = new Date(payload.submittedAtISO).toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Booking Request</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }
        .header h1 {
          color: #2c3e50;
          margin: 0;
          font-size: 24px;
        }
        .content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .content td {
          padding: 12px 15px;
          border-bottom: 1px solid #e9ecef;
          vertical-align: top;
        }
        .content td:first-child {
          font-weight: 600;
          color: #495057;
          width: 140px;
          background-color: #f8f9fa;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          text-align: center;
          color: #6c757d;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          body {
            padding: 10px;
          }
          .container {
            padding: 20px;
          }
          .content td {
            display: block;
            width: 100% !important;
            border: none;
            padding: 8px 0;
          }
          .content td:first-child {
            background: none;
            font-weight: 600;
            color: #495057;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Booking Request — ${payload.fullName}</h1>
        </div>
        <div class="content">
          <table>
            <tr>
              <td>Full Name</td>
              <td>${payload.fullName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td><a href="mailto:${payload.email}">${payload.email}</a></td>
            </tr>
            ${payload.phone ? `
            <tr>
              <td>Phone</td>
              <td><a href="tel:${payload.phone}">${payload.phone}</a></td>
            </tr>` : ''}
            <tr>
              <td>Event Type</td>
              <td>${payload.eventType}</td>
            </tr>
            ${payload.eventDate ? `
            <tr>
              <td>Event Date</td>
              <td>${new Date(payload.eventDate).toLocaleDateString()}</td>
            </tr>` : ''}
            ${payload.message ? `
            <tr>
              <td>Message</td>
              <td>${payload.message.replace(/\n/g, '<br>')}</td>
            </tr>` : ''}
            <tr>
              <td>Submitted</td>
              <td>${submittedAt}</td>
            </tr>
            ${payload.origin ? `
            <tr>
              <td>Origin</td>
              <td>${payload.origin}</td>
            </tr>` : ''}
          </table>
        </div>
        <div class="footer">
          <p>This booking request was submitted via your website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
