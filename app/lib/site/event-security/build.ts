import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { EventSecurityContent } from "./types";
import { EVENT_SECURITY_DEFAULTS } from "./defaults";

export function buildEventSecurityContent(
  rows: SiteContentRow[]
): EventSecurityContent {
  return buildMarketingFullPage(rows, EVENT_SECURITY_DEFAULTS);
}
