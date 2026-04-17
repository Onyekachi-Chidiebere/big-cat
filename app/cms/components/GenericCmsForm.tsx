"use client";

import { useState } from "react";
import { upsertSiteSection } from "../actions/content";
import { mergeFooterAccredLogoJson } from "../lib/footerAccredMerge";
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
    nav: [
      {
        label: "Header logo",
        prefix: "what-we-do/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Hero image",
        prefix: "what-we-do/hero",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { hero?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, hero: { ...o.hero, imageSrc: url } },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "what-we-do/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "what-we-do/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "what-we-do/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
      },
    ],
  },
  "door-supervisors": {
    nav: [
      {
        label: "Header logo",
        prefix: "door-supervisors/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Hero image",
        prefix: "door-supervisors/hero",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { hero?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, hero: { ...o.hero, imageSrc: url } },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "door-supervisors/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "door-supervisors/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "door-supervisors/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
      },
    ],
  },
  "event-security": {
    nav: [
      {
        label: "Header logo",
        prefix: "event-security/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Hero background image",
        prefix: "event-security/hero",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { hero?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, hero: { ...o.hero, bgImage: url } },
            null,
            2
          );
        },
      },
      {
        label: "Overview image",
        prefix: "event-security/overview",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { overview?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, overview: { ...o.overview, imageSrc: url } },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "event-security/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "event-security/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "event-security/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
      },
    ],
  },
  "security-guards": {
    nav: [
      {
        label: "Header logo",
        prefix: "security-guards/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Hero main image",
        prefix: "security-guards/hero-main",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { hero?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, hero: { ...o.hero, imageMainSrc: url } },
            null,
            2
          );
        },
      },
      {
        label: "Hero small image 1",
        prefix: "security-guards/hero-sm-1",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as {
            hero?: { imageSm?: [{ src: string; alt: string }, { src: string; alt: string }] };
          };
          const sm = o.hero?.imageSm ?? [
            { src: "", alt: "" },
            { src: "", alt: "" },
          ];
          const next: typeof sm = [
            { ...sm[0], src: url },
            sm[1] ?? { src: "", alt: "" },
          ];
          return JSON.stringify(
            { ...o, hero: { ...o.hero, imageSm: next } },
            null,
            2
          );
        },
      },
      {
        label: "Hero small image 2",
        prefix: "security-guards/hero-sm-2",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as {
            hero?: { imageSm?: [{ src: string; alt: string }, { src: string; alt: string }] };
          };
          const sm = o.hero?.imageSm ?? [
            { src: "", alt: "" },
            { src: "", alt: "" },
          ];
          const next: typeof sm = [
            sm[0] ?? { src: "", alt: "" },
            { ...sm[1], src: url },
          ];
          return JSON.stringify(
            { ...o, hero: { ...o.hero, imageSm: next } },
            null,
            2
          );
        },
      },
      {
        label: "Overview image",
        prefix: "security-guards/overview",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { overview?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, overview: { ...o.overview, imageSrc: url } },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "security-guards/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "security-guards/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "security-guards/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
      },
    ],
  },
  "threat-intelligence": {
    nav: [
      {
        label: "Header logo",
        prefix: "threat-intelligence/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Hero background image",
        prefix: "threat-intelligence/hero",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { hero?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, hero: { ...o.hero, bgImage: url } },
            null,
            2
          );
        },
      },
      {
        label: "Overview image",
        prefix: "threat-intelligence/overview",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { overview?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, overview: { ...o.overview, imageSrc: url } },
            null,
            2
          );
        },
      },
      {
        label: "Accreditation logo 1",
        prefix: "threat-intelligence/accred-1",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as {
            accred?: {
              logos?: [
                { src: string; alt: string },
                { src: string; alt: string; small?: boolean },
              ];
            };
          };
          const logos = o.accred?.logos ?? [
            { src: "", alt: "" },
            { src: "", alt: "", small: true },
          ];
          return JSON.stringify(
            {
              ...o,
              accred: {
                ...o.accred,
                logos: [{ ...logos[0], src: url }, logos[1]],
              },
            },
            null,
            2
          );
        },
      },
      {
        label: "Accreditation logo 2",
        prefix: "threat-intelligence/accred-2",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as {
            accred?: {
              logos?: [
                { src: string; alt: string },
                { src: string; alt: string; small?: boolean },
              ];
            };
          };
          const logos = o.accred?.logos ?? [
            { src: "", alt: "" },
            { src: "", alt: "", small: true },
          ];
          return JSON.stringify(
            {
              ...o,
              accred: {
                ...o.accred,
                logos: [logos[0], { ...logos[1], src: url }],
              },
            },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "threat-intelligence/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "threat-intelligence/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "threat-intelligence/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
      },
    ],
  },
  "work-for-us": {
    nav: [
      {
        label: "Header logo",
        prefix: "work-for-us/nav",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as Record<string, unknown>;
          return JSON.stringify({ ...o, logoUrl: url }, null, 2);
        },
      },
    ],
    main: [
      {
        label: "Mission section logo",
        prefix: "work-for-us/mission-logo",
        merge: (json: string, url: string) => {
          const o = JSON.parse(json) as { mission?: Record<string, unknown> };
          return JSON.stringify(
            { ...o, mission: { ...o.mission, logoSrc: url } },
            null,
            2
          );
        },
      },
    ],
    footer: [
      {
        label: "Footer logo",
        prefix: "work-for-us/footer",
        merge: mergeFooterLogo,
      },
      {
        label: "Footer accreditation logo 1",
        prefix: "work-for-us/footer-accred-1",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 0),
      },
      {
        label: "Footer accreditation logo 2",
        prefix: "work-for-us/footer-accred-2",
        merge: (json: string, url: string) =>
          mergeFooterAccredLogoJson(json, url, 1),
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

  function coerceSectionJson(contentKey: string, raw: string): unknown {
    try {
      return JSON.parse(raw) as unknown;
    } catch {
      // Footer convenience: allow pasting just logos snippet:
      // { ...logo1... }, { ...logo2... }
      if (contentKey !== "footer") throw new Error("Invalid JSON");
      const existing = (initialContent[contentKey] ?? {}) as Record<string, unknown>;
      const tryArray = (text: string) => JSON.parse(text) as unknown;
      let logos: unknown;
      try {
        logos = tryArray(raw);
      } catch {
        logos = tryArray(`[${raw}]`);
      }
      if (!Array.isArray(logos)) throw new Error("Invalid footer logos JSON");
      return {
        ...existing,
        accred: {
          ...((existing.accred as Record<string, unknown> | undefined) ?? {}),
          logos,
        },
      };
    }
  }

  async function handleSave(sectionKey: string, contentKey: string, raw: string) {
    setStatus(null);
    let parsed: unknown;
    try {
      parsed = coerceSectionJson(contentKey, raw);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Invalid JSON";
      setStatus(`${msg} for ${sectionKey}`);
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
          onSave={(sectionKey, raw) => handleSave(sectionKey, contentKey, raw)}
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
