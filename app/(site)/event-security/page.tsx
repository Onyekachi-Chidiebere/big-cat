import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { EventSecurityPageClient } from "./EventSecurityPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("event-security");
  const content = buildSiteAfContent(rows);
  return <EventSecurityPageClient content={content} />;
}
