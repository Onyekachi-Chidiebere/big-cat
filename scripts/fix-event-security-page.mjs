import fs from "fs";
const path = "app/(site)/event-security/page.tsx";
let s = fs.readFileSync(path, "utf8");

if (!s.includes("EventSecurityEffects")) {
  s = s.replace(
    'import styles from "../styles.module.css";\n',
    'import styles from "../styles.module.css";\nimport { EventSecurityEffects } from "../EventSecurityEffects";\n',
  );
}

s = s.replace(
  `export default function EventSecurityPage() {
  return <div>
    <div className="cursor" id="cur"></div>`,
  `export default function EventSecurityPage() {
  return (
    <div>
      <EventSecurityEffects />
      <div className="cursor" id="cur"></div>`,
);

s = s.replace(
  /<div className="cursor-br" id="curBR"><\/div>\s*<div className="cursor-ring" id="curR"><\/div>\s*<div id="progress-bar"><\/div>\s*<a href="#contact" className="floating-cta">Get a Quote<\/a>\s*\n\s*<div id="progress-bar"><\/div>/,
  `<div className="cursor-br" id="curBR"></div>\n    <div id="progress-bar"></div>`,
);

s = s.replace(
  /<div className="es-hero-bg" style="background-image:url\('([^']*)'\)"><\/div>/,
  `<div className="es-hero-bg" style={{ backgroundImage: \`url('$1')\` }}></div>`,
);

function cls(inner) {
  const parts = inner.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return `className=""`;
  if (parts.length === 1) return `className={styles['${parts[0]}']}`;
  return "className={`" + parts.map((p) => "${styles['" + p + "']}").join(" ") + "`}";
}

s = s.replace(/className="([^"]+)"/g, (_, inner) => cls(inner));

s = s.replace(
  /<nav id="nav">\s*<a href="\/">Home<\/a>\s*<a href="\/what-we-do">What We Do<\/a>\s*<a href="\/about">About<\/a>/,
  `<nav id="nav">
        <a href="/">Home</a>
        <a href="/what-we-do">What We Do</a>
        <a href="/event-security" style={{ background: "var(--sea)" }}>Event Security</a>
        <a href="/about">About</a>`,
);

s = s.replace(
  /style="color:var\(--sea-light\);margin-left:8px"/g,
  `style={{ color: "var(--sea-light)", marginLeft: 8 }}`,
);
s = s.replace(
  /style="color:var\(--sea-light\);font-family:'Barlow Condensed',sans-serif;font-size:\.65rem;letter-spacing:\.3em;margin-bottom:20px"/g,
  `style={{ color: "var(--sea-light)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: ".65rem", letterSpacing: ".3em", marginBottom: 20 }}`,
);
s = s.replace(
  /style="color:var\(--sea-light\);font-family:'Barlow Condensed',sans-serif;font-size:\.65rem;letter-spacing:\.3em;margin-bottom:16px"/g,
  `style={{ color: "var(--sea-light)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: ".65rem", letterSpacing: ".3em", marginBottom: 16 }}`,
);
s = s.replace(
  /style="display:flex;gap:14px;flex-wrap:wrap;margin-top:32px"/g,
  `style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}`,
);
s = s.replace(/style="display:flex;gap:14px;flex-wrap:wrap"/g, `style={{ display: "flex", gap: 14, flexWrap: "wrap" }}`);

s = s.replace(/<br>/g, "<br />");

s = s.replace(/\s*<\/div>;\s*\n\}/, "\n    </div>\n  );\n}\n");

fs.writeFileSync(path, s);
console.log("ok");
