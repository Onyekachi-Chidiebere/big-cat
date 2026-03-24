import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROUTE_TO_FILE: Record<string, string> = {
  '/': 'bigcat-security.html',
  '/bigcat-security.html': 'bigcat-security.html',
  '/home': 'bigcat-security.html',
  '/home.html': 'bigcat-security.html',

  '/about': 'who-we-are-bigcat-security.html',
  '/about.html': 'who-we-are-bigcat-security.html',
  '/who-we-are': 'who-we-are-bigcat-security.html',

  '/what-we-do': 'what-we-do.html',
  '/what-we-do.html': 'what-we-do.html',

  '/security-guards': 'security-guards.html',
  '/security-guards.html': 'security-guards.html',

  '/event-security': 'event-security.html',
  '/event-security.html': 'event-security.html',

  '/door-supervisors': 'door-supervisors.html',
  '/door-supervisors.html': 'door-supervisors.html',

  '/threat-intelligence': 'threat-intelligence.html',
  '/threat-intelligence.html': 'threat-intelligence.html',

  '/work-for-us': 'work-for-us.html',
  '/work-for-us.html': 'work-for-us.html',
};

function htmlPathForRoute(routePath: string): string | null {
  return ROUTE_TO_FILE[routePath] ?? null;
}

function normalizeLinks(html: string): string {
  // Keep HTML visually identical while making internal links resolve in Next routes.
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

export async function htmlForRoute(routePath: string): Promise<string | null> {
  const filename = htmlPathForRoute(routePath);
  if (!filename) return null;

  const filePath = path.join(process.cwd(), './html', filename);
  const html = await readFile(filePath, 'utf8');
  return normalizeLinks(html);
}
