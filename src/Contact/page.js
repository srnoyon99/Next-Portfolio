"use client";

import { useState } from "react";

const ContactCard = ({ icon, title, lines }) => (
  <div className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-100 dark:bg-[#111111] border border-black/5 dark:border-white/5 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.08)] overflow-hidden">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.06),transparent_70%)]" />
    <div className="relative z-10 mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-slate-900/80 dark:bg-red-950/60 border border-red-800/40 group-hover:scale-110 transition-transform duration-300">
      <span className="text-red-500 text-xl">{icon}</span>
    </div>
    <h3 className="relative z-10 text-black dark:text-white font-bold text-xl mb-3 tracking-wide" style={{ fontFamily: "'Syne', sans-serif" }}>
      {title}
    </h3>
    <div className="relative z-10 space-y-1">
      {lines.map((line, i) => (
        <p key={i} className="text-black dark:text-zinc-400 text-sm leading-relaxed">{line}</p>
      ))}
    </div>
  </div>
);

const INITIAL = { name: "", phone: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus]     = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg]     = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
      setFormData(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrMsg(err.message);
    }
  };

  const inputBase =
    "w-full bg-white dark:bg-[#0d0d0d] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-black dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 outline-none focus:border-red-500/60 focus:shadow-[0_0_0_3px_rgba(220,38,38,0.08)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const isLoading = status === "loading";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-slide-up { animation: fadeSlideUp 0.4s ease forwards; }
      `}</style>

      <section
        className="relative min-h-screen bg-white dark:bg-[#1A1919] py-24 px-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >

        <div>
          <h1 className=" text-center mb-16 text-[40px] lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-700 to-red-400 " >Contact Me</h1>
        </div>

        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* ── Contact Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <ContactCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              }
              title="Address"
              lines={["Ecb Chottor, Cantonment, Dhaka"]}
            />
            <ContactCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              }
              title="E-Mail"
              lines={["shahriarnoyon1@gmail.com"]}
            />
            <ContactCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.5 11.5 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.59 1 1 0 0 1-.25 1.01l-2.2 2.19z" />
                </svg>
              }
              title="Call Me"
              lines={["+880 1822-798116"]}
            />
          </div>

          {/* ── Contact Form Card ── */}
          <div className="rounded-3xl bg-zinc-100 dark:bg-[#0e0e0e] border border-black/5 dark:border-white/5 p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Left — text */}
              <div>
                <p className="text-red-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Get In Touch
                </p>
                <h2 className="text-black dark:text-white text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Elevate your brand <br />
                  <span className="text-black/80 dark:text-white/90">with Me</span>
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-red-600" />
                  <div className="h-px w-6 bg-red-600/40" />
                  <div className="h-px w-3 bg-red-600/20" />
                </div>
              </div>

              {/* Right — form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* ── Success banner ── */}
                {status === "success" && (
                  <div className="fade-slide-up flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-green-500/70 text-xs mt-0.5">I'll get back to you soon. A confirmation was also sent to your email.</p>
                    </div>
                  </div>
                )}

                {/* ── Error banner ── */}
                {status === "error" && (
                  <div className="fade-slide-up flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Failed to send</p>
                      <p className="text-red-500/70 text-xs mt-0.5">{errMsg}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <input type="text"  name="name"    placeholder="Your Name"    value={formData.name}    onChange={handleChange} required disabled={isLoading} className={inputBase} />
                  <input type="tel"   name="phone"   placeholder="Phone Number" value={formData.phone}   onChange={handleChange} disabled={isLoading} className={inputBase} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input type="email" name="email"   placeholder="Your Email"   value={formData.email}   onChange={handleChange} required disabled={isLoading} className={inputBase} />
                  <input type="text"  name="subject" placeholder="Subject"      value={formData.subject} onChange={handleChange} disabled={isLoading} className={inputBase} />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className={`${inputBase} resize-none`}
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full py-4 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Appointment Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}