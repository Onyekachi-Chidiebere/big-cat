import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type EventSecurityMain = {
  hero: {
    bgImage: string;
    readout: string;
    label: string;
    h1Em: string;
    h1StrongLine1: string;
    h1StrongLine2: string;
    sub: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    statN: string;
    statNEm?: string;
    statL: string;
  };
  typesStrip: { icon: string; label: string }[];
  overview: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    paragraphs: [string, string, string];
    caps: string[];
    imageSrc: string;
    imageAlt: string;
    imageCap: string;
    badgeStrong: string;
    badgeRest: string;
  };
  events: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    intro: string;
    cards: {
      n: string;
      title: string;
      body: string;
      ctaHref: string;
      ctaLabel: string;
    }[];
  };
  licensed: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Em: string;
    p: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    checks: { title: string; body: string }[];
  };
  cta: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    body: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
  };
};

export type EventSecurityContent = MarketingFullPageContent<EventSecurityMain>;
