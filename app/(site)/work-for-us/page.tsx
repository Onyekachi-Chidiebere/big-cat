import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildWorkForUsContent } from "@/app/lib/site/work-for-us/build";
import { WorkForUsPageClient } from "./WorkForUsPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("work-for-us");
  const content = buildWorkForUsContent(rows);
  return <WorkForUsPageClient content={content} />;
}
