import { CHROME_AF_DEFAULTS } from "@/app/lib/site/chrome/defaults";
import type { ServiceNavContent } from "@/app/lib/site/service-nav/types";
import type { ThreatIntelligenceContent, ThreatIntelligenceMain } from "./types";

export const THREAT_INTEL_NAV_DEFAULT: ServiceNavContent = {
  logoUrl: "/logo.png",
  logoAlt: "Big Cat Security Ltd",
  phone: "0800 244 228",
  phoneHref: "tel:+448002440000",
  quoteHref: "/#contact",
  quoteLabel: "Get a Quote",
  links: [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/threat-intelligence", label: "Threat Intelligence", active: true },
    { href: "/about", label: "About" },
    { href: "/work-for-us", label: "Work for Us", cta: true },
  ],
};

export const THREAT_INTELLIGENCE_MAIN_DEFAULT: ThreatIntelligenceMain = {
  hero: {
    bgImage: "/images/threat-intelligence/img-1.jpg",
    readout: "INTEL: ACTIVE\nCCTV: MONITORING\nTHREAT: ASSESSED",
    gaugeTopLabel: "Threat Level",
    gaugeBottomLabel: "Low",
    label: "Threat Intelligence",
    h1Em: "Intelligence for",
    h1StrongLine1: "Informed",
    h1StrongLine2: "Security",
    sub:
      "Stay ahead of threats with intelligence-led security decisions. Our specialist teams combine real-time CCTV monitoring, risk assessment, and proactive threat analysis to keep your people and property protected at all times.",
    primaryCta: { href: "/#contact", label: "Request an Assessment" },
    secondaryCta: { href: "#ti-services", label: "Our Intelligence Services" },
    intelCardN: "24",
    intelCardNEm: "/7",
    intelCardL: "Active Monitoring",
  },
  capStrip: [
    {
      title: "CCTV Monitoring",
      text: "24/7 real-time surveillance and remote monitoring of your premises",
    },
    {
      title: "Risk Assessment",
      text: "Proactive identification and analysis of potential threats before they escalate",
    },
    {
      title: "Threat Analysis",
      text: "Intelligence-led decisions powered by real-time data and expert assessment",
    },
    {
      title: "Access Intelligence",
      text: "Smart access control systems integrated with real-time security intelligence",
    },
  ],
  overview: {
    eyebrow: "Intelligence for Informed Security Decisions",
    h2Line1: "See More.",
    h2Em: "Know More.",
    h2Line2: "Act Faster.",
    paragraphs: [
      "Our threat intelligence service combines the expertise of our security professionals with world-class monitoring technology — giving you a complete operational picture of your environment at all times.",
      "From CCTV integration and access control systems to real-time communication tools and proactive risk assessments, our intelligence-led approach keeps you ahead of emerging threats before they become incidents.",
      "All intelligence operations are conducted by SIA-licensed security professionals with extensive frontline experience — ensuring every assessment, recommendation, and response decision is grounded in real-world expertise.",
    ],
    tags: [
      "CCTV Integration",
      "Real-Time Monitoring",
      "Risk Assessment",
      "Threat Analysis",
      "Access Control",
      "Incident Response",
      "Surveillance",
      "Patrol Coordination",
    ],
    imageSrc: "/images/threat-intelligence/img-2.jpg",
    imageAlt: "Security Intelligence Operations — CCTV monitoring centre",
    imageCap: "Security Intelligence Operations — real-time CCTV monitoring",
    quote:
      "\"We combine knowledge, training, and experience to anticipate risks and respond decisively — whether it's a minor incident or a critical breach.\"",
  },
  services: {
    eyebrow: "What We Deliver",
    h2Line1: "Our Intelligence",
    h2Em: "Services",
    intro:
      "Every intelligence service is delivered by our SIA-licensed professionals, combining modern technology with hands-on security expertise. We tailor every solution to your specific environment, risk profile, and operational requirements.",
    cards: [
      {
        n: "01",
        title: "CCTV Integration & Monitoring",
        body:
          "Complete security solutions for 24/7 surveillance — seamlessly integrating CCTV systems, access control, and real-time monitoring of your premises. Our operators provide continuous oversight across multiple feeds, ensuring nothing goes undetected.",
        ctaHref: "/#contact",
        ctaLabel: "Request This Service",
      },
      {
        n: "02",
        title: "Proactive Risk Assessment",
        body:
          "Our security consultants highlight any risks or threats to your security and provide practical solutions before incidents occur. We assess your environment, identify vulnerabilities, and deliver a comprehensive risk mitigation strategy tailored to your operations.",
        ctaHref: "/#contact",
        ctaLabel: "Request This Service",
      },
      {
        n: "03",
        title: "Real-Time Threat Analysis",
        body:
          "Intelligence-led security operations with real-time communication tools that keep your entire security team connected and coordinated. We monitor patterns, assess behaviours, and provide actionable intelligence that informs every security decision on the ground.",
        ctaHref: "/#contact",
        ctaLabel: "Request This Service",
      },
      {
        n: "04",
        title: "Security Consultancy",
        body:
          "Our expert consultants work directly with your team to review current security arrangements, identify gaps, and recommend targeted improvements. From access control design to patrol route optimisation, we deliver intelligence that strengthens every layer of your security.",
        ctaHref: "/#contact",
        ctaLabel: "Request This Service",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    h2Line1: "Our Intelligence",
    h2Em: "Process",
    intro:
      "From initial assessment to active monitoring, every step is executed by SIA-licensed professionals with a single focus — keeping you safe.",
    steps: [
      {
        n: "01",
        title: "Assess",
        body:
          "We conduct a thorough assessment of your environment, identifying risks, vulnerabilities, and current security gaps.",
      },
      {
        n: "02",
        title: "Plan",
        body:
          "We design an intelligence-led security plan tailored to your specific needs — integrating CCTV, access control, and personnel.",
      },
      {
        n: "03",
        title: "Deploy",
        body:
          "Our SIA-licensed team deploys your security solution — fully briefed, equipped, and coordinated for seamless operation.",
      },
      {
        n: "04",
        title: "Monitor",
        body:
          "Continuous real-time monitoring with regular reporting keeps you informed and your security posture current at all times.",
      },
    ],
  },
  accred: {
    eyebrow: "Certified & Compliant",
    h2Line1: "Licensed,",
    h2Line2: "Registered &",
    h2Em: "Ready",
    paragraphs: [
      "At Big Cat Security Ltd, professionalism and compliance sit at the heart of everything we do. We are officially licensed by the Security Industry Authority, ensuring all our operations meet the highest legal and professional standards.",
      "Every member of our intelligence and security team is fully vetted, certified, and SIA-licensed — giving you the confidence that your safety, property, and reputation are in trusted hands.",
    ],
    logos: [
      { src: "/images/threat-intelligence/img-3.png", alt: "SIA Licensed Security Guards" },
      {
        src: "/images/threat-intelligence/img-4.png",
        alt: "Security Industry Authority",
        small: true,
      },
    ],
    checks: [
      "All staff are fully SIA-licensed security professionals — without exception",
      "Highly trained, experienced teams with expertise across multiple security disciplines",
      "Proven track record with over 50 events and deployments successfully managed",
      "Dedicated mobile patrol management team and real-time communication infrastructure",
      "Comprehensive insurance and full legal compliance for complete peace of mind",
      "Featured in TimeOut, Shortlist, and other leading UK publications",
    ],
  },
  cta: {
    eyebrow: "Intelligence That Protects",
    h2Line1: "Start Your",
    h2Em: "Assessment",
    body:
      "Our team will assess your security environment, identify threats, and recommend the right intelligence-led solution for your organisation. All consultations are fully confidential.",
    primaryCta: { href: "/#contact", label: "Request an Assessment" },
    secondaryCta: { href: "tel:+447722143162", label: "+44 (0)7722 143162" },
  },
};

export const THREAT_INTELLIGENCE_DEFAULTS: ThreatIntelligenceContent = {
  ...CHROME_AF_DEFAULTS,
  nav: THREAT_INTEL_NAV_DEFAULT,
  main: THREAT_INTELLIGENCE_MAIN_DEFAULT,
};
