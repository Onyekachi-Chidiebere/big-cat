import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type WhatWeDoMain = {
  hero: {
    label: string;
    h1Em: string;
    h1Strong: string;
    p: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    statusLeft: string;
    statusMid: string;
    imageSrc: string;
    imageAlt: string;
    cardN: string;
    cardNEm?: string;
    cardLabel: string;
  };
  introStrip: { num: string; title: string; sub: string }[];
  services: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    rightPs: [string, string];
    cards: {
      imageSrc: string;
      imageAlt: string;
      n: string;
      cat: string;
      title: string;
      body: string;
    }[];
  };
  delivers: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    leftPs: [string, string];
    tags: string[];
    items: { title: string; body: string }[];
  };
  stats: { n: string; nEm?: string; label: string }[];
  strategy: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Em: string;
    p: string;
    cards: {
      n: string;
      title: string;
      body: string;
      linkHref: string;
      linkLabel: string;
    }[];
  };
  experts: {
    eyebrow: string;
    h2Line1: string;
    h2Strong: string;
    p: string;
    phone: string;
    phoneHref: string;
    newsletterTitle: string;
    newsletterP: string;
    emailPlaceholder: string;
    subscribeButton: string;
  };
};

export type WhatWeDoContent = MarketingFullPageContent<WhatWeDoMain>;
