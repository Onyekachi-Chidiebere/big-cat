import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { WorkForUsContent, WorkForUsMain } from "./types";

export const WORK_FOR_US_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true, active: true },
  ],
};

export const WORK_FOR_US_MAIN_DEFAULT: WorkForUsMain = {
  hero: {
    readout: "SECTOR: LONDON UK\nSTATUS: HIRING\nSIA: LICENSED",
    label: "Careers at Big Cat Security",
    h1Em: "Doing the Right Thing.",
    h1Strong: "For Everyone.",
    sub:
      "As a social enterprise, we have our colleagues at the heart of everything we do. Join a company that invests in you — your skills, your confidence, and your future.",
    primaryCta: { href: "#careers-apply", label: "Apply Now" },
    secondaryCta: { href: "#careers-roles", label: "View Open Roles" },
    badgeQuote:
      "\"We recognise that our colleagues are the face of both our business and our clients.\"",
    badgeName: "Tochu Uba-Chinaka — Director",
  },
  whyStrip: [
    {
      title: "SIA Licensed",
      text:
        "We sponsor and support your SIA licensing — giving you the credentials to build a long-term security career.",
    },
    {
      title: "Career Growth",
      text:
        "Meaningful career opportunities with long-term progression paths and training across multiple security disciplines.",
    },
    {
      title: "Fair Living Wage",
      text:
        "Committed to supporting a fair living wage wherever possible — because you deserve to be valued for your work.",
    },
    {
      title: "Social Enterprise",
      text:
        "The only major social enterprise in UK security — your work creates positive impact in the communities we protect.",
    },
  ],
  mission: {
    eyebrow: "Work For Big Cat Security Ltd",
    h2Line1: "People",
    h2Line2: "at the",
    h2Em: "Core",
    quote:
      "Our company was founded with people at its core, and that principle continues to shape everything we do.",
    logoSrc: "/logo.png",
    logoAlt: "Big Cat Security Ltd",
  },
  pillars: [
    {
      n: "01",
      title: "Skills & Confidence",
      body:
        "We invest in equipping every individual with the skills and confidence to deliver outstanding service — from SIA certification to ongoing professional development.",
    },
    {
      n: "02",
      title: "Meaningful Opportunities",
      body:
        "We are committed to creating meaningful career opportunities — not just jobs. We actively support long-term growth and career progression within our team.",
    },
    {
      n: "03",
      title: "Fair Compensation",
      body:
        "Supporting a fair living wage wherever possible, because we believe the people who protect others deserve to be properly valued and rewarded.",
    },
    {
      n: "04",
      title: "Community & Impact",
      body:
        "As a social enterprise, your role goes beyond security — you become part of a team that actively improves lives and strengthens the communities we serve.",
    },
  ],
  roles: {
    eyebrow: "Open Positions",
    h2Line1: "Current",
    h2Em: "Opportunities",
    intro:
      "We are always looking for motivated, professional individuals to join our growing team. All roles require or support SIA licensing — we welcome both experienced officers and those new to the industry.",
    items: [
      {
        n: "01",
        title: "Security Guard",
        body:
          "Protect business premises, office buildings, retail environments, and shared workspaces across London. You are the visible deterrent and the first line of defence.",
        tags: ["SIA DS Licence", "London", "Full/Part Time"],
        ctaHref: "#careers-apply",
        ctaLabel: "Apply for This Role",
      },
      {
        n: "02",
        title: "Door Supervisor",
        body:
          "Manage entry points, conduct body and bag searches, and ensure the safety of guests at licensed premises, bars, restaurants, hotels and entertainment venues.",
        tags: ["SIA Door Licence", "London", "Flexible Hours"],
        ctaHref: "#careers-apply",
        ctaLabel: "Apply for This Role",
      },
      {
        n: "03",
        title: "Event Security Officer",
        body:
          "Join our specialist event security teams for high-end public events, film sets, music videos, theatre productions, private functions and large-scale gatherings.",
        tags: ["SIA Licence", "London & UK", "Event-Based"],
        ctaHref: "#careers-apply",
        ctaLabel: "Apply for This Role",
      },
    ],
  },
  apply: {
    eyebrow: "Join the Team",
    h2Line1: "Start Your",
    h2Em: "Application",
    intro:
      "Chat with our recruitment team directly or fill in the form to express your interest. We respond to every application personally — usually within 48 hours.",
    emailDisplay: "contact@bigcatsecurity.co.uk",
    emailHref: "mailto:contact@bigcatsecurity.co.uk",
    formTitle: "Express Your Interest",
    formSubtitle: "All enquiries handled with complete confidentiality",
    submitLabel: "Send Application →",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      role: "Role of Interest",
      licence: "SIA Licence Status",
      about: "Tell Us About Yourself",
    },
    placeholders: {
      firstName: "John",
      lastName: "Smith",
      email: "john@email.com",
      phone: "+44 7700 000000",
      about:
        "Brief background, relevant experience, why you want to join Big Cat Security...",
    },
    roleSelectEmpty: "Select a role",
    licenceSelectEmpty: "Select your status",
    roleOptions: [
      "Security Guard",
      "Door Supervisor",
      "Event Security Officer",
      "Multiple Roles",
    ],
    licenceOptions: [
      "I hold a valid SIA licence",
      "My SIA licence has expired",
      "I am currently training",
      "I do not hold an SIA licence yet",
    ],
  },
};

export const WORK_FOR_US_DEFAULTS: WorkForUsContent = {
  ...CHROME_AF_DEFAULTS,
  nav: WORK_FOR_US_NAV_DEFAULT,
  main: WORK_FOR_US_MAIN_DEFAULT,
};
