"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    projects: 120,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
    ),
  },
  {
    id: 2,
    title: "UI/UX Design",
    projects: 241,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma-icon lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
    ),
  },
  {
    id: 3,
    title: "Web Research",
    projects: 240,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-lock-icon lucide-globe-lock"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"/><path d="M2 12h8.5"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>
    ),
  },
  {
    id: 4,
    title: "Marketing",
    projects: 331,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF014F" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-search-icon lucide-mail-search"><path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.5-1.5"/></svg>
    ),
  },
];

/* ── Count-up hook ── */
function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── Single card ── */
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setVisible(true), index * 130);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const count = useCountUp(service.projects, 1600, visible);

  return (
    <div
      ref={ref}
      className="col-lg-3 col-md-4 col-sm-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.13}s, transform 0.6s ease ${index * 0.13}s`,
      }}
    >
      <div
        className="svc-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-hovered={hovered ? "true" : "false"}
      >
        {/* Glow layers */}
        <div className="svc-glow-radial" style={{ opacity: hovered ? 1 : 0 }} />
        <div className="svc-glow-border"  style={{ opacity: hovered ? 1 : 0 }} />

        {/* Icon */}
        <div
          className="svc-icon-wrap"
          style={{
            background: hovered ? "rgba(225,30,60,0.14)" : "rgba(225,30,60,0.07)",
            transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1) rotate(0deg)",
          }}
        >
          {service.icon}
          <div className="svc-icon-glow" style={{ opacity: hovered ? 1 : 0 }} />
        </div>

        {/* Title */}
        <h3 className="svc-title" style={{ color: hovered ? "#00000" : undefined }}>
          {service.title}
        </h3>

        {/* Divider */}
        <div
          className="svc-divider"
          style={{
            background: hovered
              ? "linear-gradient(90deg,transparent,#E11E3C,transparent)"
              : "rgba(150,150,150,0.2)",
            width: hovered ? "40px" : "24px",
          }}
        />

        {/* Count-up */}
        <p className="svc-count" style={{ color: hovered ? "#E11E3C" : undefined }}>
          <span
            className="svc-number"
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          >
            {count}
          </span>
          &nbsp;Projects
        </p>

        {/* Bottom bar */}
        <div
          className="svc-bottom-bar"
          style={{ width: hovered ? "60%" : "0%" }}
        />
      </div>
    </div>
  );
}

/* ── Section ── */
export default function ServicesSection() {
  return (
    <>
      <style>{`
        /* ── Google Fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');

        /* ── Custom breakpoint variables (from your CSS) ── */
        :root {
          --breakpoint-sm:  40rem;   /* 640px  */
          --breakpoint-md:  48rem;   /* 768px  */
          --breakpoint-lg:  64rem;   /* 1024px */
          --breakpoint-xl:  74.5rem; /* 1192px */
          --breakpoint-2xl: 96rem;   /* 1536px */
          --accent: #E11E3C;
          --gap: 1.25rem;
        }

        

        /* ── Ambient glows ── */
        .svc-glow-tr {
          position: absolute; top: 0; right: 0;
          width: 500px; height: 500px; pointer-events: none;
          background: radial-gradient(ellipse at top right, rgba(225,30,60,0.08) 0%, transparent 65%);
        }
        .svc-glow-bl {
          position: absolute; bottom: 0; left: 0;
          width: 400px; height: 400px; pointer-events: none;
          background: radial-gradient(ellipse at bottom left, rgba(225,30,60,0.05) 0%, transparent 65%);
        }

        /* ── Container ── */
        .svc-container {
          position: relative;
          max-width: var(--breakpoint-xl);
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* ── Eyebrow ── */
        .svc-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .svc-eyebrow-line {
          height: 1px; width: 2rem;
          background: var(--accent);
        }
        .svc-eyebrow-text {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
        }

        /* ── Heading ── */
        .svc-heading {
          text-align: center;
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 4rem;
          color: #111;
          transition: color 0.3s;
        }
        .dark .svc-heading { color: #fff; }
        .svc-heading span { color: var(--accent); }

        /* ── Bootstrap-style 12-col row ── */
        .svc-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 calc(var(--gap) / -2);
        }

        /* col-* base */
        .col-lg-3, .col-md-4, .col-sm-6 {
          padding: 0 calc(var(--gap) / 2);
          margin-bottom: var(--gap);
          width: 100%;          /* mobile-first: full width */
          box-sizing: border-box;
        }

        /* col-sm-6 → 2 columns at --breakpoint-sm (40rem) */
        @media (min-width: 40rem) {
          .col-sm-6 { width: 50%; }
        }

        /* col-md-4 → 3 columns at --breakpoint-md (48rem) */
        @media (min-width: 48rem) {
          .col-md-4 { width: 33.3333%; }
        }

        /* col-lg-3 → 4 columns at --breakpoint-lg (64rem) */
        @media (min-width: 64rem) {
          .col-lg-3 { width: 25%; }
        }

        /* ── Card ── */
        .svc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          cursor: pointer;
          height: 100%;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          transition: background 0.3s, border-color 0.3s;
        }
        .dark .svc-card {
          background: #111113;
          border-color: rgba(255,255,255,0.06);
        }

        /* ── Card glow layers ── */
        .svc-glow-radial {
          position: absolute; inset: 0; border-radius: 1rem;
          pointer-events: none;
          transition: opacity 0.5s;
          background: radial-gradient(ellipse at 50% 0%, rgba(225,30,60,0.18) 0%, transparent 70%);
        }
        .svc-glow-border {
          position: absolute; inset: 0; border-radius: 1rem;
          pointer-events: none;
          transition: opacity 0.5s;
          box-shadow: 0 0 0 1px rgba(225,30,60,0.5), 0 0 30px rgba(225,30,60,0.12);
        }

        /* ── Icon wrapper ── */
        .svc-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1.75rem;
          color: var(--accent);
          transition: background 0.4s ease, transform 0.4s ease;
        }
        .svc-icon { width: 2.5rem; height: 2.5rem; }
        .svc-icon-glow {
          position: absolute; inset: 0; border-radius: 0.75rem;
          pointer-events: none;
          transition: opacity 0.5s;
          box-shadow: 0 0 16px rgba(225,30,60,0.3);
        }

        /* ── Title ── */
        .svc-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0 0 0.5rem;
          color: #111;
          transition: color 0.3s;
        }
        .dark .svc-title { color: #e5e5e5; }

        /* ── Divider ── */
        .svc-divider {
          height: 1px;
          margin: 0.75rem auto;
          transition: width 0.5s ease, background 0.5s ease;
        }

        /* ── Count + label ── */
        .svc-count {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(130,130,130,0.8);
          transition: color 0.3s;
          margin: 0;
        }
        .svc-number {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent);
          display: inline-block;
          font-variant-numeric: tabular-nums;
          transition: transform 0.3s ease;
        }

        /* ── Bottom accent bar ── */
        .svc-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          transition: width 0.5s ease;
        }
      `}</style>

      <section className="svc-section mb-20 mt-20 ">
        <div className="svc-noise" />
        <div className="svc-glow-tr" />
        <div className="svc-glow-bl" />

        <div className="svc-container">
          {/* Eyebrow */}
          <div className="svc-eyebrow">
            <div className="svc-eyebrow-line" />
            <span className="svc-eyebrow-text">What I Do</span>
            <div className="svc-eyebrow-line" />
          </div>

          {/* Bootstrap-style row */}
          <div className="svc-row">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}