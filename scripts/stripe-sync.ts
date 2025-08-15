import { pricing } from "../config/pricing"
import { stripe } from "../lib/stripe"

async function upsertProduct(id: string, name: string, description: string) {
  await stripe.products.create({ id, name, description }, { idempotencyKey: id })
}

async function upsertPrice(product: string, priceId: string, amount: number, currency = "usd", recurring?: { interval: "month" | "year" }) {
  await stripe.prices.create(
    { id: priceId, unit_amount: amount, currency, product, recurring },
    { idempotencyKey: priceId },
  )
}

async function main() {
  for (const pkg of pricing.packages) {
    await upsertProduct(pkg.id, pkg.name, pkg.description)
    const ids = pkg.stripePriceId
    if (ids.one_time)
      await upsertPrice(pkg.id, ids.one_time, 0)
    if (ids.monthly)
      await upsertPrice(pkg.id, ids.monthly, 0, "usd", { interval: "month" })
    if (ids.yearly)
      await upsertPrice(pkg.id, ids.yearly, 0, "usd", { interval: "year" })
  }
  for (const addon of pricing.addons) {
    await upsertProduct(addon.id, addon.name, addon.description)
    await upsertPrice(addon.id, addon.stripePriceId, 0)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
