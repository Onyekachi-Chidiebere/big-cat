import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type ThreatIntelligenceMain = {
  hero: {
    bgImage: string;
    readout: string;
    gaugeTopLabel: string;
    gaugeBottomLabel: string;
    label: string;
    h1Em: string;
    h1StrongLine1: string;
    h1StrongLine2: string;
    sub: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    intelCardN: string;
    intelCardNEm: string;
    intelCardL: string;
  };
  capStrip: { title: string; text: string }[];
  overview: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    paragraphs: [string, string, string];
    tags: string[];
    imageSrc: string;
    imageAlt: string;
    imageCap: string;
    quote: string;
  };
  services: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    cards: {
      n: string;
      title: string;
      body: string;
      ctaHref: string;
      ctaLabel: string;
    }[];
  };
  process: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    steps: { n: string; title: string; body: string }[];
  };
  accred: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Em: string;
    paragraphs: [string, string];
    logos: [
      { src: string; alt: string },
      { src: string; alt: string; small?: boolean },
    ];
    checks: string[];
  };
  cta: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    body: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
  };
};

export type ThreatIntelligenceContent =
  MarketingFullPageContent<ThreatIntelligenceMain>;
