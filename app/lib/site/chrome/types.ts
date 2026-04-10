/** Editable announce bar + footer shared across pages (nav stays per-page in JSX). */
export type SiteAfContent = {
  announce: { html: string };
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
      logos: [
        { src: string; alt: string },
        { src: string; alt: string; small?: boolean },
      ];
    };
  };
};
