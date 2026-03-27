export type NewsCategory = "uk" | "world";

export type SecurityNewsItem = {
  cat: NewsCategory;
  title: string;
  body: string;
  source: string;
  date: string;
  url: string;
  img: string;
};

/** Curated security intelligence stories (matches legacy home.html NEWS_DATA). */
export const SECURITY_NEWS: SecurityNewsItem[] = [
  {
    cat: "uk",
    title: "Companies House Breach Exposes Directors of 5 Million UK Firms",
    body:
      "A security flaw in the GOV.UK WebFiling service left home addresses, dates of birth and email addresses of directors across five million registered companies publicly accessible from October 2025. Vulnerability researcher Dan Neidle identified the flaw, which was publicly disclosed on 16 March 2026.",
    source: "GOV.UK / UpGuard",
    date: "20 Mar 2026",
    url: "https://www.upguard.com/news/gov-uk-data-breach-2026-03-16",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=75",
  },
  {
    cat: "uk",
    title: "CYBERUK 2026: Global Security Leaders Convene in Glasgow Next Month",
    body:
      "The NCSC has confirmed over 2,500 attendees for CYBERUK 2026 at the SEC Glasgow on 21–23 April, including senior figures from Google Cloud, Anthropic and government ministers. The flagship conference marks the 10th anniversary of CYBERUK, themed around accelerating UK cyber defence.",
    source: "NCSC / GOV.UK",
    date: "13 Mar 2026",
    url: "https://www.ncsc.gov.uk/news/international-security-chiefs-convene-glasgow-flagship-cyberuk-conference",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=75",
  },
  {
    cat: "uk",
    title: "NCSC Alerts UK Organisations Over Heightened Iran Cyber Threat",
    body:
      "The National Cyber Security Centre has issued an urgent advisory for UK organisations to review their cyber security posture following escalating conflict in the Middle East. The NCSC warns of a heightened risk of indirect cyber attacks from Iran-linked hacktivist groups targeting UK infrastructure.",
    source: "NCSC.GOV.UK",
    date: "12 Mar 2026",
    url: "https://www.ncsc.gov.uk/news/ncsc-advises-uk-organisations-take-action-following-conflict-in-the-middle-east",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=75",
  },
  {
    cat: "uk",
    title: "Cyber Security & Resilience Bill Passes Committee Stage in Parliament",
    body:
      "The landmark Cyber Security and Resilience (NIS) Bill cleared committee scrutiny on 5 March 2026 and now moves to Report Stage. The bill introduces mandatory security standards across critical national infrastructure — covering NHS, energy, transport and financial services providers.",
    source: "UK Parliament",
    date: "5 Mar 2026",
    url: "https://www.parliament.uk/business/news/2026/jan-2026/cyber-security-and-resilience-network-and-information-systems-bill-call-for-evidence/",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=700&q=75",
  },
  {
    cat: "world",
    title: "UK Terrorism Threat Remains SUBSTANTIAL as MI5 Warns of Evolving Risk",
    body:
      "The Joint Terrorism Analysis Centre maintains the UK national terrorism threat at SUBSTANTIAL — meaning an attack is likely. MI5 highlights Islamist, extreme right-wing and state-sponsored threats, with 39 interdicted terror plots in the UK since 2017 and the threat from lone-actor attacks continuing to rise.",
    source: "MI5 / NPSA",
    date: "20 Mar 2026",
    url: "https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels",
    img: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=700&q=75",
  },
  {
    cat: "world",
    title: "Executive Protection Demand Surges as UK Threat Landscape Intensifies",
    body:
      "A surge in demand for elite close protection services is being recorded across UK security firms in 2026, driven by geopolitical instability, rising CEO threats and an influx of UHNW principals re-domiciling to London. SIA-licensed operators with military backgrounds command premium rates as intelligence-led protection replaces traditional guarding.",
    source: "Spartan Elite Security",
    date: "10 Mar 2026",
    url: "https://spartanelitesecurity.co.uk/united-kingdom-security/",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=75",
  },
];
