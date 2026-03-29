import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildDoorSupervisorsContent } from "@/app/lib/site/door-supervisors/build";
import { DoorSupervisorsPageClient } from "./DoorSupervisorsPageClient";

export default async function DoorSupervisorsPage() {
  const rows = await getSiteContentForPage("door-supervisors");
  const content = buildDoorSupervisorsContent(rows);
  return <DoorSupervisorsPageClient content={content} />;
}
