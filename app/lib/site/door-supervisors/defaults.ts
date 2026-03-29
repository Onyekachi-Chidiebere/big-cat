import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { DoorSupervisorsContent, DoorSupervisorsMain } from "./types";

export const DOOR_SUPERVISORS_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/door-supervisors", label: "Door Supervisors", active: true },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true },
  ],
};

export const DOOR_SUPERVISORS_MAIN_DEFAULT: DoorSupervisorsMain = {
  hero: {
    readout:
      "TYPE: DOOR SUPERVISION\nSIA: LICENSED & VETTED\nCOVER: 24/7 · 365",
    label: "Licensed Premises",
    h1Em: "Expert SIA",
    h1StrongLine1: "Door",
    h1StrongLine2: "Supervisors",
    sub:
      "With over three years of frontline experience, Big Cat Security Ltd has built a strong reputation for delivering professional, SIA-licensed door supervisors for festivals, theatres, shows, pop-ups, bars, and nightclubs — 24/7, 365 days a year.",
    primaryCta: { href: "/#contact", label: "Hire a Supervisor" },
    secondaryCta: { href: "#ds-venues", label: "Venue Types" },
    imageSrc: "/images/door-supervisors/img-1.jpg",
    imageAlt: "SIA Door Supervisor at venue entrance",
    readoutRight: "SECTOR: LICENSED PREMISES\nSTATUS: ON DUTY\nSIA: VERIFIED",
    cap: "SIA Door Supervisor — London venue entrance",
    badgeBig: "24/7",
    badgeLabel: "365 Days",
  },
  stats: {
    items: [
      { n: "3", nEm: "+ yrs", label: "Frontline Experience" },
      { n: "24", nEm: "/7", label: "365 Days Coverage" },
      { n: "50", nEm: "+", label: "Events Secured" },
      { n: "100", nEm: "%", label: "SIA Licensed Staff" },
    ],
  },
  overview: {
    eyebrow: "Reliable SIA-Licensed Door Supervisors",
    h2Line1: "Robust.",
    h2Em: "Adaptable.",
    h2Line2: "Trusted.",
    paragraphs: [
      "At Big Cat Security Ltd, we tailor our services to meet every client's door supervision needs. All our staff are fully SIA-licensed and trusted by long-term clients as well as high-profile events.",
      "With a dedicated roster of professional door supervisors, we provide reliable, on-demand security you can count on — whether it's a small bar night or a multi-stage festival.",
      "Security requirements vary widely across different events and environments, but we are proud to be fully trained and equipped to manage the vast majority with confidence. Every member of our security staff is fully registered, SIA-licensed, and rigorously vetted.",
    ],
    trustText:
      "All credentials validated by the Security Industry Authority — ensuring compliance, professionalism, and peace of mind at all times.",
    dutiesEyebrow: "Our Duties Include",
    duties: [
      {
        n: "01",
        title: "Entry Management & Searches",
        body: "Managing entry points and conducting thorough body and bag searches to ensure venue safety from the moment guests arrive.",
      },
      {
        n: "02",
        title: "Recording & Access Control",
        body: "Recording entries and supporting smooth, efficient access — maintaining accurate logs and ensuring only authorised individuals gain entry.",
      },
      {
        n: "03",
        title: "Preventing Unauthorised Entry",
        body: "Decisively preventing unauthorised individuals from entering the venue while maintaining a professional, welcoming atmosphere for legitimate guests.",
      },
      {
        n: "04",
        title: "Safe Environment Maintenance",
        body: "Maintaining a safe, secure environment for all attendees to enjoy — monitoring behaviour, managing conflict, and responding swiftly to incidents.",
      },
      {
        n: "05",
        title: "Stakeholder Liaison",
        body: "Liaising closely with the DPS, clients, promoters, and venue management to ensure seamless coordination throughout every event.",
      },
    ],
  },
  venues: {
    eyebrow: "Where We Operate",
    h2Line1: "Every",
    h2Em: "Venue Type",
    intro:
      "From high-energy nightclubs to intimate theatre productions, our door supervisors are trained, experienced, and equipped for every environment. We assemble the right team for your specific venue and risk profile.",
    cards: [
      {
        n: "01",
        title: "Bars & Nightclubs",
        body: "High-energy late-night environments demand confident, experienced door supervisors. Our staff manage queues, conduct searches, handle conflict resolution, and maintain a welcoming but safe door policy throughout the night.",
        ctaHref: "/#contact",
      },
      {
        n: "02",
        title: "Festivals & Concerts",
        body: "Large-scale events with thousands of attendees require a coordinated, experienced security presence. Our door supervisors manage access points, crowd flow, and emergency response across festival and concert environments.",
        ctaHref: "/#contact",
      },
      {
        n: "03",
        title: "Theatres & Shows",
        body: "A more formal environment requiring a professional, discreet security presence. Our supervisors ensure smooth entry, manage audience flow, and maintain safety without disrupting the guest experience.",
        ctaHref: "/#contact",
      },
      {
        n: "04",
        title: "Hotels & Hospitality",
        body: "Hotels and hospitality venues require a balance of authority and warmth. Our supervisors provide discreet, professional security that protects guests and staff while maintaining the welcoming environment your brand demands.",
        ctaHref: "/#contact",
      },
      {
        n: "05",
        title: "Pop-Ups & Activations",
        body: "Pop-up events and brand activations move fast and attract unpredictable crowds. Our supervisors adapt quickly, manage access, and keep your activation safe, smooth, and on-brand from start to finish.",
        ctaHref: "/#contact",
      },
      {
        n: "06",
        title: "Corporate & Private Events",
        body: "Discreet, professional supervision for corporate dinners, award ceremonies, private parties, and VIP functions — protecting guests and property while preserving the exclusive atmosphere of your event.",
        ctaHref: "/#contact",
      },
    ],
  },
  why: {
    eyebrow: "Consistent, Professional SIA Door Supervisors",
    h2Line1: "What Sets",
    h2Mid: "Us",
    h2Em: "Apart",
    intro:
      "We assemble the right team for each client — tailoring our services to meet your unique needs from start to finish. Every officer is SIA-licensed, registered, and rigorously vetted.",
    primaryCta: { href: "/#contact", label: "Book Now" },
    secondaryCta: { href: "/about", label: "About Us" },
    items: [
      {
        title: "All-Year Reliability",
        body: "We provide on-demand, year-round door supervision — 24/7, 365 days. When you need us, we're there.",
      },
      {
        title: "Tailored Team Assembly",
        body: "We build the right team for your specific venue type, event size, and risk profile — never a generic deployment.",
      },
      {
        title: "Long-Term Client Trust",
        body: "Trusted by long-term clients and high-profile events alike — our reputation is built on consistent, professional delivery.",
      },
      {
        title: "Authority with Approachability",
        body: "Our supervisors combine firm authority with genuine approachability — protecting your venue while creating a welcoming atmosphere.",
      },
      {
        title: "Social Enterprise Values",
        body: "As the leading social enterprise in UK security, every deployment creates positive impact — for your guests and the communities we serve.",
      },
    ],
  },
  cta: {
    eyebrow: "Hire SIA Door Supervisors",
    h2Line1: "Book Your",
    h2Em: "Team Today",
    h2Line2: "",
    body: "Whether you need a single supervisor for a quiet evening or a full team for a major event, we respond fast and deploy professionals you can trust — 24/7, 365 days a year.",
    primaryCta: { href: "/#contact", label: "Request a Quote" },
    secondaryCta: { href: "tel:+447722143162", label: "+44 (0)7722 143162" },
  },
};

export const DOOR_SUPERVISORS_DEFAULTS: DoorSupervisorsContent = {
  ...CHROME_AF_DEFAULTS,
  nav: DOOR_SUPERVISORS_NAV_DEFAULT,
  main: DOOR_SUPERVISORS_MAIN_DEFAULT,
};
