import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildAboutContent } from "@/app/lib/site/about/build";
import { AboutPageClient } from "../AboutPageClient";

export default async function AboutPage() {
  const rows = await getSiteContentForPage("about");
  const content = buildAboutContent(rows);
  return <AboutPageClient content={content} />;
}
