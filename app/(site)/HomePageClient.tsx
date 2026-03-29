"use client";

import "./site.css";
import styles from "./styles.module.css";
import { ClientsMarquee } from "./ClientsMarquee";
import { HomePageEffects } from "./HomePageEffects";
import { SecurityNewsSection } from "./SecurityNewsSection";
import type { HomeContent } from "@/app/lib/site/home/types";

export function HomePageClient({ content }: { content: HomeContent }) {
  return (
    <div>
      <HomePageEffects />

      <div className={styles.cursor} id="cur"></div>
      <div className={styles['cursor-ring']} id="curR"></div>
      <div className={styles['cursor-pulse']} id="curPulse"></div>
      <div className={styles['cursor-tl']} id="curTL"></div>
      <div className={styles['cursor-tr']} id="curTR"></div>
      <div className={styles['cursor-bl']} id="curBL"></div>
      <div className={styles['cursor-br']} id="curBR"></div>
      <div id="progress-bar"></div>
      <a href="#contact" className={styles['floating-cta']}>{content.nav.floatingCta}</a>

      {/* <!-- ANNOUNCE --> */}
      <div className={styles['announce-bar']} id="announce-bar">
        <div
          className={styles['announce-text']}
          dangerouslySetInnerHTML={{ __html: content.announce.html }}
        />
        <button className={styles['announce-close']} id="ann-close" aria-label="Close">✕</button>
      </div>

      {/* // <!-- NAVBAR --> */}
      <header className={styles.navbar} id="navbar">
        <a href="#" className={styles.logo}>
          <img src={content.nav.logoUrl} alt={content.nav.logoAlt} />
        </a>
        <nav id="nav">
          <a href="#">Home</a>
          <a href="what-we-do">What We Do</a>
          <a href="about">About</a>
          <a href="work-for-us" className={styles['nav-cta']}>Work for Us</a>
        </nav>
        <div className={styles['nav-right']}>
          <a href={content.nav.phoneHref} className={styles['nav-phone']}>{content.nav.phone}</a>
          <a href="#contact" className={styles['btn-pill']}>{content.nav.quoteCta}</a>
        </div>
        <button id="menu-toggle" aria-label="Menu">☰</button>
      </header>

      {/* <!-- HERO --> */}
      <section className={styles.hero} id="hero-section">
        <div className={styles['hero-bg']}></div>
        <div className={styles['hero-phosphor']}></div>
        <div className={styles['hero-overlay']}></div>
        <div className={styles['hero-hud']}></div>
        <div className={styles['hero-vtick']}></div>
        <div className={styles['hero-lock']}>
          <div className={styles['hero-lock-ring']}></div>
          <div className={styles['hero-lock-inner']}></div>
          <div className={styles['hero-lock-centre']}></div>
        </div>
        <div className={styles['hero-readout']} id="hero-readout">
          {content.hero.readoutLines.map((line, i) => (
            <span key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
          <br />
          <span id="hr-time">--:--:--</span>
        </div>
        <div className={styles['hero-bracket-tl']}></div>
              <div className={styles['hero-bracket-br']}></div>
              <div className={styles['hero-scan']}></div>
              <div className={styles['hero-dots']} id="hero-dots">
                {Array.from({ length: 25 }, (_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className={styles['hero-reticle']} id="reticle">
                <div className={styles['hero-reticle-tl']}></div>
                <div className={styles['hero-reticle-tr']}></div>
                <div className={styles['hero-reticle-bl']}></div>
                <div className={styles['hero-reticle-br']}></div>
              </div>
              <div className={styles['hero-coords']} id="hero-coords">
                <span id="coord-x">51.5074° N</span>
                <span id="coord-y">0.1278° W</span>
              </div>

              <div className={styles['hero-content']}>
                <div className={styles['hero-eyebrow']}><span></span>{content.hero.eyebrow}</div>
                <div className={styles['hero-classified']}>{content.hero.classified}</div>
                <h1><em className={styles['hero-elite']}>{content.hero.titleLead}</em><strong>{content.hero.titleStrong}</strong></h1>
                <p className={styles['hero-sub']}>{content.hero.sub}</p>
                <div className={styles['hero-actions']}>
                  <a href="#contact" className={styles['btn-pill-white']}>{content.hero.primaryCta}</a>
                  <a href="#services" className={styles['btn-pill']}>{content.hero.secondaryCta}</a>
                </div>
              </div>

              <div className={styles['hero-stats']}>
                {content.hero.stats.map((st, i) => (
                  <div className={styles['hero-stat']} key={i}>
                    <div
                      className={styles['hero-stat-n']}
                      dangerouslySetInnerHTML={{ __html: st.valueHtml }}
                    />
                    <div className={styles['hero-stat-l']}>{st.label}</div>
                  </div>
                ))}
              </div>
              <div className={styles['scroll-cue']}>
                <span>{content.hero.scrollLabel}</span>
                <div className={styles['scroll-track']}></div>
              </div>
            </section>
            {/* <!-- TRUST BAR --> */}
            <div className={styles['trust-bar']}>
              <div className={styles['trust-bar-inner']}>
                {content.trust.items.map((text, i) => {
                  const delay = [styles['f-d1'], styles['f-d2'], styles['f-d3'], styles['f-d4'], styles['f-d5']][i] ?? styles['f-d1'];
                  return (
                    <div key={i} className={`${styles['trust-item']} ${styles['f-reveal']} ${delay}`}>
                      <span className={styles.dot}></span>{text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <!-- WHAT WE DO --> */}
            <section className={styles['wwd-section']} id="wwd-section">
              <div className={`${styles['wwd-header']} ${styles.reveal}`}>
                <div className={styles.eyebrow}><span></span>{content.wwd.eyebrow}</div>
                <h2 className={styles['section-h']}>{content.wwd.titleLine1}<br /><em>{content.wwd.titleEmphasis}</em></h2>
                <p>{content.wwd.intro}</p>
              </div>

              <div className={styles['wwd-grid']}>
                {content.wwd.cards.map((c) => (
                  <div key={c.num} className={`${styles['wwd-card']} ${styles['f-reveal-scale']}`}>
                    <div className={styles['wwd-card-num']}>{c.num}</div>
                    <div className={styles['wwd-card-tag']}>{c.tag}</div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* <!-- PURPOSE --> */}
            <section className={styles['purpose-section']}>
              <div className={styles['purpose-inner']}>
                <div className={`${styles['purpose-left']} ${styles.reveal}`}>
                  <div className={styles.eyebrow}><span></span>{content.purpose.eyebrow}</div>
                  <h2>{content.purpose.titleLine1}<br /><em>{content.purpose.titleEmphasis}</em></h2>
                  {content.purpose.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className={styles['purpose-tags']}>
                    {content.purpose.tags.map((tag) => (
                      <span key={tag} className={styles['purpose-tag']}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={`${styles['purpose-right']} ${styles.reveal}`}>
                  {content.purpose.items.map((item) => (
                    <div key={item.title} className={styles['purpose-item']}>
                      <div className={styles['purpose-dot']}></div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* <!-- CLIENTS --> */}
            <ClientsMarquee />

            {/* <!-- SERVICES --> */}
            <section id="services" className={styles.services}>
              <div className={`${styles['services-intro']} ${styles.reveal}`}>
                <div>
                  <div className={styles.eyebrow}>{content.servicesIntro.eyebrow}</div>
                  <h2 className={styles['section-h']}><em>{content.servicesIntro.titleLead}</em><br />{content.servicesIntro.titleRest}</h2>
                </div>
                <div className={styles['services-intro-right']}>
                  <p>{content.servicesIntro.body}</p>
                  <a href="#contact" className={styles['btn-pill']}>{content.servicesIntro.cta}</a>
                </div>
              </div>

              <div className={`${styles['svc-grid']} ${styles.reveal}`}>
                {content.servicesCards.map((card, i) => {
                  const delay = [styles['f-d1'], styles['f-d2'], styles['f-d3'], styles['f-d4']][i] ?? styles['f-d1'];
                  return (
                    <div
                      key={card.href}
                      className={`${styles['svc-card']} ${styles['f-reveal-scale']} ${delay}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href = card.href;
                      }}
                    >
                      <div className={styles['svc-img']}>
                        <img src={card.imageUrl} alt={card.title} />
                      </div>
                      <div className={styles['svc-body-inner']}>
                        <div className={styles['svc-ghost']}>{card.ghost}</div>
                        <div className={styles['svc-meta']}>
                          <span className={styles['svc-meta-line']}></span>
                          {card.metaLine}
                          <span className={styles['svc-cat']}>{card.category}</span>
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.body}</p>
                        <a href={card.href} className={styles['svc-cta']}>{card.ctaLabel}</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* <!-- ABOUT --> */}
            <section id="about" className={styles.about}>
              <div className={styles['about-grid']}>
                <div className={`${styles['about-img-wrap']} ${styles['f-reveal']}`}>
                  <img src={content.about.imageUrl} alt="About Big Cat Security" loading="lazy" />
                    <div className={styles['about-badge']}>
                      <div className={styles['about-badge-n']}>{content.about.badgeYear}</div>
                      <div className={styles['about-badge-l']}>{content.about.badgeLine1}<br />{content.about.badgeLine2}</div>
                    </div>
                </div> 
                <div className={`${styles['f-reveal']} ${styles['f-d2']}`}>
                  <div className={styles.eyebrow}>{content.about.eyebrow}</div>
                  <h2 className={`${styles['section-h']} ${styles['about-text']}`}><em>{content.about.titleLead}</em><br />{content.about.titleRest}</h2>
                  <p className={styles['about-lede']}>{content.about.lede}</p>
                  <p className={styles['about-body']}>{content.about.body}</p>
                  <div className={styles['stats-row']}>
                    {content.about.stats.map((st, i) => {
                      const delay = [styles['f-d1'], styles['f-d2'], styles['f-d3']][i] ?? styles['f-d1'];
                      return (
                        <div key={st.label} className={`${styles.stat} ${styles['f-reveal']} ${delay}`}>
                          <div
                            className={styles['stat-n']}
                            id={i === 0 ? "count-n" : undefined}
                            dangerouslySetInnerHTML={{ __html: st.valueHtml }}
                          />
                          <div className={styles['stat-l']}>{st.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- NEWS --> */}
            <SecurityNewsSection />

            {/* <!-- CTA STRIP --> */}
            <section className={styles['cta-strip']}>
              <div className={`${styles['cta-left']} ${styles['f-reveal']}`}>
                <div className={styles['cta-eyebrow']}>{content.ctaStrip.eyebrow}</div>
                <h2 className={styles['cta-h']}>{content.ctaStrip.titleLine1}<br />{content.ctaStrip.titleLine2}</h2>
              </div>
              <div className={`${styles['cta-right']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                <p>{content.ctaStrip.body}</p>
                <a href={content.ctaStrip.phoneHref} className={styles['btn-pill-white']}>{content.ctaStrip.phone}</a>
              </div>
            </section>

            {/* <!-- CONTACT --> */}
            <section id="contact" className={styles.contact}>
              <div className={styles['contact-grid']}>
                <div className={styles.reveal}>
                  <div className={styles.eyebrow}>{content.contact.eyebrow}</div>
                  <h2 className={styles['section-h']}><em>{content.contact.titleLead}</em><br />{content.contact.titleRest}</h2>
                  <p>{content.contact.intro}</p>
                  <div className={styles['contact-details']}>
                    <div className={styles['c-detail']}><span className={styles['c-label']}>Phone</span><span className={styles['c-value']}>{content.contact.phone}</span></div>
                    <div className={styles['c-detail']}><span className={styles['c-label']}>Email</span><span className={styles['c-value']}>{content.contact.email}</span></div>
                    <div className={styles['c-detail']}><span className={styles['c-label']}>Address</span><span className={styles['c-value']}>{content.contact.address}</span></div>
                    <div className={styles['c-detail']}><span className={styles['c-label']}>Hours</span><span className={styles['c-value']}>{content.contact.hours}</span></div>
                  </div>
                </div>
                <div className={`${styles['contact-form']} ${styles.reveal}`}>
                  <div className={styles['form-row']}>
                    <div className={styles.fg}>
                      <label>{content.contact.formNameLabel}</label>
                      <input type="text" placeholder={content.contact.formNamePlaceholder} />
                    </div>
                    <div className={styles.fg}>
                      <label>{content.contact.formEmailLabel}</label>
                      <input type="email" placeholder={content.contact.formEmailPlaceholder} />
                    </div>
                    <div className={styles.fg}>
                      <label>{content.contact.formPhoneLabel}</label>
                      <input type="tel" placeholder={content.contact.formPhonePlaceholder} />
                    </div>
                    <div className={styles.fg}>
                      <label>{content.contact.formServiceLabel}</label>
                      <select defaultValue="">
                        <option value="" disabled>
                          {content.contact.formServicePlaceholder}
                        </option>
                        {content.contact.formServiceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className={`${styles.fg} ${styles.wide}`}>
                      <label>{content.contact.formMessageLabel}</label>
                      <textarea placeholder={content.contact.formMessagePlaceholder}></textarea>
                    </div>
                  </div>
                  <div className={styles['form-submit']}>
                    <button className={styles['btn-pill-white']} type="submit">{content.contact.submitLabel}</button>
                    <span className={styles['form-note']}>{content.contact.formNote}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- FOOTER --> */}
            <footer className={styles.footer}>
              <div className={styles['footer-inner']}>
                <div className={styles['footer-logo']}><img src={content.footer.logoUrl} alt={content.footer.logoAlt} /></div>

                <div className={styles['footer-center']}>
                  <div className={styles['footer-social']}>
                    <a href={content.footer.facebookUrl} target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="Facebook">
                      <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href={content.footer.instagramUrl} target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="Instagram">
                      <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a href={content.footer.linkedinUrl} target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                  <div className={styles['footer-copy']}>{content.footer.copyright}</div>
                </div>

                <div className={styles['footer-links']}>
                  <a href="#services">Services</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>

              <div className={styles['footer-bottom']}>
                <div className={styles['footer-bottom-left']}>
                  {content.footer.line}
                </div>
                <div className={styles['footer-signal']}>
                  <div className={styles['footer-signal-dot']}></div>
                  {content.footer.signal}
                </div>
              </div>
            </footer>

        </div>
  );
}