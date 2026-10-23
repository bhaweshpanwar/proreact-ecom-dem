import React from 'react';

export default function Home2MobileHero({ data }) {
  const {
    eyebrow = "VOLUME 01 / 2026 · DIGITAL GROWTH ARCHITECTURE",
    headline = "Beyond digital. Into the next orbit.",
    description = "One senior team for ambitious brands scaling online. Marketplaces, performance marketing, high-conversion web engineering, and brand creative aligned directly to unit economics.",
    auditBtn = "Get a free audit",
    whatsappBtn = "WhatsApp us",
    heroImage = "/images/space/ring-part-2.jpg"
  } = data || {};

  return (
    <section className="relative w-full min-h-[92vh] bg-[#02040C] text-white flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 overflow-hidden select-none">
      
      {/* 1. Pure CSS Ambient Cosmic Backdrop (0 WebGL, 0 GPU VRAM) */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(37,99,235,0.22),rgba(2,4,12,0)_75%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -left-16 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* 2. Content Stack */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col space-y-6 pt-2">
        
        {/* Live Telemetry Pill */}
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300 font-semibold">
            {eyebrow}
          </span>
        </div>

        {/* High-Impact Mobile Headline */}
        <div className="space-y-1">
          <h1 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-[-0.03em] leading-[0.94] text-white">
            Beyond digital.<br />
            <span className="text-[#8A8A8A] font-bold block pt-1.5">
              Into the next orbit.
            </span>
          </h1>
        </div>

        {/* Senior Team Description */}
        <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          {description}
        </p>

        {/* Action Button Row: Big Mobile-Friendly Touch Targets */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href="/#closing"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white text-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-slate-200 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(255,255,255,0.18)] cursor-pointer"
          >
            <span>{auditBtn}</span>
            <span className="text-sm">→</span>
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 font-sans text-xs font-bold uppercase tracking-wider active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>{whatsappBtn}</span>
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Lightweight Compressed Visual Anchor (Fast, hardware-accelerated image) */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl mt-2 group">
          <img
            src={heroImage}
            alt="E-Comet Celestial Orbit"
            loading="eager"
            decoding="async"
            className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040C] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-300">
            <span className="px-2 py-0.5 rounded bg-black/80 border border-white/15 backdrop-blur-md">
              Sovereign Execution
            </span>
            <span className="text-slate-400 font-semibold">
              Five Orbits Unified
            </span>
          </div>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-3 gap-2 pt-2 text-center">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs">
            <div className="font-grotesk font-black text-lg sm:text-xl text-white">5+</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Vendors Replaced</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs">
            <div className="font-grotesk font-black text-lg sm:text-xl text-white">24h</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Partner Access</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs">
            <div className="font-grotesk font-black text-lg sm:text-xl text-white">100%</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Commercial P&amp;L</div>
          </div>
        </div>

      </div>

      {/* 3. Subtle Bottom Scroll Cue (Smooth Scroll to Section 2) */}
      <div className="relative z-10 pt-6 pb-2 flex flex-col items-center justify-center">
        <a
          href="#problem"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
          aria-label="Scroll to Problem section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
            Scroll to Explore
          </span>
          <span className="text-xs animate-bounce">↓</span>
        </a>
      </div>

    </section>
  );
}
