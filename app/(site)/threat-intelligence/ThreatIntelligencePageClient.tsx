"use client";

import "../site.css";
import styles from "../styles.module.css";
import { ThreatIntelligenceEffects } from "../ThreatIntelligenceEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { ThreatIntelligenceContent } from "@/app/lib/site/threat-intelligence/types";

function TiCapIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M20.188 10.934a8.497 8.497 0 0 1 0 2.132m-2.272 4.53a8.5 8.5 0 0 1-1.508 1.508M13.066 21.812a8.5 8.5 0 0 1-2.132 0M6.404 19.54a8.497 8.497 0 0 1-1.508-1.508M2.188 13.066a8.5 8.5 0 0 1 0-2.132m2.272-4.53a8.497 8.497 0 0 1 1.508-1.508M10.934 2.188a8.5 8.5 0 0 1 2.132 0m4.53 2.272a8.5 8.5 0 0 1 1.508 1.508" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

function TiSvcIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" />
        </svg>
      );
  }
}

const d4 = ["f-d1", "f-d2", "f-d3", "f-d4"] as const;
const d5 = ["f-d1", "f-d2", "f-d3", "f-d4", "f-d5"] as const;

export function ThreatIntelligencePageClient({
  content,
}: {
  content: ThreatIntelligenceContent;
}) {
  const m = content.main;

  return (
    <div>
      <ThreatIntelligenceEffects />
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

      <section className={styles["ti-hero"]}>
        <div
          className={styles["ti-hero-bg"]}
          style={{ backgroundImage: `url('${m.hero.bgImage}')` }}
        ></div>
        <div className={styles["ti-hero-overlay"]}></div>
        <div className={styles["ti-grid-overlay"]}></div>
        <div className={styles["ti-dataline"]}></div>
        <div className={styles["ti-dataline"]}></div>
        <div className={styles["ti-corner-tl"]}></div>
        <div className={styles["ti-corner-br"]}></div>
        <div className={styles["ti-readout"]}>
          {m.hero.readout.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
          <br />
          <span id="ti-clock">--:--:--</span>
        </div>
        <div className={styles["ti-gauge"]}>
          <div className={styles["ti-gauge-label"]}>{m.hero.gaugeTopLabel}</div>
          <div className={styles["ti-gauge-bar"]}>
            <div
              className={`${styles["ti-gauge-seg"]} ${styles["active"]}`}
            ></div>
            <div
              className={`${styles["ti-gauge-seg"]} ${styles["active"]}`}
            ></div>
            <div className={`${styles["ti-gauge-seg"]} ${styles["lo"]}`}></div>
            <div className={styles["ti-gauge-seg"]}></div>
            <div className={styles["ti-gauge-seg"]}></div>
          </div>
          <div className={styles["ti-gauge-label"]}>{m.hero.gaugeBottomLabel}</div>
        </div>

        <div className={styles["ti-hero-content"]}>
          <div className={styles["ti-hero-label"]} id="th-label">
            {m.hero.label}
          </div>
          <h1 id="th-h1">
            <em>{m.hero.h1Em}</em>
            <strong>
              {m.hero.h1StrongLine1}
              <br />
              {m.hero.h1StrongLine2}
            </strong>
          </h1>
          <p className={styles["ti-hero-sub"]} id="th-sub">
            {m.hero.sub}
          </p>
          <div className={styles["ti-hero-actions"]} id="th-actions">
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
        </div>

        <div className={styles["ti-intel-card"]} id="th-card">
          <div className={styles["ti-intel-n"]}>
            {m.hero.intelCardN}
            {m.hero.intelCardNEm ? <em>{m.hero.intelCardNEm}</em> : null}
          </div>
          <div className={styles["ti-intel-l"]}>{m.hero.intelCardL}</div>
        </div>
      </section>

      <div className={styles["ti-cap-strip"]}>
        <div className={styles["ti-cap-inner"]}>
          {m.capStrip.map((item, i) => (
            <div
              key={item.title}
              className={`${styles["ti-cap-item"]} ${styles["f-reveal"]} ${styles[d4[i] ?? "f-d1"]}`}
            >
              <div className={styles["ti-cap-icon"]}>
                <TiCapIcon index={i} />
              </div>
              <div className={styles["ti-cap-title"]}>{item.title}</div>
              <div className={styles["ti-cap-text"]}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["ti-overview"]}>
        <div className={styles["ti-overview-grid"]}>
          <div className={styles["ti-overview-left"]}>
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
            <div
              className={`${styles["ti-tags"]} ${styles["f-reveal"]} ${styles["f-d3"]}`}
            >
              {m.overview.tags.map((t) => (
                <span key={t} className={styles["ti-tag"]}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
            <div className={styles["ti-overview-img"]}>
              <img src={m.overview.imageSrc} alt={m.overview.imageAlt} />
              <div className={styles["ti-overview-img-cap"]}>
                <p>{m.overview.imageCap}</p>
              </div>
            </div>
            <div className={styles["ti-overview-quote"]}>
              <p>{m.overview.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["ti-services"]} id="ti-services">
        <div className={styles["ti-svc-header"]}>
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
        <div className={styles["ti-cards"]}>
          {m.services.cards.map((card, i) => (
            <div
              key={card.n}
              className={`${styles["ti-card"]} ${styles["f-reveal"]} ${styles[d4[i] ?? "f-d1"]}`}
            >
              <div className={styles["ti-card-n"]}>{card.n}</div>
              <div className={styles["ti-card-icon"]}>
                <TiSvcIcon index={i} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a href={card.ctaHref} className={styles["ti-card-link"]}>
                {card.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["ti-process"]}>
        <div className={`${styles["ti-process-header"]} ${styles["f-reveal"]}`}>
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
            {m.process.eyebrow}
          </div>
          <h2>
            {m.process.h2Line1}
            <br />
            <em>{m.process.h2Em}</em>
          </h2>
          <p>{m.process.intro}</p>
        </div>
        <div className={styles["ti-steps"]}>
          {m.process.steps.map((step, i) => (
            <div
              key={step.n}
              className={`${styles["ti-step"]} ${styles["f-reveal"]} ${styles[d4[i] ?? "f-d1"]}`}
            >
              <div className={styles["ti-step-num"]}>{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["ti-accred"]}>
        <div className={styles["ti-accred-grid"]}>
          <div className={styles["f-reveal"]}>
            <div
              className={styles["eyebrow"]}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: ".65rem",
                letterSpacing: ".3em",
                color: "var(--sea)",
                marginBottom: 20,
              }}
            >
              {m.accred.eyebrow}
            </div>
            <h2>
              {m.accred.h2Line1}
              <br />
              {m.accred.h2Line2}
              <br />
              <em>{m.accred.h2Em}</em>
            </h2>
            <p>{m.accred.paragraphs[0]}</p>
            <p>{m.accred.paragraphs[1]}</p>
            <div className={styles["ti-sia-logos"]}>
              <img src={m.accred.logos[0].src} alt={m.accred.logos[0].alt} />
              <img
                src={m.accred.logos[1].src}
                alt={m.accred.logos[1].alt}
                className={m.accred.logos[1].small ? "sm" : undefined}
              />
            </div>
          </div>
          <div className={styles["ti-accred-checks"]}>
            {m.accred.checks.map((text, i) => (
              <div
                key={i}
                className={`${styles["ti-accred-check"]} ${styles["f-reveal-x"]} ${i < d5.length ? styles[d5[i]!] : ""}`}
                style={
                  i >= 4
                    ? { transitionDelay: i === 4 ? ".48s" : ".58s" }
                    : undefined
                }
              >
                <div className={styles["ti-accred-check-dot"]}></div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["ti-cta"]}>
        <div className={styles["ti-cta-inner"]}>
          <div className={styles["ti-cta-left"]}>
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
          </div>
          <div
            className={`${styles["ti-cta-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}
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
