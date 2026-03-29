import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { EventSecurityContent, EventSecurityMain } from "./types";

export const EVENT_SECURITY_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/event-security", label: "Event Security", active: true },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true },
  ],
};

export const EVENT_SECURITY_MAIN_DEFAULT: EventSecurityMain = {
  hero: {
    bgImage: "/images/event-security/img-1.jpg",
    readout: "TYPE: EVENT SECURITY\nSIA: LICENSED & VETTED\nCOVERAGE: LONDON & UK",
    label: "Event Security",
    h1Em: "Setting the Standard",
    h1StrongLine1: "in Event",
    h1StrongLine2: "Security",
    sub:
      "As a premier full-service security provider, our professional event security teams have successfully managed events of all sizes and types — with guest enjoyment at the core of everything we do.",
    primaryCta: { href: "/#contact", label: "Book Event Security" },
    secondaryCta: { href: "#es-events", label: "Event Types" },
    statN: "50",
    statNEm: "+",
    statL: "Events Secured",
  },
  typesStrip: [
    { icon: "🎤", label: "Concerts" },
    { icon: "🏛", label: "Corporate" },
    { icon: "🎬", label: "Film & TV" },
    { icon: "🎵", label: "Album Launches" },
    { icon: "🏟", label: "Public Events" },
    { icon: "🍸", label: "Bars & Venues" },
  ],
  overview: {
    eyebrow: "Delivering Outstanding Event Security",
    h2Line1: "Secure.",
    h2Em: "Seamless.",
    h2Line2: "Unforgettable.",
    paragraphs: [
      "Our focus is on delivering secure and seamless events, with guest enjoyment at the core of everything we do. We assemble the right team tailored to your specific requirements, ensuring a seamless service from start to finish.",
      "All our security personnel are SIA-licensed, registered, and rigorously vetted — with credentials validated by the Security Industry Authority.",
      "While security needs and events may vary, we are fully trained to handle the vast majority with confidence. From festivals and concerts to intimate private screenings, our teams adapt to your environment.",
    ],
    caps: [
      "Crowd Management",
      "Access Control",
      "VIP Protection",
      "Emergency Response",
      "Bag Checks",
      "Conflict Resolution",
      "Crowd Flow",
      "Guest Relations",
    ],
    imageSrc: "/images/event-security/img-2.jpg",
    imageAlt: "Security team monitoring event via CCTV operations centre",
    imageCap: "SIA-licensed event security — CCTV & operations coordination",
    badgeStrong: "Licensed, Registered & Ready to Serve.",
    badgeRest:
      " Every officer is SIA-licensed, fully vetted, and validated by the Security Industry Authority.",
  },
  events: {
    eyebrow: "Events We Secure",
    h2Line1: "Every Type",
    h2Line2: "of",
    h2Em: "Event",
    intro:
      "From high-energy public festivals to exclusive private screenings, our specialist teams are trained and equipped for every environment. We tailor each deployment to the unique risk profile of your event.",
    cards: [
      {
        n: "01",
        title: "Public Events",
        body:
          "We ensure public events run smoothly and safely by combining highly trained SIA-licensed staff with proven crowd management expertise. From entry control and bag checks to crowd flow monitoring and emergency response — festivals, concerts, sporting events, and community gatherings.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
      {
        n: "02",
        title: "Corporate Events",
        body:
          "Discreet, professional security tailored to the unique needs of corporate events. Our SIA-licensed staff ensure smooth access control, protect VIPs, monitor venues, and manage risks without disrupting the guest experience — conferences, product launches, shareholder meetings, and private functions.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
      {
        n: "03",
        title: "Film Screenings",
        body:
          "Professional security designed for film screenings, premieres, and private viewings. Our SIA-licensed staff manage access control, protect VIPs, monitor audiences, and ensure a safe and enjoyable experience — from red-carpet events to exclusive private screenings.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
      {
        n: "04",
        title: "Album Launch Parties",
        body:
          "Specialist security for album launch parties — ensuring artists, guests, and venues remain safe throughout. Our staff handle crowd management, access control, VIP protection, and emergency response while maintaining a professional yet welcoming atmosphere.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
      {
        n: "05",
        title: "Promotional Events",
        body:
          "Promotional events are all about impact — and we make sure the spotlight stays on your brand. Our experienced staff manage crowds, control access, and keep everything running smoothly. Product launches, pop-up activations, or high-street brand experiences — visible yet discreet.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
      {
        n: "06",
        title: "Restaurants, Bars & Music Venues",
        body:
          "SIA-licensed security staff with deep understanding of the hospitality and nightlife sector. From safe, welcoming restaurant entrances to managing the energy of busy late bars and live music venues — authority with approachability, every time.",
        ctaHref: "/#contact",
        ctaLabel: "Book for Your Event",
      },
    ],
  },
  licensed: {
    eyebrow: "Licensed, Registered & Ready",
    h2Line1: "Why Choose",
    h2Line2: "Big Cat",
    h2Em: "Security?",
    p:
      "To deliver the best results, we assemble the right team tailored to your specific requirements — ensuring a seamless service from start to finish. All personnel are SIA-licensed and rigorously vetted.",
    primaryCta: { href: "/#contact", label: "Book Now" },
    secondaryCta: { href: "/about", label: "About Us" },
    checks: [
      {
        title: "Fully SIA-Licensed Personnel",
        body:
          "Every officer holds a valid SIA licence, validated and registered with the Security Industry Authority — no exceptions.",
      },
      {
        title: "Tailored Team Assembly",
        body:
          "We build the right team for your specific event type, size, and risk profile — never a one-size-fits-all deployment.",
      },
      {
        title: "Proven Crowd Management Expertise",
        body:
          "Highly trained staff with hands-on experience across festivals, concerts, corporate events, and high-footfall public venues.",
      },
      {
        title: "Guest Experience at the Core",
        body:
          "Security that's firm when needed and warm when appropriate — protecting your guests while preserving the atmosphere you've created.",
      },
      {
        title: "Social Enterprise & Social Value",
        body:
          "As the leading social enterprise in UK security, choosing Big Cat creates positive impact beyond your event — in the communities we serve.",
      },
    ],
  },
  cta: {
    eyebrow: "Plan Your Event Security",
    h2Line1: "Book Your",
    h2Em: "Event Team",
    h2Line2: "",
    body:
      "Tell us about your event and we'll put together the perfect security team. We respond fast, deploy professionals, and make sure your event runs without incident.",
    primaryCta: { href: "/#contact", label: "Request a Quote" },
    secondaryCta: { href: "tel:+447722143162", label: "+44 (0)7722 143162" },
  },
};

export const EVENT_SECURITY_DEFAULTS: EventSecurityContent = {
  ...CHROME_AF_DEFAULTS,
  nav: EVENT_SECURITY_NAV_DEFAULT,
  main: EVENT_SECURITY_MAIN_DEFAULT,
};
