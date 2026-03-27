import type { LegacyPageData } from "@/app/lib/legacy/loadLegacyPage";
import { LegacyScripts } from "./LegacyScripts";

export function LegacyMarketingPage({ data }: { data: LegacyPageData }) {
  return (
    <>
      {data.styles.map((css, i) => (
        <style key={i} dangerouslySetInnerHTML={{ __html: css }} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: data.bodyHtml }} />
      <LegacyScripts scripts={data.scripts} />
    </>
  );
}
