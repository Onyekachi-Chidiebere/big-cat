-- Public bucket for CMS-uploaded images (read); uploads use service role from Next.js.

insert into storage.buckets (id, name, public)
values ('cms', 'cms', true)
on conflict (id) do update set public = excluded.public;

-- Site visitors can load images via public URL (bucket is public).
drop policy if exists "cms_public_read" on storage.objects;
create policy "cms_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'cms');
