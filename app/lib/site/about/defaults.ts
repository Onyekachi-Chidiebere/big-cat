import type { AboutContent } from "./types";

export const ABOUT_PAGE_SLUG = "about";

export const ABOUT_DEFAULTS: AboutContent = {
  announce: {
    html:
      '📞 Mon–Fri: 9am–6pm &nbsp;|&nbsp; Sat–Sun: 10am–5pm &nbsp;|&nbsp; <strong>+44 (0)7722 143162</strong> &nbsp;<a href="/#contact" style="color:var(--sea-light);margin-left:8px">Get a Free Quote →</a>',
  },
  nav: {
    floatingCta: "Get a Quote",
    logoUrl: "/logo.png",
    logoAlt: "Big Cat Security Ltd",
    phone: "0800 244 228",
    phoneHref: "tel:+448002440000",
    quoteCta: "Get a Quote",
  },
  hero: {
    imageUrl: "/images/about/img-1.jpg",
    imageAlt: "Big Cat Security Officer on duty",
    captionName: "Tochu Uba-Chinaka",
    captionTitle: "Director — Big Cat Security Ltd",
    label: "Who We Are",
    titleLead: "Premier Provider",
    titleStrongHtml: "of SIA Security<br />Solutions",
    desc:
      "Big Cat Security Ltd is an SIA-licensed security provider and Social Enterprise delivering specialist services to safeguard both people and property — improving lives, strengthening communities, and protecting what matters most.",
    regLine: "Company No. 16568339 &nbsp;·&nbsp; SIA Licensed &nbsp;·&nbsp; Est. 2022",
    primaryCta: "Work With Us",
    primaryHref: "/#contact",
    secondaryCta: "Our Services",
    secondaryHref: "/what-we-do",
    statFloatNHtml: "5.0<em>★</em>",
    statFloatLabel: "Trusted by our clients",
  },
  statsStrip: {
    items: [
      { valueHtml: "85<em>+</em>", label: "Security Officers" },
      { valueHtml: "25<em>+</em>", label: "Security Clients" },
      { valueHtml: "105<em>+</em>", label: "Monitored Businesses" },
    ],
  },
  story: {
    eyebrow: "The UK's Leading Choice for SIA Security Services",
    titleHtml: "Security with<br /><em>Impact</em>",
    paragraphs: [
      "Big Cat Security Ltd, registered under company number <strong>16568339</strong>, is an SIA-licensed security provider delivering specialist services to safeguard both people and property. As a <strong>Social Enterprise</strong>, we are equally dedicated to creating positive impact — improving lives, strengthening communities, and protecting what matters most.",
      "We understand how essential effective security guarding is to your business. Committed to safeguarding the security, safety, and wellbeing of our clients' people and property, we operate to the highest standards — with a strong focus on customer care, brand protection, and safety.",
      "As a fully SIA-accredited company, we proudly support clients across diverse industries, from banking, legal, and professional services to public venues and education.",
    ],
    quoteText:
      "Security with impact — that's what Big Cat Security Ltd stands for. We exist to protect people and property while improving lives and communities, always doing what's right.",
    quoteAttr: "Tochu Uba-Chinaka — Director, Big Cat Security Ltd",
    badgeLine: "Official Social Enterprise &nbsp;·&nbsp; SIA Accredited &nbsp;·&nbsp; UK Registered",
    imageUrl: "/images/about/img-2.jpg",
    imageAlt: "Big Cat Security team at event",
    imageCaption: "SIA Event Security — London",
    services: [
      {
        title: "SIA Security Guards",
        body:
          "Security for shared workspaces, business centres, university campuses, retail environments, and commercial premises across London.",
      },
      {
        title: "SIA Event Security",
        body:
          "Keeping international and domestic guests, clients, and businesses safe across events of every scale — from private functions to public gatherings.",
      },
      {
        title: "SIA Door Supervisors",
        body:
          "Delivering professional SIA-certified door supervisors, fully trained in entry management, body and bag searches, and crowd control.",
      },
    ],
  },
  values: {
    eyebrow: "What We Stand For",
    titleHtml: "Our<br /><em>Values</em>",
    intro:
      "We are a fully SIA-accredited company committed to the highest professional standards. Every member of our security team is vetted, licensed, and trained to deliver excellence — protecting your people, property, and reputation at all times.",
    cards: [
      {
        num: "01",
        title: "Professionalism",
        body:
          "All staff are fully SIA-licensed security professionals without exception — highly trained, experienced, and equipped to handle any situation with composure and authority.",
      },
      {
        num: "02",
        title: "Reliability",
        body:
          "Over 50 events successfully secured in 3 years, with a dedicated mobile patrol management team and comprehensive insurance for complete peace of mind.",
      },
      {
        num: "03",
        title: "Community Impact",
        body:
          "As the only major social enterprise in our industry, we exist to protect people and property while improving lives and communities — always doing what's right.",
      },
    ],
  },
  expertise: {
    eyebrow: "Broad Industry Expertise",
    titleHtml: "Security for<br />London &amp;<br /><em>Beyond</em>",
    paragraphs: [
      "Our fully trained SIA-licensed security guards, door staff, and supervisors have supported a wide range of day-to-day operations — from bar entry and building security to theatres, large events, and pop-up product launches.",
      "We understand that every client environment is unique, which is why we tailor every deployment to your specific operational and security needs.",
    ],
    tags: [
      "Banking & Legal",
      "Professional Services",
      "Public Venues",
      "Education",
      "Hotels & Theatres",
      "Bars & Restaurants",
      "Events & Festivals",
      "Pop-up Launches",
      "Retail",
      "Warehousing",
    ],
    items: [
      {
        title: "Bar Entry & Venue Control",
        body:
          "Expert door supervision and crowd management for licensed premises, late bars, restaurants, and entertainment venues.",
      },
      {
        title: "Building & Campus Security",
        body:
          "Manned guarding for offices, business centres, university campuses, and shared workspaces across London and beyond.",
      },
      {
        title: "Theatre & Large Event Security",
        body:
          "Comprehensive event security for theatres, concert venues, film sets, music videos, and high-end public events.",
      },
      {
        title: "Overnight & Asset Protection",
        body:
          "24/7 overnight patrols, CCTV monitoring, and asset protection services for retail, construction, and commercial sites.",
      },
    ],
  },
  directorCta: {
    imageUrl: "/images/about/img-3.png",
    imageAlt: "Big Cat Security Ltd",
    titleHtml: "Ready to Work<br />With <em>Us?</em>",
    paragraphs: [
      "Whether you need a single security officer or a full team for a major event, Big Cat Security Ltd delivers professional, reliable, and fully SIA-licensed security solutions across London and the UK.",
      "Call us Monday–Friday 9am–6pm, Saturday–Sunday 10am–5pm. All enquiries are handled with complete confidentiality.",
    ],
    primaryCta: "Get a Quote",
    primaryHref: "/#contact",
    secondaryCta: "+44 (0)7722 143162",
    secondaryHref: "tel:+447722143162",
    ratingNHtml: "5.0<em>/5</em>",
    ratingLabel: "Trusted by millions of customers",
    contactRows: [
      {
        label: "Address",
        valueHtml:
          "4 Radcot Point, Inglemere Road,<br/>London SE23 2AZ, UK",
      },
      {
        label: "Email",
        valueHtml:
          '<a href="mailto:contact@bigcatsecurity.co.uk">contact@bigcatsecurity.co.uk</a>',
      },
      {
        label: "Phone",
        valueHtml: '<a href="tel:+447722143162">+44 (0)7722 143162</a>',
      },
      {
        label: "Hours",
        valueHtml: "Mon–Fri: 9am–6pm&nbsp;·&nbsp;Sat–Sun: 10am–5pm",
      },
      {
        label: "Reg. No.",
        valueHtml: "16568339 &nbsp;·&nbsp; SIA Licensed",
      },
    ],
  },
  footer: {
    logoUrl: "/logo.png",
    logoAlt: "Big Cat Security Ltd",
    copyright: "© 2022–2026 Big Cat Security Ltd. All Rights Reserved.",
    facebookUrl: "https://facebook.com/bigcatsecurity",
    instagramUrl: "https://instagram.com/bigcatsecurity",
    linkedinUrl: "https://linkedin.com/company/bigcatsecurity",
    linkServices: "#services",
    linkAbout: "#about",
    linkContact: "#contact",
    bottomLeft:
      "SIA Licensed · Reg. No. 16568339 · 4 Radcot Point, London SE23 2AZ",
    signalLine: "System Active · UK Coverage",
  },
};
