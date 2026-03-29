import Link from "next/link";

const CMS_EDITORS = [
  { href: "/cms/home", label: "Home", note: "full page sections" },
  { href: "/cms/about", label: "About", note: "full page sections" },
  { href: "/cms/what-we-do", label: "What we do", note: "full page sections" },
  { href: "/cms/security-guards", label: "Security guards", note: "full page sections" },
  { href: "/cms/event-security", label: "Event security", note: "full page sections" },
  { href: "/cms/door-supervisors", label: "Door supervisors", note: "full page sections" },
  { href: "/cms/threat-intelligence", label: "Threat intelligence", note: "full page sections" },
  { href: "/cms/work-for-us", label: "Work for us", note: "full page sections" },
] as const;

export default function CmsHomePage() {
  return (
    <div className="space-y-8">
      <header className="border-b border-zinc-800 pb-6">
        <h1 className="text-2xl font-semibold tracking-tight">CMS</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Content is stored in the database. and every page is fully editable from the CMS. Select a page from the list below to get started.
        </p>
      </header>

      <section>
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Page editors
        </h2>
        <ul className="mt-3 space-y-2">
          {CMS_EDITORS.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="text-sky-400 hover:underline">
                {p.label}
              </Link>
              <span className="ml-2 text-xs text-zinc-600">{p.href}</span>
              <span className="ml-2 text-xs text-zinc-500">({p.note})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        <h2 className="text-sm font-medium text-zinc-300">Setup</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-400">
          <li>
           This should be managed by the BigCat team
          </li>
        </ol>
      </section>
    </div>
  );
}
