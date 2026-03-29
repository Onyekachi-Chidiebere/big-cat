import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildWhatWeDoContent } from "@/app/lib/site/what-we-do/build";
import { WhatWeDoPageClient } from "./WhatWeDoPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("what-we-do");
  const content = buildWhatWeDoContent(rows);
  return <WhatWeDoPageClient content={content} />;
}
