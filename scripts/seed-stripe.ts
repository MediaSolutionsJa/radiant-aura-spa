import Stripe from "stripe"
import { randomUUID } from "crypto"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set")
}

const items = [
  { name: "Mini Facial", price: 45_00, duration: 45, category: "FACIAL" },
  { name: "AE Signature Facial", price: 75_00, duration: 60, category: "FACIAL" },
  { name: "Lymphatic Drainage Facial", price: 90_00, duration: 70, category: "FACIAL" },
  { name: "AE Luxe Skin | Event Ready", price: 120_00, duration: 80, category: "FACIAL" },
  { name: "Back Facial", price: 65_00, duration: 60, category: "BODY" },
  { name: "Full Body Treatment", price: 130_00, duration: 80, category: "BODY" },
  { name: "Classic Lash Set", price: 100_00, duration: 180, category: "LASHES" },
  { name: "Hybrid Lash Set", price: 120_00, duration: 180, category: "LASHES" },
  { name: "Volume Lash Set", price: 130_00, duration: 180, category: "LASHES" },
  { name: "LED Light Therapy", price: 15_00, duration: 10, category: "ADDON", is_addon: true },
  { name: "Hot Stones", price: 10_00, duration: 10, category: "ADDON", is_addon: true },
  { name: "Paraffin Wax Service", price: 30_00, duration: 15, category: "ADDON", is_addon: true },
  { name: "Children: Mini Facial + High Frequency", price: 35_00, duration: 50, category: "CHILDREN" },
  { name: "Children: Mini Back Facial (Gua Sha/Hot Stones)", price: 50_00, duration: 55, category: "CHILDREN" },
  { name: "Children: Eye & Lip Treatment", price: 40_00, duration: 30, category: "CHILDREN" },
  { name: "Children: LED+Arm/Hand+Exfoliation+Paraffin", price: 55_00, duration: 60, category: "CHILDREN" },
  { name: "Brows", price: 12_00, duration: 15, category: "WAX" },
  { name: "Brows + Mapping", price: 20_00, duration: 20, category: "WAX" },
  { name: "Full Face", price: 25_00, duration: 30, category: "WAX" },
  { name: "Bikini", price: 40_00, duration: 30, category: "WAX" },
]

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

async function insertCatalogItem(data: any) {
  const res = await fetch(`${supabaseUrl}/rest/v1/catalog_items`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase insert failed: ${res.status} ${text}`)
  }
  return res.json()
}

;(async () => {
  for (const item of items) {
    const product = await stripe.products.create({
      name: item.name,
      metadata: {
        category: item.category,
        duration: String(item.duration),
        is_addon: String(!!item.is_addon),
      },
    })
    const price = await stripe.prices.create({
      unit_amount: item.price,
      currency: "usd",
      product: product.id,
    })

    const metadata = item.category === "CHILDREN" ? { minServicesPerSession: 2 } : {}
    await insertCatalogItem({
      id: randomUUID(),
      slug: slugify(item.name),
      name: item.name,
      category: item.category,
      base_price_cents: item.price,
      duration_minutes: item.duration,
      is_addon: !!item.is_addon,
      is_package: false,
      stripe_product_id: product.id,
      stripe_price_id: price.id,
      metadata,
    })

    console.log(item.name, product.id, price.id)
  }
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
