"use server";

import { createServiceRoleClient } from "@/app/lib/supabase/service";
import { revalidatePath } from "next/cache";

export async function upsertHomeSection(sectionKey: string, content: unknown) {
  const supabase = createServiceRoleClient();
  const { error } = await supabase.from("site_content").upsert(
    {
      page_slug: "home",
      section_key: sectionKey,
      content,
    },
    { onConflict: "page_slug,section_key" }
  );

  if (error) {
    return { ok: false as const, error: error.message };
  }

  revalidatePath("/");
  revalidatePath("/cms/home");
  return { ok: true as const };
}
