import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildWhatWeDoContent } from "@/app/lib/site/what-we-do/build";
import { WHAT_WE_DO_DEFAULTS } from "@/app/lib/site/what-we-do/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "what-we-do";

export default async function CmsWhatWeDoPage() {
  const rows = await getSiteContentForPage(SLUG);
  const built = buildWhatWeDoContent(rows);
  const initialContent = built as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">What we do</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Full page: announce, navigation, main body (JSON), and footer.
        </p>
      </header>

      <GenericCmsForm
        pageSlug={SLUG}
        sections={[
          { dbKey: "announce", label: "Announce bar", contentKey: "announce" },
          { dbKey: "nav", label: "Navigation", contentKey: "nav" },
          { dbKey: "main", label: "Main page (all sections)", contentKey: "main" },
          { dbKey: "footer", label: "Footer", contentKey: "footer" },
        ]}
        defaults={WHAT_WE_DO_DEFAULTS as unknown as Record<string, unknown>}
        initialContent={initialContent}
      />
    </div>
  );
}
