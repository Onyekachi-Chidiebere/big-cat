import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSecurityGuardsContent } from "@/app/lib/site/security-guards/build";
import { SecurityGuardsPageClient } from "./SecurityGuardsPageClient";

export default async function Page() {
  const rows = await getSiteContentForPage("security-guards");
  const content = buildSecurityGuardsContent(rows);
  return <SecurityGuardsPageClient content={content} />;
}
