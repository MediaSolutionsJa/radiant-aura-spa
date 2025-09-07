/* eslint-env node */
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { bookingHtml } from '@/lib/email/templates/bookingHtml';
import { sendBookingEmail } from '@/lib/email/sendBookingEmail';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const BookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  eventType: z.string().min(2),
  eventDate: z.string(),
  message: z.string().optional().nullable(),
  website: z.string().optional().nullable(),
});

export async function POST(req: Request) {
  try {
    console.info('[booking] start');
    const body = await req.json();
    const parsed = BookingSchema.parse(body);

    if (parsed.website && parsed.website.trim().length > 0) {
      console.info('[booking] honeypot triggered');
      return Response.json({ ok: true });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: row, error } = await supabase
      .from('bookings')
      .insert({
        full_name: parsed.fullName,
        email: parsed.email,
        phone: parsed.phone ?? null,
        event_type: parsed.eventType,
        event_date: parsed.eventDate,
        message: parsed.message ?? null,
        source: 'web',
      })
      .select()
      .single();

    if (error) {
      console.error('[booking] DB insert failed', error);
      return new Response(
        JSON.stringify({ ok: false, code: 'DB_FAILED' }),
        { status: 500 }
      );
    }
    console.info('[booking] DB insert success', { id: row.id });

    const from = process.env.RESEND_FROM;
    const to = process.env.BOOKING_NOTIFY_TO;
    if (!from || !to) {
      console.error('[booking] Email config missing', { from, to });
      return new Response(
        JSON.stringify({ ok: false, code: 'EMAIL_CONFIG' }),
        { status: 500 }
      );
    }

    const html = bookingHtml({
      fullName: parsed.fullName,
      email: parsed.email,
      phone: parsed.phone ?? '',
      eventType: parsed.eventType,
      eventDate: parsed.eventDate,
      message: parsed.message ?? '',
      submittedAtISO: new Date().toISOString(),
      origin: req.headers.get('origin') ?? undefined,
    });

    await sendBookingEmail({
      to,
      from,
      subject: `New Booking — ${parsed.fullName} (${parsed.eventType})`,
      html,
    });
    console.info('[booking] email sent');

    return Response.json({ ok: true, id: row.id });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    const isEmail = msg.includes('Resend');
    console.error('[booking] Handler error', msg);
    return new Response(
      JSON.stringify({
        ok: false,
        code: isEmail ? 'EMAIL_FAILED' : 'UNKNOWN',
        message: isEmail ? 'Email delivery failed' : 'Unexpected error',
      }),
      { status: 500 }
    );
  }
}
