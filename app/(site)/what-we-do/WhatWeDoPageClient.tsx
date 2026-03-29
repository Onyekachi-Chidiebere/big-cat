"use client";
import "../site.css";
import styles from "../styles.module.css";
import { WhatWeDoEffects } from "../WhatWeDoEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { WhatWeDoContent } from "@/app/lib/site/what-we-do/types";

export function WhatWeDoPageClient({ content }: { content: WhatWeDoContent }) {
  const m = content.main;

  return (
    <div>
      <WhatWeDoEffects />
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

      <section className={styles["wwd-hero"]}>
        <div className={styles["wwd-hero-left"]}>
          <div className={styles["hero-corner-tl"]}></div>
          <div className={styles["wwd-hero-label"]} id="hero-label">
            {m.hero.label}
          </div>
          <h1 className={styles["wwd-hero-h1"]} id="hero-h1">
            <em>{m.hero.h1Em}</em>
            <strong>{m.hero.h1Strong}</strong>
          </h1>
          <p className={styles["wwd-hero-p"]} id="hero-p">
            {m.hero.p}
          </p>
          <div className={styles["wwd-hero-actions"]} id="hero-actions">
            <a href={m.hero.primaryCta.href} className={styles["btn-pill-fill"]}>
              {m.hero.primaryCta.label}
            </a>
            <a href={m.hero.secondaryCta.href} className={styles["btn-pill-dark"]}>
              {m.hero.secondaryCta.label}
            </a>
          </div>
          <div className={styles["wwd-hero-status"]} id="hero-status">
            <div className={styles["wwd-status-dot"]}></div>
            <span>{m.hero.statusLeft}</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span>{m.hero.statusMid}</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span id="pg-clock">--:--:--</span>
          </div>
        </div>

        <div className={styles["wwd-hero-right"]}>
          <div className={styles["wwd-hero-img-main"]}>
            <img src={m.hero.imageSrc} alt={m.hero.imageAlt} />
          </div>
          <div className={styles["wwd-hero-scan"]}></div>
          <div className={styles["wwd-hero-reticle"]}>
            <div className={styles["wwd-hr-tl"]}></div>
            <div className={styles["wwd-hr-tr"]}></div>
            <div className={styles["wwd-hr-bl"]}></div>
            <div className={styles["wwd-hr-br"]}></div>
          </div>
          <div className={styles["wwd-hero-card"]} id="hero-card">
            <div className={styles["wwd-hero-card-n"]}>
              {m.hero.cardN}
              {m.hero.cardNEm ? <em>{m.hero.cardNEm}</em> : null}
            </div>
            <div className={styles["wwd-hero-card-l"]}>{m.hero.cardLabel}</div>
          </div>
        </div>
      </section>

      <div className={styles["svc-intro-strip"]}>
        <div className={styles["svc-intro-inner"]}>
          {m.introStrip.map((it, i) => (
            <div
              key={it.num}
              className={`${styles["svc-intro-item"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
              id={`si${i + 1}`}
            >
              <div className={styles["svc-intro-num"]}>{it.num}</div>
              <div>
                <div className={styles["svc-intro-title"]}>{it.title}</div>
                <div className={styles["svc-intro-sub"]}>{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["wwd-services"]} id="wwd-services">
        <div className={styles["wwd-services-header"]}>
          <div className={`${styles["wwd-sh-left"]} ${styles["f-reveal"]}`}>
            <div className={styles["eyebrow"]}>{m.services.eyebrow}</div>
            <h2>
              {m.services.h2Line1}
              <br />
              <em>{m.services.h2Em}</em>
              <br />
              {m.services.h2Line2}
            </h2>
          </div>
          <div className={`${styles["wwd-sh-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}>
            <p>{m.services.rightPs[0]}</p>
            <p>{m.services.rightPs[1]}</p>
          </div>
        </div>

        <div className={styles["wwd-svc-cards"]}>
          {m.services.cards.map((c, i) => (
            <div
              key={c.n}
              className={`${styles["wwd-svc-card"]} ${styles["f-reveal-scale"]} ${i === 1 ? styles["f-d2"] : ""} ${i === 2 ? styles["f-d3"] : ""}`}
            >
              <div className={styles["wwd-svc-img"]}>
                <img src={c.imageSrc} alt={c.imageAlt} />
              </div>
              <div className={styles["wwd-svc-body"]}>
                <div className={styles["wwd-svc-n"]}>{c.n}</div>
                <div className={styles["wwd-svc-cat"]}>{c.cat}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["wwd-delivers"]}>
        <div className={styles["wwd-delivers-inner"]}>
          <div className={styles["wwd-dleft"]}>
            <div className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}>
              {m.delivers.eyebrow}
            </div>
            <h2 className={`${styles["f-reveal"]} ${styles["f-d1"]}`}>
              {m.delivers.h2Line1}
              <br />
              <em>{m.delivers.h2Em}</em>
            </h2>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.delivers.leftPs[0]}
            </p>
            <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
              {m.delivers.leftPs[1]}
            </p>
            <div className={`${styles["wwd-tags"]} ${styles["f-reveal"]} ${styles["f-d3"]}`}>
              {m.delivers.tags.map((t) => (
                <span key={t} className={styles["wwd-tag"]}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={styles["wwd-dright"]}>
            {m.delivers.items.map((it, i) => (
              <div
                key={it.title}
                className={`${styles["wwd-ditem"]} ${styles["f-reveal-x"]} ${styles[`f-d${i + 1}`]}`}
              >
                <div className={styles["wwd-ditem-dot"]}></div>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["wwd-stats"]}>
        <div className={styles["wwd-stats-grid"]}>
          {m.stats.map((s, i) => (
            <div
              key={s.label}
              className={`${styles["wwd-stat-item"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["wwd-stat-n"]}>
                {s.n}
                {s.nEm ? <em>{s.nEm}</em> : null}
              </div>
              <div className={styles["wwd-stat-l"]}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["wwd-strategy"]}>
        <div className={styles["wwd-strat-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{m.strategy.eyebrow}</div>
            <h2>
              {m.strategy.h2Line1}
              <br />
              {m.strategy.h2Line2}
              <br />
              <em>{m.strategy.h2Em}</em>
            </h2>
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>{m.strategy.p}</p>
        </div>
        <div className={styles["wwd-strat-grid"]}>
          {m.strategy.cards.map((c, i) => (
            <div
              key={c.n}
              className={`${styles["wwd-strat-card"]} ${styles["f-reveal"]} ${styles[`f-d${i + 1}`]}`}
            >
              <div className={styles["wwd-strat-n"]}>{c.n}</div>
              <div className={styles["wwd-strat-icon"]}>
                {i === 0 && (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
                {i === 2 && (
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                )}
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <a href={c.linkHref} className={styles["wwd-strat-link"]}>
                {c.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["wwd-experts"]}>
        <div className={styles["wwd-experts-inner"]}>
          <div className={`${styles["wwd-exp-left"]} ${styles["f-reveal"]}`}>
            <div className={styles["eyebrow"]} style={{ color: "var(--sea-light)" }}>
              {m.experts.eyebrow}
            </div>
            <h2>
              {m.experts.h2Line1}
              <br />
              <span>{m.experts.h2Strong}</span>
            </h2>
            <p>{m.experts.p}</p>
            <a href={m.experts.phoneHref} className={styles["wwd-exp-phone"]}>
              {m.experts.phone}
            </a>
          </div>
          <div className={`${styles["wwd-exp-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}>
            <div className={styles["wwd-newsletter"]}>
              <h4>{m.experts.newsletterTitle}</h4>
              <p>{m.experts.newsletterP}</p>
              <div className={styles["wwd-nl-form"]}>
                <input type="email" placeholder={m.experts.emailPlaceholder} />
                <button type="button">{m.experts.subscribeButton}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter footer={content.footer} />
    </div>
  );
}
