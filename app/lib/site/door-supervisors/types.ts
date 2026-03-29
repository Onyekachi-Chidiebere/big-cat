import type { MarketingFullPageContent } from "@/app/lib/site/marketing/buildMarketingFullPage";

export type DsDuty = { n: string; title: string; body: string };
export type DsVenueCard = { n: string; title: string; body: string; ctaHref: string };
export type DsWhyItem = { title: string; body: string };
export type DsStat = { n: string; nEm?: string; label: string };

export type DoorSupervisorsMain = {
  hero: {
    readout: string;
    label: string;
    h1Em: string;
    h1StrongLine1: string;
    h1StrongLine2: string;
    sub: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    imageSrc: string;
    imageAlt: string;
    readoutRight: string;
    cap: string;
    badgeBig: string;
    badgeLabel: string;
  };
  stats: { items: DsStat[] };
  overview: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    h2Line2: string;
    paragraphs: [string, string, string];
    trustText: string;
    dutiesEyebrow: string;
    duties: DsDuty[];
  };
  venues: {
    eyebrow: string;
    h2Line1: string;
    h2Em: string;
    intro: string;
    cards: DsVenueCard[];
  };
  why: {
    eyebrow: string;
    h2Line1: string;
    h2Mid: string;
    h2Em: string;
    intro: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    items: DsWhyItem[];
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

export type DoorSupervisorsContent = MarketingFullPageContent<DoorSupervisorsMain>;
