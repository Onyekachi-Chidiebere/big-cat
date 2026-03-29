import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { WorkForUsContent } from "./types";
import { WORK_FOR_US_DEFAULTS } from "./defaults";

export function buildWorkForUsContent(rows: SiteContentRow[]): WorkForUsContent {
  return buildMarketingFullPage(rows, WORK_FOR_US_DEFAULTS);
}
