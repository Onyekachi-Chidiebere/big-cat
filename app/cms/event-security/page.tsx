import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "event-security";

export default async function CmsEventSecurityPage() {
  const rows = await getSiteContentForPage(SLUG);
  const initialContent = buildSiteAfContent(rows) as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Event security</h1>
        <p className="mt-1 text-sm text-zinc-400">Announce bar and footer.</p>
      </header>

      <GenericCmsForm
        pageSlug={SLUG}
        sections={[
          { dbKey: "announce", label: "Announce bar", contentKey: "announce" },
          { dbKey: "footer", label: "Footer", contentKey: "footer" },
        ]}
        defaults={CHROME_AF_DEFAULTS as unknown as Record<string, unknown>}
        initialContent={initialContent}
      />
    </div>
  );
}
