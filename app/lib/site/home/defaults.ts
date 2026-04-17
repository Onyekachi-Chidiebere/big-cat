import type { HomeContent } from "./types";

export const HOME_PAGE_SLUG = "home";

export const HOME_DEFAULTS: HomeContent = {
  announce: {
    html:
      '📞 Mon–Fri: 9am–6pm &nbsp;|&nbsp; Sat–Sun: 10am–5pm &nbsp;|&nbsp; <strong>+44 (0)7722 143162</strong> &nbsp;<a href="#contact" style="color:var(--sea-light);margin-left:8px">Get a Free Quote →</a>',
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
    bgImageUrl: "",
    readoutLines: ["TARGET ACQUIRED", "SIA LIC: ACTIVE", "THREAT LVL: LOW"],
    eyebrow: "SIA Licensed · Est. 2022 · UK Registered",
    classified: "System Online · Assets Protected · Threat Neutralised",
    titleLead: "Your Reliable",
    titleStrong: "Security Partner.",
    sub:
      "We offer specialised and reliable SIA security staffing services across the UK — professional, trusted, and always compliant.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Our Services",
    stats: [
      { valueHtml: "50<em>+</em>", label: "Events Secured" },
      { valueHtml: "3<em>+</em>", label: "Years in Service" },
      { valueHtml: "24<em>/7</em>", label: "SIA Licensed" },
    ],
    scrollLabel: "Scroll",
  },
  trust: {
    items: [
      "SIA Licensed & Approved",
      "Fully Vetted & DBS Checked",
      "50+ Events Successfully Secured",
      "Comprehensive Insurance & Full Legal Compliance",
      "Featured in TimeOut, Shortlist & More",
    ],
  },
  wwd: {
    eyebrow: "What We Do",
    titleLine1: "Security with",
    titleEmphasis: "World-Leading Technology",
    intro:
      "We deliver intelligent security solutions powered by world-class technology and expertise, helping to create a safer world for you.",
    cards: [
      {
        num: "01",
        tag: "Manned Guarding",
        title: "Security Guards",
        body:
          "At Big Cat Security Ltd, we provide highly trusted and experienced security guards and door supervisors to protect business environments.",
      },
      {
        num: "02",
        tag: "Events",
        title: "Event Security",
        body:
          "We provide expert event security staff who ensure smooth control across events of varying scales and focus.",
      },
      {
        num: "03",
        tag: "Licensed Premises",
        title: "Door Supervisors",
        body:
          "At the core of our service are professional SIA door supervisors and rigorously trained personnel.",
      },
    ],
  },
  purpose: {
    eyebrow: "Big Cat Security Ltd",
    titleLine1: "Delivering Security",
    titleEmphasis: "With a Purpose",
    paragraphs: [
      "Our safety requires a specialist partner with proven expertise and the resources to respond to any challenge. When security matters most, businesses across London rely on Big Cat Security Ltd.",
      "From real estate and landmark buildings to critical infrastructure, we have the experience and capacity to deliver complete protection.",
    ],
    tags: [
      "Hotels & Theatres",
      "High-End Events",
      "Late Bars & Restaurants",
      "Receptions & Workspaces",
      "Overnight Asset Protection",
      "Film Sets & Music Videos",
    ],
    items: [
      {
        title: "Security Monitoring",
        body:
          "Complete security solutions for 24/7 surveillance — CCTV integration, access control, and real-time monitoring of your premises.",
      },
      {
        title: "Security Guarding",
        body:
          "Providing specialist guarding services for offices, buildings, warehouses, retail environments, and shared workspaces across London.",
      },
      {
        title: "Security Consultancy",
        body:
          "Our consultants highlight any risks or threats to your security and provide practical solutions tailored to your specific needs.",
      },
      {
        title: "Retail Security & Asset Protection",
        body:
          "Reducing shrinkage, deterring theft, and protecting high-value assets across retail and commercial environments.",
      },
    ],
  },
  servicesIntro: {
    eyebrow: "What We Do",
    titleLead: "Our",
    titleRest: "Services",
    body:
      "We deliver intelligent security solutions powered by world-class technology and expertise — from manned guarding and door supervision to event security and threat intelligence, helping to create a safer world for you.",
    cta: "Discuss requirements",
  },
  servicesCards: [
    {
      imageUrl: "/images/home/svc-1.jpg",
      ghost: "01",
      metaLine: "01 / 04",
      category: "Executive & VIP",
      title: "Close Protection",
      body:
        "Highly trained protection officers for executives, principals, and dignitaries — operating with total discretion at home or abroad.",
      ctaLabel: "Enquire →",
      href: "/security-guards",
    },
    {
      imageUrl: "/images/home/svc-2.jpg",
      ghost: "02",
      metaLine: "02 / 04",
      category: "Events",
      title: "Event Security",
      body:
        "We provide expert event security staff who ensure smooth control across events of varying scales and focus — from private functions to large public gatherings.",
      ctaLabel: "Enquire →",
      href: "/event-security",
    },
    {
      imageUrl: "/images/home/svc-3.jpg",
      ghost: "03",
      metaLine: "03 / 04",
      category: "Licensed Premises",
      title: "Door Supervisors",
      body:
        "At the core of our service are professional SIA door supervisors and rigorously trained personnel — managing entry, body and bag searches, and crowd control.",
      ctaLabel: "Enquire →",
      href: "/door-supervisors",
    },
    {
      imageUrl: "/images/home/svc-4.jpg",
      ghost: "04",
      metaLine: "04 / 04",
      category: "Intelligence",
      title: "Threat Intelligence",
      body:
        "Intelligence-led security decisions to keep you ahead of risk — providing actionable threat assessments and informed protection strategies for your environment.",
      ctaLabel: "Enquire →",
      href: "/threat-intelligence",
    },
  ],
  about: {
    imageUrl: "/images/home/about.jpg",
    badgeYear: "2022",
    badgeLine1: "Est. in",
    badgeLine2: "London",
    eyebrow: "Top-Tier SIA Security Services",
    titleLead: "The UK's Trusted",
    titleRest: "SIA Security Provider",
    lede:
      "At Big Cat Security Ltd, our mission is to safeguard people, property, and events with professionalism and integrity — delivering trusted, SIA-licensed security solutions across London and the UK since 2022.",
    body:
      "We are officially licensed by the Security Industry Authority (SIA), ensuring all operations meet the highest legal and professional standards. Every member of our team is fully vetted, certified, and SIA-licensed — giving you confidence that your safety, property, and reputation are in trusted hands. What sets us apart: all staff are SIA-licensed without exception, with a proven track record of over 50 events successfully secured in just 3 years, dedicated mobile patrol management, and comprehensive insurance and full legal compliance.",
    stats: [
      { valueHtml: "50<em>+</em>", label: "Events Secured" },
      { valueHtml: "3<em>+</em>", label: "Years in Service" },
      { valueHtml: "24<em>/7</em>", label: "Always Available" },
    ],
  },
  ctaStrip: {
    eyebrow: "Speak to Our Team",
    titleLine1: "Need Expert",
    titleLine2: "Security Services?",
    body:
      "Call us Monday–Friday 9am–6pm, Saturday–Sunday 10am–5pm. All enquiries handled with complete confidentiality and professionalism.",
    phone: "+44 (0)7722 143162",
    phoneHref: "#contact",
  },
  contact: {
    eyebrow: "Get in Touch",
    titleLead: "Let's Talk",
    titleRest: "Security",
    intro:
      "All enquiries are treated with complete confidentiality. Passionate — Dedicated — Professional.",
    phone: "+44 (0)7722 143162",
    email: "contact@bigcatsecurity.co.uk",
    address: "4 Radcot Point, Inglemere Road, London SE23 2AZ",
    hours: "Mon–Fri: 9am–6pm · Sat–Sun: 10am–5pm",
    formNameLabel: "Full Name",
    formNamePlaceholder: "John Smith",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "john@company.com",
    formPhoneLabel: "Phone Number",
    formPhonePlaceholder: "+44 7700 000000",
    formServiceLabel: "Service Required",
    formServicePlaceholder: "Select a service",
    formServiceOptions: [
      "Security Guards / Manned Guarding",
      "Event Security",
      "Door Supervisors",
      "Threat Intelligence",
      "Multiple Services",
    ],
    formMessageLabel: "Tell Us About Your Needs",
    formMessagePlaceholder:
      "Describe your situation, location, and any specific requirements...",
    submitLabel: "Send Enquiry →",
    formNote: "We respond within 60 minutes",
  },
  footer: {
    logoUrl: "/logo.png",
    logoAlt: "Big Cat Security Ltd",
    copyright: "© 2022–2026 Big Cat Security Ltd. All Rights Reserved.",
    line: "SIA Licensed · Reg. No. 16568339 · 4 Radcot Point, London SE23 2AZ",
    signal: "System Active · UK Coverage",
    facebookUrl: "https://facebook.com/bigcatsecurity",
    instagramUrl: "https://instagram.com/bigcatsecurity",
    linkedinUrl: "https://linkedin.com/company/bigcatsecurity",
    linkServices: "/#services",
    linkAbout: "/about",
    linkContact: "/contact",
  },
};
