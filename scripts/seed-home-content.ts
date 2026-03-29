/**
 * Seeds `site_content` for page `home` from bundled defaults.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=... NEXT_PUBLIC_SUPABASE_URL=... npx tsx scripts/seed-home-content.ts
 *
 * Requires service role key (writes bypass RLS). Safe to re-run (upserts).
 */

import { createClient } from "@supabase/supabase-js";
import { HOME_DEFAULTS, HOME_PAGE_SLUG } from "../app/lib/site/home/defaults";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error(
    "Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in the environment."
  );
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const sections: { section_key: string; content: Record<string, unknown> }[] = [
  { section_key: "announce", content: HOME_DEFAULTS.announce as unknown as Record<string, unknown> },
  { section_key: "nav", content: HOME_DEFAULTS.nav as unknown as Record<string, unknown> },
  { section_key: "hero", content: HOME_DEFAULTS.hero as unknown as Record<string, unknown> },
  { section_key: "trust", content: HOME_DEFAULTS.trust as unknown as Record<string, unknown> },
  { section_key: "wwd", content: HOME_DEFAULTS.wwd as unknown as Record<string, unknown> },
  { section_key: "purpose", content: HOME_DEFAULTS.purpose as unknown as Record<string, unknown> },
  {
    section_key: "services_intro",
    content: HOME_DEFAULTS.servicesIntro as unknown as Record<string, unknown>,
  },
  {
    section_key: "services_cards",
    content: HOME_DEFAULTS.servicesCards as unknown as Record<string, unknown>,
  },
  { section_key: "about", content: HOME_DEFAULTS.about as unknown as Record<string, unknown> },
  { section_key: "cta_strip", content: HOME_DEFAULTS.ctaStrip as unknown as Record<string, unknown> },
  { section_key: "contact", content: HOME_DEFAULTS.contact as unknown as Record<string, unknown> },
  { section_key: "footer", content: HOME_DEFAULTS.footer as unknown as Record<string, unknown> },
];

async function main() {
  for (const row of sections) {
    const { error } = await supabase.from("site_content").upsert(
      {
        page_slug: HOME_PAGE_SLUG,
        section_key: row.section_key,
        content: row.content,
      },
      { onConflict: "page_slug,section_key" }
    );
    if (error) {
      console.error(row.section_key, error.message);
      process.exit(1);
    }
    console.log("Upserted", row.section_key);
  }
  console.log("Done.");
}

main();
