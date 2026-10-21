import React from 'react';

export default function Home2CosmicHandoff({ progress }) {
  // Portal fade-in: 0.12 to 0.44
  const bgOpacity = Math.min(Math.max((progress - 0.12) / 0.32, 0), 1);
  
  // Typography & HUD entrance: 0.18 to 0.50
  const enterFactor = Math.min(Math.max((progress - 0.18) / 0.32, 0), 1);
  const easeEnter = 1 - Math.pow(1 - enterFactor, 3);

  // Transition to Section 2: 0.85 to 1.0
  const exitFactor = Math.min(Math.max((progress - 0.85) / 0.15, 0), 1);

  return (
    <div 
      id="home2-cosmic-portal"
      className="absolute inset-0 w-full h-full z-[95] flex flex-col items-center justify-center p-4 sm:p-8 text-center will-change-[opacity] overflow-hidden select-none"
      style={{
        opacity: bgOpacity,
        pointerEvents: progress >= 0.88 ? 'auto' : 'none'
      }}
    >
      {/* Cinematic Deep Space Nebula Background */}
      <img 
        src="/images/space/new-second-section-web.jpg" 
        alt="Deep Space Cosmic Nebula Horizon"
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
        style={{
          filter: `blur(${Math.max(2, 8 - easeEnter * 4)}px) brightness(${0.5 + easeEnter * 0.25})`,
          transform: `scale(${1.1 - easeEnter * 0.05})`,
          transition: 'filter 0.4s ease, transform 0.4s ease'
        }}
      />

      {/* Atmospheric Radial Depth & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040A]/80 via-transparent to-[#02040A]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(2,4,10,0.85)_100%)] pointer-events-none" />

      {/* Floating Orbital Radar Ring HUD Graphic */}
      <div 
        className="absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full border border-cyan-500/15 pointer-events-none"
        style={{
          transform: `rotate(${progress * 180}deg) scale(${0.8 + easeEnter * 0.2})`,
          transition: 'transform 0.1s linear'
        }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
      </div>

      {/* Centered Glassmorphic Command Viewport */}
      <div 
        className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col items-center justify-center will-change-transform p-7 sm:p-14 rounded-[32px] sm:rounded-[40px] backdrop-blur-2xl bg-[#080C14]/55 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
        style={{
          opacity: easeEnter,
          transform: `translateY(${(1 - easeEnter) * 24}px) scale(${0.96 + easeEnter * 0.04})`
        }}
      >
        {/* Top Telemetry Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-cyan-300 uppercase">
            ORBIT SYSTEM 2.0 // DEEP SPACE DEPLOYMENT ACTIVE
          </span>
          <span className="hidden sm:inline-block w-px h-3 bg-white/20" />
          <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400">
            SECTOR: EXPONENTIAL ELEVATION
          </span>
        </div>

        {/* Hero Title */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.06] tracking-tight drop-shadow-lg max-w-4xl">
          Where ambitious brands elevate into <br className="hidden sm:inline" />
          <span className="italic bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            exponential orbit.
          </span>
        </h2>

        {/* Supporting Narrative */}
        <p className="max-w-2xl mt-5 text-sm sm:text-base lg:text-lg text-slate-200 font-sans leading-relaxed">
          One hyper-integrated growth architecture combining algorithmic marketplace dominance, precision performance marketing, and high-conversion digital engineering.
        </p>

        {/* 4 Interactive Tactical Capability Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-7">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Marketplace Engine
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Performance Media
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Engineered Web
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white shadow-xs transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
            Cinema &amp; Motion
          </span>
        </div>

        {/* Scroll Callout HUD */}
        <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="animate-bounce">↓</span> SCROLL TO INITIATE MATRIX
          </span>
          <span className="text-cyan-400 font-bold">100% SOVEREIGN EXECUTION</span>
        </div>
      </div>

      {/* Smooth transition into Section 2 */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02040C]/50 to-[#02040C] pointer-events-none transition-opacity duration-300"
        style={{ opacity: exitFactor }}
      />
    </div>
  );
}
