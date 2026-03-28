import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { aboutLegacyData } from "@/app/(site)/legacy-content/about";

export function generateMetadata() {
  return metadataFromLegacyData(aboutLegacyData);
}

export default function AboutPage() {
  return <LegacyMarketingPage data={aboutLegacyData} />;
}
