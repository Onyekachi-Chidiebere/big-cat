import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildEventSecurityContent } from "@/app/lib/site/event-security/build";
import { EventSecurityPageClient } from "./EventSecurityPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("event-security");
  const content = buildEventSecurityContent(rows);
  return <EventSecurityPageClient content={content} />;
}
