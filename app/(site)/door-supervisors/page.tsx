import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { DoorSupervisorsPageClient } from "./DoorSupervisorsPageClient";

export default async function DoorSupervisorsPage() {
  const rows = await getSiteContentForPage("door-supervisors");
  const content = buildSiteAfContent(rows);
  return <DoorSupervisorsPageClient content={content} />;
}
