import type { SiteAfContent } from "./types";

export const CHROME_AF_DEFAULTS: SiteAfContent = {
  announce: {
    html:
      '📞 Mon–Fri: 9am–6pm &nbsp;|&nbsp; Sat–Sun: 10am–5pm &nbsp;|&nbsp; <strong>+44 (0)7722 143162</strong> &nbsp;<a href="/#contact" style="color:var(--sea-light);margin-left:8px">Get a Free Quote →</a>',
  },
  footer: {
    logoUrl: "/logo.png",
    logoAlt: "Big Cat Security Ltd",
    copyright: "© 2022–2026 Big Cat Security Ltd. All Rights Reserved.",
    facebookUrl: "https://facebook.com/bigcatsecurity",
    instagramUrl: "https://instagram.com/bigcatsecurity",
    linkedinUrl: "https://linkedin.com/company/bigcatsecurity",
    linkServices: "/#services",
    linkAbout: "/about",
    linkContact: "/contact",
    bottomLeft:
      "SIA Licensed · Reg. No. 16568339 · 4 Radcot Point, London SE23 2AZ",
    signalLine: "System Active · UK Coverage",
    accred: {
      logos: [
        {
          src: "/SIA approved contractor.svg",
          alt: "SIA Approved Contractor",
        },
        {
          src: "/SIA Security Industry Authority.svg",
          alt: "SIA Security Industry Authority",
          small: true,
        },
      ],
    },
  },
};
