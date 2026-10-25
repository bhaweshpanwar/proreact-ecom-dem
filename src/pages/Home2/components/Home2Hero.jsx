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
    <section className="relative pt-20 sm:pt-24 min-h-[92vh] flex flex-col justify-between bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      
      {/* Top Metadata Row (Editorial Sub-header) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-4 border-b border-[#1A1A1A] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#8A8A8A]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#FFFFFF]" />
          <span>{eyebrow}</span>
        </div>
        <div className="flex items-center gap-6">
          <span>NO BROKEN SILOS</span>
          <span className="hidden sm:inline">100% COMMERCIAL SOVEREIGNTY</span>
          <span>MUMBAI &amp; GLOBAL</span>
        </div>
      </div>

      {/* Hero Content Grid: Asymmetric 12-Column Editorial Structure */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-grow">
        
        {/* Left Column (Huge Headline & Action Bar) */}
        <div className="lg:col-span-8 space-y-8">
          <h1 className="font-grotesk font-bold text-[clamp(44px,7.5vw,130px)] leading-[0.92] tracking-[-0.04em] text-[#FFFFFF] uppercase">
            Beyond digital. <br />
            <span className="text-[#8A8A8A]">Into the next orbit.</span>
          </h1>

          <p className="font-grotesk text-base sm:text-lg lg:text-xl text-[#E5E5E5] leading-relaxed max-w-[56ch]">
            {description}
          </p>

          {/* Action Button Row: Flat Rectangular Blocks */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#audit"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FFFFFF] text-[#000000] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors flex items-center gap-3"
            >
              <span>{auditBtn}</span>
              <span>→</span>
            </a>

            <a
              href="https://wa.me/919999999999" // TODO: Add verified business WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-[#FFFFFF] border border-[#404040] font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1A1A1A] hover:border-[#666666] transition-colors flex items-center gap-3"
            >
              <span>{whatsappBtn}</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Photographic Preview & Coordinates */}
        <div className="lg:col-span-4 w-full">
          <div className="border border-[#262626] bg-[#0A0A0A] p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]">
              <img
                src={heroImage}
                alt="Planetary Orbital Horizon - E-Comet Space Photography"
                className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#000000]/80 p-2 font-mono text-[10px] text-[#8A8A8A] flex justify-between uppercase">
                <span>ORBIT 01 // TRAJECTORY</span>
                <span>48H RAPID AUDIT</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Section Index */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-3 sm:py-4 border-t border-[#1A1A1A] flex items-center justify-between font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="animate-pulse">↓</span>
          <span>Scroll to explore</span>
        </div>
        <div className="flex items-center gap-6">
          <span>01 / 13 SECTIONS</span>
          <span className="hidden sm:inline">REPORT CODE: ECO-2026</span>
        </div>
      </div>

    </section>
  );
}
