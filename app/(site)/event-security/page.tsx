import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { eventSecurityLegacyData } from "@/app/(site)/legacy-content/event-security";

export function generateMetadata() {
  return metadataFromLegacyData(eventSecurityLegacyData);
}

export default function EventSecurityPage() {
  return <LegacyMarketingPage data={eventSecurityLegacyData} />;
}
