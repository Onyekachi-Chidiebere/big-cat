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

export default function CmsHomePage() {
  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-semibold tracking-tight">CMS</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Edit site content stored in Supabase. Saving from the home editor uses
          the service role on the server (set{" "}
          <code className="text-zinc-300">SUPABASE_SERVICE_ROLE_KEY</code> in{" "}
          <code className="text-zinc-300">.env.local</code>).
        </p>
      </header>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Editable in CMS
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="/cms/home" className="text-sky-400 hover:underline">
              Home page
            </Link>
            <span className="ml-2 text-xs text-zinc-600">/cms/home</span>
          </li>
        </ul>
      </section>

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
