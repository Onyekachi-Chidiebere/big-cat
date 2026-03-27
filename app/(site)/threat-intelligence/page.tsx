import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import {
  parseLegacyDocument,
  metadataFromLegacyData,
} from "@/app/lib/legacy/loadLegacyPage";

const FILE = path.join(process.cwd(), "app/(site)/_html/threat-intelligence.html");

const getDocument = cache(async () => {
  const raw = await readFile(FILE, "utf8");
  return parseLegacyDocument(raw);
});

export async function generateMetadata() {
  const data = await getDocument();
  return metadataFromLegacyData(data);
}

export default async function ThreatIntelligencePage() {
  const data = await getDocument();
  return <LegacyMarketingPage data={data} />;
}
