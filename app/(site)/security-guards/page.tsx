import { LegacyMarketingPage } from "@/app/components/legacy/LegacyMarketingPage";
import { metadataFromLegacyData } from "@/app/lib/legacy/loadLegacyPage";
import { securityGuardsLegacyData } from "@/app/(site)/legacy-content/security-guards";

export function generateMetadata() {
  return metadataFromLegacyData(securityGuardsLegacyData);
}

export default function SecurityGuardsPage() {
  return <LegacyMarketingPage data={securityGuardsLegacyData} />;
}
