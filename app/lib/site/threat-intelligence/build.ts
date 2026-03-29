import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { ThreatIntelligenceContent } from "./types";
import { THREAT_INTELLIGENCE_DEFAULTS } from "./defaults";

export function buildThreatIntelligenceContent(
  rows: SiteContentRow[]
): ThreatIntelligenceContent {
  return buildMarketingFullPage(rows, THREAT_INTELLIGENCE_DEFAULTS);
}
