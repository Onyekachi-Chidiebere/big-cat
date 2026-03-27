"use client";

import { useEffect, useRef } from "react";

/**
 * Runs legacy inline script bodies after mount (innerHTML does not execute scripts).
 */
export function LegacyScripts({ scripts }: { scripts: string[] }) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    for (const code of scripts) {
      const el = document.createElement("script");
      el.text = code;
      document.body.appendChild(el);
    }
  }, [scripts]);

  return null;
}
