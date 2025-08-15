import express from 'express'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { supabaseAdmin } from '../lib/supabase'

const app = express()

app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return res.status(500).send('STRIPE_WEBHOOK_SECRET is not set')
  }
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
  }
  catch (err: any) {
    console.error('Webhook error', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.booking_id
    if (bookingId) {
      await supabaseAdmin
        .from('bookings')
        .update({
          status: 'confirmed',
          stripe_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : null,
        })
        .eq('id', bookingId)
    }
  }

  res.json({ received: true })
})

app.use(express.json())

app.post('/api/checkout', async (req, res) => {
  try {
    const { customer, services = [], addons = [], startsAt } = req.body
    const ids = [...services, ...addons]
    if (!customer?.name || !startsAt || ids.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const { data: items, error } = await supabaseAdmin
      .from('catalog_items')
      .select('*')
      .in('id', ids)
    if (error || !items) {
      return res.status(500).json({ error: error?.message || 'No items found' })
    }

    const childrenCount = items.filter(i => i.category === 'CHILDREN').length
    if (childrenCount > 0 && childrenCount < 2) {
      return res.status(400).json({ error: 'Please select at least two Children\u2019s services.' })
    }

    let subtotal = 0
    let duration = 0
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []
    for (const item of items) {
      subtotal += item.base_price_cents
      duration += item.duration_minutes
      lineItems.push({ price: item.stripe_price_id, quantity: 1 })
    }

    const start = new Date(startsAt)
    const end = new Date(start.getTime() + duration * 60000)

    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert({
        customer_name: customer.name,
        customer_email: customer.email ?? null,
        starts_at: start.toISOString(),
        ends_at: end.toISOString(),
        subtotal_cents: subtotal,
        total_cents: subtotal,
        status: 'pending',
      })
      .select()
      .single()
    if (bookingError || !booking) {
      return res.status(500).json({ error: bookingError?.message || 'Booking creation failed' })
    }

    const bookingItems = items.map(i => ({
      booking_id: booking.id,
      catalog_item_id: i.id,
      price_cents: i.base_price_cents,
      is_addon: i.is_addon,
    }))
    const { error: itemsError } = await supabaseAdmin.from('booking_items').insert(bookingItems)
    if (itemsError) {
      return res.status(500).json({ error: itemsError.message })
    }

    const baseUrl = process.env.BASE_URL || 'http://localhost:5173'
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: 'usd',
      allow_promotion_codes: true,
      line_items: lineItems,
      metadata: { booking_id: booking.id, starts_at: start.toISOString() },
      success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/book?canceled=1`,
    })

    res.json({ url: session.url })
  }
  catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`API server listening on port ${port}`)
})

