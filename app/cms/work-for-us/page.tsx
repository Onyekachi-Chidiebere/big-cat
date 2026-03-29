import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildWorkForUsContent } from "@/app/lib/site/work-for-us/build";
import { WORK_FOR_US_DEFAULTS } from "@/app/lib/site/work-for-us/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "work-for-us";

export default async function CmsWorkForUsPage() {
  const rows = await getSiteContentForPage(SLUG);
  const initialContent = buildWorkForUsContent(
    rows
  ) as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Work for us</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Announce bar, navigation, full page body, and footer.
        </p>
      </header>

      <GenericCmsForm
        pageSlug={SLUG}
        sections={[
          { dbKey: "announce", label: "Announce bar", contentKey: "announce" },
          { dbKey: "nav", label: "Header / navigation", contentKey: "nav" },
          { dbKey: "main", label: "Page body", contentKey: "main" },
          { dbKey: "footer", label: "Footer", contentKey: "footer" },
        ]}
        defaults={WORK_FOR_US_DEFAULTS as unknown as Record<string, unknown>}
        initialContent={initialContent}
      />
    </div>
  );
}
