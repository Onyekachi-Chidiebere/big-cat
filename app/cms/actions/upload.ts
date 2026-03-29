"use server";

import { createServiceRoleClient } from "@/app/lib/supabase/service";

const BUCKET = "cms";
const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

export async function uploadCmsImage(formData: FormData) {
  const file = formData.get("file");
  if (!file || !(file instanceof File) || file.size === 0) {
    return { ok: false as const, error: "No file selected" };
  }
  if (file.size > MAX_BYTES) {
    return { ok: false as const, error: "File too large (max 8MB)" };
  }
  const type = file.type || "application/octet-stream";
  if (!ALLOWED.has(type)) {
    return {
      ok: false as const,
      error: "Unsupported type. Use JPEG, PNG, WebP, GIF, or SVG.",
    };
  }

  const supabase = createServiceRoleClient();
  const base = (formData.get("prefix") as string) || "home";
  const safeBase = base.replace(/[^a-z0-9/_-]/gi, "").slice(0, 64) || "home";
  const ext =
    file.name.split(".").pop()?.replace(/[^a-z0-9]/gi, "").toLowerCase() ||
    "jpg";
  const path = `${safeBase}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;

  const bytes = await file.arrayBuffer();
  const { error: upErr } = await supabase.storage
    .from(BUCKET)
    .upload(path, bytes, {
      contentType: type,
      upsert: false,
    });

  if (upErr) {
    return { ok: false as const, error: upErr.message };
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { ok: true as const, publicUrl: data.publicUrl };
}
