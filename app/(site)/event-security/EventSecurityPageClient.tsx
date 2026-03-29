"use client";
import "../site.css";
import styles from "../styles.module.css";
import { EventSecurityEffects } from "../EventSecurityEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { EventSecurityContent } from "@/app/lib/site/event-security/types";

function EsCardIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
  }
}

export function EventSecurityPageClient({
  content,
}: {
  content: EventSecurityContent;
}) {
  const m = content.main;

  return (
    <div>
      <EventSecurityEffects />
      <div className={styles["cursor"]} id="cur"></div>
      <div className={styles["cursor-ring"]} id="curR"></div>
      <div className={styles["cursor-pulse"]} id="curPulse"></div>
      <div className={styles["cursor-tl"]} id="curTL"></div>
      <div className={styles["cursor-tr"]} id="curTR"></div>
      <div className={styles["cursor-bl"]} id="curBL"></div>
      <div className={styles["cursor-br"]} id="curBR"></div>
      <div id="progress-bar"></div>
      <a href="/#contact" className={styles["floating-cta"]} id="float-cta">
        Get a Quote
      </a>
      <SiteAnnounce html={content.announce.html} />
      <SiteServiceNav nav={content.nav} styles={styles} />

      <section className={styles["es-hero"]}>
        <div
          className={styles["es-hero-bg"]}
          style={{ backgroundImage: `url('${m.hero.bgImage}')` }}
        ></div>
        <div className={styles["es-hero-overlay"]}></div>
        <div className={styles["es-grid-overlay"]}></div>
        <div className={styles["es-scan"]}></div>
        <div className={styles["es-corner-tl"]}></div>
        <div className={styles["es-corner-br"]}></div>
        <div
          className={styles["es-readout"]}
          style={{ whiteSpace: "pre-line" }}
        >
          {m.hero.readout}
          <br />
          <span id="es-clock">--:--:--</span>
        </div>

        <div className={styles["es-hero-content"]}>
          <div className={styles["es-hero-label"]} id="eh-label">
            {m.hero.label}
          </div>
          <h1 id="eh-h1">
            <em>{m.hero.h1Em}</em>
            <strong>
              {m.hero.h1StrongLine1}
              <br />
              {m.hero.h1StrongLine2}
            </strong>
          </h1>
          <p className={styles["es-hero-sub"]} id="eh-sub">
            {m.hero.sub}
          </p>
          <div className={styles["es-hero-actions"]} id="eh-actions">
            <a href={m.hero.primaryCta.href} className={styles["btn-pill-white"]}>
              {m.hero.primaryCta.label}
            </a>
            <a href={m.hero.secondaryCta.href} className={styles["btn-pill"]}>
              {m.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className={styles["es-hero-stat"]} id="eh-stat">
          <div className={styles["es-stat-n"]}>
            {m.hero.statN}
            {m.hero.statNEm ? <em>{m.hero.statNEm}</em> : null}
          </div>
          <div className={styles["es-stat-l"]}>{m.hero.statL}</div>
        </div>
      </section>

      <div className={styles["es-types-strip"]}>
        <div className={styles["es-types-inner"]}>
          {m.typesStrip.map((t, i) => (
            <div
              key={t.label}
              className={`${styles["es-type-item"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["es-type-icon"]}>{t.icon}</div>
              <div className={styles["es-type-label"]}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["es-overview"]}>
        <div className={styles["es-overview-grid"]}>
          <div className={styles["es-overview-left"]}>
            <div className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}>
              {m.overview.eyebrow}
            </div>
            <h2 className={`${styles["f-reveal"]} ${styles["f-d1"]}`}>
              {m.overview.h2Line1}
              <br />
              <em>{m.overview.h2Em}</em>
              <br />
              {m.overview.h2Line2}
            </h2>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.overview.paragraphs[0]}
            </p>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.overview.paragraphs[1]}
            </p>
            <p className={`${styles["f-reveal"]} ${styles["f-d3"]}`}>
              {m.overview.paragraphs[2]}
            </p>
            <div className={`${styles["es-caps"]} ${styles["f-reveal"]} ${styles["f-d3"]}`}>
              {m.overview.caps.map((c) => (
                <span key={c} className={styles["es-cap"]}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className={styles["es-overview-right"]}>
            <div className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              <div className={styles["es-overview-img"]}>
                <img src={m.overview.imageSrc} alt={m.overview.imageAlt} />
                <div className={styles["es-overview-img-cap"]}>
                  <p>{m.overview.imageCap}</p>
                </div>
              </div>
              <div className={styles["es-sia-badge"]}>
                <div className={styles["es-sia-dot"]}></div>
                <p>
                  <strong>{m.overview.badgeStrong}</strong>
                  {m.overview.badgeRest}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["es-events"]} id="es-events">
        <div className={styles["es-events-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{m.events.eyebrow}</div>
            <h2>
              {m.events.h2Line1}
              <br />
              {m.events.h2Line2} <em>{m.events.h2Em}</em>
            </h2>
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
            {m.events.intro}
          </p>
        </div>

        <div className={styles["es-cards"]}>
          {m.events.cards.map((c, i) => (
            <div
              key={c.n}
              className={`${styles["es-card"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["es-card-n"]}>{c.n}</div>
              <div className={styles["es-card-icon"]}>
                <EsCardIcon index={i} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <a href={c.ctaHref} className={styles["es-card-link"]}>
                {c.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["es-licensed"]}>
        <div className={styles["es-licensed-inner"]}>
          <div className={styles["es-licensed-left"]}>
            <div className={styles["f-reveal"]}>
              <div
                className={styles["eyebrow"]}
                style={{
                  color: "var(--sea-light)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: ".65rem",
                  letterSpacing: ".3em",
                  marginBottom: 20,
                }}
              >
                {m.licensed.eyebrow}
              </div>
              <h2>
                {m.licensed.h2Line1}
                <br />
                {m.licensed.h2Line2}
                <br />
                <em>{m.licensed.h2Em}</em>
              </h2>
              <p>{m.licensed.p}</p>
              <div
                style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}
              >
                <a href={m.licensed.primaryCta.href} className={styles["btn-pill-white"]}>
                  {m.licensed.primaryCta.label}
                </a>
                <a href={m.licensed.secondaryCta.href} className={styles["btn-pill-ghost"]}>
                  {m.licensed.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
          <div className={styles["es-checklist"]}>
            {m.licensed.checks.map((ch, i) => (
              <div
                key={ch.title}
                className={`${styles["es-check-item"]} ${styles["f-reveal-x"]} ${styles[`f-d${i + 1}`]}`}
              >
                <div className={styles["es-check-dot"]}></div>
                <div>
                  <h4>{ch.title}</h4>
                  <p>{ch.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["es-cta"]}>
        <div className={styles["es-cta-inner"]}>
          <div className={styles["es-cta-left"]}>
            <div className={styles["f-reveal"]}>
              <div
                className={styles["eyebrow"]}
                style={{
                  color: "var(--sea-light)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: ".65rem",
                  letterSpacing: ".3em",
                  marginBottom: 16,
                }}
              >
                {m.cta.eyebrow}
              </div>
              <h2>
                {m.cta.h2Line1}
                <br />
                <em>{m.cta.h2Em}</em>
                {m.cta.h2Line2 ? (
                  <>
                    <br />
                    {m.cta.h2Line2}
                  </>
                ) : null}
              </h2>
            </div>
          </div>
          <div className={`${styles["es-cta-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}>
            <p>{m.cta.body}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={m.cta.primaryCta.href} className={styles["btn-pill-white"]}>
                {m.cta.primaryCta.label}
              </a>
              <a href={m.cta.secondaryCta.href} className={styles["btn-pill-ghost"]}>
                {m.cta.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter footer={content.footer} />
    </div>
  );
}
