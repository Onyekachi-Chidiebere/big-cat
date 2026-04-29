"use client";

import { footerNavHref } from "@/app/lib/site/footerNavHref";
import styles from "../styles.module.css";

export function SiteAnnounce({ html }: { html: string }) {
  return (
    <div className={styles["announce-bar"]} id="announce-bar">
      <div
        className={styles["announce-text"]}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <button
        className={styles["announce-close"]}
        id="ann-close"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

type FooterProps = {
  footer: {
    logoUrl: string;
    logoAlt: string;
    copyright: string;
    facebookUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    linkServices: string;
    linkAbout: string;
    linkContact: string;
    bottomLeft: string;
    signalLine: string;
    accred: {
      logos: Array<{
        src: string;
        alt: string;
        small?: boolean;
      }>;
    };
  };
};

export function SiteFooter({ footer }: FooterProps) {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-inner"]}>
        <div className={styles["footer-logo"]}>
          <img src={footer.logoUrl} alt={footer.logoAlt} />
        </div>

        <div className={styles["footer-center"]}>
          <div className={styles["footer-social"]}>
            <a
              href={footer.facebookUrl}
              target="_blank"
              rel="noopener"
              className={styles["soc-btn"]}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1877F2" aria-hidden>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={footer.instagramUrl}
              target="_blank"
              rel="noopener"
              className={styles["soc-btn"]}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener"
              className={styles["soc-btn"]}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <div className={styles["footer-copy"]}>{footer.copyright}</div>
        </div>
        <div className={styles["footer-links"]}>
          <div className={styles["footer-links-inner"]}>
            <img

              src={footer.accred.logos[0].src}
              alt={footer.accred.logos[0].alt}
              className={styles["ti-sia-logo-sm"]}
            />
            {/* {footer.accred.logos.map((logo, idx) => (
              <img
                key={`${logo.src}-${idx}`}
                src={logo.src}
                alt={logo.alt}
                className={logo.small ? styles["ti-sia-logo"] : undefined}
              />
            ))} */}
          </div>
          <div className={styles["footer-links-inner"]}>
            <a href={footerNavHref(footer.linkServices)}>Services</a>
            <a href={footerNavHref(footer.linkAbout)}>About</a>
            <a href={footerNavHref(footer.linkContact)}>Contact</a>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-bottom-left"]}>{footer.bottomLeft}</div>
        <div className={styles["footer-signal"]}>
          <div className={styles["footer-signal-dot"]}></div>
          {footer.signalLine}
        </div>
      </div>
    </footer>
  );
}
