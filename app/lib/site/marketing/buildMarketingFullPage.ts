import type { SiteContentRow } from "@/app/lib/supabase/content";
import type { SiteAfContent } from "@/app/lib/site/chrome/types";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import { buildMergedContent } from "../mergeContent";

export type MarketingFullPageContent<TMain extends Record<string, unknown>> =
  SiteAfContent & {
    nav: ServiceNavContent;
    main: TMain;
  };

const KEY_MAP = {
  announce: "announce",
  nav: "nav",
  main: "main",
  footer: "footer",
} as const;

export function buildMarketingFullPage<TMain extends Record<string, unknown>>(
  rows: SiteContentRow[],
  defaults: MarketingFullPageContent<TMain>
): MarketingFullPageContent<TMain> {
  return buildMergedContent(
    rows,
    defaults as unknown as Record<string, unknown>,
    KEY_MAP
  ) as unknown as MarketingFullPageContent<TMain>;
}
