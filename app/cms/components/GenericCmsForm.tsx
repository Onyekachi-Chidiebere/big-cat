"use client";

import { useState } from "react";
import { upsertSiteSection } from "../actions/content";
import { CmsImageRow } from "../home/CmsImageRow";

export type GenericSectionDef = {
  /** DB `section_key` (snake_case). */
  dbKey: string;
  label: string;
  /** Key on the content object (camelCase). */
  contentKey: string;
};

export type ImageSlot = {
  label: string;
  prefix: string;
  merge: (json: string, url: string) => string;
};

/** Footer logo merge — must live in this client module (not passed from Server Components). */
function mergeFooterLogo(json: string, url: string) {
  const o = JSON.parse(json) as Record<string, unknown>;
  return JSON.stringify({ ...o, logoUrl: url }, null, 2);
}

/** Image pickers for partial (announce+footer) CMS routes — keyed by page slug + DB section key. */
const PARTIAL_PAGE_IMAGE_SLOTS: Record<string, Record<string, ImageSlot[]>> = {
  "what-we-do": {
    footer: [
      {
        label: "Footer logo",
        prefix: "what-we-do/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
  "door-supervisors": {
    footer: [
      {
        label: "Footer logo",
        prefix: "door-supervisors/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
  "event-security": {
    footer: [
      {
        label: "Footer logo",
        prefix: "event-security/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
  "security-guards": {
    footer: [
      {
        label: "Footer logo",
        prefix: "security-guards/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
  "threat-intelligence": {
    footer: [
      {
        label: "Footer logo",
        prefix: "threat-intelligence/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
  "work-for-us": {
    footer: [
      {
        label: "Footer logo",
        prefix: "work-for-us/footer",
        merge: mergeFooterLogo,
      },
    ],
  },
};

type Props = {
  pageSlug: string;
  sections: GenericSectionDef[];
  /** Full defaults object; sections read via contentKey. */
  defaults: Record<string, unknown>;
  initialContent: Record<string, unknown>;
};

export function GenericCmsForm({
  pageSlug,
  sections,
  defaults,
  initialContent,
}: Props) {
  const [status, setStatus] = useState<string | null>(null);

  function sectionToJson(contentKey: string): string {
    const v = initialContent[contentKey];
    return JSON.stringify(v ?? {}, null, 2);
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
    const res = await upsertSiteSection(pageSlug, sectionKey, parsed);
    if (!res.ok) {
      setStatus(res.error);
      return;
    }
    setStatus(`Saved ${sectionKey}`);
  }

  return (
    <div className="space-y-10">
      <p className="text-sm text-zinc-400">
        Edit each block as JSON. Use <strong className="text-zinc-300">Choose image</strong>{" "}
        when available. Page slug: <code className="text-zinc-300">{pageSlug}</code>.
      </p>
      {status && (
        <p className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300">
          {status}
        </p>
      )}
      {sections.map(({ dbKey, label, contentKey }) => (
        <SectionBlock
          key={dbKey}
          sectionKey={dbKey}
          label={label}
          defaultJson={JSON.stringify(
            (defaults[contentKey] ?? {}) as object,
            null,
            2
          )}
          initialJson={sectionToJson(contentKey)}
          onSave={handleSave}
          imageSlots={PARTIAL_PAGE_IMAGE_SLOTS[pageSlug]?.[dbKey]}
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
  imageSlots,
}: {
  sectionKey: string;
  label: string;
  defaultJson: string;
  initialJson: string;
  onSave: (sectionKey: string, raw: string) => void | Promise<void>;
  imageSlots?: ImageSlot[];
}) {
  const [value, setValue] = useState(initialJson);
  const [saving, setSaving] = useState(false);

  return (
    <section className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-medium text-zinc-200">{label}</h2>
        <code className="text-xs text-zinc-500">{sectionKey}</code>
      </div>
      {imageSlots && imageSlots.length > 0 && (
        <div className="mb-3 space-y-2">
          <p className="text-xs text-zinc-500">Upload images (updates JSON below)</p>
          {imageSlots.map((slot) => (
            <CmsImageRow
              key={slot.label}
              label={slot.label}
              prefix={slot.prefix}
              onUploaded={(url) => {
                try {
                  setValue(slot.merge(value, url));
                } catch {
                  alert(
                    "Could not merge URL — check that the textarea contains valid JSON for this section."
                  );
                }
              }}
            />
          ))}
        </div>
      )}
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
          Reset to default
        </button>
      </div>
    </section>
  );
}
