export const digitsOnly = (value: string): string => value.replace(/\D/g, "");

const warn = (name: string) => console.warn(`${name} is not set`);

export const waLink = (fallback?: string): string => {
  const raw = (import.meta.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_E164 as string | undefined) ?? fallback;
  if (!import.meta.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_E164) warn("NEXT_PUBLIC_BUSINESS_WHATSAPP_E164");
  return raw ? `https://wa.me/${digitsOnly(raw)}` : "#";
};

export const telLink = (fallback?: string): string => {
  const raw = (import.meta.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 as string | undefined) ?? fallback;
  if (!import.meta.env.NEXT_PUBLIC_BUSINESS_PHONE_E164) warn("NEXT_PUBLIC_BUSINESS_PHONE_E164");
  return raw ? `tel:${raw.replace(/[^+\d]/g, "")}` : "#";
};

export const mailtoLink = (subject?: string, body?: string, fallback?: string): string => {
  const email = (import.meta.env.NEXT_PUBLIC_BUSINESS_EMAIL as string | undefined) ?? fallback;
  if (!import.meta.env.NEXT_PUBLIC_BUSINESS_EMAIL) warn("NEXT_PUBLIC_BUSINESS_EMAIL");
  if (!email) return "#";
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${email}${params.length ? `?${params.join("&")}` : ""}`;
};

export const mapsLink = (fallback?: string): string => {
  const address = (import.meta.env.NEXT_PUBLIC_BUSINESS_ADDRESS as string | undefined) ?? fallback;
  if (!import.meta.env.NEXT_PUBLIC_BUSINESS_ADDRESS) warn("NEXT_PUBLIC_BUSINESS_ADDRESS");
  return address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : "#";
};
