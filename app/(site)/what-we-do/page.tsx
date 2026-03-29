import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { WhatWeDoPageClient } from "./WhatWeDoPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("what-we-do");
  const content = buildSiteAfContent(rows);
  return <WhatWeDoPageClient content={content} />;
}
