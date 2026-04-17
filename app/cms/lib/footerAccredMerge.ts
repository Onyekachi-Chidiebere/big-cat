/** Merge uploaded URL into `footer.accred.logos[index]` for CMS JSON textareas. */
export function mergeFooterAccredLogoJson(
  json: string,
  url: string,
  index: 0 | 1
): string {
  const o = JSON.parse(json) as {
    accred?: {
      logos?: [
        { src: string; alt: string },
        { src: string; alt: string; small?: boolean },
      ];
    };
  };
  const logos = o.accred?.logos ?? [
    { src: "", alt: "" },
    { src: "", alt: "", small: true },
  ];
  const next =
    index === 0
      ? [{ ...logos[0], src: url }, logos[1]]
      : [logos[0], { ...logos[1], src: url }];
  return JSON.stringify(
    { ...o, accred: { ...o.accred, logos: next } },
    null,
    2
  );
}
