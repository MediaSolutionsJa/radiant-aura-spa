/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_BUSINESS_WHATSAPP_E164?: string;
  readonly NEXT_PUBLIC_BUSINESS_PHONE_E164?: string;
  readonly NEXT_PUBLIC_BUSINESS_EMAIL?: string;
  readonly NEXT_PUBLIC_BUSINESS_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
