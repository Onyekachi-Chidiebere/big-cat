import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { WorkForUsPageClient } from "./WorkForUsPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("work-for-us");
  const content = buildSiteAfContent(rows);
  return <WorkForUsPageClient content={content} />;
}
