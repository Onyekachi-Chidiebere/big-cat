/** Shared marketing subpage navigation (editable via CMS). */
export type ServiceNavLink = {
  href: string;
  label: string;
  /** Highlights current route (e.g. sea background). */
  active?: boolean;
  /** Applies nav-cta styling (e.g. Work for Us). */
  cta?: boolean;
};

export type ServiceNavContent = {
  logoUrl: string;
  logoAlt: string;
  phone: string;
  phoneHref: string;
  quoteHref: string;
  quoteLabel: string;
  links: ServiceNavLink[];
};
