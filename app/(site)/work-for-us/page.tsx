import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { workForUsLegacyData } from "@/app/(site)/legacy-content/work-for-us";

export function generateMetadata() {
  return metadataFromLegacyData(workForUsLegacyData);
}

export default function WorkForUsPage() {
  return <LegacyMarketingPage data={workForUsLegacyData} />;
}
