import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildDoorSupervisorsContent } from "@/app/lib/site/door-supervisors/build";
import { DOOR_SUPERVISORS_DEFAULTS } from "@/app/lib/site/door-supervisors/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "door-supervisors";

export default async function CmsDoorSupervisorsPage() {
  const rows = await getSiteContentForPage(SLUG);
  const built = buildDoorSupervisorsContent(rows);
  const initialContent = built as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Door supervisors</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Full page: announce, navigation, main body (JSON), and footer. Saving updates the
          live site.
        </p>
      </header>

      <GenericCmsForm
        pageSlug={SLUG}
        sections={[
          { dbKey: "announce", label: "Announce bar", contentKey: "announce" },
          { dbKey: "nav", label: "Navigation", contentKey: "nav" },
          {
            dbKey: "main",
            label: "Main page (hero, stats, overview, venues, why, CTA)",
            contentKey: "main",
          },
          { dbKey: "footer", label: "Footer", contentKey: "footer" },
        ]}
        defaults={DOOR_SUPERVISORS_DEFAULTS as unknown as Record<string, unknown>}
        initialContent={initialContent}
      />
    </div>
  );
}
