import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMergedContent, isPlainObject } from "../mergeContent";
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

function normalizeHomeFooter(merged: Record<string, unknown>): void {
  const footer = merged.footer;
  if (!isPlainObject(footer)) return;
  const line = footer.line;
  const signal = footer.signal;
  const bottomLeft = footer.bottomLeft;
  const signalLine = footer.signalLine;
  const next = {
    ...footer,
    bottomLeft:
      typeof bottomLeft === "string"
        ? bottomLeft
        : typeof line === "string"
          ? line
          : HOME_DEFAULTS.footer.bottomLeft,
    signalLine:
      typeof signalLine === "string"
        ? signalLine
        : typeof signal === "string"
          ? signal
          : HOME_DEFAULTS.footer.signalLine,
  };
  delete (next as Record<string, unknown>).line;
  delete (next as Record<string, unknown>).signal;
  merged.footer = next;
}

/** Merge Supabase rows onto bundled defaults. */
export function buildHomeContent(rows: SiteContentRow[]): HomeContent {
  const merged = buildMergedContent(
    rows,
    HOME_DEFAULTS as unknown as Record<string, unknown>,
    KEY_MAP
  ) as unknown as Record<string, unknown>;
  normalizeHomeFooter(merged);
  return merged as unknown as HomeContent;
}
