import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

// =========================================================================
// CELESTIAL COMET & ORBIT TILE (Vector Comet & Lines matching index.html)
// Used in place of all raster images for pure vector rendering & zero latency
// =========================================================================
function CelestialCometTile({ tone = 'mono', label = '', code = '01', aspect = 'aspect-[16/10]' }) {
  const toneConfigs = {
    mono: {
      c1: '#1E2430',
      c2: '#F8FAFC',
      stroke: '#080B10',
      dot: '#080B10',
      rot: -18,
      cx: 340,
      cy: 160
    },
    dark: {
      c1: '#252B36',
      c2: '#080B10',
      stroke: '#475569',
      dot: '#FFFFFF',
      rot: -22,
      cx: 320,
      cy: 200,
      dark: true
    }
  };

  const cfg = toneConfigs[tone] || (tone === 'dark' ? toneConfigs.dark : toneConfigs.mono);
  const gradId = `comet-grad-${code.replace(/[^a-zA-Z0-9]/g, '')}`;
  const sunId = `comet-sun-${code.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className={`w-full ${aspect} relative overflow-hidden select-none`}>
      <svg 
        viewBox="0 0 600 400" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full select-none group-hover:scale-105 transition-transform duration-700" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={cfg.c1} stopOpacity={cfg.dark ? "0.22" : "0.2"} />
            <stop offset="100%" stopColor={cfg.dark ? "#0A0E1A" : cfg.c2} stopOpacity={cfg.dark ? "0.98" : "0.96"} />
          </linearGradient>
          <radialGradient id={sunId} cx="70%" cy="30%" r="60%">
            <stop offset="0%" stopColor={cfg.c1} stopOpacity={cfg.dark ? "0.35" : "0.25"} />
            <stop offset="100%" stopColor={cfg.dark ? "#0A0E1A" : "#FFFFFF"} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Gradient Fill */}
        <rect width="100%" height="100%" fill={`url(#${gradId})`} />
        
        {/* Luminous Sun / Nebula Halo */}
        <circle cx="420" cy="120" r="180" fill={`url(#${sunId})`} />

        {/* Subtle Background Grid Lines */}
        <line x1="0" y1="100" x2="600" y2="100" stroke={cfg.stroke} strokeWidth="0.5" opacity={cfg.dark ? "0.15" : "0.1"} strokeDasharray="3 6" />
        <line x1="0" y1="200" x2="600" y2="200" stroke={cfg.stroke} strokeWidth="0.5" opacity={cfg.dark ? "0.15" : "0.1"} strokeDasharray="3 6" />
        <line x1="0" y1="300" x2="600" y2="300" stroke={cfg.stroke} strokeWidth="0.5" opacity={cfg.dark ? "0.15" : "0.1"} strokeDasharray="3 6" />
        <line x1="200" y1="0" x2="200" y2="400" stroke={cfg.stroke} strokeWidth="0.5" opacity={cfg.dark ? "0.15" : "0.1"} strokeDasharray="3 6" />
        <line x1="400" y1="0" x2="400" y2="400" stroke={cfg.stroke} strokeWidth="0.5" opacity={cfg.dark ? "0.15" : "0.1"} strokeDasharray="3 6" />

        {/* Grand Orbital Ellipse 1 (Dotted) */}
        <ellipse 
          cx="300" 
          cy="200" 
          rx="260" 
          ry="120" 
          fill="none" 
          stroke={cfg.stroke} 
          strokeWidth="0.85" 
          strokeDasharray="4 6" 
          opacity="0.45" 
          transform={`rotate(${cfg.rot} 300 200)`} 
        />

        {/* Inner Solid Orbital Ellipse 2 */}
        <ellipse 
          cx="300" 
          cy="200" 
          rx="170" 
          ry="80" 
          fill="none" 
          stroke={cfg.stroke} 
          strokeWidth="0.75" 
          opacity="0.3" 
          transform={`rotate(${cfg.rot * -0.6} 300 200)`} 
        />

        {/* Core Circular Orbital Range */}
        <circle cx="300" cy="200" r="80" fill="none" stroke={cfg.stroke} strokeWidth="0.75" opacity="0.25" />

        {/* Diagonal Comet Velocity Trajectory Vector */}
        <line x1="50" y1="350" x2="550" y2="50" stroke={cfg.stroke} strokeWidth="0.75" opacity="0.25" />
        
        {/* Orbit Crosshair Center */}
        <circle cx="300" cy="200" r="2.5" fill={cfg.stroke} opacity="0.4" />

        {/* Orbiting Comet Nucleus with Outer Energy Aura */}
        <circle cx={cfg.cx} cy={cfg.cy} r="14" fill={cfg.dot} opacity="0.15" />
        <circle cx={cfg.cx} cy={cfg.cy} r="7" fill={cfg.dot} opacity="0.35" />
        <circle cx={cfg.cx} cy={cfg.cy} r="3.5" fill={cfg.dark ? "#FFFFFF" : cfg.stroke} />
        
        {/* Secondary Micro-Orbiter */}
        <circle cx={600 - cfg.cx * 0.85} cy={400 - cfg.cy * 0.85} r="2.5" fill={cfg.stroke} opacity="0.6" />
      </svg>

      {/* Top Left Telemetry Coordinate Pill */}
      <div className="absolute top-3.5 left-4 z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cfg.dot }} />
        <span className={`text-[9.5px] font-mono tracking-widest uppercase font-semibold ${cfg.dark ? 'text-slate-300' : 'text-slate-500'}`}>
          {code} · {label}
        </span>
      </div>

      {/* Bottom Right Live Orbit Metric */}
      <div className={`absolute bottom-3 right-4 z-10 text-[9px] font-mono tracking-wider uppercase ${cfg.dark ? 'text-slate-400' : 'text-slate-400'}`}>
        ORBIT // 360° HARMONIC
      </div>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // 1. Hero text and pill entrance
      gsap.fromTo(
        '.about-hero-anim',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );

      // 2. Hero Floating preview tiles on the right
      gsap.fromTo(
        '.about-floating-card',
        { scale: 0.92, opacity: 0, y: 25 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      // 3. Philosophy section reveal
      gsap.fromTo(
        '.about-reveal-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-philosophy',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Mission & Vision Bento Cards
      gsap.fromTo(
        '.bento-card-left',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-mission',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        '.bento-card-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-mission',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Visual Gallery Stagger
      gsap.fromTo(
        '.gallery-img-card',
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-gallery',
            start: 'top 78%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 6. Values Cards Stagger
      gsap.fromTo(
        '.value-card',
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-values',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 7. Operating Framework Steps
      gsap.fromTo(
        '.framework-step',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-framework',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FBFBFA] text-slate-900 select-none overflow-x-hidden pt-20">
      
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (Clean Canvas Container matching All Pillar Pages)     */}
      {/* ===================================================================== */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-6 sm:pb-12">
        <div className="relative bg-[#F4F4F1] border border-slate-200/90 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-sm">
          
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-3xl bg-slate-400"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Display Heading, Sub-copy & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category Kicker Badge */}
              <div className="about-hero-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/70 text-[11px] font-mono font-bold tracking-wider text-slate-700 shadow-2xs mb-6">
                <span>CORE AGENCY IDENTITY · ABOUT E-COMET</span>
              </div>

              {/* Single Prominent Display Heading */}
              <h1 className="about-hero-anim font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-tight text-space-950 leading-[1.08] mb-6">
                Helping Businesses Build a Stronger Digital Presence.
              </h1>

              {/* Clean Subtitle */}
              <p className="about-hero-anim font-sans text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-4">
                A business-first approach to e-commerce management, digital marketing, website development, and video services.
              </p>

              {/* Rich Narrative Body Paragraph */}
              <p className="about-hero-anim font-sans text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl mb-10">
                E-Comet brings practical digital capabilities under one coordinated governance model. We eliminate agency silos, vague retainers, and fragmented communication to help ambitious brands build long-term enterprise equity and scalable customer acquisition.
              </p>

              {/* Dual Action Buttons */}
              <div className="about-hero-anim flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#closing"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-sm font-semibold tracking-wide transition-all hover:scale-105 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </a>

                <a
                  href="#philosophy"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-sans text-sm font-semibold tracking-wide transition-all shadow-2xs inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Our Philosophy</span>
                  <span>↓</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div className="about-hero-anim mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-6 text-[12px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="text-[#080B10] font-bold">✓</span>
                  <span>100% In-House Senior Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#080B10] font-bold">✓</span>
                  <span>Direct Written SLAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#080B10] font-bold">✓</span>
                  <span>Zero Junior Trainees</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Visual Tiles (Maze Screenshot Style) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
              
              {/* Blurred Background Card (Depth-of-field effect from Maze) */}
              <div 
                className="about-floating-card absolute -top-4 -right-2 w-56 sm:w-64 h-48 sm:h-56 bg-white/70 border border-slate-200/70 rounded-3xl shadow-lg p-5 blur-[2.5px] opacity-75 transform rotate-6 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-200 mb-3" />
                <div className="h-3.5 bg-slate-200 rounded-full w-3/4 mb-2" />
                <div className="h-2.5 bg-slate-100 rounded-full w-1/2" />
              </div>

              {/* Main Crisp Foreground Card 1 (Top Hero Tile - Services card style) */}
              <div className="about-floating-card relative z-20 w-full max-w-[340px] sm:max-w-[380px] bg-[#FAFAFA] border border-stone-200/90 rounded-[28px] p-6 sm:p-7 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200/60 mb-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    PRACTICE ARCHITECTURE
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                    ACTIVE
                  </span>
                </div>

                {/* Card Title & Core Metrics - Serif font */}
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  E-Comet Operating Core
                </h3>
                <p className="font-sans text-xs text-slate-500 line-clamp-2 mb-5">
                  Synchronized execution spanning marketplace management, digital marketing, website development, and video services.
                </p>

                {/* 3 Live Metric Badges */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <div className="space-y-0.5">
                    <div className="text-[14px] font-sans font-bold text-slate-900">4 Pillars</div>
                    <div className="text-[9.5px] font-mono text-slate-500 leading-tight">Capabilities</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[14px] font-sans font-bold text-slate-900">100%</div>
                    <div className="text-[9.5px] font-mono text-slate-500 leading-tight">In-House</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[14px] font-sans font-bold text-slate-900">0 Bloat</div>
                    <div className="text-[9.5px] font-mono text-slate-500 leading-tight">Governance</div>
                  </div>
                </div>

                {/* Platform Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-700">Amazon 1P &amp; 3P</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-700">Shopify Plus</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-700">Video &amp; Motion</span>
                </div>
              </div>

              {/* Foreground Card 2 (Bottom Offset Mini Card) */}
              <div className="about-floating-card absolute -bottom-6 -left-2 sm:-left-6 z-30 bg-[#080B10] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex items-center gap-3.5 max-w-[280px]">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold text-white shadow-sm bg-[#252B36]">
                  ⚡
                </div>
                <div>
                  <div className="text-[12px] font-sans font-bold text-white leading-tight">
                    Direct Senior Lead
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Zero Trainee Delegation
                  </div>
                </div>
              </div>

              {/* Bottom Right Floating Badge Pill */}
              <div 
                className="about-floating-card absolute bottom-2 -right-3 z-30 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center font-bold text-slate-800 hover:scale-110 transition-transform cursor-pointer"
                title="E-Comet Certified Architecture"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#080B10]" />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. WHO WE ARE & EDITORIAL PHILOSOPHY                                  */}
      {/* ===================================================================== */}
      <section id="philosophy" className="sec-philosophy relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                01 · Brand Genesis &amp; Positioning
              </span>

              <h2 className="about-reveal-text text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15]">
                Digital growth starts with understanding the business — not choosing tools without purpose.
              </h2>

              <p className="about-reveal-text text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                E-Comet is a digital services brand supporting businesses across e-commerce, digital marketing, website development, and YouTube and video services.
              </p>

              <p className="about-reveal-text text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Whether a business is starting online, improving its current presence, or bringing multiple channels together, our approach is to understand the requirement, define the scope, and recommend suitable next steps.
              </p>

              <p className="about-reveal-text text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Instead of selling bloated agency packages with generic retainers, we build bespoke operational pods around your product margins, inventory cycles, and audience behavior.
              </p>

              {/* 3 Pillar Value Chips */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="group p-6 rounded-[24px] bg-[#FAFAFA] border border-stone-200/90 hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#080B10] font-semibold select-none text-xs">―</span>
                    <span className="text-xs font-mono font-bold text-space-950 uppercase tracking-wider block">
                      Clarity First
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Straightforward scope, written deliverable guardrails, and realistic milestones before work begins.
                  </p>
                </div>

                <div className="group p-6 rounded-[24px] bg-[#FAFAFA] border border-stone-200/90 hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#080B10] font-semibold select-none text-xs">―</span>
                    <span className="text-xs font-mono font-bold text-space-950 uppercase tracking-wider block">
                      Connected
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    E-commerce, web engineering, video production, and performance ads synchronised under one roof.
                  </p>
                </div>

                <div className="group p-6 rounded-[24px] bg-[#FAFAFA] border border-stone-200/90 hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#080B10] font-semibold select-none text-xs">―</span>
                    <span className="text-xs font-mono font-bold text-space-950 uppercase tracking-wider block">
                      No Bloat
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Pragmatic solutions shaped around real business resources, unit economics, and cash flow reality.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Editorial Architectural Card with Comet & Lines (No Real Images) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] overflow-hidden border border-stone-200/90 shadow-xl group bg-[#080B10]">
                <CelestialCometTile 
                  tone="dark" 
                  label="PRACTICE GOVERNANCE" 
                  code="SYS // 01" 
                  aspect="aspect-[4/5]" 
                />
                
                {/* Floating Micro-Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-space-950">
                      Coordinated Brand Execution
                    </span>
                  </div>
                  <p className="text-xs font-sans text-slate-600 leading-relaxed">
                    Consistent brand presentation across digital touchpoints, uniting packaging, storefront design, and marketplace operations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. MISSION & VISION (Twin Bento Panels - Headers & Footers Removed)   */}
      {/* ===================================================================== */}
      <section className="sec-mission relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              02 · Purpose &amp; Horizon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15]">
              Guided by purpose, measured by reliability.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left: Our Mission (Clean, Substantive Paragraphs, Header & Footer Removed) */}
            <div className="bento-card-left group relative rounded-[28px] sm:rounded-[36px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-12 min-h-[340px] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-normal text-space-950 mb-5 group-hover:text-black transition-colors leading-tight">
                  Our Mission
                </h3>

                <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed mb-4">
                  "To help businesses navigate the modern digital landscape through practical services, clear communication, and commercial solutions aligned directly with their goals and resources."
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                  We eliminate arbitrary retainer waste, technical gatekeeping, and fragmented agency handoffs. Whether deploying bespoke e-commerce infrastructure, executing algorithmic paid campaigns, or engineering high-converting retail storefronts, our mandate is measurable business value and transparent operational integrity.
                </p>

                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  Every engagement is guided by senior practice leads who take direct accountability for unit economics, turnaround speed, and long-term brand equity.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Right: Our Vision (Clean, Substantive Paragraphs, Header & Footer Removed) */}
            <div className="bento-card-right group relative rounded-[28px] sm:rounded-[36px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-12 min-h-[340px] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-normal text-space-950 mb-5 group-hover:text-black transition-colors leading-tight">
                  Our Vision
                </h3>

                <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed mb-4">
                  "To build E-Comet into a globally recognised digital services brand known for unmistakable strategic clarity, reliable execution, and a business-first approach."
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                  As the intersection of commerce, search, and algorithmic video accelerates, digital brands need infrastructure that compounds over years rather than chasing short-lived vanity metrics.
                </p>

                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                  Our horizon is to be the benchmark operating partner for founders and category leaders seeking resilient, multi-channel growth without compromising brand substance or margin control.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. VISUAL SHOWCASE GALLERY (With Real Images & Rich Descriptive Text) */}
      {/* ===================================================================== */}
      <section className="sec-gallery relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                03 · Capabilities in Action
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15]">
                Crafted across 4 foundational craft disciplines.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-sans max-w-sm leading-relaxed">
              Each discipline is engineered to operate standalone or synchronize seamlessly as an integrated multi-channel growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Gallery Item 1: Brand & Creative with Comet & Lines Artwork */}
            <div className="gallery-img-card group relative rounded-[28px] overflow-hidden border border-stone-200/90 bg-[#FAFAFA] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-stone-200/60 relative">
                <CelestialCometTile 
                  tone="mono" 
                  label="CREATIVE // TOKEN SYSTEM" 
                  code="01" 
                  aspect="h-full w-full" 
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#080B10] block mb-1.5">
                    Pillar · Creative Services
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-space-950 mb-2.5 group-hover:text-black transition-colors">
                    Brand Identity &amp; Logo Systems
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                    Distinctive typography, color palettes, visual guidelines, packaging concepts, and tactile brand systems engineered to stand out on retail shelves and digital feeds.
                  </p>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Designed with consumer psychology to convert first-time shoppers into repeat brand advocates.
                  </p>
                </div>
                <div className="mt-5 pt-3">
                  <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                </div>
              </div>
            </div>

            {/* Gallery Item 2: Web Engineering with Comet & Lines Artwork */}
            <div className="gallery-img-card group relative rounded-[28px] overflow-hidden border border-stone-200/90 bg-[#FAFAFA] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-stone-200/60 relative">
                <CelestialCometTile 
                  tone="mono" 
                  label="WEB // HEADLESS REACT" 
                  code="02" 
                  aspect="h-full w-full" 
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#080B10] block mb-1.5">
                    Pillar · Website Development
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-space-950 mb-2.5 group-hover:text-black transition-colors">
                    Business &amp; E-Commerce Stores
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                    High-performance Shopify Plus builds, Next.js commerce architectures, sub-second checkout funnels, and responsive corporate portals with 95+ Core Web Vitals score.
                  </p>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Engineered for zero downtime, lightning load speeds, and maximum transaction throughput.
                  </p>
                </div>
                <div className="mt-5 pt-3">
                  <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                </div>
              </div>
            </div>

            {/* Gallery Item 3: Marketplace Operations with Comet & Lines Artwork */}
            <div className="gallery-img-card group relative rounded-[28px] overflow-hidden border border-stone-200/90 bg-[#FAFAFA] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-stone-200/60 relative">
                <CelestialCometTile 
                  tone="mono" 
                  label="MARKETPLACES // GLOBAL ASIN" 
                  code="03" 
                  aspect="h-full w-full" 
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#080B10] block mb-1.5">
                    Pillar · E-Commerce Management
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-space-950 mb-2.5 group-hover:text-black transition-colors">
                    Marketplace Catalogue &amp; Operations
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                    End-to-end Amazon 1P/3P and Flipkart seller onboarding, conversion-optimized A+ content, PLA ads management, inventory health monitoring, and buy-box protection.
                  </p>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Maximizing organic keyword ranking while strictly maintaining profitability and target TACoS.
                  </p>
                </div>
                <div className="mt-5 pt-3">
                  <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                </div>
              </div>
            </div>

            {/* Gallery Item 4: Media & Motion with Comet & Lines Artwork */}
            <div className="gallery-img-card group relative rounded-[28px] overflow-hidden border border-stone-200/90 bg-[#FAFAFA] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-stone-200/60 relative">
                <CelestialCometTile 
                  tone="mono" 
                  label="VIDEO // MOTION & REELS" 
                  code="04" 
                  aspect="h-full w-full" 
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#080B10] block mb-1.5">
                    Pillar · YouTube &amp; Video
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-space-950 mb-2.5 group-hover:text-black transition-colors">
                    Video Editing &amp; Shorts / Reels
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                    Dynamic pacing, motion graphics, high-CTR thumbnail packaging, channel SEO, and short-form video repurposing crafted to capture algorithmic watch time.
                  </p>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Turning passive viewers into engaged social audiences and high-intent inbound customers.
                  </p>
                </div>
                <div className="mt-5 pt-3">
                  <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. THE 5 CORE BRAND VALUES (Zero Colored Dots, Monochromatic)          */}
      {/* ===================================================================== */}
      <section className="sec-values relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              04 · Our Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              Five values that define how we work.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              We hold ourselves to straightforward standards that prioritize client clarity, scope integrity, and genuine business value over unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            
            {/* Value 1: Clarity */}
            <div className="value-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[320px]">
              <div>
                <div className="pb-3 border-b border-stone-200/60 mb-5">
                  <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    NO AMBIGUITY
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 mb-3 group-hover:text-black transition-colors">
                  Clarity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                  Explain the scope, process, deliverables, and performance expectations in straightforward language with zero technical gatekeeping or buzzwords.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Every partner knows exactly who is executing what, when milestones arrive, and how progress is objectively verified.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 mt-6">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Value 2: Purpose */}
            <div className="value-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[320px]">
              <div>
                <div className="pb-3 border-b border-stone-200/60 mb-5">
                  <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    GOAL-ALIGNED
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 mb-3 group-hover:text-black transition-colors">
                  Purpose
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                  Recommend services and architectural choices based strictly on real commercial needs rather than unnecessary technological complexity.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  We don't push enterprise stacks when lean headless solves the problem, preserving your capital for inventory and acquisition velocity.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 mt-6">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Value 3: Flexibility */}
            <div className="value-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[320px]">
              <div>
                <div className="pb-3 border-b border-stone-200/60 mb-5">
                  <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    ADAPTIVE SCOPE
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 mb-3 group-hover:text-black transition-colors">
                  Flexibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                  Shape service scope around the project, resources, and agreed requirements instead of forcing rigid pre-packaged retainers.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  As market dynamics pivot or seasonal demand surges, our practice pods scale dynamically to protect your margins.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 mt-6">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Value 4: Consistency */}
            <div className="value-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[320px]">
              <div>
                <div className="pb-3 border-b border-stone-200/60 mb-5">
                  <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    UNIFIED VOICE
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 mb-3 group-hover:text-black transition-colors">
                  Consistency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                  Support a coherent, elevated brand presentation across all relevant digital channels, packaging touchpoints, and marketplace nodes.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  From Amazon A+ layouts to direct Shopify checkouts, your customer experiences a cohesive brand narrative that commands premium pricing.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 mt-6">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Value 5: Transparency */}
            <div className="value-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden min-h-[320px]">
              <div>
                <div className="pb-3 border-b border-stone-200/60 mb-5">
                  <span className="text-[10.5px] font-mono uppercase text-slate-500 font-bold tracking-wider">
                    UPFRONT HONESTY
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 mb-3 group-hover:text-black transition-colors">
                  Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3">
                  Discuss deliverables, timelines, pricing, revision boundaries, and third-party fees (ad spend, platform hosting) before work begins.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  No hidden costs, no surprise add-ons, and no inflated promises. Honest roadmaps that build genuine, lasting commercial trust.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 mt-6">
                <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. OUR 5-STEP OPERATING FRAMEWORK ("Our Approach")                    */}
      {/* ===================================================================== */}
      <section className="sec-framework relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              05 · The Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15]">
              A structured roadmap from discovery to delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            
            {/* Step 1 */}
            <div className="framework-step group relative rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">STAGE 01</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2 group-hover:text-black transition-colors">
                  Understand
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-2">
                  Understand your business, target audience, current digital setup, and commercial goals.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  We audit catalog health, conversion leaks, and channel unit economics before proposing architecture.
                </p>
              </div>
              <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                <div className="w-1/5 h-full bg-[#080B10] group-hover:bg-[#252B36] transition-colors rounded-full" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="framework-step group relative rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">STAGE 02</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2 group-hover:text-black transition-colors">
                  Identify
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-2">
                  Identify the relevant digital opportunities, competitive gaps, and operational challenges.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Benchmarking buy-box dynamics, search volume, keyword indexation, and creative performance gaps.
                </p>
              </div>
              <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                <div className="w-2/5 h-full bg-[#080B10] group-hover:bg-[#252B36] transition-colors rounded-full" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="framework-step group relative rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">STAGE 03</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2 group-hover:text-black transition-colors">
                  Define
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-2">
                  Define specific services, deliverables, responsibilities, timelines, and proposal scope.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Written deliverables, fixed revision guardrails, and senior lead accountability locked in upfront.
                </p>
              </div>
              <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                <div className="w-3/5 h-full bg-[#080B10] group-hover:bg-[#252B36] transition-colors rounded-full" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="framework-step group relative rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">STAGE 04</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2 group-hover:text-black transition-colors">
                  Execute
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-2">
                  Execute the agreed work with meticulous attention to detail, quality, and brand consistency.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  100% senior in-house squad delivery with zero telephone handoffs to junior trainees.
                </p>
              </div>
              <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                <div className="w-4/5 h-full bg-[#080B10] group-hover:bg-[#252B36] transition-colors rounded-full" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="framework-step group relative rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">STAGE 05</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2 group-hover:text-black transition-colors">
                  Review
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-2">
                  Review the work against agreed metrics, discuss feedback, and plan appropriate next steps.
                </p>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Transparent weekly telemetry dashboards with verified attribution and zero vanity metrics.
                </p>
              </div>
              <div className="w-full h-1 bg-stone-200 rounded-full mt-6 overflow-hidden">
                <div className="w-full h-full bg-[#080B10] group-hover:bg-[#252B36] transition-colors rounded-full" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. BRAND INTEGRITY & COMMERCIAL TRANSPARENCY CARD                     */}
      {/* ===================================================================== */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="rounded-[32px] sm:rounded-[40px] bg-[#030712] text-white p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-slate-300 font-mono text-[11px] font-semibold uppercase tracking-wider inline-block">
                Brand Integrity &amp; Transparency Guarantee
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                Clear expectations. Zero false claims.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                We believe in genuine accountability. We do not make exaggerated claims or guarantee arbitrary sales, rankings, or ROAS figures. All project scopes, timelines, revision limits, and third-party fees (ad spend, platform hosting, licenses) are confirmed in writing before work begins.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a 
                href="#closing" 
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-space-950 font-sans text-xs font-semibold hover:bg-slate-100 transition-all text-center shadow-md hover:scale-105 cursor-pointer"
              >
                Request a Custom Quote
              </a>
              <Link 
                to="/explore-pillars" 
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 font-sans text-xs font-semibold transition-colors text-center"
              >
                View 6 Pillars
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. CLOSING SECTION (Aesthetic Asteroid Video CTA) & FOOTER             */}
      {/* ===================================================================== */}
      <ClosingSection />
      <Footer />

    </div>
  );
}
