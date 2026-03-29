import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildSecurityGuardsContent } from "@/app/lib/site/security-guards/build";
import { SECURITY_GUARDS_DEFAULTS } from "@/app/lib/site/security-guards/defaults";
import { GenericCmsForm } from "../components/GenericCmsForm";

const SLUG = "security-guards";

export default async function CmsSecurityGuardsPage() {
  const rows = await getSiteContentForPage(SLUG);
  const initialContent = buildSecurityGuardsContent(
    rows
  ) as unknown as Record<string, unknown>;

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          Security guards
        </h1>
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
        defaults={SECURITY_GUARDS_DEFAULTS as unknown as Record<string, unknown>}
        initialContent={initialContent}
      />
    </div>
  );
}
