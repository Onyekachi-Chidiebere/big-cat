import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type SecurityGuardsMain = {
  hero: {
    readout: string;
    label: string;
    h1Em: string;
    h1StrongLine1: string;
    h1StrongLine2: string;
    sub: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    statusHi: string;
    statusParts: [string, string];
    imageMainSrc: string;
    imageMainAlt: string;
    imageSm: [{ src: string; alt: string }, { src: string; alt: string }];
    statN: string;
    statNEm?: string;
    statL: string;
  };
  introStrip: { num: string; title: string; text: string }[];
  overview: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    paragraphs: [string, string];
    creds: string[];
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
    cards: { n: string; title: string; body: string; ctaHref: string; ctaLabel: string }[];
  };
  ops: {
    eyebrow: string;
    h2Line1: string;
    h2Line2: string;
    h2Em: string;
    p: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    items: { title: string; body: string }[];
  };
  other: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    cards: { n: string; title: string; body: string; href: string }[];
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

export type SecurityGuardsContent = MarketingFullPageContent<SecurityGuardsMain>;
