import React from 'react';

export default function WhiteoutIntroStage({ progress }) {
  // Whiteout opacity: 0 at progress 0.12, 1 at 0.48
  const bgOpacity = Math.min(Math.max((progress - 0.12) / 0.36, 0), 1);
  
  // Typography entrance: enters 0.20 to 0.52
  const enterFactor = Math.min(Math.max((progress - 0.20) / 0.32, 0), 1);
  const easeEnter = 1 - Math.pow(1 - enterFactor, 3);

  return (
    <div 
      id="hero-whiteout-overlay"
      className="absolute inset-0 w-full h-full bg-white z-[95] flex flex-col items-center justify-center p-6 text-center will-change-[opacity]"
      style={{
        opacity: bgOpacity,
        pointerEvents: progress >= 0.95 ? 'auto' : 'none'
      }}
    >
      <div 
        className="w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center will-change-transform"
        style={{
          opacity: easeEnter,
          transform: `translateY(${(1 - easeEnter) * 24}px)`
        }}
      >
        <span className="inline-block font-sans text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase mb-3">
          E-COMET OUTVERSE — digital growth agency
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 leading-[1.08] tracking-tight">
          Where ambitious brands meet <br className="hidden sm:inline" />
          <span className="italic">one growth partner.</span>
        </h2>
        <p className="max-w-2xl mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
          One unified growth architecture scaling organic search visibility, high-performance web engineering, marketplace dominance, and brand prestige.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            Marketplaces
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            Performance Marketing
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            Web &amp; App Development
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
            YouTube &amp; Video
          </span>
        </div>
      </div>
    </div>
  );
}
