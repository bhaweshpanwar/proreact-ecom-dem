import React from 'react';

export default function Home2Hero({ data }) {
  const {
    eyebrow = "VOLUME 01 / 2026 · DIGITAL GROWTH ARCHITECTURE",
    headline = "Beyond digital. Into the next orbit.",
    description = "One senior team for ambitious brands scaling online. Marketplaces, performance marketing, high-conversion web engineering, and brand creative aligned directly to unit economics.",
    auditBtn = "Get a free audit",
    whatsappBtn = "WhatsApp us",
    heroImage = "/images/space/ring-part-2.jpg"
  } = data || {};

  return (
    <section className="relative pt-20 sm:pt-24 min-h-[92vh] flex flex-col justify-between bg-[#040612] text-[#FFFFFF] border-b border-indigo-950/70 overflow-hidden">
      
      {/* Ambient Cosmic Color Nebulae */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-600/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] rounded-full bg-indigo-600/15 blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      {/* Top Metadata Row */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          <span className="text-cyan-300 font-bold">{eyebrow}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-300">NO BROKEN SILOS</span>
          <span className="hidden sm:inline text-indigo-300">100% COMMERCIAL SOVEREIGNTY</span>
          <span className="text-slate-300">MUMBAI &amp; GLOBAL</span>
        </div>
      </div>

      {/* Hero Content Grid: Asymmetric 12-Column Editorial Structure */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-grow">
        
        {/* Left Column (Huge Headline & Action Bar) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-sans text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Accepting 3 New Partner Accounts For Q2</span>
          </div>

          <h1 className="font-grotesk font-black text-[clamp(44px,7.2vw,126px)] leading-[0.92] tracking-[-0.04em] uppercase text-[#FFFFFF]">
            Beyond digital. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Into the next orbit.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-[56ch]">
            {description}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#audit"
              className="px-7 sm:px-9 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-3"
            >
              <span>{auditBtn}</span>
              <span className="text-cyan-200">→</span>
            </a>

            <a
              href="https://wa.me/919999999999" // TODO: Add verified business WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 sm:px-9 py-4 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-black font-sans text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-[#25D366]/30 hover:-translate-y-0.5 transition-all flex items-center gap-3"
            >
              <span>{whatsappBtn}</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Photographic Preview & Coordinates */}
        <div className="lg:col-span-4 w-full">
          <div className="rounded-xl border border-indigo-900/60 bg-[#0A0D1E]/80 backdrop-blur-md p-2 shadow-2xl shadow-indigo-950/50">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#070914] group">
              <img
                src={heroImage}
                alt="Planetary Orbital Horizon - E-Comet Space Photography"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#050711]/90 backdrop-blur-md rounded-md p-2.5 border border-white/10 font-sans text-[10px] sm:text-[11px] font-semibold text-slate-300 flex justify-between uppercase tracking-wider">
                <span className="text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  ORBIT 01 // TELEMETRY
                </span>
                <span className="text-emerald-400">48H RAPID AUDIT</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Section Index */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-400">
        <div className="flex items-center gap-2 text-cyan-400">
          <span className="animate-bounce">↓</span>
          <span>Scroll to explore the architecture</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-300">01 / 13 SECTIONS</span>
          <span className="hidden sm:inline text-indigo-400 font-bold">REPORT CODE: ECO-2026</span>
        </div>
      </div>

    </section>
  );
}
