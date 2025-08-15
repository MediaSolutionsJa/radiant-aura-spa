-- Categories: FACIAL, BODY, LASHES, WAX, ADDON, PACKAGE, CHILDREN
create table catalog_items (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  base_price_cents int not null,
  duration_minutes int not null,
  is_addon boolean not null default false,
  is_package boolean not null default false,
  description text,
  stripe_product_id text,
  stripe_price_id text,
  active boolean not null default true,
  metadata jsonb default '{}'::jsonb
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text,
  customer_phone text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  subtotal_cents int not null,
  discount_cents int not null default 0,
  tax_cents int not null default 0,
  total_cents int not null,
  currency text not null default 'usd',
  status text not null default 'pending',
  stripe_payment_intent_id text,
  notes text
);

create table booking_items (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  catalog_item_id uuid references catalog_items(id),
  quantity int not null default 1,
  price_cents int not null,
  is_addon boolean not null default false
);
