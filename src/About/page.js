"use client";

import { useState } from "react";

const skills = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Frontend Development",
    tags: "React.js, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
    title: "State Management",
    tags: "Redux, Zustand, React Query, Context API",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Backend & Database",
    tags: "Node.js, Express, MongoDB, PostgreSQL",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Tools & Deployment",
    tags: "Git, Docker, Vercel, AWS, CI/CD",
  },
];

const faqs = [
  {
    question: "What's your development approach?",
    answer:
      "I follow agile methodologies with a focus on clean code, component reusability, and user-centric design. I prioritize performance optimization and accessibility.",
  },
  {
    question: "Project delivery time estimate?",
    answer:
      "Timelines depend on project scope. Small projects typically take 1–2 weeks, while larger full-stack applications may take 4–8 weeks. I always provide a detailed estimate upfront.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development, UI/UX implementation, API integration, performance audits, and technical consulting for startups and businesses.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes! I offer ongoing maintenance packages that include bug fixes, dependency updates, performance monitoring, and feature additions.",
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

   const baseYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearCount = currentYear - baseYear + 1;


  return (
    <section className="relative bg-[#EDF5FF] dark:bg-black min-h-screen py-24 overflow-hidden transition-colors duration-300">

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-300/10 dark:bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-300/10 dark:bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[74.5rem] px-4 sm:px-6 lg:px-8">

        {/* ── HERO BIO ── */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            About Me
          </span>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Building digital{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              experiences
            </span>{" "}
            that matter
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-gray-500 dark:text-slate-400 sm:text-lg">
            I'm a full-stack developer passionate about crafting performant,
            accessible, and beautifully designed web applications. With {yearCount}+
            years of experience I turn complex problems into elegant solutions.
          </p>
        </div>

        {/* ── SKILL CARDS ── */}
        <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/50 dark:hover:border-cyan-500/40 hover:bg-white dark:hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-100/50 dark:hover:shadow-none"
            >
              {/* Hover radial glow — light */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
                style={{ background: "radial-gradient(circle at top left, rgba(14,165,233,0.06), transparent 60%)" }}
              />
              {/* Hover radial glow — dark */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
                style={{ background: "radial-gradient(circle at top left, rgba(56,189,248,0.08), transparent 60%)" }}
              />

              <div className="mb-4 inline-flex rounded-xl border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50 dark:bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400">
                {s.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-slate-500">{s.tags}</p>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div className="flex flex-col items-center">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What's the development{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              process like?
            </span>
          </h2>

          <div className="w-full max-w-[48rem] space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-300/60 dark:border-cyan-500/40 bg-cyan-50/80 dark:bg-white/[0.05] shadow-sm shadow-cyan-100/50 dark:shadow-none"
                      : "border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] hover:border-cyan-200 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-transparent"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-gray-800 dark:text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                        isOpen
                          ? "border-cyan-400 dark:border-cyan-500/50 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rotate-45"
                          : "border-gray-300 dark:border-white/20 text-gray-400 dark:text-slate-400"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-gray-500 dark:text-slate-400 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}