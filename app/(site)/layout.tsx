import type { ReactNode } from "react";

/** Marketing / legacy HTML-derived pages (no extra wrapper; body styles come from each page). */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
