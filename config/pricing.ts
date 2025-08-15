export type PackagePriceIds = {
  one_time?: string
  monthly?: string
  yearly?: string
}

export type Package = {
  id: string
  name: string
  description: string
  stripePriceId: PackagePriceIds
  features: string[]
}

export type Addon = {
  id: string
  name: string
  description: string
  stripePriceId: string
  mutuallyExclusive?: boolean
}

export const packages: Package[] = [
  {
    id: "pkg_basic",
    name: "Basic Package",
    description: "Entry level care",
    stripePriceId: { one_time: "price_pkg_basic_once" },
    features: ["Feature A", "Feature B"],
  },
  {
    id: "pkg_pro",
    name: "Pro Package",
    description: "Extended services",
    stripePriceId: {
      monthly: "price_pkg_pro_month",
      yearly: "price_pkg_pro_year",
    },
    features: ["Feature A", "Feature B", "Feature C"],
  },
]

export const addons: Addon[] = [
  {
    id: "addon_extra_shots",
    name: "Extra Shots",
    description: "Additional treatment shots",
    stripePriceId: "price_addon_extra_shots",
  },
  {
    id: "addon_rush",
    name: "Rush Processing",
    description: "Expedited service",
    stripePriceId: "price_addon_rush",
    mutuallyExclusive: true,
  },
]

export const pricing = { packages, addons }
