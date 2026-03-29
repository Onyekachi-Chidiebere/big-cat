import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { SecurityGuardsContent } from "./types";
import { SECURITY_GUARDS_DEFAULTS } from "./defaults";

export function buildSecurityGuardsContent(
  rows: SiteContentRow[]
): SecurityGuardsContent {
  return buildMarketingFullPage(rows, SECURITY_GUARDS_DEFAULTS);
}
