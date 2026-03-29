import type { SiteContentRow } from "@/app/lib/supabase/content";

export function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function deepMerge<T extends Record<string, unknown>>(
  base: T,
  patch: unknown
): T {
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

/**
 * Merge Supabase rows onto bundled defaults. `keyMap` maps DB `section_key` → key on `T`.
 */
export function buildMergedContent<T extends Record<string, unknown>>(
  rows: SiteContentRow[],
  defaults: T,
  keyMap: Record<string, keyof T>
): T {
  let merged = structuredClone(defaults) as unknown as Record<string, unknown>;

  for (const row of rows) {
    const ck = keyMap[row.section_key];
    if (ck === undefined) continue;
    const current = merged[ck as string];
    if (current === undefined || row.content == null) continue;
    if (Array.isArray(row.content)) {
      merged[ck as string] = row.content;
      continue;
    }
    if (typeof row.content === "object") {
      merged[ck as string] = deepMerge(
        current as Record<string, unknown>,
        row.content as Record<string, unknown>
      );
    }
  }

  return merged as unknown as T;
}
