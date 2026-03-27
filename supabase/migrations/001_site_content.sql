-- Run this in the Supabase SQL editor (or via Supabase CLI) after creating a project.
-- Stores editable copy and image URLs per page section. Adjust RLS to your needs.

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  section_key text not null,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (page_slug, section_key)
);

create index if not exists site_content_page_slug_idx
  on public.site_content (page_slug);

alter table public.site_content enable row level security;

-- Authenticated users can insert/update/delete (CMS).
create policy "site_content_authenticated_write"
  on public.site_content
  for all
  to authenticated
  using (true)
  with check (true);

-- Public site can read published content (anon key in Next.js server components).
-- Remove or tighten this if you only want server-side reads via service role.
create policy "site_content_anon_read"
  on public.site_content
  for select
  to anon
  using (true);

-- Optional: updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists site_content_updated_at on public.site_content;
create trigger site_content_updated_at
  before update on public.site_content
  for each row execute function public.set_updated_at();
