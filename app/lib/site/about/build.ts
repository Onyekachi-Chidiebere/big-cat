import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMergedContent } from "../mergeContent";
import { ABOUT_DEFAULTS } from "./defaults";
import type { AboutContent } from "./types";

const KEY_MAP: Record<string, keyof AboutContent> = {
  announce: "announce",
  nav: "nav",
  hero: "hero",
  stats_strip: "statsStrip",
  story: "story",
  values: "values",
  expertise: "expertise",
  director_cta: "directorCta",
  footer: "footer",
};

export function buildAboutContent(rows: SiteContentRow[]): AboutContent {
  return buildMergedContent(
    rows,
    ABOUT_DEFAULTS as unknown as Record<string, unknown>,
    KEY_MAP
  ) as unknown as AboutContent;
}
