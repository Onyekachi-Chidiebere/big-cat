import { createClient } from "@/app/lib/supabase/server";
import { signOut } from "./actions";
import Link from "next/link";

const PAGES_TO_MIGRATE = [
  { slug: "/", label: "Home (bigcat-security)" },
  { slug: "/about", label: "About" },
  { slug: "/what-we-do", label: "What we do" },
  { slug: "/security-guards", label: "Security guards" },
  { slug: "/event-security", label: "Event security" },
  { slug: "/door-supervisors", label: "Door supervisors" },
  { slug: "/threat-intelligence", label: "Threat intelligence" },
  { slug: "/work-for-us", label: "Work for us" },
] as const;

export default async function CmsHomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">CMS</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Edit site content stored in Supabase as you migrate each route to
            React.
          </p>
          {user?.email && (
            <p className="mt-2 text-xs text-zinc-500">Signed in as {user.email}</p>
          )}
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-900"
          >
            Sign out
          </button>
        </form>
      </header>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Routes to migrate
        </h2>
        <ul className="mt-3 space-y-2">
          {PAGES_TO_MIGRATE.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.slug}
                className="text-sky-400 hover:underline"
              >
                {p.label}
              </Link>
              <span className="ml-2 text-xs text-zinc-600">{p.slug}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        <h2 className="text-sm font-medium text-zinc-300">Next steps</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-400">
          <li>
            Run the SQL in <code className="text-zinc-300">supabase/migrations/</code>{" "}
            in the Supabase SQL editor.
          </li>
          <li>
            Create a Storage bucket (e.g. <code className="text-zinc-300">cms</code>)
            for images and store public URLs in{" "}
            <code className="text-zinc-300">site_content.content</code>.
          </li>
          <li>
            Replace each static HTML route with a React page that reads from{" "}
            <code className="text-zinc-300">site_content</code>.
          </li>
        </ol>
      </section>
    </div>
  );
}
