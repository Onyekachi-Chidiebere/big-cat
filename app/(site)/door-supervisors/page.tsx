import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { doorSupervisorsLegacyData } from "@/app/(site)/legacy-content/door-supervisors";

export function generateMetadata() {
  return metadataFromLegacyData(doorSupervisorsLegacyData);
}

export default function DoorSupervisorsPage() {
  return <LegacyMarketingPage data={doorSupervisorsLegacyData} />;
}
