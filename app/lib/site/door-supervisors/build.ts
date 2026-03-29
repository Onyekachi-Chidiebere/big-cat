import type { SiteContentRow } from "@/app/lib/supabase/content";
import { buildMarketingFullPage } from "@/app/lib/site/marketing/buildMarketingFullPage";
import type { DoorSupervisorsContent } from "./types";
import { DOOR_SUPERVISORS_DEFAULTS } from "./defaults";

export function buildDoorSupervisorsContent(
  rows: SiteContentRow[]
): DoorSupervisorsContent {
  return buildMarketingFullPage(rows, DOOR_SUPERVISORS_DEFAULTS);
}
