import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMergedContent } from "../mergeContent";
import { CHROME_AF_DEFAULTS } from "./defaults";
import type { SiteAfContent } from "./types";

const KEY_MAP: Record<string, keyof SiteAfContent> = {
  announce: "announce",
  footer: "footer",
};

/** Merge announce + footer rows for a page slug (nav remains in each page component). */
export function buildSiteAfContent(rows: SiteContentRow[]): SiteAfContent {
  return buildMergedContent(
    rows,
    CHROME_AF_DEFAULTS as unknown as Record<string, unknown>,
    KEY_MAP
  ) as unknown as SiteAfContent;
}
