"use client";
import "../site.css";
import styles from "../styles.module.css";
import { WhatWeDoEffects } from "../WhatWeDoEffects";
import { SiteAnnounce, SiteFooter } from "../components/SiteChrome";
import type { SiteAfContent } from "@/app/lib/site/chrome/types";

export function WhatWeDoPageClient({
  content,
}: {
  content: SiteAfContent;
}) {

  return (
    <div>
      <WhatWeDoEffects />
      <div className={styles['cursor']} id="cur"></div>
      <div className={styles['cursor-ring']} id="curR"></div>
      <div className={styles['cursor-pulse']} id="curPulse"></div>
      <div className={styles['cursor-tl']} id="curTL"></div>
      <div className={styles['cursor-tr']} id="curTR"></div>
      <div className={styles['cursor-bl']} id="curBL"></div>
      <div className={styles['cursor-br']} id="curBR"></div>
      <div id="progress-bar"></div>
      <a href="/#contact" className={styles['floating-cta']} id="float-cta">
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
          <a href="/#about">About</a>
          <a href="/work-for-us" className={styles['nav-cta']}>Work for Us</a>
        </nav>
        <div className={styles['nav-right']}>
          <a href="tel:+448002440000" className={styles['nav-phone']}>0800 244 228</a>
          <a href="/#contact" className={styles['btn-pill']}>Get a Quote</a>
        </div>
        <button id="menu-toggle" aria-label="Menu">☰</button>
      </header>



      {/* <!-- HERO — SPLIT LAYOUT --> */}
      <section className={styles['wwd-hero']}>
        {/* <!-- LEFT: Editorial dark panel --> */}
        <div className={styles['wwd-hero-left']}>
          <div className={styles['hero-corner-tl']}></div>
          <div className={styles['wwd-hero-label']} id="hero-label">What We Do</div>
          <h1 className={styles['wwd-hero-h1']} id="hero-h1">
            <em>Securing What</em>
            <strong>Matters Most</strong>
          </h1>
          <p className={styles['wwd-hero-p']} id="hero-p">Our mission is to safeguard people, property, and events with professionalism and integrity — delivering trusted SIA security solutions across the UK since 2022.</p>
          <div className={styles['wwd-hero-actions']} id="hero-actions">
            <a href="/#contact" className={styles['btn-pill-fill']}>Request a Quote</a>
            <a href="#wwd-services" className={styles['btn-pill-dark']}>Our Services</a>
          </div>
          <div className={styles['wwd-hero-status']} id="hero-status">
            <div className={styles['wwd-status-dot']}></div>
            <span>SIA Licensed</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span>Est. 2022</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span id="pg-clock">--:--:--</span>
          </div>
        </div>

        {/* <!-- RIGHT: Image panel --> */}
        <div className={styles['wwd-hero-right']}>
          <div className={styles['wwd-hero-img-main']}>
            <img src="/images/what-we-do/img-1.jpg" alt="Security Operations Centre"/>
          </div>
          <div className={styles['wwd-hero-scan']}></div>
          <div className={styles['wwd-hero-reticle']}>
            <div className={styles['wwd-hr-tl']}></div><div className={styles['wwd-hr-tr']}></div>
            <div className={styles['wwd-hr-bl']}></div><div className={styles['wwd-hr-br']}></div>
          </div>
          {/* <!-- Floating stat --> */}
          <div className={styles['wwd-hero-card']} id="hero-card">
            <div className={styles['wwd-hero-card-n']}>50<em>+</em></div>
            <div className={styles['wwd-hero-card-l']}>Events Secured</div>
          </div>
        </div>
      </section>

      {/* <!-- SERVICE INTRO STRIP --> */}
      <div className={styles['svc-intro-strip']}>
        <div className={styles['svc-intro-inner']}>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d1']}`} id="si1">
            <div className={styles['svc-intro-num']}>01</div>
            <div>
              <div className={styles['svc-intro-title']}>Security Guards</div>
              <div className={styles['svc-intro-sub']}>SIA Certified &amp; Licensed</div>
            </div>
          </div>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d2']}`} id="si2">
            <div className={styles['svc-intro-num']}>02</div>
            <div>
              <div className={styles['svc-intro-title']}>Event Security</div>
              <div className={styles['svc-intro-sub']}>Reliable security for your events</div>
            </div>
          </div>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d3']}`} id="si3">
            <div className={styles['svc-intro-num']}>03</div>
            <div>
              <div className={styles['svc-intro-title']}>Door Supervisors</div>
              <div className={styles['svc-intro-sub']}>Entry management &amp; searches</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- MAIN SERVICES --> */}
      <section className={styles['wwd-services']} id="wwd-services">
        <div className={styles['wwd-services-header']}>
          <div className={`${styles['wwd-sh-left']} ${styles['f-reveal']}`}>
            <div className={styles['eyebrow']}>Securing People &amp; Business Assets</div>
            <h2>Security with<br/><em>World-Leading</em><br/>Technology</h2>
            </div>
              <div className={`${styles['wwd-sh-right']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                <p>We deliver intelligent security solutions powered by world-class technology and expertise, helping to create a safer world for you.</p>
                <p>At Big Cat Security Ltd, we provide highly trusted and experienced security guards, door supervisors and event security teams across London and the UK.</p>
              </div>
          </div>

          <div className={styles['wwd-svc-cards']}>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']}`}>
              <div className={styles['wwd-svc-img']}><img src="/images/what-we-do/img-2.jpg" alt="Security Guards"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>01</div>
                <div className={styles['wwd-svc-cat']}>Manned Guarding</div>
                <h3>Security Guards</h3>
                <p>At Big Cat Security Ltd, we provide highly trusted and experienced security guards and door supervisors to protect business environments.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']} ${styles['f-d2']}`}>
              <div className={styles['wwd-svc-img']}><img src="/images/what-we-do/img-3.jpg" alt="Event Security"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>02</div>
                <div className={styles['wwd-svc-cat']}>Events &amp; Gatherings</div>
                <h3>Event Security</h3>
                <p>We provide expert event security staff who ensure smooth control across events of varying scales and focus, from private functions to large public gatherings.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']} ${styles['f-d3']}`}>
              <div className={styles['wwd-svc-img']}><img src="/images/what-we-do/img-4.jpg" alt="Door Supervisors"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>03</div>
                <div className={styles['wwd-svc-cat']}>Licensed Premises</div>
                <h3>Door Supervisors</h3>
                <p>At the core of our service are professional SIA door supervisors and rigorously trained personnel managing entry, body and bag searches, and crowd control.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
          </div>
      </section>

      {/* <!-- PURPOSE / DELIVERS --> */}
      <section className={styles['wwd-delivers']}>
        <div className={styles['wwd-delivers-inner']}>
          <div className={styles['wwd-dleft']}>
            <div className={`${styles['eyebrow']} ${styles['f-reveal']}`}>Big Cat Security Ltd</div>
            <h2 className={`${styles['f-reveal']} ${styles['f-d1']}`}>Delivering Security<br/><em>With a Purpose</em></h2>
            <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>Our safety requires a specialist partner with proven expertise and the resources to respond to any challenge. When security matters most, businesses across London rely on Big Cat Security Ltd.</p>
            <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>From real estate and landmark buildings to critical infrastructure, we have the experience and capacity to deliver complete protection. We also offer Retail security services and Asset protection.</p>
            <div className={`${styles['wwd-tags']} ${styles['f-reveal']} ${styles['f-d3']}`}>
              <span className={styles['wwd-tag']}>Hotels &amp; Theatres</span>
              <span className={styles['wwd-tag']}>High-End Events</span>
              <span className={styles['wwd-tag']}>Late Bars &amp; Restaurants</span>
              <span className={styles['wwd-tag']}>Receptions &amp; Workspaces</span>
              <span className={styles['wwd-tag']}>Overnight Asset Protection</span>
              <span className={styles['wwd-tag']}>Film Sets &amp; Music Videos</span>
            </div>
          </div>
          <div className={styles['wwd-dright']}>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d1']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Monitoring</h4>
                <p>Complete security solutions for 24/7 surveillance — CCTV integration, access control, and real-time monitoring of your premises.</p>
              </div>
            </div>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d2']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Guarding</h4>
                <p>Providing specialist guarding services for offices, buildings, warehouses, retail environments, and shared workspaces across London.</p>
              </div>
            </div>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d3']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Consultancy</h4>
                <p>Our consultants highlight any risks or threats to your security and provide practical solutions to deal with these.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- STATS --> */}
      <section className={styles['wwd-stats']}>
        <div className={styles['wwd-stats-grid']}>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d1']}`}>
            <div className={styles['wwd-stat-n']}>85<em>k+</em></div>
            <div className={styles['wwd-stat-l']}>Security Officers</div>
          </div>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d2']}`}>
            <div className={styles['wwd-stat-n']}>25<em>+</em></div>
            <div className={styles['wwd-stat-l']}>Security Clients</div>
          </div>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d3']}`}>
            <div className={styles['wwd-stat-n']}>105<em>+</em></div>
            <div className={styles['wwd-stat-l']}>Monitored Businesses</div>
          </div>
        </div>
      </section>

      {/* <!-- COMPANY STRATEGY --> */}
      <section className={styles['wwd-strategy']}>
        <div className={styles['wwd-strat-header']}>
          <div className={styles['f-reveal']}>
            <div className={styles['eyebrow']}>Company Strategy</div>
            <h2>We Protect<br/>More Than<br/><em>You Think</em></h2>
            </div>
              <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>At Big Cat Security Ltd, we deploy skilled and dependable security guards, door supervisors, and ground teams to ensure safety in offices, buildings, warehouses, and shared workspaces across London and the surrounding area.</p>
          </div>
          <div className={styles['wwd-strat-grid']}>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d1']}`}>
              <div className={styles['wwd-strat-n']}>01</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Service Excellence</h3>
              <p>Deliver consistent, high-quality security services by employing SIA-licensed, well-trained staff who embody professionalism, vigilance, and integrity.</p>
              <a href="/#contact" className={styles['wwd-strat-link']}>Learn More</a>
            </div>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d2']}`}>
              <div className={styles['wwd-strat-n']}>02</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Customer-Centric Approach</h3>
              <p>Build long-term client partnerships by tailoring security solutions for buildings, offices, warehouses, events, and shared workspaces, ensuring peace of mind and satisfaction.</p>
              <a href="/#about" className={styles['wwd-strat-link']}>Learn About Us</a>
            </div>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d3']}`}>
              <div className={styles['wwd-strat-n']}>03</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <h3>Innovation &amp; Technology</h3>
              <p>Leverage modern security technologies such as CCTV integration, access control systems, and real-time communication tools to enhance service delivery.</p>
              <a href="/#contact" className={styles['wwd-strat-link']}>Request a Quote</a>
            </div>
          </div>
      </section>

      {/* <!-- EXPERTS / CTA --> */}
      <section className={styles['wwd-experts']}>
        <div className={styles['wwd-experts-inner']}>
          <div className={`${styles['wwd-exp-left']} ${styles['f-reveal']}`}>
            <div className={styles['eyebrow']} style={{ color: "var(--sea-light)" }}>Speak to Our Experts</div>
            <h2>Ready to Get<br/><span>Protected?</span></h2>
            <p>Our team is available Monday–Friday 9am–6pm, Saturday–Sunday 10am–5pm. All enquiries handled with complete confidentiality and professionalism.</p>
            <a href="tel:+447722143162" className={styles['wwd-exp-phone']}>+44 (0)7722 143162</a>
          </div>
          <div className={`${styles['wwd-exp-right']} ${styles['f-reveal']} ${styles['f-d2']}`}>
            <div className={styles['wwd-newsletter']}>
              <h4>Stay Updated</h4>
              <p>Get the latest news, updates, and insights delivered straight to your inbox.</p>
              <div className={styles['wwd-nl-form']}>
                <input type="email" placeholder="Your email address"/>
                  <button type="button">Subscribe</button>
              </div>
            </div>
            {/* <a href="/#contact" className={styles['btn-pill-white']} style="align-self:flex-start">Request A Quote →</a> */}
          </div>
        </div>
      </section>

      <SiteFooter footer={content.footer} />
    </div>
  );
}
