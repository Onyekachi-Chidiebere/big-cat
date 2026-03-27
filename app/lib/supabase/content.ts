import { createClient } from "@/app/lib/supabase/server";

export type SiteContentRow = {
  page_slug: string;
  section_key: string;
  content: Record<string, unknown>;
  updated_at: string;
};

/** Fetch all sections for a page (use from Server Components after migrating a route). */
export async function getSiteContentForPage(
  pageSlug: string
): Promise<SiteContentRow[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("page_slug, section_key, content, updated_at")
    .eq("page_slug", pageSlug)
    .order("section_key");

  if (error) {
    console.error("getSiteContentForPage", pageSlug, error.message);
    return [];
  }

  return (data ?? []) as SiteContentRow[];
}
