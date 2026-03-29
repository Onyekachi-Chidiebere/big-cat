import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type WorkForUsMain = {
  hero: {
    readout: string;
    label: string;
    h1Em: string;
    h1Strong: string;
    sub: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    badgeQuote: string;
    badgeName: string;
  };
  whyStrip: { title: string; text: string }[];
  mission: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Em: string;
    quote: string;
    logoSrc: string;
    logoAlt: string;
  };
  pillars: { n: string; title: string; body: string }[];
  roles: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    items: {
      n: string;
      title: string;
      body: string;
      tags: string[];
      ctaHref: string;
      ctaLabel: string;
    }[];
  };
  apply: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    emailDisplay: string;
    emailHref: string;
    formTitle: string;
    formSubtitle: string;
    submitLabel: string;
    labels: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      licence: string;
      about: string;
    };
    placeholders: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      about: string;
    };
    roleSelectEmpty: string;
    licenceSelectEmpty: string;
    roleOptions: string[];
    licenceOptions: string[];
  };
};

export type WorkForUsContent = MarketingFullPageContent<WorkForUsMain>;
