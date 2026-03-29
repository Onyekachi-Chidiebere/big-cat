import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { SecurityGuardsPageClient } from "./SecurityGuardsPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("security-guards");
  const content = buildSiteAfContent(rows);
  return <SecurityGuardsPageClient content={content} />;
}
