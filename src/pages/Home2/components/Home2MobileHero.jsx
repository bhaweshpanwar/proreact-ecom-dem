import React from 'react';

export default function Home2MobileHero({ data }) {
  const {
    headline = "Beyond digital. Into the next orbit.",
    description = "Stop managing five disconnected vendors who blame each other. We engineer full-funnel digital revenue—scaling Amazon marketplaces, high-margin paid acquisition, and custom web architecture governed strictly by your bottom line.",
    auditBtn = "Get a free audit",
    whatsappBtn = "WhatsApp us",
    heroImage = "/images/space/ring-part-2.jpg"
  } = data || {};

  return (
    <section className="relative w-full min-h-[90vh] bg-[#000000] text-white flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 overflow-hidden select-none">
      
      {/* Pure CSS Ambient Cosmic Depth (0 WebGL, 0 VRAM Overhead) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Content Flow */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col space-y-6 pt-3">
        
        {/* Bold Contrast Headline */}
        <h1 className="font-grotesk font-black text-[clamp(2.5rem,10.5vw,3.85rem)] uppercase tracking-[-0.04em] leading-[0.92] text-white">
          Beyond digital.<br />
          <span className="text-[#666666] font-bold block pt-1.5">
            Into the next orbit.
          </span>
        </h1>

        {/* Punchy, Non-Boring Commercial Copy */}
        <p className="font-sans text-[15px] sm:text-base text-[#D4D4D8] leading-relaxed font-normal">
          {description}
        </p>

        {/* Action Button Row: Big Mobile-Friendly Touch Targets */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href="/#closing"
            className="w-full sm:w-auto px-7 py-4 rounded-none bg-white text-black font-sans text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2.5 shadow-[0_4px_30px_rgba(255,255,255,0.22)] cursor-pointer"
          >
            <span>{auditBtn}</span>
            <span className="text-sm">→</span>
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-none bg-[#111111] hover:bg-[#1a1a1a] text-white border border-[#262626] font-sans text-xs font-bold uppercase tracking-wider active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-[#25D366] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>{whatsappBtn}</span>
            <span className="text-xs">↗</span>
          </a>
        </div>

        {/* Cinematic Visual Anchor (Optimized, lightweight, crisp) */}
        <div className="relative rounded-2xl overflow-hidden border border-[#222222] bg-[#0A0A0A] shadow-2xl mt-3 group">
          <img
            src={heroImage}
            alt="E-Comet Celestial Orbit"
            loading="eager"
            decoding="async"
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent pointer-events-none opacity-60" />
        </div>

      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="relative z-10 pt-4 pb-2 flex flex-col items-center justify-center">
        <a
          href="#problem"
          className="flex items-center gap-1.5 text-[#8A8A8A] hover:text-white transition-colors cursor-pointer py-1 font-mono text-[8px] uppercase tracking-[0.18em]"
          aria-label="Scroll to Problem section"
        >
          <span>Scroll to Explore</span>
          <span className="text-[9px] animate-bounce">↓</span>
        </a>
      </div>

    </section>
  );
}
