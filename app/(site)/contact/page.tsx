"use client";

import { useEffect } from "react";

/** Footer and nav use `/contact`; home contact lives at `/#contact`. */
export default function ContactRedirectPage() {
  useEffect(() => {
    window.location.replace("/#contact");
  }, []);
  return (
    <p style={{ padding: "2rem", textAlign: "center", color: "var(--ink-soft)" }}>
      Redirecting…
    </p>
  );
}
