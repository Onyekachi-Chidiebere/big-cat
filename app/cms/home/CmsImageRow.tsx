"use client";

import { useState } from "react";
import { uploadCmsImage } from "../actions/upload";

type Props = {
  label: string;
  /** Storage path prefix (e.g. home, home/cards). */
  prefix?: string;
  onUploaded: (publicUrl: string) => void;
};

export function CmsImageRow({ label, prefix = "home", onUploaded }: Props) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-1 rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
      <span className="min-w-[8rem] text-xs font-medium text-zinc-400">{label}</span>
      <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-sky-400 hover:text-sky-300">
        <span className="rounded border border-zinc-600 bg-zinc-900 px-2 py-1">
          Choose image…
        </span>
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          disabled={busy}
          onChange={async (e) => {
            const f = e.target.files?.[0];
            e.target.value = "";
            if (!f) return;
            setBusy(true);
            setErr(null);
            const fd = new FormData();
            fd.append("file", f);
            fd.append("prefix", prefix);
            const res = await uploadCmsImage(fd);
            setBusy(false);
            if (!res.ok) {
              setErr(res.error);
              return;
            }
            onUploaded(res.publicUrl);
          }}
        />
      </label>
      {busy && <span className="text-xs text-zinc-500">Uploading…</span>}
      {err && <span className="text-xs text-red-400">{err}</span>}
    </div>
  );
}
