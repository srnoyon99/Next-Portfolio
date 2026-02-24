"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with seamless shopping experience, built with Next.js and Stripe.",
    category: "Front-End Project",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Banking Dashboard",
    description:
      "Intuitive banking dashboard with real-time analytics and transaction management features.",
    category: "Front-End Project",
    tags: ["React", "Chart.js", "Redux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness app with workout tracking, nutrition planning, and social features.",
    category: "Front-End Project",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "REST API Service",
    description:
      "Scalable REST API with authentication, rate limiting, and full CRUD operations using Node.js.",
    category: "Back-End Project",
    tags: ["Node.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    description:
      "Comprehensive real estate portal with property listings, virtual tours, and mortgage calculator.",
    category: "Back-End Project",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Travel Booking Platform",
    description:
      "User-friendly travel booking platform with flight search, hotel reservations, and itinerary planning.",
    category: "Back-End Project",
    tags: ["Django", "Redis", "API Integration"],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const filters = ["All", "Front-End Project", "Back-End Project"];

const categoryStyles = {
  "Front-End Project":
    "text-cyan-600 bg-cyan-50 border border-cyan-200 dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20",
  "Back-End Project":
    "text-violet-600 bg-violet-50 border border-violet-200 dark:text-violet-400 dark:bg-violet-400/10 dark:border-violet-400/20",
};

// GitHub SVG Icon
function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// External Link SVG Icon
function LinkIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="relative min-h-screen bg-white dark:bg-black py-24 px-4 overflow-hidden transition-colors duration-500">

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-100/60 dark:bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-violet-100/50 dark:bg-violet-600/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-100/50 dark:bg-blue-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              Featured{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #06b6d4 0%, #a855f7 100%)" }}
              >
                Projects
              </span>
            </h2>
            <p className="text-gray-500 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Explore my recent work showcasing creative solutions and innovative designs
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-400/30"
                      : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1.5 2.5A.5.5 0 012 2h12a.5.5 0 01.354.854l-5 5a.5.5 0 00-.146.353V14a.5.5 0 01-.854.354l-2-2A.5.5 0 016 12V8.207a.5.5 0 00-.146-.353l-4-4A.5.5 0 011.5 3.5v-1z" />
                  </svg>
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const isHovered = hoveredId === project.id;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                    bg-white border border-gray-200 hover:border-gray-300 hover:shadow-gray-200/60
                    dark:bg-[#0c0c0c] dark:border-white/[0.07] dark:hover:border-white/20 dark:hover:shadow-black/50"
                >
                  {/* ── IMAGE AREA ── */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark overlay on hover */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-400
                        bg-black/0 group-hover:bg-black/50`}
                    />

                    {/* ── ICON BUTTONS — appear on hover ── */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {/* Live Link button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Preview"
                        className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border transition-all duration-300
                          bg-white/15 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:scale-110 hover:shadow-lg
                          ${isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                        style={{ transitionDelay: isHovered ? "0ms" : "0ms" }}
                      >
                        <LinkIcon className="w-5 h-5" />
                      </a>

                      {/* GitHub button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub Repo"
                        className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm border transition-all duration-300
                          bg-white/15 border-white/30 text-white hover:bg-white hover:text-gray-900 hover:scale-110 hover:shadow-lg
                          ${isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                        style={{ transitionDelay: isHovered ? "60ms" : "0ms" }}
                      >
                        <GitHubIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* ── CARD CONTENT ── */}
                  <div className="p-6">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryStyles[project.category]}`}>
                      {project.category}
                    </span>

                    <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md
                            text-gray-500 bg-gray-100 border border-gray-200
                            dark:text-slate-400 dark:bg-white/5 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-14">
            <button className="flex items-center cursor-pointer gap-2.5 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 group
              bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300
              dark:bg-white/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30"
            >
              View All Projects
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}