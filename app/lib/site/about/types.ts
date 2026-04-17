export type AboutStat = { valueHtml: string; label: string };

export type AboutContent = {
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
    imageUrl: string;
    imageAlt: string;
    captionName: string;
    captionTitle: string;
    label: string;
    titleLead: string;
    titleStrongHtml: string;
    desc: string;
    regLine: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    statFloatNHtml: string;
    statFloatLabel: string;
  };
  statsStrip: { items: AboutStat[] };
  story: {
    eyebrow: string;
    titleHtml: string;
    paragraphs: string[];
    quoteText: string;
    quoteAttr: string;
    badgeLine: string;
    imageUrl: string;
    imageAlt: string;
    imageCaption: string;
    services: { title: string; body: string }[];
  };
  values: {
    eyebrow: string;
    titleHtml: string;
    intro: string;
    cards: { num: string; title: string; body: string }[];
  };
  expertise: {
    eyebrow: string;
    titleHtml: string;
    paragraphs: string[];
    tags: string[];
    items: { title: string; body: string }[];
  };
  directorCta: {
    imageUrl: string;
    imageAlt: string;
    titleHtml: string;
    paragraphs: string[];
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
    ratingNHtml: string;
    ratingLabel: string;
    contactRows: { label: string; valueHtml: string }[];
  };
  footer: {
    logoUrl: string;
    logoAlt: string;
    copyright: string;
    facebookUrl: string;
    instagramUrl: string;
    linkedinUrl: string;
    linkServices: string;
    linkAbout: string;
    linkContact: string;
    bottomLeft: string;
    signalLine: string;
    accred: {
      logos: Array<{
        src: string;
        alt: string;
        small?: boolean;
      }>;
    };
  };
};
