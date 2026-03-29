"use client";

import { useState } from "react";
import { upsertHomeSection } from "../actions/content";
import { HOME_DEFAULTS } from "@/app/lib/site/home/defaults";
import type { HomeContent } from "@/app/lib/site/home/types";

const SECTIONS: { key: string; label: string; contentKey: keyof HomeContent }[] = [
  { key: "announce", label: "Announce bar", contentKey: "announce" },
  { key: "nav", label: "Navigation & floating CTA", contentKey: "nav" },
  { key: "hero", label: "Hero", contentKey: "hero" },
  { key: "trust", label: "Trust bar", contentKey: "trust" },
  { key: "wwd", label: "What we do (grid)", contentKey: "wwd" },
  { key: "purpose", label: "Purpose", contentKey: "purpose" },
  { key: "services_intro", label: "Services intro", contentKey: "servicesIntro" },
  { key: "services_cards", label: "Service cards (4)", contentKey: "servicesCards" },
  { key: "about", label: "About", contentKey: "about" },
  { key: "cta_strip", label: "CTA strip", contentKey: "ctaStrip" },
  { key: "contact", label: "Contact", contentKey: "contact" },
  { key: "footer", label: "Footer", contentKey: "footer" },
];

type Props = {
  initialContent: HomeContent;
};

export function HomeCmsForm({ initialContent }: Props) {
  const [status, setStatus] = useState<string | null>(null);

  function sectionToJson(key: keyof HomeContent): string {
    return JSON.stringify(initialContent[key], null, 2);
  }

  async function handleSave(sectionKey: string, raw: string) {
    setStatus(null);
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw) as unknown;
    } catch {
      setStatus(`Invalid JSON for ${sectionKey}`);
      return;
    }
    const res = await upsertHomeSection(sectionKey, parsed);
    if (!res.ok) {
      setStatus(res.error);
      return;
    }
    setStatus(`Saved ${sectionKey}`);
  }

  return (
    <div className="space-y-10">
      <p className="text-sm text-zinc-400">
        Edit each block as JSON. Image fields accept URLs (e.g.{" "}
        <code className="text-zinc-300">/images/home/svc-1.jpg</code> or a Supabase
        Storage public URL). The announce bar supports a small HTML snippet in{" "}
        <code className="text-zinc-300">html</code>.
      </p>
      {status && (
        <p className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300">
          {status}
        </p>
      )}
      {SECTIONS.map(({ key, label, contentKey }) => (
        <SectionBlock
          key={key}
          sectionKey={key}
          label={label}
          defaultJson={JSON.stringify(HOME_DEFAULTS[contentKey], null, 2)}
          initialJson={sectionToJson(contentKey)}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}

function SectionBlock({
  sectionKey,
  label,
  defaultJson,
  initialJson,
  onSave,
}: {
  sectionKey: string;
  label: string;
  defaultJson: string;
  initialJson: string;
  onSave: (sectionKey: string, raw: string) => void | Promise<void>;
}) {
  const [value, setValue] = useState(initialJson);
  const [saving, setSaving] = useState(false);

  return (
    <section className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-medium text-zinc-200">{label}</h2>
        <code className="text-xs text-zinc-500">{sectionKey}</code>
      </div>
      <textarea
        className="mb-3 min-h-[220px] w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        spellCheck={false}
      />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={saving}
          className="rounded-md bg-sky-600 px-3 py-1.5 text-sm text-white hover:bg-sky-500 disabled:opacity-50"
          onClick={async () => {
            setSaving(true);
            await onSave(sectionKey, value);
            setSaving(false);
          }}
        >
          Save section
        </button>
        <button
          type="button"
          className="rounded-md border border-zinc-600 px-3 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800"
          onClick={() => {
            if (confirm("Reset this box to the default copy from the codebase?")) {
              setValue(defaultJson);
            }
          }}
        >
          Reset to defaults
        </button>
      </div>
    </section>
  );
}
