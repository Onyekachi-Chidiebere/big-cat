import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSiteAfContent } from "@/app/lib/site/chrome/build";
import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "what-we-do";

export default async function CmsWhatWeDoPage() {
  const rows = await getSiteContentForPage(SLUG);
  const initialContent = buildSiteAfContent(rows) as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">What we do</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Announce bar and footer. Main copy lives in the codebase until you add more{" "}
          <code className="text-zinc-300">site_content</code> sections.
        </p>
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
