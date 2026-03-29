import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildHomeContent } from "@/app/lib/site/home/build";
import { HomePageClient } from "./HomePageClient";

export default async function HomePage() {
  const rows = await getSiteContentForPage("home");
  const content = buildHomeContent(rows);
  return <HomePageClient content={content} />;
}
