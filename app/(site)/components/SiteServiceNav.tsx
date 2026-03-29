import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";

type Css = { readonly [key: string]: string };

export function SiteServiceNav({
  nav,
  styles,
}: {
  nav: ServiceNavContent;
  styles: Css;
}) {
  return (
    <header className={styles["navbar"]} id="navbar">
      <a href="/" className={styles["logo"]}>
        <img src={nav.logoUrl} alt={nav.logoAlt} />
      </a>
      <nav id="nav">
        {nav.links.map((l) => (
          <a
            key={`${l.href}-${l.label}`}
            href={l.href}
            className={l.cta ? styles["nav-cta"] : undefined}
            style={l.active ? { background: "var(--sea)" } : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className={styles["nav-right"]}>
        <a href={nav.phoneHref} className={styles["nav-phone"]}>
          {nav.phone}
        </a>
        <a href={nav.quoteHref} className={styles["btn-pill"]}>
          {nav.quoteLabel}
        </a>
      </div>
      <button id="menu-toggle" aria-label="Menu">
        ☰
      </button>
    </header>
  );
}
