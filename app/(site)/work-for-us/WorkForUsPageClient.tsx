"use client";

import type { FormEvent } from "react";
import "../site.css";
import styles from "../styles.module.css";
import { WorkForUsEffects } from "../WorkForUsEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import { SiteServiceNav } from "../components/SiteServiceNav";
import type { WorkForUsContent } from "@/app/lib/site/work-for-us/types";

function CareersWhyIcon({ index }: { index: number }) {
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
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

function CareersRoleIcon({ index }: { index: number }) {
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
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

const d4 = ["f-d1", "f-d2", "f-d3", "f-d4"] as const;

export function WorkForUsPageClient({ content }: { content: WorkForUsContent }) {
  const m = content.main;

  function handleApply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const btn = e.currentTarget.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );
    if (!btn) return;
    btn.textContent = "Application Sent ✓";
    btn.style.background = "var(--sea-light)";
    btn.disabled = true;
    window.setTimeout(() => {
      btn.textContent = m.apply.submitLabel;
      btn.style.background = "";
      btn.disabled = false;
    }, 4000);
  }

  return (
    <div>
      <WorkForUsEffects />
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

      <section className={styles["careers-hero"]}>
        <div className={styles["careers-hero-bg"]}></div>
        <div className={styles["careers-hero-overlay"]}></div>
        <div className={styles["careers-hero-grid"]}></div>
        <div className={styles["careers-scan"]}></div>
        <div className={styles["careers-corner-tl"]}></div>
        <div className={styles["careers-corner-br"]}></div>
        <div className={styles["careers-readout"]}>
          {m.hero.readout.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
          <br />
          <span id="careers-clock">--:--:--</span>
        </div>

        <div className={styles["careers-hero-content"]}>
          <div className={styles["careers-hero-label"]} id="ch-label">
            {m.hero.label}
          </div>
          <h1 id="ch-h1">
            <em>{m.hero.h1Em}</em>
            <strong>{m.hero.h1Strong}</strong>
          </h1>
          <p className={styles["careers-hero-sub"]} id="ch-sub">
            {m.hero.sub}
          </p>
          <div className={styles["careers-hero-actions"]} id="ch-actions">
            <a
              href={m.hero.primaryCta.href}
              className={styles["btn-pill-white"]}
            >
              {m.hero.primaryCta.label}
            </a>
            <a
              href={m.hero.secondaryCta.href}
              className={styles["btn-pill"]}
            >
              {m.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className={styles["careers-badge"]} id="ch-badge">
          <div className={styles["careers-badge-text"]}>{m.hero.badgeQuote}</div>
          <div className={styles["careers-badge-name"]}>{m.hero.badgeName}</div>
        </div>
      </section>

      <div className={styles["careers-why"]}>
        <div className={styles["careers-why-inner"]}>
          {m.whyStrip.map((item, i) => (
            <div
              key={item.title}
              className={`${styles["careers-why-item"]} ${styles["f-reveal"]} ${styles[d4[i] ?? "f-d1"]}`}
            >
              <div className={styles["careers-why-icon"]}>
                <CareersWhyIcon index={i} />
              </div>
              <div className={styles["careers-why-title"]}>{item.title}</div>
              <div className={styles["careers-why-text"]}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles["careers-mission"]}>
        <div className={styles["careers-mission-grid"]}>
          <div className={styles["careers-mission-left"]}>
            <div className={`${styles["eyebrow"]} ${styles["f-reveal"]}`}>
              {m.mission.eyebrow}
            </div>
            <h2 className={`${styles["f-reveal"]} ${styles["f-d1"]}`}>
              {m.mission.h2Line1}
              <br />
              {m.mission.h2Line2}
              <br />
              <em>{m.mission.h2Em}</em>
            </h2>
            <div
              className={`${styles["careers-mission-quote"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}
            >
              <p>{m.mission.quote}</p>
            </div>
            <img
              src={m.mission.logoSrc}
              alt={m.mission.logoAlt}
              className={styles["careers-mission-logo"]}
            />
          </div>

          <div className={styles["careers-pillars"]}>
            {m.pillars.map((pillar, i) => (
              <div
                key={pillar.n}
                className={`${styles["careers-pillar"]} ${styles["f-reveal-x"]} ${styles[d4[i] ?? "f-d1"]}`}
              >
                <div className={styles["careers-pillar-n"]}>{pillar.n}</div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles["careers-roles"]} id="careers-roles">
        <div className={styles["careers-roles-header"]}>
          <div className={styles["f-reveal"]}>
            <div className={styles["eyebrow"]}>{m.roles.eyebrow}</div>
            <h2>
              {m.roles.h2Line1}
              <br />
              <em>{m.roles.h2Em}</em>
            </h2>
          </div>
          <p className={`${styles["f-reveal"]} ${styles["f-d2"]}`}>
            {m.roles.intro}
          </p>
        </div>

        <div className={styles["careers-roles-grid"]}>
          {m.roles.items.map((role, i) => (
            <div
              key={role.n}
              className={`${styles["careers-role-card"]} ${styles["f-reveal"]} ${styles[d4[i] ?? "f-d1"]}`}
            >
              <div className={styles["careers-role-n"]}>{role.n}</div>
              <div className={styles["careers-role-icon"]}>
                <CareersRoleIcon index={i} />
              </div>
              <h3>{role.title}</h3>
              <p>{role.body}</p>
              <div className={styles["careers-role-req"]}>
                {role.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href={role.ctaHref} className={styles["careers-role-cta"]}>
                {role.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles["careers-apply"]} id="careers-apply">
        <div className={styles["careers-apply-inner"]}>
          <div className={styles["f-reveal"]}>
            <div
              className={styles["eyebrow"]}
              style={{
                color: "var(--sea-light)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                marginBottom: 20,
              }}
            >
              {m.apply.eyebrow}
            </div>
            <h2>
              {m.apply.h2Line1}
              <br />
              <em>{m.apply.h2Em}</em>
            </h2>
            <p>{m.apply.intro}</p>
            <a href={m.apply.emailHref} className={styles["careers-email"]}>
              {m.apply.emailDisplay}
            </a>
          </div>

          <div
            className={`${styles["careers-form-wrap"]} ${styles["f-reveal"]} ${styles["f-d2"]}`}
          >
            <h3>{m.apply.formTitle}</h3>
            <div className={styles["careers-form-sub"]}>{m.apply.formSubtitle}</div>
            <form className={styles["careers-form"]} onSubmit={handleApply}>
              <div className={styles["careers-form-row"]}>
                <div className={styles["careers-fg"]}>
                  <label>{m.apply.labels.firstName}</label>
                  <input
                    type="text"
                    placeholder={m.apply.placeholders.firstName}
                    required
                  />
                </div>
                <div className={styles["careers-fg"]}>
                  <label>{m.apply.labels.lastName}</label>
                  <input
                    type="text"
                    placeholder={m.apply.placeholders.lastName}
                    required
                  />
                </div>
              </div>
              <div className={styles["careers-fg"]}>
                <label>{m.apply.labels.email}</label>
                <input
                  type="email"
                  placeholder={m.apply.placeholders.email}
                  required
                />
              </div>
              <div className={styles["careers-fg"]}>
                <label>{m.apply.labels.phone}</label>
                <input
                  type="tel"
                  placeholder={m.apply.placeholders.phone}
                />
              </div>
              <div className={styles["careers-fg"]}>
                <label>{m.apply.labels.role}</label>
                <select defaultValue="">
                  <option value="" disabled>
                    {m.apply.roleSelectEmpty}
                  </option>
                  {m.apply.roleOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles["careers-fg"]}>
                <label>{m.apply.labels.licence}</label>
                <select defaultValue="">
                  <option value="" disabled>
                    {m.apply.licenceSelectEmpty}
                  </option>
                  {m.apply.licenceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles["careers-fg"]}>
                <label>{m.apply.labels.about}</label>
                <textarea
                  placeholder={m.apply.placeholders.about}
                ></textarea>
              </div>
              <button type="submit" className={styles["careers-submit"]}>
                {m.apply.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter footer={content.footer} />
    </div>
  );
}
