"use client";

import "./site.css";
import styles from "./styles.module.css";
import { AboutPageEffects } from "./AboutPageEffects";
import type { AboutContent } from "@/app/lib/site/about/types";

const FD = [styles["f-d1"], styles["f-d2"], styles["f-d3"], styles["f-d4"]] as const;

export function AboutPageClient({ content }: { content: AboutContent }) {
  return (
    <div>
      <AboutPageEffects />
      <div className={styles["cursor"]} id="cur"></div>
      <div className={styles["cursor-ring"]} id="curR"></div>
      <div className={styles["cursor-pulse"]} id="curPulse"></div>
      <div className={styles["cursor-tl"]} id="curTL"></div>
      <div className={styles["cursor-tr"]} id="curTR"></div>
      <div className={styles["cursor-bl"]} id="curBL"></div>
      <div className={styles["cursor-br"]} id="curBR"></div>
      <div id="progress-bar"></div>
      <a href="/#contact" className={styles["floating-cta"]} id="float-cta">
        {content.nav.floatingCta}
      </a>

      <div className={styles["announce-bar"]} id="announce-bar">
        <div
          className={styles["announce-text"]}
          dangerouslySetInnerHTML={{ __html: content.announce.html }}
        />
        <button
          className={styles["announce-close"]}
          id="ann-close"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <header className={styles["navbar"]} id="navbar">
        <a href="/" className={styles["logo"]}>
          <img src={content.nav.logoUrl} alt={content.nav.logoAlt} />
        </a>
        <nav id="nav">
          <a href="/">Home</a>
          <a href="/what-we-do">What We Do</a>
          <a href="/about" style={{ color: "var(--sea)" }}>
            About
          </a>
          <a href="/work-for-us" className={styles["nav-cta"]}>
            Work for Us
          </a>
        </nav>
        <div className={styles["nav-right"]}>
          <a href={content.nav.phoneHref} className={styles["nav-phone"]}>
            {content.nav.phone}
          </a>
          <a href="/#contact" className={styles["btn-pill"]}>
            {content.nav.quoteCta}
          </a>
        </div>
        <button id="menu-toggle" aria-label="Menu">
          ☰
        </button>
      </header>

      <section className={styles["about-hero"]}>
        <div className={styles["about-hero-left"]}>
          <div className={styles["about-hero-img"]}>
            <img src={content.hero.imageUrl} alt={content.hero.imageAlt} />
          </div>
          <div className={styles["about-hero-scan"]}></div>
          <div className={styles["about-corner-bl"]}></div>
          <div className={styles["about-hero-caption"]} id="hero-caption">
            <div className={styles["about-hero-caption-name"]}>
              {content.hero.captionName}
            </div>
            <div className={styles["about-hero-caption-title"]}>
              {content.hero.captionTitle}
            </div>
          </div>
        </div>

        <div className={styles["about-hero-right"]}>
          <div className={styles["about-corner-tr"]}></div>
          <div className={styles["about-hero-label"]} id="hero-label">
            {content.hero.label}
          </div>
          <h1 className={styles["about-hero-h1"]} id="hero-h1">
            <em>{content.hero.titleLead}</em>
            <strong
              dangerouslySetInnerHTML={{
                __html: content.hero.titleStrongHtml,
              }}
            />
          </h1>
          <p className={styles["about-hero-desc"]} id="hero-desc">
            {content.hero.desc}
          </p>
          <div
            className={styles["about-hero-reg"]}
            id="hero-reg"
            dangerouslySetInnerHTML={{ __html: content.hero.regLine }}
          />
          <div className={styles["about-hero-actions"]} id="hero-actions">
            <a href={content.hero.primaryHref} className={styles["btn-pill-fill"]}>
              {content.hero.primaryCta}
            </a>
            <a href={content.hero.secondaryHref} className={styles["btn-pill-dark"]}>
              {content.hero.secondaryCta}
            </a>
          </div>
          <div className={styles["about-stat-float"]} id="hero-stat">
            <div
              className={styles["about-stat-float-n"]}
              dangerouslySetInnerHTML={{ __html: content.hero.statFloatNHtml }}
            />
            <div className={styles["about-stat-float-l"]}>
              {content.hero.statFloatLabel}
            </div>
          </div>
        </div>
      </section>

      <div className={styles["about-stats-strip"]}>
        <div className={styles["about-stats-inner"]}>
          {content.statsStrip.items.map((s, i) => (
            <div
              key={i}
              className={`${styles["about-stat-item"]} ${styles["f-reveal"]} ${FD[i] ?? FD[0]}`}
            >
              <div
                className={styles["about-stat-n"]}
                dangerouslySetInnerHTML={{ __html: s.valueHtml }}
              />
              <div className={styles["about-stat-l"]}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["about-story"]}>
        <div className={styles["about-story-grid"]}>
          <div>
            <div className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}>
              {content.story.eyebrow}
            </div>
            <h2
              className={`${styles["f-reveal"]} ${styles["f-d1"]}`}
              dangerouslySetInnerHTML={{ __html: content.story.titleHtml }}
            />

            {content.story.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`${styles["f-reveal"]} ${i < 2 ? FD[1] : FD[2]}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            <div className={`${styles["about-quote"]} ${styles["f-reveal"]} ${styles["f-d3"]}`}>
              <div className={styles["about-quote-text"]}>{content.story.quoteText}</div>
              <div className={styles["about-quote-attr"]}>{content.story.quoteAttr}</div>
            </div>

            <div className={`${styles["about-se-badge"]} ${styles["f-reveal"]} ${styles["f-d4"]}`}>
              <div className={styles["about-se-badge-dot"]}></div>
              <span dangerouslySetInnerHTML={{ __html: content.story.badgeLine }} />
            </div>
          </div>

          <div>
            <div className={`${styles["about-story-img"]} ${styles["f-reveal"]}`}>
              <img src={content.story.imageUrl} alt={content.story.imageAlt} />
              <div className={styles["about-story-img-caption"]}>
                {content.story.imageCaption}
              </div>
            </div>

            <div className={styles["about-svc-list"]}>
              {content.story.services.map((svc, i) => (
                <div
                  key={i}
                  className={`${styles["about-svc-item"]} ${styles["f-reveal-x"]} ${FD[i] ?? FD[0]}`}
                >
                  <div className={styles["about-svc-dot"]}></div>
                  <div>
                    <h4>{svc.title}</h4>
                    <p>{svc.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles["about-values"]}>
        <div className={styles["about-values-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{content.values.eyebrow}</div>
            <h2 dangerouslySetInnerHTML={{ __html: content.values.titleHtml }} />
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>{content.values.intro}</p>
        </div>

        <div className={styles["about-values-grid"]}>
          {content.values.cards.map((c, i) => (
            <div
              key={i}
              className={`${styles["about-value-card"]} ${styles["f-reveal"]} ${FD[i] ?? FD[0]}`}
            >
              <div className={styles["about-value-n"]}>{c.num}</div>
              <div className={styles["about-value-icon"]}>
                {i === 0 && (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )}
                {i === 2 && (
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )}
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["about-expertise"]}>
        <div className={styles["about-expertise-inner"]}>
          <div className={`${styles["about-exp-left"]} ${styles["f-reveal"]}`}>
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
              {content.expertise.eyebrow}
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: content.expertise.titleHtml }} />
            {content.expertise.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className={styles["about-exp-tags"]}>
              {content.expertise.tags.map((t) => (
                <span key={t} className={styles["about-exp-tag"]}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={styles["about-exp-right"]}>
            {content.expertise.items.map((it, i) => (
              <div
                key={i}
                className={`${styles["about-exp-item"]} ${styles["f-reveal-x"]} ${FD[i] ?? FD[0]}`}
              >
                <div className={styles["about-exp-dot"]}></div>
                <div>
                  <h4>{it.title}</h4>
                  <p>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["about-director"]}>
        <div className={styles["about-director-inner"]}>
          <div className={`${styles["about-dir-left"]} ${styles["f-reveal"]}`}>
            <img
              src={content.directorCta.imageUrl}
              alt={content.directorCta.imageAlt}
              className={styles["about-dir-logo"]}
            />
            <h2 dangerouslySetInnerHTML={{ __html: content.directorCta.titleHtml }} />
            {content.directorCta.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className={styles["about-dir-actions"]}>
              <a href={content.directorCta.primaryHref} className={styles["btn-pill-fill"]}>
                {content.directorCta.primaryCta}
              </a>
              <a href={content.directorCta.secondaryHref} className={styles["btn-pill-dark"]}>
                {content.directorCta.secondaryCta}
              </a>
            </div>
          </div>
          <div className={`${styles["about-dir-right"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}>
            <div className={styles["about-rating"]}>
              <div
                className={styles["about-rating-n"]}
                dangerouslySetInnerHTML={{ __html: content.directorCta.ratingNHtml }}
              />
              <div className={styles["about-rating-stars"]}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className={styles["about-rating-label"]}>
                {content.directorCta.ratingLabel}
              </div>
            </div>
            <div className={styles["about-contact-card"]}>
              {content.directorCta.contactRows.map((row) => (
                <div key={row.label} className={styles["about-contact-row"]}>
                  <span className={styles["about-contact-label"]}>{row.label}</span>
                  <span
                    className={styles["about-contact-val"]}
                    dangerouslySetInnerHTML={{ __html: row.valueHtml }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles["footer"]}>
        <div className={styles["footer-inner"]}>
          <div className={styles["footer-logo"]}>
            <img src={content.footer.logoUrl} alt={content.footer.logoAlt} />
          </div>

          <div className={styles["footer-center"]}>
            <div className={styles["footer-social"]}>
              <a
                href={content.footer.facebookUrl}
                target="_blank"
                rel="noopener"
                className={styles["soc-btn"]}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={content.footer.instagramUrl}
                target="_blank"
                rel="noopener"
                className={styles["soc-btn"]}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={content.footer.linkedinUrl}
                target="_blank"
                rel="noopener"
                className={styles["soc-btn"]}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <div className={styles["footer-copy"]}>{content.footer.copyright}</div>
          </div>

          <div className={styles["footer-links"]}>
            <a href={content.footer.linkServices}>Services</a>
            <a href={content.footer.linkAbout}>About</a>
            <a href={content.footer.linkContact}>Contact</a>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-bottom-left"]}>{content.footer.bottomLeft}</div>
          <div className={styles["footer-signal"]}>
            <div className={styles["footer-signal-dot"]}></div>
            {content.footer.signalLine}
          </div>
        </div>
      </footer>
    </div>
  );
}
