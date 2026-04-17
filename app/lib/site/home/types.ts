export type HeroStat = {
  valueHtml: string;
  label: string;
};

export type WwdCard = {
  num: string;
  tag: string;
  title: string;
  body: string;
};

export type PurposeItem = {
  title: string;
  body: string;
};

export type ServiceCard = {
  imageUrl: string;
  ghost: string;
  metaLine: string;
  category: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type HomeContent = {
  announce: { html: string };
  nav: {
    floatingCta: string;
    logoUrl: string;
    logoAlt: string;
    phone: string;
    phoneHref: string;
    quoteCta: string;
  };
  hero: {
    /** Public URL for hero background; empty uses bundled CSS default image */
    bgImageUrl: string;
    readoutLines: string[];
    eyebrow: string;
    classified: string;
    titleLead: string;
    titleStrong: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HeroStat[];
    scrollLabel: string;
  };
  trust: { items: string[] };
  wwd: {
    eyebrow: string;
    titleLine1: string;
    titleEmphasis: string;
    intro: string;
    cards: WwdCard[];
  };
  purpose: {
    eyebrow: string;
    titleLine1: string;
    titleEmphasis: string;
    paragraphs: string[];
    tags: string[];
    items: PurposeItem[];
  };
  servicesIntro: {
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    body: string;
    cta: string;
  };
  servicesCards: ServiceCard[];
  about: {
    imageUrl: string;
    badgeYear: string;
    badgeLine1: string;
    badgeLine2: string;
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    lede: string;
    body: string;
    stats: HeroStat[];
  };
  ctaStrip: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    phone: string;
    phoneHref: string;
  };
  contact: {
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    intro: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formEmailLabel: string;
    formEmailPlaceholder: string;
    formPhoneLabel: string;
    formPhonePlaceholder: string;
    formServiceLabel: string;
    formServicePlaceholder: string;
    formServiceOptions: string[];
    formMessageLabel: string;
    formMessagePlaceholder: string;
    submitLabel: string;
    formNote: string;
  };
  footer: {
    logoUrl: string;
    logoAlt: string;
    copyright: string;
    line: string;
    signal: string;
    facebookUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    linkServices: string;
    linkAbout: string;
    linkContact: string;
    accred: {
      logos: Array<{
        src: string;
        alt: string;
        small?: boolean;
      }>;
    };
  };
};
