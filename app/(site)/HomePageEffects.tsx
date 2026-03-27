"use client";

import { useEffect } from "react";
import styles from "./styles.module.css";

/**
 * Ports legacy home.html inline script: hero clock & reticle, custom cursor,
 * scroll/nav, announce close, mobile nav, reveal observers, stats counter.
 */
export function HomePageEffects() {
  useEffect(() => {
    const hrTime = document.getElementById("hr-time");
    let clockId: ReturnType<typeof setInterval> | undefined;
    if (hrTime) {
      const tick = () => {
        const n = new Date();
        hrTime.textContent = [n.getHours(), n.getMinutes(), n.getSeconds()]
          .map((v) => String(v).padStart(2, "0"))
          .join(":");
      };
      tick();
      clockId = setInterval(tick, 1000);
    }

    const fSel = [styles["f-reveal"], styles["f-reveal-x"], styles["f-reveal-scale"]]
      .filter(Boolean)
      .map((c) => `.${CSS.escape(c)}`)
      .join(", ");
    const fEls = fSel ? (Array.from(document.querySelectorAll(fSel)) as HTMLElement[]) : [];
    const fObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles["f-in"]);
            fObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    fEls.forEach((el) => fObs.observe(el));

    const revealSel = `.${CSS.escape(styles["reveal"])}`;
    const revealEls = Array.from(document.querySelectorAll(revealSel)) as HTMLElement[];
    const ro = new IntersectionObserver(
      (es) => {
        es.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.classList.add(styles.visible);
            }, i * 90);
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    revealEls.forEach((el) => {
      el.classList.add(styles.animate);
      ro.observe(el);
    });

    const heroEl = document.getElementById("hero-section");
    const reticle = document.getElementById("reticle");
    const coordX = document.getElementById("coord-x");
    const coordY = document.getElementById("coord-y");
    let rTargetX = window.innerWidth / 2;
    let rTargetY = window.innerHeight / 2;
    let rX = rTargetX;
    let rY = rTargetY;
    let rRaf: number | null = null;

    const onHeroMove = (e: MouseEvent) => {
      rTargetX = e.clientX;
      rTargetY = e.clientY;
      const px = ((e.clientX / window.innerWidth) * 100).toFixed(2);
      const py = ((e.clientY / window.innerHeight) * 100).toFixed(2);
      if (coordX) coordX.textContent = `${(51.5 + parseFloat(px) * 0.001).toFixed(4)}° N`;
      if (coordY) coordY.textContent = `${(0.12 + parseFloat(py) * 0.001).toFixed(4)}° W`;
    };

    const reticleLoop = () => {
      if (!reticle) return;
      rX += (rTargetX - rX) * 0.09;
      rY += (rTargetY - rY) * 0.09;
      reticle.style.left = `${rX}px`;
      reticle.style.top = `${rY}px`;
      rRaf = requestAnimationFrame(reticleLoop);
    };

    const onHeroEnter = () => {
      if (!reticle) return;
      reticle.style.opacity = "1";
      if (rRaf == null) reticleLoop();
    };

    const onHeroLeave = () => {
      if (reticle) reticle.style.opacity = "0";
      if (rRaf != null) {
        cancelAnimationFrame(rRaf);
        rRaf = null;
      }
    };

    if (heroEl && reticle) {
      heroEl.addEventListener("mousemove", onHeroMove);
      heroEl.addEventListener("mouseenter", onHeroEnter);
      heroEl.addEventListener("mouseleave", onHeroLeave);
    }

    const cur = document.getElementById("cur");
    const curR = document.getElementById("curR");
    const curTL = document.getElementById("curTL");
    const curTR = document.getElementById("curTR");
    const curBL = document.getElementById("curBL");
    const curBR = document.getElementById("curBR");
    const curPulse = document.getElementById("curPulse");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    const TICK = 18;
    let cursorRaf = 0;

    const onDocMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = `${mx}px`;
        cur.style.top = `${my}px`;
      }
      if (curTL) {
        curTL.style.left = `${mx - TICK}px`;
        curTL.style.top = `${my - TICK}px`;
      }
      if (curTR) {
        curTR.style.left = `${mx + TICK - 7}px`;
        curTR.style.top = `${my - TICK}px`;
      }
      if (curBL) {
        curBL.style.left = `${mx - TICK}px`;
        curBL.style.top = `${my + TICK - 7}px`;
      }
      if (curBR) {
        curBR.style.left = `${mx + TICK - 7}px`;
        curBR.style.top = `${my + TICK - 7}px`;
      }
    };

    const cursorLoop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (curR) {
        curR.style.left = `${rx}px`;
        curR.style.top = `${ry}px`;
      }
      cursorRaf = requestAnimationFrame(cursorLoop);
    };

    const corners = [curTL, curTR, curBL, curBR].filter(Boolean) as HTMLElement[];

    const hoverBoost = (on: boolean) => {
      if (!cur || !curR) return;
      cur.classList.toggle("big", on);
      curR.classList.toggle("big", on);
      corners.forEach((t) => t.classList.toggle("big", on));
      if (on && curPulse) {
        curPulse.style.left = `${rx}px`;
        curPulse.style.top = `${ry}px`;
        curPulse.classList.remove("fire");
        void curPulse.offsetWidth;
        curPulse.classList.add("fire");
      }
    };

    if (cur && curR) {
      document.addEventListener("mousemove", onDocMove);
      cursorRaf = requestAnimationFrame(cursorLoop);
    }

    const boostSel = [
      "a",
      "button",
      `.${CSS.escape(styles["svc-card"])}`,
      `.${CSS.escape(styles["wwd-card"])}`,
      `.${CSS.escape(styles["purpose-tag"])}`,
    ].join(", ");

    const boostEls = Array.from(document.querySelectorAll(boostSel)) as HTMLElement[];
    const onBoostEnter = () => hoverBoost(true);
    const onBoostLeave = () => hoverBoost(false);
    boostEls.forEach((el) => {
      el.addEventListener("mouseenter", onBoostEnter);
      el.addEventListener("mouseleave", onBoostLeave);
    });

    const onScroll = () => {
      const s = document.documentElement.scrollTop;
      const h = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pb = document.getElementById("progress-bar");
      const navbar = document.getElementById("navbar");
      if (pb) pb.style.width = `${(s / h) * 100}%`;
      if (navbar) navbar.classList.toggle(styles.scrolled, s > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const announceBar = document.getElementById("announce-bar");
    const annClose = document.getElementById("ann-close");
    const navbar = document.getElementById("navbar");
    const onAnnClose = () => {
      announceBar?.classList.add("hidden");
      navbar?.classList.add("no-bar");
    };
    annClose?.addEventListener("click", onAnnClose);

    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const onMenuToggle = () => nav?.classList.toggle("open");
    menuToggle?.addEventListener("click", onMenuToggle);
    const navLinks = Array.from(document.querySelectorAll("#nav a"));
    const closeNav = () => nav?.classList.remove("open");
    navLinks.forEach((a) => a.addEventListener("click", closeNav));

    let counted = false;
    const countEl = document.getElementById("count-n");
    const co = new IntersectionObserver(
      (es) => {
        if (!es[0]?.isIntersecting || counted || !countEl) return;
        counted = true;
        const em = countEl.querySelector("em");
        const suf = em ? em.outerHTML : "";
        let start: number | null = null;
        const step = (ts: number) => {
          if (start == null) start = ts;
          const p = Math.min((ts - start) / 2000, 1);
          const v = Math.floor((1 - (1 - p) ** 3) * 50);
          countEl.innerHTML = `${v}${suf}`;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    const statsRow = countEl?.closest(`.${CSS.escape(styles["stats-row"])}`);
    if (countEl && statsRow) co.observe(statsRow);

    return () => {
      if (clockId) clearInterval(clockId);
      fObs.disconnect();
      ro.disconnect();
      co.disconnect();
      if (heroEl && reticle) {
        heroEl.removeEventListener("mousemove", onHeroMove);
        heroEl.removeEventListener("mouseenter", onHeroEnter);
        heroEl.removeEventListener("mouseleave", onHeroLeave);
      }
      if (rRaf != null) cancelAnimationFrame(rRaf);
      document.removeEventListener("mousemove", onDocMove);
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      boostEls.forEach((el) => {
        el.removeEventListener("mouseenter", onBoostEnter);
        el.removeEventListener("mouseleave", onBoostLeave);
      });
      window.removeEventListener("scroll", onScroll);
      annClose?.removeEventListener("click", onAnnClose);
      menuToggle?.removeEventListener("click", onMenuToggle);
      navLinks.forEach((a) => a.removeEventListener("click", closeNav));
    };
  }, []);

  return null;
}
