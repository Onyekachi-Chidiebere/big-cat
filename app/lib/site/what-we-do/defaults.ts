import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { WhatWeDoContent, WhatWeDoMain } from "./types";

export const WHAT_WE_DO_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do", active: true },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true },
  ],
};

export const WHAT_WE_DO_MAIN_DEFAULT: WhatWeDoMain = {
  hero: {
    label: "What We Do",
    h1Em: "Securing What",
    h1Strong: "Matters Most",
    p:
      "Our mission is to safeguard people, property, and events with professionalism and integrity — delivering trusted SIA security solutions across the UK since 2022.",
    primaryCta: { href: "/#contact", label: "Request a Quote" },
    secondaryCta: { href: "#wwd-services", label: "Our Services" },
    statusLeft: "SIA Licensed",
    statusMid: "Est. 2022",
    imageSrc: "/images/what-we-do/img-1.jpg",
    imageAlt: "Security Operations Centre",
    cardN: "50",
    cardNEm: "+",
    cardLabel: "Events Secured",
  },
  introStrip: [
    {
      num: "01",
      title: "Security Guards",
      sub: "SIA Certified & Licensed",
    },
    {
      num: "02",
      title: "Event Security",
      sub: "Reliable security for your events",
    },
    {
      num: "03",
      title: "Door Supervisors",
      sub: "Entry management & searches",
    },
  ],
  services: {
    eyebrow: "Securing People & Business Assets",
    h2Line1: "Security with",
    h2Em: "World-Leading",
    h2Line2: "Technology",
    rightPs: [
      "We deliver intelligent security solutions powered by world-class technology and expertise, helping to create a safer world for you.",
      "At Big Cat Security Ltd, we provide highly trusted and experienced security guards, door supervisors and event security teams across London and the UK.",
    ],
    cards: [
      {
        imageSrc: "/images/what-we-do/img-2.jpg",
        imageAlt: "Security Guards",
        n: "01",
        cat: "Manned Guarding",
        title: "Security Guards",
        body:
          "At Big Cat Security Ltd, we provide highly trusted and experienced security guards and door supervisors to protect business environments.",
      },
      {
        imageSrc: "/images/what-we-do/img-3.jpg",
        imageAlt: "Event Security",
        n: "02",
        cat: "Events & Gatherings",
        title: "Event Security",
        body:
          "We provide expert event security staff who ensure smooth control across events of varying scales and focus, from private functions to large public gatherings.",
      },
      {
        imageSrc: "/images/what-we-do/img-4.jpg",
        imageAlt: "Door Supervisors",
        n: "03",
        cat: "Licensed Premises",
        title: "Door Supervisors",
        body:
          "At the core of our service are professional SIA door supervisors and rigorously trained personnel managing entry, body and bag searches, and crowd control.",
      },
    ],
  },
  delivers: {
    eyebrow: "Big Cat Security Ltd",
    h2Line1: "Delivering Security",
    h2Em: "With a Purpose",
    h2Line2: "",
    leftPs: [
      "Our safety requires a specialist partner with proven expertise and the resources to respond to any challenge. When security matters most, businesses across London rely on Big Cat Security Ltd.",
      "From real estate and landmark buildings to critical infrastructure, we have the experience and capacity to deliver complete protection. We also offer Retail security services and Asset protection.",
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
          "Our consultants highlight any risks or threats to your security and provide practical solutions to deal with these.",
      },
    ],
  },
  stats: [
    { n: "85", nEm: "k+", label: "Security Officers" },
    { n: "25", nEm: "+", label: "Security Clients" },
    { n: "105", nEm: "+", label: "Monitored Businesses" },
  ],
  strategy: {
    eyebrow: "Company Strategy",
    h2Line1: "We Protect",
    h2Line2: "More Than",
    h2Em: "You Think",
    p:
      "At Big Cat Security Ltd, we deploy skilled and dependable security guards, door supervisors, and ground teams to ensure safety in offices, buildings, warehouses, and shared workspaces across London and the surrounding area.",
    cards: [
      {
        n: "01",
        title: "Service Excellence",
        body:
          "Deliver consistent, high-quality security services by employing SIA-licensed, well-trained staff who embody professionalism, vigilance, and integrity.",
        linkHref: "/#contact",
        linkLabel: "Learn More",
      },
      {
        n: "02",
        title: "Customer-Centric Approach",
        body:
          "Build long-term client partnerships by tailoring security solutions for buildings, offices, warehouses, events, and shared workspaces, ensuring peace of mind and satisfaction.",
        linkHref: "/about",
        linkLabel: "Learn About Us",
      },
      {
        n: "03",
        title: "Innovation & Technology",
        body:
          "Leverage modern security technologies such as CCTV integration, access control systems, and real-time communication tools to enhance service delivery.",
        linkHref: "/#contact",
        linkLabel: "Request a Quote",
      },
    ],
  },
  experts: {
    eyebrow: "Speak to Our Experts",
    h2Line1: "Ready to Get",
    h2Strong: "Protected?",
    p:
      "Our team is available Monday–Friday 9am–6pm, Saturday–Sunday 10am–5pm. All enquiries handled with complete confidentiality and professionalism.",
    phone: "+44 (0)7722 143162",
    phoneHref: "tel:+447722143162",
    newsletterTitle: "Stay Updated",
    newsletterP:
      "Get the latest news, updates, and insights delivered straight to your inbox.",
    emailPlaceholder: "Your email address",
    subscribeButton: "Subscribe",
  },
};

export const WHAT_WE_DO_DEFAULTS: WhatWeDoContent = {
  ...CHROME_AF_DEFAULTS,
  nav: WHAT_WE_DO_NAV_DEFAULT,
  main: WHAT_WE_DO_MAIN_DEFAULT,
};
