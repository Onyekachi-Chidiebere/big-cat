import Link from "next/link";
import { getSiteContentForPage } from "@/app/lib/supabase/content";
import { buildAboutContent } from "@/app/lib/site/about/build";
import { AboutCmsForm } from "./AboutCmsForm";

export default async function CmsAboutPage() {
  const rows = await getSiteContentForPage("about");
  const content = buildAboutContent(rows);

  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <Link href="/cms" className="text-sm text-sky-400 hover:underline">
          ← CMS
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">About page</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Content in <code className="text-zinc-300">site_content</code> for page{" "}
          <code className="text-zinc-300">about</code>.
        </p>
      </header>

      <AboutCmsForm initialContent={content} />
    </div>
  );
}
