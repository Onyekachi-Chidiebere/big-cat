import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { WhatWeDoContent } from "./types";
import { WHAT_WE_DO_DEFAULTS } from "./defaults";

export function buildWhatWeDoContent(rows: SiteContentRow[]): WhatWeDoContent {
  return buildMarketingFullPage(rows, WHAT_WE_DO_DEFAULTS);
}
