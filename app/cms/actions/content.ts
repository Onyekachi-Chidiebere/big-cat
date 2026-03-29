"use server";

import { createServiceRoleClient } from "@/app/lib/supabase/service";
import { revalidatePath } from "next/cache";

/** Path on the public site for a CMS page slug (e.g. home → "/"). */
function publicPathForSlug(pageSlug: string): string {
  if (pageSlug === "home") return "/";
  return `/${pageSlug}`;
}

export async function upsertSiteSection(
  pageSlug: string,
  sectionKey: string,
  content: unknown
) {
  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("site_content").upsert(
    {
      page_slug: pageSlug,
      section_key: sectionKey,
      content,
    },
    { onConflict: "page_slug,section_key" }
  );

  if (error) {
    return { ok: false as const, error: error.message };
  }

  revalidatePath(publicPathForSlug(pageSlug));
  revalidatePath(`/cms/${pageSlug}`);
  revalidatePath("/cms");
  return { ok: true as const };
}

export async function upsertHomeSection(sectionKey: string, content: unknown) {
  return upsertSiteSection("home", sectionKey, content);
}
