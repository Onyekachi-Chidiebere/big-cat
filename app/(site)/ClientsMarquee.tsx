import styles from "./styles.module.css";

const CLIENTS = [
  "Hotels & Theatres",
  "High-End Public Events",
  "Late Bars & Restaurants",
  "Receptions & Workspaces",
  "Overnight Asset Protection",
  "Film Sets & Music Videos",
  "Corporate Buildings",
  "Retail & Shopping Centres",
  "Construction Sites",
  "Warehouses & Logistics",
];

export function ClientsMarquee() {
  const items = CLIENTS.map((name) => (
    <div key={name} className={styles["client-item"]}>
      {name}
    </div>
  ));

  return (
    <div className={styles["clients-section"]}>
      <div className={styles["clients-label"]}>Trusted by Leading Organisations</div>
      <div className={styles["marquee-wrap"]}>
        <div className={styles["marquee-track"]} id="t1">
          {items}
        </div>
        <div className={styles["marquee-track"]} id="t2">
          {items}
        </div>
      </div>
    </div>
  );
}
