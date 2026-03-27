import type { Metadata } from "next";

/** Same link rewrites as the former htmlSource helper. */
export function normalizeLegacyLinks(html: string): string {
  return html
    .replaceAll('href="bigcat-security.html"', 'href="/"')
    .replaceAll('href="bigcat-security.html#', 'href="/#')
    .replaceAll('href="about.html"', 'href="/about"')
    .replaceAll('href="what-we-do.html"', 'href="/what-we-do"')
    .replaceAll('href="security-guards.html"', 'href="/security-guards"')
    .replaceAll('href="event-security.html"', 'href="/event-security"')
    .replaceAll('href="door-supervisors.html"', 'href="/door-supervisors"')
    .replaceAll('href="threat-intelligence.html"', 'href="/threat-intelligence"')
    .replaceAll('href="work-for-us.html"', 'href="/work-for-us"');
}

export type LegacyPageData = {
  title: string;
  description: string | null;
  styles: string[];
  bodyHtml: string;
  scripts: string[];
};

/** Parse a full legacy HTML document (after normalizing internal links). */
export function parseLegacyDocument(raw: string): LegacyPageData {
  const html = normalizeLegacyLinks(raw);

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title =
    titleMatch?.[1]?.replace(/<[^>]+>/g, "")?.trim() ?? "Big Cat Security Ltd";

  const descMatch =
    html.match(
      /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
    ) ??
    html.match(
      /<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i
    );
  const description = descMatch?.[1] ?? null;

  const styles: string[] = [];
  const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let sm: RegExpExecArray | null;
  while ((sm = styleRe.exec(html))) {
    styles.push(sm[1]);
  }

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyInner = bodyMatch?.[1] ?? "";

  const scripts: string[] = [];
  bodyInner = bodyInner.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (_, code) => {
    scripts.push(String(code).trim());
    return "";
  });

  return {
    title,
    description,
    styles,
    bodyHtml: bodyInner.trim(),
    scripts,
  };
}

export function metadataFromLegacyData(data: LegacyPageData): Metadata {
  return {
    title: data.title,
    description: data.description ?? undefined,
  };
}
