import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildHomeContent } from "@/app/lib/site/home/build";
import { HomeCmsForm } from "./HomeCmsForm";

export default async function CmsHomeEditorPage() {
  const rows = await getSiteContentForPage("home");
  const content = buildHomeContent(rows);

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link
          href="/cms"
          className="text-sm text-sky-400 hover:underline"
        >
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Home page</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Content is stored in database. Saving updates the live site.
        </p>
      </header>

      <HomeCmsForm initialContent={content} />
    </div>
  );
}
