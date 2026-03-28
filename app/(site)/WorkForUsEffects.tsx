"use client";

import { useEffect } from "react";
import styles from "./styles.module.css";

/**
 * Careers page: cursor, mobile nav, hero stagger, scroll reveals,
 * progress bar, announce bar, floating CTA, London clock readout.
 */
export function WorkForUsEffects() {
  useEffect(() => {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    fEls.forEach((el) => fObs.observe(el));

    function animEl(id: string, delay: number) {
      const el = document.getElementById(id);
      if (!el) return;
      setTimeout(() => {
        el.style.transition =
          "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)";
        el.style.opacity = "1";
        el.style.transform = "none";
      }, delay);
    }
    animEl("ch-label", 200);
    animEl("ch-h1", 380);
    animEl("ch-sub", 520);
    animEl("ch-actions", 660);
    animEl("ch-badge", 860);

    const clk = document.getElementById("careers-clock");
    let clockId: ReturnType<typeof setInterval> | undefined;
    if (clk) {
      const tick = () => {
        const n = new Date();
        clk.textContent = [n.getHours(), n.getMinutes(), n.getSeconds()]
          .map((v) => String(v).padStart(2, "0"))
          .join(":");
      };
      tick();
      clockId = setInterval(tick, 1000);
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
      `.${CSS.escape(styles["careers-role-card"])}`,
      `.${CSS.escape(styles["careers-why-item"])}`,
      `.${CSS.escape(styles["careers-pillar"])}`,
      `.${CSS.escape(styles["btn-pill-white"])}`,
      `.${CSS.escape(styles["btn-pill"])}`,
    ].join(", ");

    const boostEls = Array.from(document.querySelectorAll(boostSel)) as HTMLElement[];
    const onBoostEnter = () => hoverBoost(true);
    const onBoostLeave = () => hoverBoost(false);
    boostEls.forEach((el) => {
      el.addEventListener("mouseenter", onBoostEnter);
      el.addEventListener("mouseleave", onBoostLeave);
    });

    const onScroll = () => {
      const s = window.scrollY;
      const h = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pb = document.getElementById("progress-bar");
      const navbar = document.getElementById("navbar");
      const floatCta = document.getElementById("float-cta");
      if (pb) pb.style.width = `${(s / h) * 100}%`;
      if (navbar) navbar.classList.toggle(styles.scrolled, s > 60);
      if (floatCta) floatCta.classList.toggle("show", s > 400);
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

    return () => {
      fObs.disconnect();
      if (clockId !== undefined) clearInterval(clockId);
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
