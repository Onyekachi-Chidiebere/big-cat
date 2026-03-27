"use client";

import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { SECURITY_NEWS, type NewsCategory } from "./data/securityNews";

type Filter = "all" | NewsCategory;

export function SecurityNewsSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return SECURITY_NEWS;
    return SECURITY_NEWS.filter((a) => a.cat === filter);
  }, [filter]);

  return (
    <section id="news" className={styles.news}>
      <div style={{ padding: "140px 8vw 0" }}>
        <div className={`${styles["news-head"]} ${styles.reveal}`}>
          <div>
            <div className={styles.eyebrow}>Security Intelligence</div>
            <h2 className={styles["section-h"]}>
              <em>Security</em>
              <br />
              News
            </h2>
          </div>
        </div>
        <div className={`${styles["news-filters"]} ${styles.reveal}`}>
          <button
            type="button"
            className={`${styles["news-filter"]} ${filter === "all" ? styles.active : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`${styles["news-filter"]} ${filter === "uk" ? styles.active : ""}`}
            onClick={() => setFilter("uk")}
          >
            UK Security
          </button>
          <button
            type="button"
            className={`${styles["news-filter"]} ${filter === "world" ? styles.active : ""}`}
            onClick={() => setFilter("world")}
          >
            World Security
          </button>
        </div>
      </div>
      <div style={{ padding: "0 8vw 140px" }}>
        <div className={`${styles["news-grid"]} ${styles.reveal}`}>
          {filtered.length === 0 ? (
            <div className={styles["news-empty"]}>No stories found for this filter.</div>
          ) : (
            filtered.map((a) => {
              const tag = a.cat === "uk" ? "UK Security" : "World Security";
              return (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["news-card"]}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles["news-card-img"]}>
                    <img src={a.img} alt="" loading="lazy" />
                  </div>
                  <div className={styles["news-card-body-wrap"]}>
                    <div
                      className={`${styles["news-card-cat"]} ${a.cat === "uk" ? "uk" : "world"}`}
                    >
                      {tag}
                    </div>
                    <div className={styles["news-card-title"]}>{a.title}</div>
                    <div className={styles["news-card-body"]}>{a.body}</div>
                    <div className={styles["news-card-meta"]}>
                      <span className={styles["news-card-source"]}>{a.source}</span>
                      <span className={styles["news-card-date"]}>{a.date}</span>
                    </div>
                  </div>
                </a>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
