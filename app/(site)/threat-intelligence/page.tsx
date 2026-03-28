import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { threatIntelligenceLegacyData } from "@/app/(site)/legacy-content/threat-intelligence";

export function generateMetadata() {
  return metadataFromLegacyData(threatIntelligenceLegacyData);
}

export default function ThreatIntelligencePage() {
  return <LegacyMarketingPage data={threatIntelligenceLegacyData} />;
}
