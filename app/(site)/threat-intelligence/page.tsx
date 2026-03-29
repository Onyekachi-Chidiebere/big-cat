import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildThreatIntelligenceContent } from "@/app/lib/site/threat-intelligence/build";
import { ThreatIntelligencePageClient } from "./ThreatIntelligencePageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("threat-intelligence");
  const content = buildThreatIntelligenceContent(rows);
  return <ThreatIntelligencePageClient content={content} />;
}
