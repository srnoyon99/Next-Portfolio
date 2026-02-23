"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { end: 20,   suffix: "k+", label: "Projects Complete" },
  { end: 10,   suffix: "k+", label: "Natural Products"  },
  { end: 200,  suffix: "+",  label: "Client Reviews"    },
  { end: 1000, suffix: "+",  label: "Satisfied Clients" },
];

const designSkills = [
  { name: "Photoshop",          level: 100 },
  { name: "Figma",              level: 95  },
  { name: "Adobe XD",          level: 60  },
  { name: "Adobe Illustrator", level: 70  },
];

const devSkills = [
  { name: "HTML",       level: 100 },
  { name: "CSS",        level: 95  },
  { name: "JavaScript", level: 60  },
  { name: "WordPress",  level: 70  },
];

// ─── Easing ───────────────────────────────────────────────────────────────────
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

// ─── useCountUp ───────────────────────────────────────────────────────────────
function useCountUp(end, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end, duration]);

  return count;
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.4) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({ end, suffix, label, index }) {
  const [ref, inView] = useInView(0.4);
  const count = useCountUp(end, 1800, inView);

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
        transition: `opacity 0.65s ease ${index * 110}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 110}ms`,
      }}
    >
      <div className="stat-value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ─── SkillBar — percent counts up too ─────────────────────────────────────────
function SkillBar({ name, level, delay = 0 }) {
  const [ref, inView] = useInView(0.3);
  const [started, setStarted] = useState(false);
  const count = useCountUp(level, 1000, started);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  return (
    <div ref={ref} className="skill-row">
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span
          className="skill-pct"
          style={{ color: started ? "#ff1f5a" : "#444" }}
        >
          {count}%
        </span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: started ? `${level}%` : "0%",
            transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ─── HeroNumber — years since 2025, zero-padded, counts up ───────────────────
function HeroNumber() {
  const [ref, inView] = useInView(0.3);

  // Years of experience: starts at 1 in 2025, increments each year
  const currentYear = new Date().getFullYear();
  const yearsOfExp = Math.max(1, currentYear - 2024); // 2025→1, 2026→2, etc.

  const count = useCountUp(yearsOfExp, 1400, inView);

  // Zero-pad to 2 digits: 1→"01", 12→"12"
  const display = String(count).padStart(2, "0");

  return (
    <div ref={ref} className="hero-number">
      {display}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Inter font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Keyframes ─────────────────────────────── */
        @keyframes floatY {
          0%,100% { transform: translateY(0);     }
          50%      { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position:  200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes glowPulse {
          0%,100% { text-shadow: 0 0 40px rgba(255,31,90,0.25); }
          50%      { text-shadow: 0 0 90px rgba(255,31,90,0.6), 0 0 150px rgba(255,31,90,0.2); }
        }
        @keyframes topLineGrow {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes blobDrift {
          0%,100% { transform: translate(0,0) scale(1);           }
          50%      { transform: translate(28px,18px) scale(1.05); }
        }

        /* ── CSS Variables — Light (default) ──────── */
        .about-section {
          --bg:              #F8F8F8;
          --hero-card-bg:    linear-gradient(140deg, #fff0f4 0%, #fff5f7 45%, #ffffff 100%);
          --hero-card-border:rgba(255,31,90,0.18);
          --heading-color:   #0a0a0a;
          --heading-fade-from: rgba(10,10,10,0.85);
          --heading-fade-to:   rgba(10,10,10,0.4);
          --desc-color:      rgba(0,0,0,0.42);
          --stat-card-bg:    rgba(0,0,0,0.03);
          --stat-card-border:rgba(0,0,0,0.08);
          --stat-value-color:#0a0a0a;
          --stat-label-color:rgba(0,0,0,0.38);
          --skill-name-color:rgba(0,0,0,0.45);
          --skill-track-bg:  rgba(0,0,0,0.08);
          --col-rule-from:   rgba(0,0,0,0.12);
          --col-title-color: #0a0a0a;
        }

        /* ── CSS Variables — Dark ──────────────────── */
        .dark .about-section {
          --bg:              #171717;
          --hero-card-bg:    linear-gradient(140deg, #1c0010 0%, #0c0005 45%, #050505 100%);
          --hero-card-border:rgba(255,31,90,0.18);
          --heading-color:   #ffffff;
          --heading-fade-from: rgba(255,255,255,0.85);
          --heading-fade-to:   rgba(255,255,255,0.4);
          --desc-color:      rgba(255,255,255,0.35);
          --stat-card-bg:    rgba(255,255,255,0.025);
          --stat-card-border:rgba(255,255,255,0.07);
          --stat-value-color:#ffffff;
          --stat-label-color:rgba(255,255,255,0.3);
          --skill-name-color:rgba(255,255,255,0.48);
          --skill-track-bg:  rgba(255,255,255,0.07);
          --col-rule-from:   rgba(255,255,255,0.1);
          --col-title-color: #ffffff;
        }

        /* ── Section ───────────────────────────────── */
        .about-section {
          background: var(--bg);
          min-height: 100vh;
          padding: 90px 6%;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }

        /* ── Blobs ─────────────────────────────────── */
        .blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .blob-1 {
          width: 700px; height: 700px;
          top: -280px; left: -280px;
          background: radial-gradient(circle, rgba(255,31,90,0.09) 0%, transparent 65%);
          animation: blobDrift 14s ease-in-out infinite;
        }
        .blob-2 {
          width: 500px; height: 500px;
          bottom: -180px; right: -180px;
          background: radial-gradient(circle, rgba(255,31,90,0.07) 0%, transparent 65%);
          animation: blobDrift 14s ease-in-out infinite;
          animation-delay: -7s;
        }
        .blob-3 {
          width: 320px; height: 320px;
          top: 55%; left: 52%;
          transform: translate(-50%,-50%);
          background: radial-gradient(circle, rgba(255,31,90,0.04) 0%, transparent 65%);
          animation: blobDrift 14s ease-in-out infinite;
          animation-delay: -3.5s;
        }

        /* ── Inner wrapper ─────────────────────────── */
        .about-inner { max-width: 1240px; margin: 0 auto; }

        /* ── Top grid ──────────────────────────────── */
        .top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 200px;
          margin-bottom: 88px;
          align-items: stretch;
        }

        /* ── Hero card ─────────────────────────────── */
        .hero-card {
          background: var(--hero-card-bg);
          border: 1px solid var(--hero-card-border);
          border-radius: 24px;
          padding: 52px 44px 44px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .hero-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,31,90,0.65), transparent);
          animation: topLineGrow 1.4s ease 0.3s both;
        }
        .hero-card::after {
          content: '';
          position: absolute;
          bottom: 22px; right: 22px;
          width: 44px; height: 44px;
          border-right: 1.5px solid rgba(255,31,90,0.2);
          border-bottom: 1.5px solid rgba(255,31,90,0.2);
          border-radius: 0 0 10px 0;
        }

        /* ── Hero badge ────────────────────────────── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,31,90,0.1);
          border: 1px solid rgba(255,31,90,0.22);
          border-radius: 100px;
          padding: 5px 13px;
          margin-bottom: 18px;
          width: fit-content;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ff1f5a;
          box-shadow: 0 0 8px rgba(255,31,90,0.9);
        }
        .hero-badge-text {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: #ff1f5a;
          text-transform: uppercase;
        }

        /* ── Hero number ───────────────────────────── */
        .hero-number {
          font-family: 'Inter', sans-serif;
          font-size: clamp(86px, 11.5vw, 148px);
          font-weight: 900;
          color: #ff1f5a;
          line-height: 0.85;
          letter-spacing: -5px;
          display: inline-block;
          animation: floatY 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite;
          margin-bottom: 14px;
          font-variant-numeric: tabular-nums;
        }

        /* ── Hero heading ──────────────────────────── */
        .hero-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 800;
          color: var(--heading-color);
          line-height: 1.18;
          letter-spacing: -0.8px;
          margin-bottom: 24px;
          transition: color 0.3s ease;
        }
        .hero-heading-fade {
          background: linear-gradient(90deg, var(--heading-fade-from) 0%, var(--heading-fade-to) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Hero description ──────────────────────── */
        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 400;
          color: var(--desc-color);
          line-height: 1.85;
          max-width: 380px;
          transition: color 0.3s ease;
        }

        /* ── Stats grid ────────────────────────────── */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .stat-card {
          background: var(--stat-card-bg);
          border: 1px solid var(--stat-card-border);
          border-radius: 20px;
          padding: clamp(22px, 3vw, 40px) clamp(14px, 2vw, 28px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition:
            background    0.3s ease,
            border-color  0.3s ease,
            transform     0.35s cubic-bezier(0.22,1,0.36,1),
            box-shadow    0.3s ease;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,31,90,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(255,31,90,0.07);
          border-color: rgba(255,31,90,0.28);
          transform: translateY(-5px);
          box-shadow: 0 24px 64px rgba(255,31,90,0.11);
        }
        .stat-card:hover::before { opacity: 1; }

        .stat-value {
          font-family: 'Inter', sans-serif;
          font-size: clamp(26px, 3.6vw, 48px);
          font-weight: 800;
          color: var(--stat-value-color);
          line-height: 1;
          letter-spacing: -1.5px;
          font-variant-numeric: tabular-nums;
          transition: color 0.3s ease;
        }
        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: clamp(9px, 0.85vw, 11px);
          font-weight: 500;
          color: var(--stat-label-color);
          letter-spacing: 1.5px;
          text-align: center;
          text-transform: uppercase;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        /* ── Skills eyebrow ────────────────────────── */
        .skills-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 52px;
        }
        .skills-eyebrow-line {
          width: 36px; height: 2px;
          background: linear-gradient(90deg, #ff1f5a, rgba(255,31,90,0.2));
          border-radius: 2px;
        }
        .skills-eyebrow-text {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          color: #ff1f5a;
          text-transform: uppercase;
        }

        /* ── Skills columns ────────────────────────── */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }
        .skills-col-heading {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 38px;
        }
        .skills-col-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(17px, 1.9vw, 26px);
          font-weight: 700;
          color: var(--col-title-color);
          letter-spacing: -0.4px;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .skills-col-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--col-rule-from), transparent);
        }

        /* ── Skill bar ─────────────────────────────── */
        .skill-row { margin-bottom: 28px; }
        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .skill-name {
          font-family: 'Inter', sans-serif;
          font-size: clamp(9.5px, 0.95vw, 11.5px);
          font-weight: 600;
          letter-spacing: 1.8px;
          color: var(--skill-name-color);
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .skill-pct {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          transition: color 0.4s ease;
          font-variant-numeric: tabular-nums;
          min-width: 36px;
          text-align: right;
        }
        .skill-track {
          height: 3px;
          background: var(--skill-track-bg);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        .skill-fill {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          background: linear-gradient(90deg, #ff1f5a 0%, #ff6685 50%, #ff1f5a 100%);
          background-size: 200% 100%;
          border-radius: 4px;
          box-shadow: 0 0 14px rgba(255,31,90,0.5);
          animation: shimmer 2.5s infinite linear;
        }

        /* ── Responsive ────────────────────────────── */
        @media (max-width: 1024px) {
          .about-section { padding: 72px 5%; }
          .skills-grid { gap: 40px; }
        }
        @media (max-width: 800px) {
          .top-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 64px;
          }
          .hero-card { padding: 40px 32px 36px; }
          .hero-number { letter-spacing: -4px; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
          .skills-grid { grid-template-columns: 1fr; gap: 44px; }
          .skills-eyebrow { margin-bottom: 38px; }
        }
        @media (max-width: 480px) {
          .about-section { padding: 52px 5%; }
          .hero-card { padding: 30px 22px 28px; border-radius: 18px; }
          .hero-number { letter-spacing: -3px; }
          .stat-card { border-radius: 14px; }
          .stat-value { letter-spacing: -1px; }
          .top-grid { margin-bottom: 48px; }
        }
        @media (max-width: 360px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="about-section bg-white dark:bg-black">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className=" mb-10">
          <h1 className=" text-black dark:text-amber-50 text-6xl font-extrabold  text-center" >Behind every great app is an <span>even greater developer</span></h1>
          <p className=" text-black dark:text-slate-300 text-center text-lg  ">I specialize in building full-stack web applications with modern technologies, creating intuitive interfaces and robust backend solutions that drive results</p>
        </div>

        <div className="about-inner ">

          {/* ── Top ── */}
          <div className="top-grid">

            {/* Hero card */}
            <div
              className="hero-card"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible
                  ? "translateX(0) translateY(0)"
                  : "translateX(-36px) translateY(12px)",
                transition: "opacity 0.85s ease, transform 0.85s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="hero-badge">
                <div className="hero-badge-dot" />
                <span className="hero-badge-text">Since 1999</span>
              </div>

              {/* Count-up hero number */}
              <HeroNumber />

              <h2 className="hero-heading">
                Years Of<br />
                <span className="hero-heading-fade">Experience</span>
              </h2>

              <p className="hero-desc">
                Business consulting experts providing strategic advice and
                guidance to help organizations elevate their performance
                and operational efficiency.
              </p>
            </div>

            {/* Stats — each number counts up */}
            <div className="stats-grid">
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} index={i} />
              ))}
            </div>
          </div>

          {/* ── Skills — percentages count up ── */}
          <div>
            <div className="skills-eyebrow">
              <div className="skills-eyebrow-line" />
              <span className="skills-eyebrow-text">Expertise &amp; Skills</span>
            </div>

            <div className="skills-grid">
              <div>
                <div className="skills-col-heading">
                  <h3 className="skills-col-title">Design Skill</h3>
                  <div className="skills-col-rule" />
                </div>
                {designSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 130} />
                ))}
              </div>

              <div>
                <div className="skills-col-heading">
                  <h3 className="skills-col-title">Development Skill</h3>
                  <div className="skills-col-rule" />
                </div>
                {devSkills.map((s, i) => (
                  <SkillBar key={s.name} {...s} delay={i * 130 + 160} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}