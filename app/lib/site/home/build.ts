import type { SiteContentRow } from "@/app/lib/supabase/content";
import { HOME_DEFAULTS } from "./defaults";
import type { HomeContent } from "./types";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge<T extends Record<string, unknown>>(base: T, patch: unknown): T {
  if (!isPlainObject(patch)) return base;
  const out = { ...base } as T;
  for (const key of Object.keys(patch)) {
    const pv = (patch as Record<string, unknown>)[key];
    const bv = (base as Record<string, unknown>)[key];
    if (Array.isArray(pv)) {
      (out as Record<string, unknown>)[key] = pv;
    } else if (isPlainObject(pv) && isPlainObject(bv)) {
      (out as Record<string, unknown>)[key] = deepMerge(
        bv as Record<string, unknown>,
        pv
      );
    } else if (pv !== undefined) {
      (out as Record<string, unknown>)[key] = pv;
    }
  }
  return out;
}

function mapRowKeyToContentKey(key: string): keyof HomeContent | null {
  const map: Record<string, keyof HomeContent> = {
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
  return map[key] ?? null;
}

/** Merge Supabase rows onto bundled defaults. */
export function buildHomeContent(rows: SiteContentRow[]): HomeContent {
  let merged = structuredClone(HOME_DEFAULTS) as unknown as Record<string, unknown>;

  for (const row of rows) {
    const ck = mapRowKeyToContentKey(row.section_key);
    if (!ck) continue;
    const current = merged[ck];
    if (current === undefined || row.content == null) continue;
    if (Array.isArray(row.content)) {
      merged[ck] = row.content;
      continue;
    }
    if (typeof row.content === "object") {
      merged[ck] = deepMerge(
        current as Record<string, unknown>,
        row.content as Record<string, unknown>
      );
    }
  }

  return merged as unknown as HomeContent;
}
