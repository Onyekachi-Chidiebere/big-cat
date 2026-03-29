import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { SecurityGuardsContent, SecurityGuardsMain } from "./types";

export const SECURITY_GUARDS_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/security-guards", label: "Security Guards", active: true },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true },
  ],
};

export const SECURITY_GUARDS_MAIN_DEFAULT: SecurityGuardsMain = {
  hero: {
    readout: "SIA: LICENSED\nTYPE: MANNED GUARDING\nCOVER: LONDON & UK",
    label: "Manned Guarding",
    h1Em: "Trusted, Trained",
    h1StrongLine1: "Security",
    h1StrongLine2: "Guards",
    sub:
      "At Big Cat Security Ltd, we deploy highly trusted and experienced security guards, door supervisors, and ground teams — safeguarding offices, buildings, warehouses, and shared workspaces across London and the surrounding areas.",
    primaryCta: { href: "/#contact", label: "Recruit a Guard" },
    secondaryCta: { href: "#sg-services", label: "Our Services" },
    statusHi: "SIA Licensed",
    statusParts: ["Fully Vetted", "London & UK"],
    imageMainSrc: "/images/security-guards/img-1.jpg",
    imageMainAlt: "Security Officer on duty at large event",
    imageSm: [
      {
        src: "/images/security-guards/img-2.jpg",
        alt: "Security Guards at building entrance",
      },
      {
        src: "/images/security-guards/img-3.jpg",
        alt: "Door Supervisor at venue",
      },
    ],
    statN: "50",
    statNEm: "+",
    statL: "Events Secured",
  },
  introStrip: [
    {
      num: "01",
      title: "Professional SIA Security",
      text: "SIA-licensed officers combining trusted services with genuine social value",
    },
    {
      num: "02",
      title: "Mobile Security",
      text: "Anticipating risks and responding decisively to every incident, minor or critical",
    },
    {
      num: "03",
      title: "Close Protection",
      text: "CPOs safeguarding clients with proactive risk assessment and discreet surveillance",
    },
    {
      num: "04",
      title: "Front of House",
      text: "Professional, welcoming entry management that reflects your organisation's standard",
    },
  ],
  overview: {
    eyebrow: "Recruit Expert SIA Security Guards Today",
    h2Line1: "Trusted SIA-",
    h2Em: "Certified",
    h2Line2: "Security",
    paragraphs: [
      "As communities grow, so does the need for strong internal and external security to protect both people and property. At Big Cat Security Ltd, we meet this need by deploying highly trusted and experienced security guards — safeguarding offices, buildings, warehouses, and shared workspaces across London.",
      "At Big Cat Security Ltd, we combine trusted security services with genuine social value. As a leading social enterprise in our sector, we are committed to making a real difference and doing the right thing for all.",
    ],
    creds: [
      "Fully SIA-Certified and Licensed Security Professionals",
      "Experienced Team with a Proven Track Record",
      "Efficiently Managed Security Operations",
      "Comprehensive Insurance & Full Legal Compliance",
      "Featured in TimeOut, Shortlist & Leading Publications",
    ],
    imageSrc: "/images/security-guards/img-4.jpg",
    imageAlt: "SIA Security Officer with radio",
    imageCap: "SIA-licensed officer — manned guarding deployment, London",
    quote:
      '"Our skilled personnel combine professional training with broad practical experience gained from working in leading industries and business settings."',
  },
  services: {
    eyebrow: "Professional SIA Security Guard Services",
    h2Line1: "What We",
    h2Em: "Offer",
    intro:
      "Our skilled security professionals are trained across multiple disciplines — from static guarding and access control to mobile patrols, event security, close protection, and front-of-house management. Every deployment is tailored to your specific environment and risk profile.",
    cards: [
      {
        n: "01",
        title: "Professional SIA Security",
        body:
          "We combine trusted security services with genuine social value. As the leading social enterprise in our sector, we deploy SIA-licensed officers committed to making a real difference — protecting your premises while upholding the highest professional standards.",
        ctaHref: "/#contact",
        ctaLabel: "Enquire Now",
      },
      {
        n: "02",
        title: "Mobile Security",
        body:
          "We combine knowledge, training, and experience to anticipate risks and respond decisively — whether it's a minor incident or a critical breach. Our mobile teams cover multiple sites, conducting regular patrols and maintaining a visible deterrent presence.",
        ctaHref: "/#contact",
        ctaLabel: "Enquire Now",
      },
      {
        n: "03",
        title: "Close Protection",
        body:
          "Our Close Protection Officers (CPOs) safeguard clients against unwanted attention and potential harm — combining proactive risk assessment with discreet surveillance. Deployed for executives, VIPs, and high-profile individuals requiring personal protection.",
        ctaHref: "/#contact",
        ctaLabel: "Enquire Now",
      },
      {
        n: "04",
        title: "Front of House Security",
        body:
          "The entrance is both the first and last impression visitors have of your organisation. Our front-of-house officers ensure entry areas are safe, professional, and welcoming — delivering outstanding guest relations alongside rigorous access control.",
        ctaHref: "/#contact",
        ctaLabel: "Enquire Now",
      },
    ],
  },
  ops: {
    eyebrow: "Day-to-Day Operations",
    h2Line1: "What Our",
    h2Line2: "Guards",
    h2Em: "Do Daily",
    p:
      "Our security personnel are deployed across a wide range of environments and operational settings — each trained to perform consistently and professionally, regardless of the assignment.",
    primaryCta: { href: "/#contact", label: "Get a Free Quote" },
    secondaryCta: { href: "/what-we-do", label: "All Services" },
    items: [
      {
        title: "Shared Workspaces & Business Centres",
        body:
          "Providing security for co-working spaces, university campuses, and professional business environments across London.",
      },
      {
        title: "Shopping Centres, Hotels & Theatres",
        body:
          "Door supervisor and guard deployments for high-footfall retail and hospitality environments, ensuring guest safety and loss prevention.",
      },
      {
        title: "Overnight & Construction Security",
        body:
          "Round-the-clock overnight security for unoccupied commercial buildings and construction sites — protecting assets and deterring trespass.",
      },
      {
        title: "Site Access & Entry Control",
        body:
          "Managing and monitoring site access points, verifying credentials, and maintaining a secure, controlled entry environment.",
      },
      {
        title: "Foot Patrols & Guest Relations",
        body:
          "Conducting routine foot patrols to maintain visible deterrence, while delivering professional guest relations and customer service at all times.",
      },
    ],
  },
  other: {
    eyebrow: "Explore Our Services",
    h2Line1: "More Ways We",
    h2Em: "Protect You",
    intro:
      "Beyond manned guarding, Big Cat Security Ltd offers a full suite of SIA-licensed security services across London and the UK.",
    cards: [
      {
        n: "01",
        title: "Event Security",
        body:
          "Expert event security teams for public gatherings, private functions, film sets and music events.",
        href: "/#contact",
      },
      {
        n: "02",
        title: "Door Supervisors",
        body:
          "SIA-licensed door supervisors for licensed premises, bars, restaurants, hotels and entertainment venues.",
        href: "/#contact",
      },
      {
        n: "03",
        title: "Threat Intelligence",
        body:
          "Intelligence-led security decisions and risk assessments to keep you ahead of emerging threats.",
        href: "/#contact",
      },
      {
        n: "04",
        title: "Retail & Asset Protection",
        body:
          "Reducing shrinkage, deterring theft, and protecting high-value assets across retail and commercial environments.",
        href: "/#contact",
      },
    ],
  },
  cta: {
    eyebrow: "Get Started Today",
    h2Line1: "Recruit a",
    h2Em: "Security Guard",
    body:
      "Whether you need one officer or a full team, we respond fast and deploy professionals you can trust. All guards are SIA-licensed, fully vetted, and operationally ready.",
    primaryCta: { href: "/#contact", label: "Request a Quote" },
    secondaryCta: { href: "tel:+447722143162", label: "+44 (0)7722 143162" },
  },
};

export const SECURITY_GUARDS_DEFAULTS: SecurityGuardsContent = {
  ...CHROME_AF_DEFAULTS,
  nav: SECURITY_GUARDS_NAV_DEFAULT,
  main: SECURITY_GUARDS_MAIN_DEFAULT,
};
