import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMergedContent } from "../mergeContent";
import { HOME_DEFAULTS } from "./defaults";
import type { HomeContent } from "./types";

const KEY_MAP: Record<string, keyof HomeContent> = {
  announce: "announce",
  nav: "nav",
  hero: "hero",
  trust: "trust",
  wwd: "wwd",
  purpose: "purpose",
  services_intro: "servicesIntro",
  services_cards: "servicesCards",
  about: "about",
  cta_strip: "ctaStrip",
  contact: "contact",
  footer: "footer",
};

/** Merge Supabase rows onto bundled defaults. */
export function buildHomeContent(rows: SiteContentRow[]): HomeContent {
  return buildMergedContent(
    rows,
    HOME_DEFAULTS as unknown as Record<string, unknown>,
    KEY_MAP
  ) as unknown as HomeContent;
}
