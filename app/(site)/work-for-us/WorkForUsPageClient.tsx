"use client";

import type { FormEvent } from "react";
import "../site.css";
import styles from "../styles.module.css";
import { WorkForUsEffects } from "../WorkForUsEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import type { SiteAfContent } from "@/app/lib/site/chrome/types";

export function WorkForUsPageClient({ content }: { content: SiteAfContent }) {
  function handleApply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const btn = e.currentTarget.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!btn) return;
    btn.textContent = "Application Sent ✓";
    btn.style.background = "var(--sea-light)";
    btn.disabled = true;
    window.setTimeout(() => {
      btn.textContent = "Send Application →";
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
      <a href="/#contact" className={styles["floating-cta"]} id="float-cta">
        Get a Quote
      </a>
    <SiteAnnounce html={content.announce.html} />

      {/* <!-- NAVBAR --> */}
    <header className={styles['navbar']} id="navbar">
      <a href="/" className={styles['logo']}>
        <img src="/logo.png" alt="Big Cat Security Ltd" />
      </a>
      <nav id="nav">
        <a href="/">Home</a>
        <a href="/what-we-do">What We Do</a>
        <a href="/about">About</a>
        <a href="/work-for-us" className={styles['nav-cta']} style={{ background: "var(--sea)" }}>Work for Us</a>
      </nav>
      <div className={styles['nav-right']}>
        <a href="tel:+448002440000" className={styles['nav-phone']}>0800 244 228</a>
        <a href="/#contact" className={styles['btn-pill']}>Get a Quote</a>
      </div>
      <button id="menu-toggle" aria-label="Menu">☰</button>
    </header>



    {/* <!-- ── HERO ─────────────────────────────────────────────────── --> */}
    <section className={styles['careers-hero']}>
      <div className={styles['careers-hero-bg']}></div>
      <div className={styles['careers-hero-overlay']}></div>
      <div className={styles['careers-hero-grid']}></div>
      <div className={styles['careers-scan']}></div>
      <div className={styles['careers-corner-tl']}></div>
      <div className={styles['careers-corner-br']}></div>
      <div className={styles['careers-readout']}>
        SECTOR: LONDON UK<br/>
          STATUS: HIRING<br />
            SIA: LICENSED<br />
              <span id="careers-clock">--:--:--</span>
            </div>

            <div className={styles['careers-hero-content']}>
              <div className={styles['careers-hero-label']} id="ch-label">Careers at Big Cat Security</div>
              <h1 id="ch-h1">
                <em>Doing the Right Thing.</em>
                <strong>For Everyone.</strong>
              </h1>
              <p className={styles['careers-hero-sub']} id="ch-sub">As a social enterprise, we have our colleagues at the heart of everything we do. Join a company that invests in you — your skills, your confidence, and your future.</p>
              <div className={styles['careers-hero-actions']} id="ch-actions">
                <a href="#careers-apply" className={styles['btn-pill-white']}>Apply Now</a>
                <a href="#careers-roles" className={styles['btn-pill']}>View Open Roles</a>
              </div>
            </div>

            <div className={styles['careers-badge']} id="ch-badge">
              <div className={styles['careers-badge-text']}>"We recognise that our colleagues are the face of both our business and our clients."</div>
              <div className={styles['careers-badge-name']}>Tochu Uba-Chinaka — Director</div>
            </div>
          </section>

          {/* <!-- ── WHY JOIN US STRIP ──────────────────────────────────────── --> */}
          <div className={styles['careers-why']}>
            <div className={styles['careers-why-inner']}>
              <div className={`${styles['careers-why-item']} ${styles['f-reveal']} ${styles['f-d1']}`}>
                <div className={styles['careers-why-icon']}>
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className={styles['careers-why-title']}>SIA Licensed</div>
                <div className={styles['careers-why-text']}>We sponsor and support your SIA licensing — giving you the credentials to build a long-term security career.</div>
              </div>
              <div className={`${styles['careers-why-item']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                <div className={styles['careers-why-icon']}>
                  <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <div className={styles['careers-why-title']}>Career Growth</div>
                <div className={styles['careers-why-text']}>Meaningful career opportunities with long-term progression paths and training across multiple security disciplines.</div>
              </div>
              <div className={`${styles['careers-why-item']} ${styles['f-reveal']} ${styles['f-d3']}`}>
                <div className={styles['careers-why-icon']}>
                  <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <div className={styles['careers-why-title']}>Fair Living Wage</div>
                <div className={styles['careers-why-text']}>Committed to supporting a fair living wage wherever possible — because you deserve to be valued for your work.</div>
              </div>
              <div className={`${styles['careers-why-item']} ${styles['f-reveal']} ${styles['f-d4']}`}>
                <div className={styles['careers-why-icon']}>
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div className={styles['careers-why-title']}>Social Enterprise</div>
                <div className={styles['careers-why-text']}>The only major social enterprise in UK security — your work creates positive impact in the communities we protect.</div>
              </div>
            </div>
          </div>

          {/* <!-- ── MISSION / PEOPLE FIRST ─────────────────────────────────── --> */}
          <section className={styles['careers-mission']}>
            <div className={styles['careers-mission-grid']}>

              <div className={styles['careers-mission-left']}>
                <div className={`${styles['eyebrow']} ${styles['f-reveal']}`}>Work For Big Cat Security Ltd</div>
                <h2 className={`${styles['f-reveal']} ${styles['f-d1']}`}>People<br />at the<br /><em>Core</em></h2>
                  <div className={`${styles['careers-mission-quote']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                    <p>Our company was founded with people at its core, and that principle continues to shape everything we do.</p>
                  </div>
                  <img src="/logo.png" alt="Big Cat Security Ltd" className={styles['careers-mission-logo']} />
                  </div>

                  <div className={styles['careers-pillars']}>
                    <div className={`${styles['careers-pillar']} ${styles['f-reveal-x']} ${styles['f-d1']}`}>
                      <div className={styles['careers-pillar-n']}>01</div>
                      <div>
                        <h3>Skills &amp; Confidence</h3>
                        <p>We invest in equipping every individual with the skills and confidence to deliver outstanding service — from SIA certification to ongoing professional development.</p>
                      </div>
                    </div>
                    <div className={`${styles['careers-pillar']} ${styles['f-reveal-x']} ${styles['f-d2']}`}>
                      <div className={styles['careers-pillar-n']}>02</div>
                      <div>
                        <h3>Meaningful Opportunities</h3>
                        <p>We are committed to creating meaningful career opportunities — not just jobs. We actively support long-term growth and career progression within our team.</p>
                      </div>
                    </div>
                    <div className={`${styles['careers-pillar']} ${styles['f-reveal-x']} ${styles['f-d3']}`}>
                      <div className={styles['careers-pillar-n']}>03</div>
                      <div>
                        <h3>Fair Compensation</h3>
                        <p>Supporting a fair living wage wherever possible, because we believe the people who protect others deserve to be properly valued and rewarded.</p>
                      </div>
                    </div>
                    <div className={`${styles['careers-pillar']} ${styles['f-reveal-x']} ${styles['f-d4']}`}>
                      <div className={styles['careers-pillar-n']}>04</div>
                      <div>
                        <h3>Community &amp; Impact</h3>
                        <p>As a social enterprise, your role goes beyond security — you become part of a team that actively improves lives and strengthens the communities we serve.</p>
                      </div>
                    </div>
                  </div>

                </div>
                </section>

                {/* <!-- ── OPEN ROLES ─────────────────────────────────────────────── --> */}
                <section className={styles['careers-roles']} id="careers-roles">
                  <div className={styles['careers-roles-header']}>
                    <div className={styles['f-reveal']}>
                      <div className={styles['eyebrow']}>Open Positions</div>
                      <h2>Current<br/><em>Opportunities</em></h2>
                    </div>
                    <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>We are always looking for motivated, professional individuals to join our growing team. All roles require or support SIA licensing — we welcome both experienced officers and those new to the industry.</p>
                  </div>

                  <div className={styles['careers-roles-grid']}>
                    <div className={`${styles['careers-role-card']} ${styles['f-reveal']} ${styles['f-d1']}`}>
                      <div className={styles['careers-role-n']}>01</div>
                      <div className={styles['careers-role-icon']}>
                        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      </div>
                      <h3>Security Guard</h3>
                      <p>Protect business premises, office buildings, retail environments, and shared workspaces across London. You are the visible deterrent and the first line of defence.</p>
                      <div className={styles['careers-role-req']}>
                        <span>SIA DS Licence</span>
                        <span>London</span>
                        <span>Full/Part Time</span>
                      </div>
                      <a href="#careers-apply" className={styles['careers-role-cta']}>Apply for This Role</a>
                    </div>

                    <div className={`${styles['careers-role-card']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                      <div className={styles['careers-role-n']}>02</div>
                      <div className={styles['careers-role-icon']}>
                        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                      </div>
                      <h3>Door Supervisor</h3>
                      <p>Manage entry points, conduct body and bag searches, and ensure the safety of guests at licensed premises, bars, restaurants, hotels and entertainment venues.</p>
                      <div className={styles['careers-role-req']}>
                        <span>SIA Door Licence</span>
                        <span>London</span>
                        <span>Flexible Hours</span>
                      </div>
                      <a href="#careers-apply" className={styles['careers-role-cta']}>Apply for This Role</a>
                    </div>

                    <div className={`${styles['careers-role-card']} ${styles['f-reveal']} ${styles['f-d3']}`}>
                      <div className={styles['careers-role-n']}>03</div>
                      <div className={styles['careers-role-icon']}>
                        <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                      </div>
                      <h3>Event Security Officer</h3>
                      <p>Join our specialist event security teams for high-end public events, film sets, music videos, theatre productions, private functions and large-scale gatherings.</p>
                      <div className={styles['careers-role-req']}>
                        <span>SIA Licence</span>
                        <span>London &amp; UK</span>
                        <span>Event-Based</span>
                      </div>
                      <a href="#careers-apply" className={styles['careers-role-cta']}>Apply for This Role</a>
                    </div>
                  </div>
                </section>

                {/* <!-- ── APPLY ──────────────────────────────────────────────────── --> */}
                <section className={styles['careers-apply']} id="careers-apply">
                  <div className={styles['careers-apply-inner']}>

                    <div className={styles['f-reveal']}>
                      <div
                        className={styles['eyebrow']}
                        style={{
                          color: "var(--sea-light)",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "0.65rem",
                          letterSpacing: "0.3em",
                          marginBottom: 20,
                        }}
                      >
                        Join the Team
                      </div>
                      <h2>Start Your<br/><em>Application</em></h2>
                      <p>Chat with our recruitment team directly or fill in the form to express your interest. We respond to every application personally — usually within 48 hours.</p>
                      <a href="mailto:contact@bigcatsecurity.co.uk" className={styles['careers-email']}>contact@bigcatsecurity.co.uk</a>
                    </div>

                    <div className={`${styles['careers-form-wrap']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                      <h3>Express Your Interest</h3>
                      <div className={styles['careers-form-sub']}>All enquiries handled with complete confidentiality</div>
                      <form className={styles['careers-form']} onSubmit={handleApply}>
                        <div className={styles['careers-form-row']}>
                          <div className={styles['careers-fg']}>
                            <label>First Name</label>
                            <input type="text" placeholder="John" required/>
                          </div>
                          <div className={styles['careers-fg']}>
                            <label>Last Name</label>
                            <input type="text" placeholder="Smith" required/>
                          </div>
                        </div>
                        <div className={styles['careers-fg']}>
                          <label>Email Address</label>
                          <input type="email" placeholder="john@email.com" required/>
                        </div>
                        <div className={styles['careers-fg']}>
                          <label>Phone Number</label>
                          <input type="tel" placeholder="+44 7700 000000"/>
                        </div>
                        <div className={styles['careers-fg']}>
                          <label>Role of Interest</label>
                          <select defaultValue="">
                            <option value="" disabled>
                              Select a role
                            </option>
                            <option>Security Guard</option>
                            <option>Door Supervisor</option>
                            <option>Event Security Officer</option>
                            <option>Multiple Roles</option>
                          </select>
                        </div>
                        <div className={styles['careers-fg']}>
                          <label>SIA Licence Status</label>
                          <select defaultValue="">
                            <option value="" disabled>
                              Select your status
                            </option>
                            <option>I hold a valid SIA licence</option>
                            <option>My SIA licence has expired</option>
                            <option>I am currently training</option>
                            <option>I do not hold an SIA licence yet</option>
                          </select>
                        </div>
                        <div className={styles['careers-fg']}>
                          <label>Tell Us About Yourself</label>
                          <textarea placeholder="Brief background, relevant experience, why you want to join Big Cat Security..."></textarea>
                        </div>
                        <button type="submit" className={styles['careers-submit']}>Send Application →</button>
                      </form>
                    </div>

                  </div>
                </section>

                <SiteFooter footer={content.footer} />
    </div>
  );
}
