"use client";

import "../site.css";
import styles from "../styles.module.css";
import { SecurityGuardsEffects } from "../SecurityGuardsEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { SecurityGuardsContent } from "@/app/lib/site/security-guards/types";

function SgCardIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

const introDelay = ["f-d1", "f-d2", "f-d3", "f-d4"] as const;
const credDelay = ["f-d1", "f-d2", "f-d3", "f-d4", "f-d5"] as const;
const cardDelay = ["f-d1", "f-d2", "f-d3", "f-d4"] as const;
const opsDelay = ["f-d1", "f-d2", "f-d3", "f-d4", "f-d5"] as const;
const otherDelay = ["f-d1", "f-d2", "f-d3", "f-d4"] as const;

export function SecurityGuardsPageClient({
  content,
}: {
  content: SecurityGuardsContent;
}) {
  const m = content.main;

  return (
    <div>
      <SecurityGuardsEffects />
      <div className={styles["cursor"]} id="cur"></div>
      <div className={styles["cursor-ring"]} id="curR"></div>
      <div className={styles["cursor-pulse"]} id="curPulse"></div>
      <div className={styles["cursor-tl"]} id="curTL"></div>
      <div className={styles["cursor-tr"]} id="curTR"></div>
      <div className={styles["cursor-bl"]} id="curBL"></div>
      <div className={styles["cursor-br"]} id="curBR"></div>
      <div id="progress-bar"></div>
      <a
        href={content.nav.quoteHref}
        className={styles["floating-cta"]}
        id="float-cta"
      >
        {content.nav.quoteLabel}
      </a>
      <SiteAnnounce html={content.announce.html} />
      <SiteServiceNav nav={content.nav} styles={styles} />

      <section className={styles["sg-hero"]}>
        <div className={styles["sg-hero-left"]}>
          <div className={styles["sg-corner-tl"]}></div>
          <div className={styles["sg-readout"]}>
            {m.hero.readout.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
            <br />
            <span id="sg-clock">--:--:--</span>
          </div>
          <div className={styles["sg-hero-label"]} id="sh-label">
            {m.hero.label}
          </div>
          <h1 id="sh-h1">
            <em>{m.hero.h1Em}</em>
            <strong>
              {m.hero.h1StrongLine1}
              <br />
              {m.hero.h1StrongLine2}
            </strong>
          </h1>
          <p className={styles["sg-hero-sub"]} id="sh-sub">
            {m.hero.sub}
          </p>
          <div className={styles["sg-hero-actions"]} id="sh-actions">
            <a
              href={m.hero.primaryCta.href}
              className={styles["btn-pill-white"]}
            >
              {m.hero.primaryCta.label}
            </a>
            <a href={m.hero.secondaryCta.href} className={styles["btn-pill"]}>
              {m.hero.secondaryCta.label}
            </a>
          </div>
          <div className={styles["sg-hero-status"]} id="sh-status">
            <div className={styles["sg-status-dot"]}></div>
            <span className={styles["hi"]}>{m.hero.statusHi}</span>
            {m.hero.statusParts.map((part) => (
              <span key={part}>
                <span>·</span>
                <span>{part}</span>
              </span>
            ))}
          </div>
        </div>

        <div className={styles["sg-hero-right"]}>
          <div className={styles["sg-hero-img-main"]}>
            <img src={m.hero.imageMainSrc} alt={m.hero.imageMainAlt} />
          </div>
          <div className={styles["sg-hero-img-row"]}>
            {m.hero.imageSm.map((img) => (
              <div key={img.src} className={styles["sg-hero-img-sm"]}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className={styles["sg-scan"]}></div>
          <div className={styles["sg-hero-stat"]} id="sh-stat">
            <div className={styles["sg-hero-stat-n"]}>
              {m.hero.statN}
              {m.hero.statNEm != null ? <em>{m.hero.statNEm}</em> : null}
            </div>
            <div className={styles["sg-hero-stat-l"]}>{m.hero.statL}</div>
          </div>
        </div>
      </section>

      <div className={styles["sg-intro-strip"]}>
        <div className={styles["sg-intro-inner"]}>
          {m.introStrip.map((item, i) => (
            <div
              key={item.num}
              className={`${styles["sg-intro-item"]} ${styles["f-reveal"]} ${styles[introDelay[i] ?? "f-d1"]}`}
            >
              <div className={styles["sg-intro-num"]}>{item.num}</div>
              <div className={styles["sg-intro-title"]}>{item.title}</div>
              <div className={styles["sg-intro-text"]}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["sg-overview"]}>
        <div className={styles["sg-overview-grid"]}>
          <div className={styles["sg-overview-left"]}>
            <div className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}>
              {m.overview.eyebrow}
            </div>
            <h2 className={`${styles["f-reveal"]} ${styles["f-d1"]}`}>
              {m.overview.h2Line1}  <em>{m.overview.h2Em}</em> {m.overview.h2Line2}
            </h2>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.overview.paragraphs[0]}
            </p>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.overview.paragraphs[1]}
            </p>

            <div className={styles["sg-creds"]}>
              {m.overview.creds.map((c, i) => (
                <div
                  key={i}
                  className={`${styles["sg-cred"]} ${styles["f-reveal-l"]} ${styles[credDelay[i] ?? "f-d1"]}`}
                >
                  <div className={styles["sg-cred-dot"]}></div>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${styles["sg-overview-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}
          >
            <div className={styles["sg-overview-img"]}>
              <img src={m.overview.imageSrc} alt={m.overview.imageAlt} />
              <div className={styles["sg-overview-img-cap"]}>
                <p>{m.overview.imageCap}</p>
              </div>
            </div>
            <div className={styles["sg-overview-quote"]}>
              <p>{m.overview.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["sg-services"]} id="sg-services">
        <div className={styles["sg-services-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{m.services.eyebrow}</div>
            <h2>
              {m.services.h2Line1}
              <br />
              <em>{m.services.h2Em}</em>
            </h2>
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
            {m.services.intro}
          </p>
        </div>

        <div className={styles["sg-cards"]}>
          {m.services.cards.map((card, i) => (
            <div
              key={card.n}
              className={`${styles["sg-card"]} ${styles["f-reveal"]} ${styles[cardDelay[i] ?? "f-d1"]}`}
            >
              <div className={styles["sg-card-n"]}>{card.n}</div>
              <div className={styles["sg-card-icon"]}>
                <SgCardIcon index={i} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a href={card.ctaHref} className={styles["sg-card-link"]}>
                {card.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["sg-ops"]}>
        <div className={styles["sg-ops-inner"]}>
          <div className={`${styles["sg-ops-left"]} ${styles["f-reveal"]}`}>
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
              {m.ops.eyebrow}
            </div>
            <h2>
              {m.ops.h2Line1}
              <br />
              {m.ops.h2Line2}
              <br />
              <em>{m.ops.h2Em}</em>
            </h2>
            <p>{m.ops.p}</p>
            <div className={styles["sg-ops-actions"]}>
              <a
                href={m.ops.primaryCta.href}
                className={styles["btn-pill-white"]}
              >
                {m.ops.primaryCta.label}
              </a>
              <a
                href={m.ops.secondaryCta.href}
                className={styles["btn-pill-ghost"]}
              >
                {m.ops.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className={styles["sg-ops-list"]}>
            {m.ops.items.map((item, i) => (
              <div
                key={item.title}
                className={`${styles["sg-ops-item"]} ${styles["f-reveal-x"]} ${styles[opsDelay[i] ?? "f-d1"]}`}
              >
                <div className={styles["sg-ops-dot"]}></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["sg-other"]}>
        <div className={`${styles["sg-other-header"]} ${styles["f-reveal"]}`}>
          <div className={styles["eyebrow"]}>{m.other.eyebrow}</div>
          <h2>
            {m.other.h2Line1}
            <br />
            <em>{m.other.h2Em}</em>
          </h2>
          <p>{m.other.intro}</p>
        </div>
        <div className={styles["sg-other-grid"]}>
          {m.other.cards.map((card, i) => (
            <div
              key={card.n}
              className={`${styles["sg-other-card"]} ${styles["f-reveal"]} ${styles[otherDelay[i] ?? "f-d1"]}`}
              onClick={() => {
                window.location.href = card.href;
              }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.location.href = card.href;
                }
              }}
            >
              <div className={styles["sg-other-num"]}>{card.n}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className={styles["sg-other-arrow"]}>→</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["sg-cta"]}>
        <div className={styles["sg-cta-inner"]}>
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
            </h2>
          </div>
          <div
            className={`${styles["sg-cta-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}
          >
            <p>{m.cta.body}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={m.cta.primaryCta.href}
                className={styles["btn-pill-white"]}
              >
                {m.cta.primaryCta.label}
              </a>
              <a
                href={m.cta.secondaryCta.href}
                className={styles["btn-pill-ghost"]}
              >
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
