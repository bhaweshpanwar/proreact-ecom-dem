import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import SingleCometCanvas from '../components/Hero3D/SingleCometCanvas';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // 1. Philosophy section reveal
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

      // 2. Mission & Vision Bento Cards
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

      // 3. Visual Gallery Stagger
      gsap.fromTo(
        '.gallery-img-card',
        { y: 45, opacity: 0, scale: 0.94 },
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

      // 4. Values Cards Stagger
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

      // 5. Operating Framework Steps
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
    <div ref={containerRef} className="relative min-h-screen bg-white select-none">
      
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (Deep Pitch Black, Diamond Stars, 3D Comet)           */}
      {/* ===================================================================== */}
      <section className="relative pt-32 pb-20 sm:pb-28 bg-[#000000] text-white overflow-hidden min-h-[580px] flex items-center">
        
        {/* Full-bleed Real-Time 3D Galaxy Canvas (Starfield + Zero Violet Dust) */}
        <CosmicGalaxyCanvas accentColorHex="#00B4D8" />

        {/* Ambient Vignette (Pure Black Space, Zero Violet) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-[1]"
          style={{
            background: `radial-gradient(circle at 75% 35%, rgba(0, 180, 216, 0.14) 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.5) 0%, #000000 100%)`
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] w-full mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8 sm:mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Official Eyebrow, H1 Title & Sub-copy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
                <span>E-COMET — BEYOND DIGITAL. INTO THE NEXT ORBIT.</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white">
                Helping Businesses Build a Stronger Digital Presence.
              </h1>

              <p className="text-lg sm:text-xl font-sans font-medium text-cyan-300/90 leading-relaxed max-w-2xl">
                A business-first approach to e-commerce management, digital marketing, website development, and video services.
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                E-Comet brings practical digital services together to help businesses present their brand professionally, connect with their audience, and create a stronger foundation for online growth.
              </p>

              {/* Quick Pillars Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Marketplace Operations</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Web Engineering</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Growth Marketing</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Media &amp; Design</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a 
                  href="#closing" 
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-space-950 font-sans text-xs font-semibold transition-all hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </a>

                <a 
                  href="#philosophy" 
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 font-sans text-xs font-semibold transition-colors cursor-pointer"
                >
                  Our Philosophy ↓
                </a>
              </div>

            </div>

            {/* Right Column: 3D Celestial Comet in Pure Space */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <SingleCometCanvas colorHex="#00B4D8" title="E-Comet Nucleus" />
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. WHO WE ARE & EDITORIAL PHILOSOPHY                                  */}
      {/* ===================================================================== */}
      <section id="philosophy" className="sec-philosophy relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                01 · Brand Genesis &amp; Positioning
              </span>

              <h2 className="about-reveal-text text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
                Digital growth starts with understanding the business — not choosing tools without purpose.
              </h2>

              <p className="about-reveal-text text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                E-Comet is a digital services brand supporting businesses across e-commerce, digital marketing, website development, and YouTube and video services.
              </p>

              <p className="about-reveal-text text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Whether a business is starting online, improving its current presence, or bringing multiple channels together, our approach is to understand the requirement, define the scope, and recommend suitable next steps.
              </p>

              {/* 3 Pillar Value Chips */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF]">
                  <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-1">
                    Clarity First
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Straightforward scope and deliverables before work begins.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9]">
                  <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-1">
                    Connected
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    E-commerce, web, video, and marketing working together.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF]">
                  <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-1">
                    No Bloat
                  </span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Pragmatic solutions shaped around real business resources.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Editorial Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl group">
                <img 
                  src="/assets/img1/aurelis-skincare-stone.png" 
                  alt="E-Comet Brand Craftsmanship" 
                  className="w-full h-auto object-cover object-center aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Micro-Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-space-950">
                      Coordinated Execution
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs font-sans text-slate-600 leading-snug">
                    Consistent brand presentation across digital touchpoints, from packaging to marketplace storefronts.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. MISSION & VISION (Twin Bento Panels: Paper Left, Mist Right)       */}
      {/* ===================================================================== */}
      <section className="sec-mission relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              02 · Purpose &amp; Horizon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
              Guided by purpose, measured by reliability.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Left: Our Mission (Paper #f5f3ed) */}
            <div className="bento-card-left rounded-3xl bg-[#f5f3ed] p-8 sm:p-12 border border-[#E9E6DF] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-lg font-mono font-bold text-space-950 mb-8 shadow-2xs">
                  🎯
                </div>
                
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-3">
                  Core Mandate
                </span>
                
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-space-950 mb-4 leading-snug">
                  Our Mission
                </h3>

                <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                  "To help businesses navigate the digital landscape through practical services, clear communication, and solutions aligned with their goals and resources."
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-300/40 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>01 · PRACTICAL ARCHITECTURE</span>
                <span>HONEST SCOPING</span>
              </div>
            </div>

            {/* Right: Our Vision (Mist #edf0f3) */}
            <div className="bento-card-right rounded-3xl bg-[#edf0f3] p-8 sm:p-12 border border-[#E2E5E9] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-lg font-mono font-bold text-space-950 mb-8 shadow-2xs">
                  🔭
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-3">
                  Long-Term Ambition
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-space-950 mb-4 leading-snug">
                  Our Vision
                </h3>

                <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                  "To build E-Comet into a recognised digital services brand known for clear strategy, reliable execution, and a business-first approach."
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-300/40 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>02 · COMPOUNDING VALUE</span>
                <span>GLOBAL HORIZON</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. VISUAL SHOWCASE GALLERY (Ultra-Aesthetic Work Domains)              */}
      {/* ===================================================================== */}
      <section className="sec-gallery relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                03 · Capabilities in Action
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
                Crafted across 4 foundational craft disciplines.
              </h2>
            </div>

            <p className="text-sm font-sans text-slate-600 max-w-sm">
              Each discipline is engineered to operate standalone or synchronize seamlessly as an integrated growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Gallery Item 1: Brand & Creative */}
            <div className="gallery-img-card rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white group flex flex-col justify-between">
              <div className="overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="/assets/img1/creative-brand-identity.png" 
                  alt="Brand Identity and Design Systems" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-600 block mb-1">
                  Pillar · Creative Services
                </span>
                <h4 className="font-serif text-lg font-normal text-space-950 mb-1">
                  Brand Identity &amp; Logo Systems
                </h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Typography, color palette, guidelines, and packaging concepts.
                </p>
              </div>
            </div>

            {/* Gallery Item 2: Web Engineering */}
            <div className="gallery-img-card rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white group flex flex-col justify-between">
              <div className="overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="/assets/img1/shopify-flagship-store.png" 
                  alt="High-Performance Website Development" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                  Pillar · Website Development
                </span>
                <h4 className="font-serif text-lg font-normal text-space-950 mb-1">
                  Business &amp; E-Commerce Stores
                </h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Responsive corporate websites, online stores, and landing pages.
                </p>
              </div>
            </div>

            {/* Gallery Item 3: Marketplace Operations */}
            <div className="gallery-img-card rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white group flex flex-col justify-between">
              <div className="overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="/assets/img1/amazon-listing-aplus.png" 
                  alt="Amazon and Flipkart Marketplace Management" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-600 block mb-1">
                  Pillar · E-Commerce Management
                </span>
                <h4 className="font-serif text-lg font-normal text-space-950 mb-1">
                  Marketplace Catalogue &amp; Operations
                </h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Amazon &amp; Flipkart seller onboarding, A+ content, and PPC ads.
                </p>
              </div>
            </div>

            {/* Gallery Item 4: Media & Motion */}
            <div className="gallery-img-card rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white group flex flex-col justify-between">
              <div className="overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src="/assets/img1/reels-motion-film.png" 
                  alt="YouTube & Video Editing Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 block mb-1">
                  Pillar · YouTube &amp; Video
                </span>
                <h4 className="font-serif text-lg font-normal text-space-950 mb-1">
                  Video Editing &amp; Shorts / Reels
                </h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Pacing, captions, thumbnails, channel SEO, and promotional edits.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. THE 5 CORE BRAND VALUES (Official from Developer Brief)            */}
      {/* ===================================================================== */}
      <section className="sec-values relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              04 · Our Operating Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight mb-4">
              Five values that define how we work.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              We hold ourselves to straightforward standards that prioritize client clarity, scope integrity, and genuine business value over unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Value 1: Clarity */}
            <div className="value-card p-7 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                  01
                </span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                  Clarity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Explain the scope, process, and expectations in straightforward language with zero technical gatekeeping.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                NO AMBIGUITY
              </div>
            </div>

            {/* Value 2: Purpose */}
            <div className="value-card p-7 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                  02
                </span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                  Purpose
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Recommend services based strictly on business needs rather than unnecessary technological complexity.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                GOAL-ALIGNED
              </div>
            </div>

            {/* Value 3: Flexibility */}
            <div className="value-card p-7 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                  03
                </span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                  Flexibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Shape service scope around the project, resources, and agreed requirements instead of rigid packages.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                ADAPTIVE SCOPE
              </div>
            </div>

            {/* Value 4: Consistency */}
            <div className="value-card p-7 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                  04
                </span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                  Consistency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Support a coherent, elevated brand presentation across all relevant digital channels and marketplace nodes.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                UNIFIED VOICE
              </div>
            </div>

            {/* Value 5: Transparency */}
            <div className="value-card p-7 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
              <div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                  05
                </span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                  Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  Discuss deliverables, timelines, pricing, and third-party costs (ad spend, hosting) before work begins.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                UPFRONT HONESTY
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. OUR 5-STEP OPERATING FRAMEWORK ("Our Approach")                    */}
      {/* ===================================================================== */}
      <section className="sec-framework relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              05 · The Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
              A structured roadmap from discovery to delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="framework-step p-6 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-600 uppercase block mb-3">STAGE 01</span>
                <h3 className="font-serif text-xl font-normal text-space-950 mb-2">
                  Understand
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Understand your business, target audience, current digital setup, and commercial goals.
                </p>
              </div>
              <div className="w-full h-1 bg-space-950/20 rounded-full mt-6 overflow-hidden">
                <div className="w-1/5 h-full bg-space-950 rounded-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="framework-step p-6 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-orange-600 uppercase block mb-3">STAGE 02</span>
                <h3 className="font-serif text-xl font-normal text-space-950 mb-2">
                  Identify
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Identify the relevant digital opportunities, competitive gaps, and operational challenges.
                </p>
              </div>
              <div className="w-full h-1 bg-space-950/20 rounded-full mt-6 overflow-hidden">
                <div className="w-2/5 h-full bg-space-950 rounded-full"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="framework-step p-6 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-3">STAGE 03</span>
                <h3 className="font-serif text-xl font-normal text-space-950 mb-2">
                  Define
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Define specific services, deliverables, responsibilities, timelines, and proposal scope.
                </p>
              </div>
              <div className="w-full h-1 bg-space-950/20 rounded-full mt-6 overflow-hidden">
                <div className="w-3/5 h-full bg-space-950 rounded-full"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="framework-step p-6 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-rose-600 uppercase block mb-3">STAGE 04</span>
                <h3 className="font-serif text-xl font-normal text-space-950 mb-2">
                  Execute
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Execute the agreed work with meticulous attention to detail, quality, and brand consistency.
                </p>
              </div>
              <div className="w-full h-1 bg-space-950/20 rounded-full mt-6 overflow-hidden">
                <div className="w-4/5 h-full bg-space-950 rounded-full"></div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="framework-step p-6 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-purple-600 uppercase block mb-3">STAGE 05</span>
                <h3 className="font-serif text-xl font-normal text-space-950 mb-2">
                  Review
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Review the work against agreed metrics, discuss feedback, and plan appropriate next steps.
                </p>
              </div>
              <div className="w-full h-1 bg-space-950/20 rounded-full mt-6 overflow-hidden">
                <div className="w-full h-full bg-space-950 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. BRAND INTEGRITY & COMMERCIAL TRANSPARENCY CARD                     */}
      {/* ===================================================================== */}
      <section className="relative py-16 sm:py-20 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="rounded-3xl bg-[#030712] text-white p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-300 font-mono text-[11px] font-semibold uppercase tracking-wider inline-block">
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
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-space-950 font-sans text-xs font-semibold hover:bg-slate-100 transition-colors text-center"
              >
                Request a Custom Quote
              </a>
              <Link 
                to="/#services" 
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 font-sans text-xs font-semibold transition-colors text-center"
              >
                View 6 Pillars
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. CLOSING SECTION & LEAD ENQUIRY FORM                                */}
      {/* ===================================================================== */}
      <ClosingSection />

      {/* Site Footer */}
      <Footer />

    </div>
  );
}
