/* eslint-env node */
import { Resend } from 'resend';

export async function sendBookingEmail(input: {
  to: string;
  from: string;
  subject: string;
  html: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY missing');
  const resend = new Resend(key);
  const { data, error } = await resend.emails.send({
    to: input.to,
    from: input.from,
    subject: input.subject,
    html: input.html,
  });
  if (error) throw new Error(`Resend error: ${error.message || 'unknown'}`);
  return data?.id ?? null;
}
