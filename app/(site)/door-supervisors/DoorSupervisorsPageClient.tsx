"use client";
import "../site.css";
import styles from "../styles.module.css";
import { DoorSupervisorsEffects } from "../DoorSupervisorsEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { DoorSupervisorsContent } from "@/app/lib/site/door-supervisors/types";

function DsVenueIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
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
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
  }
}

export function DoorSupervisorsPageClient({
  content,
}: {
  content: DoorSupervisorsContent;
}) {
  const m = content.main;

  return (
    <div>
      <DoorSupervisorsEffects />
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

      <section className={styles["ds-hero"]}>
        <div className={styles["ds-hero-left"]}>
          <div className={styles["ds-corner-tl"]}></div>
          <div
            className={styles["ds-readout"]}
            style={{ whiteSpace: "pre-line" }}
          >
            {m.hero.readout}
            <br />
            <span id="ds-clock">--:--:--</span>
          </div>

          <div className={styles["ds-hero-label"]} id="dh-label">
            {m.hero.label}
          </div>
          <h1 id="dh-h1">
            <em>{m.hero.h1Em}</em>
            <strong>
              {m.hero.h1StrongLine1}
              <br />
              {m.hero.h1StrongLine2}
            </strong>
          </h1>
          <p className={styles["ds-hero-sub"]} id="dh-sub">
            {m.hero.sub}
          </p>
          <div className={styles["ds-hero-actions"]} id="dh-actions">
            <a href={m.hero.primaryCta.href} className={styles["btn-pill-white"]}>
              {m.hero.primaryCta.label}
            </a>
            <a href={m.hero.secondaryCta.href} className={styles["btn-pill"]}>
              {m.hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles["ds-badge"]} id="dh-badge">
            <div className={styles["ds-badge-big"]}>{m.hero.badgeBig}</div>
            <div className={styles["ds-badge-label"]}>{m.hero.badgeLabel}</div>
          </div>
        </div>

        <div className={styles["ds-hero-right"]}>
          <div className={styles["ds-hero-img"]}>
            <img src={m.hero.imageSrc} alt={m.hero.imageAlt} />
          </div>
          <div className={styles["ds-scan"]}></div>
          <div className={styles["ds-corner-br"]}></div>
          <div
            className={styles["ds-readout-r"]}
            style={{ whiteSpace: "pre-line" }}
          >
            {m.hero.readoutRight}
          </div>
          <div className={styles["ds-img-cap"]} id="dh-cap">
            <div className={styles["ds-img-cap-inner"]}>
              <div className={styles["ds-img-cap-text"]}>{m.hero.cap}</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles["ds-stats-strip"]}>
        <div className={styles["ds-stats-inner"]}>
          {m.stats.items.map((it, i) => (
            <div
              key={it.label}
              className={`${styles["ds-stat-item"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["ds-stat-n"]}>
                {it.n}
                {it.nEm ? <em>{it.nEm}</em> : null}
              </div>
              <div className={styles["ds-stat-l"]}>{it.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["ds-overview"]}>
        <div className={styles["ds-overview-grid"]}>
          <div className={styles["ds-overview-left"]}>
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
            {m.overview.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${styles["f-reveal"]} ${styles[`f-d${i + 2}`]}`}
              >
                {p}
              </p>
            ))}
            <div
              className={`${styles["ds-trust-badge"]} ${styles["f-reveal"]} ${styles["f-d3"]}`}
            >
              <div className={styles["ds-trust-dot"]}></div>
              <div className={styles["ds-trust-text"]}>
                {(() => {
                  const parts = m.overview.trustText.split(" — ");
                  if (parts.length < 2) return m.overview.trustText;
                  return (
                    <>
                      <strong>{parts[0]}</strong> — {parts.slice(1).join(" — ")}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          <div>
            <div
              className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: ".65rem",
                letterSpacing: ".3em",
                color: "var(--sea)",
                marginBottom: 16,
              }}
            >
              {m.overview.dutiesEyebrow}
            </div>
            <div className={styles["ds-duties"]}>
              {m.overview.duties.map((d, i) => (
                <div
                  key={d.n}
                  className={`${styles["ds-duty"]} ${styles["f-reveal-x"]} ${styles[`f-d${i + 1}`]}`}
                >
                  <div className={styles["ds-duty-n"]}>{d.n}</div>
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles["ds-venues"]} id="ds-venues">
        <div className={styles["ds-venues-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{m.venues.eyebrow}</div>
            <h2>
              {m.venues.h2Line1}
              <br />
              <em>{m.venues.h2Em}</em>
            </h2>
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
            {m.venues.intro}
          </p>
        </div>

        <div className={styles["ds-venue-grid"]}>
          {m.venues.cards.map((card, i) => (
            <div
              key={card.n}
              className={`${styles["ds-venue-card"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["ds-venue-n"]}>{card.n}</div>
              <div className={styles["ds-venue-icon"]}>
                <DsVenueIcon index={i} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a href={card.ctaHref} className={styles["ds-venue-link"]}>
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["ds-why"]}>
        <div className={styles["ds-why-inner"]}>
          <div className={styles["ds-why-left"]}>
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
                {m.why.eyebrow}
              </div>
              <h2>
                {m.why.h2Line1}
                <br />
                {m.why.h2Mid} <em>{m.why.h2Em}</em>
              </h2>
              <p>{m.why.intro}</p>
              <div
                style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}
              >
                <a href={m.why.primaryCta.href} className={styles["btn-pill-white"]}>
                  {m.why.primaryCta.label}
                </a>
                <a href={m.why.secondaryCta.href} className={styles["btn-pill-ghost"]}>
                  {m.why.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
          <div className={styles["ds-why-list"]}>
            {m.why.items.map((it, i) => (
              <div
                key={it.title}
                className={`${styles["ds-why-item"]} ${styles["f-reveal-x"]} ${styles[`f-d${i + 1}`]}`}
              >
                <div className={styles["ds-why-dot"]}></div>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["ds-cta"]}>
        <div className={styles["ds-cta-inner"]}>
          <div className={styles["ds-cta-left"]}>
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
          <div className={`${styles["ds-cta-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}>
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
