/**
 * Hash-only hrefs are resolved relative to the current path (`/about#services`).
 * Prefix with `/` so they target the site root (`/#services`, `/#contact`, …).
 */
export function footerNavHref(href: string): string {
  const t = href.trim();
  if (t.startsWith("http://") || t.startsWith("https://")) return t;
  if (t.startsWith("/")) return t;
  if (t.startsWith("#") && t.length > 1) return `/${t}`;
  return t;
}
