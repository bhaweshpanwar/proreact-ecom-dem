import React from 'react';

export default function WhiteoutIntroStage({ progress }) {
  // Stage opacity: 0 at progress 0.12, 1 at 0.44
  const bgOpacity = Math.min(Math.max((progress - 0.12) / 0.32, 0), 1);
  
  // Typography entrance: enters 0.18 to 0.48
  const enterFactor = Math.min(Math.max((progress - 0.18) / 0.30, 0), 1);
  const easeEnter = 1 - Math.pow(1 - enterFactor, 3);

  // Seamless transition to white hand-off at end of track (0.82 to 1.0)
  const exitWhite = Math.min(Math.max((progress - 0.82) / 0.18, 0), 1);

  return (
    <div 
      id="hero-whiteout-overlay"
      className="absolute inset-0 w-full h-full z-[95] flex flex-col items-center justify-center p-6 text-center will-change-[opacity] overflow-hidden"
      style={{
        opacity: bgOpacity,
        pointerEvents: progress >= 0.90 ? 'auto' : 'none'
      }}
    >
      {/* Full Background Space Image */}
      <img 
        src="/images/space/new-second-section-web.jpg" 
        alt="Deep Space Cosmic Horizon"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-105"
        style={{
          filter: `blur(${6 + easeEnter * 4}px) brightness(0.65)`,
          transform: `scale(${1.08 - easeEnter * 0.04})`,
          transition: 'filter 0.4s ease, transform 0.4s ease'
        }}
      />

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />

      {/* Frosted Glass Container with Ambient Blur */}
      <div 
        className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center will-change-transform p-8 sm:p-14 rounded-3xl backdrop-blur-xl bg-black/45 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
        style={{
          opacity: easeEnter,
          transform: `translateY(${(1 - easeEnter) * 20}px)`,
          filter: `blur(${(1 - easeEnter) * 8}px)`
        }}
      >
        <span className="inline-block font-sans text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-3">
          E-COMET OUTVERSE — digital growth agency
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight drop-shadow-md">
          Where ambitious brands meet <br className="hidden sm:inline" />
          <span className="italic text-slate-200">one growth partner.</span>
        </h2>
        <p className="max-w-2xl mt-4 text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
          One unified growth architecture scaling organic search visibility, high-performance web engineering, marketplace dominance, and brand prestige.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs">
            Marketplaces
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs">
            Performance Marketing
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs">
            Web &amp; App Development
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs">
            YouTube &amp; Video
          </span>
        </div>
      </div>

      {/* Seamless transition layer to pure white for IntroSection hand-off */}
      <div 
        className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-300"
        style={{ opacity: exitWhite }}
      />
    </div>
  );
}
