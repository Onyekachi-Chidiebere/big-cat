import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { ThreatIntelligencePageClient } from "./ThreatIntelligencePageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("threat-intelligence");
  const content = buildSiteAfContent(rows);
  return <ThreatIntelligencePageClient content={content} />;
}
