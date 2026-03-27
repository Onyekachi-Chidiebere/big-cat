import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import {
  parseLegacyDocument,
  metadataFromLegacyData,
} from "@/app/lib/legacy/loadLegacyPage";

const ABOUT_HTML = path.join(process.cwd(), "app/(site)/_html/about.html");

const getAboutDocument = cache(async () => {
  const raw = await readFile(ABOUT_HTML, "utf8");
  return parseLegacyDocument(raw);
});

export async function generateMetadata() {
  const data = await getAboutDocument();
  return metadataFromLegacyData(data);
}

export default async function AboutPage() {
  const data = await getAboutDocument();
  return <LegacyMarketingPage data={data} />;
}
