import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../data/servicesData';
import { PACKAGES_BY_PILLAR, USE_CASES_BY_PILLAR } from '../data/packagesData';
import SingleCometCanvas from '../components/Hero3D/SingleCometCanvas';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage({ slugOverride }) {
  const { slug: routeSlug } = useParams();
  const slug = slugOverride || routeSlug;
  const [openFaq, setOpenFaq] = useState(null);
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const containerRef = useRef(null);

  // Find matching service by id or fallback to first
  const service = SERVICES_DATA.find(s => s.id === slug) || SERVICES_DATA[0];

  // Resolve packages and illustrative use cases for this pillar
  const packageData = PACKAGES_BY_PILLAR[service.pillarId] || PACKAGES_BY_PILLAR['marketplaces'];
  const useCases = USE_CASES_BY_PILLAR[service.pillarId] || USE_CASES_BY_PILLAR['marketplaces'];

  // Sibling services in the same pillar
  const relatedServices = SERVICES_DATA.filter(
    s => s.pillarId === service.pillarId && s.id !== service.id
  ).slice(0, 4);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaq(null);
    ScrollTrigger.refresh();
  }, [slug]);

  // Bespoke scroll swipe-in and stagger animations for all sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Core Architecture Cards
      gsap.fromTo(
        '.card-architecture',
        { y: 45, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-architecture',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Who Benefits Cards
      gsap.fromTo(
        '.card-benefit',
        { x: 50, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-benefits',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Why Choose E-Comet Cards
      gsap.fromTo(
        '.card-why-us',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Roadmap Timeline Steps
      gsap.fromTo(
        '.card-roadmap',
        { x: -45, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-roadmap',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Use Case Split Panels
      gsap.fromTo(
        '.card-usecase-left',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-usecases',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        '.card-usecase-right',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-usecases',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 6. Pricing Tier Cards
      gsap.fromTo(
        '.card-pricing',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-pricing',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 7. FAQs Stagger
      gsap.fromTo(
        '.card-faq',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-faq',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  const toggleFaq = (idx) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white select-none">
      
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (Deep Black Space, Zero Violet, Refined 3D Comet)     */}
      {/* ===================================================================== */}
      <section className="relative pt-32 pb-20 sm:pb-28 bg-[#000000] text-white overflow-hidden min-h-[580px] flex items-center">
        
        {/* Full-bleed Real-Time 3D Galaxy Canvas (Starfield + Zero Violet Dust) */}
        <CosmicGalaxyCanvas accentColorHex={service.colorHex} />

        {/* Ambient Dark Vignette (Pure Black Space, Zero Violet) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-[1]"
          style={{
            background: `radial-gradient(circle at 75% 35%, ${service.colorHex}15 0%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.5) 0%, #000000 100%)`
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] w-full mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8 sm:mb-10">
            <Link to="/" className="hover:text-white transition-colors">Orbit</Link>
            <span>/</span>
            <span className="text-slate-500 uppercase tracking-wider">{service.category}</span>
            <span>/</span>
            <span className="text-white font-semibold">{service.shortTitle || service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-slate-200">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.colorHex }}></span>
                <span>{service.heroBadge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl font-sans font-medium" style={{ color: service.colorHex }}>
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                {service.overview}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a 
                  href="#closing"
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-space-950 font-sans text-xs font-semibold transition-all hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Get a Custom Quote</span>
                  <span>→</span>
                </a>

                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Talk on WhatsApp</span>
                </a>

                <a 
                  href="#pricing" 
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-slate-200 font-sans text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Packages ↓
                </a>
              </div>

            </div>

            {/* Right Celestial Arena where 3D Comet floats directly in space within the Hero */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <SingleCometCanvas colorHex={service.colorHex} title={service.title} />
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. CORE CAPABILITIES GRID (Architecture & Deep Features)              */}
      {/* ===================================================================== */}
      <section className="sec-architecture relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              Architecture &amp; Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight mb-4">
              Engineered with zero operational bloat.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Every deliverable is structured with precise technical standards, strict scope boundaries, and clear operational ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.keyFeatures?.map((feat, idx) => {
              const isPaper = idx % 2 === 0;
              const cardBg = isPaper ? 'bg-[#f5f3ed] border-[#E9E6DF]' : 'bg-[#edf0f3] border-[#E2E5E9]';
              return (
                <div 
                  key={idx}
                  className={`card-architecture p-8 rounded-card ${cardBg} border flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-slate-300/40 mb-6">
                      <span className="text-xs font-mono font-bold text-space-950">CAPABILITY · 0{idx + 1}</span>
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: service.colorHex }}></span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-space-950 mb-3">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. STRATEGIC FIT ("Who Can Benefit?")                                  */}
      {/* ===================================================================== */}
      <section className="sec-benefits relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              Strategic Fit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
              Who can benefit from this service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {service.whoBenefits?.map((item, idx) => {
              const isPaper = idx % 2 === 0;
              const cardBg = isPaper ? 'bg-[#f5f3ed] border-[#E9E6DF]' : 'bg-[#edf0f3] border-[#E2E5E9]';
              return (
                <div 
                  key={idx}
                  className={`card-benefit p-8 sm:p-10 rounded-card ${cardBg} border flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all`}
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-space-950 mb-6 shadow-2xs">
                      0{idx + 1}
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-space-950 mb-3">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-300/40 flex items-center gap-2 text-xs font-mono text-emerald-700">
                    <span>✓</span>
                    <span>Tailored Playbook Ready</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. THE E-COMET ADVANTAGE ("Why Us / Differentiators")                  */}
      {/* ===================================================================== */}
      <section className="sec-why-us relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              The E-Comet Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
              Why businesses partner with our orbit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card-why-us p-7 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-3">01 · Commercial</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  Business-First Thinking
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  We start by understanding your margins, inventory, audience, and commercial priorities before choosing tools.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                P&amp;L ALIGNED
              </div>
            </div>

            <div className="card-why-us p-7 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-3">02 · Multi-Pillar</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  Connected Capabilities
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Marketplaces, web development, video, and paid acquisition work in unified lockstep under one roof.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                ZERO SILOS
              </div>
            </div>

            <div className="card-why-us p-7 rounded-2xl bg-[#f5f3ed] border border-[#E9E6DF] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-3">03 · Integrity</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  Transparent Scope
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Deliverables, revision limits, costs, and responsibilities are discussed and agreed in writing before kickoff.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                WRITTEN CONTRACT
              </div>
            </div>

            <div className="card-why-us p-7 rounded-2xl bg-[#edf0f3] border border-[#E2E5E9] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-space-950 uppercase block mb-3">04 · Grounded</span>
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  Zero Vanity Claims
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  No fabricated testimonials or false revenue guarantees. We evaluate performance through honest operational progress.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-300/40 text-[11px] font-mono text-slate-500">
                HONEST DELIVERY
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. 5-STEP EXECUTION ROADMAP ("Our Approach")                          */}
      {/* ===================================================================== */}
      <section className="sec-roadmap relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14 sm:mb-18">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
              A structured roadmap to compounding results.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process?.map((prc, idx) => {
              const isPaper = idx % 2 === 0;
              const cardBg = isPaper ? 'bg-[#f5f3ed] border-[#E9E6DF]' : 'bg-[#edf0f3] border-[#E2E5E9]';
              return (
                <div 
                  key={idx}
                  className={`card-roadmap p-7 rounded-card ${cardBg} border flex flex-col justify-between relative overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all`}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-300/40 mb-6">
                    <span className="text-xs font-mono font-bold text-space-950">STAGE {prc.step}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">PHASE 0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                      {prc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {prc.desc}
                    </p>
                  </div>
                  <div className="w-full h-1.5 bg-white/80 rounded-full mt-8 overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-space-950 rounded-full"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. ILLUSTRATIVE USE CASES ("Client Stories / Practical Scenarios")     */}
      {/* Strictly compliant with client policy: Genuine sample use cases       */}
      {/* ===================================================================== */}
      <section className="sec-usecases relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Real-World Scenarios
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
                How we solve practical business challenges.
              </h2>
            </div>
            
            <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600 self-start md:self-auto">
              <span>✦ Illustrative Business Workflows</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {useCases.map((cs, idx) => {
              const isFirst = idx === 0;
              const cardBg = isFirst ? 'bg-[#f5f3ed] border-[#E9E6DF]' : 'bg-[#edf0f3] border-[#E2E5E9]';
              const cardClass = isFirst ? 'card-usecase-left' : 'card-usecase-right';

              return (
                <div 
                  key={idx}
                  className={`${cardClass} rounded-3xl ${cardBg} p-8 sm:p-12 border flex flex-col justify-between shadow-sm`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-300/40">
                      <span className="text-xs font-mono font-bold text-space-950 uppercase">
                        SCENARIO 0{idx + 1}
                      </span>
                      <span className="text-xs font-sans font-medium text-slate-600">
                        {cs.clientType}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 leading-snug">
                      {cs.title}
                    </h3>

                    {/* Challenge Box */}
                    <div className="p-4 rounded-xl bg-white/70 border border-slate-200/60">
                      <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-wider block mb-1">
                        Operational Friction
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* Solution Box */}
                    <div className="p-4 rounded-xl bg-white/70 border border-slate-200/60">
                      <span className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider block mb-1">
                        E-Comet Strategy &amp; Execution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    {/* Resulting Outcome */}
                    <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                      <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                        Verified Outcome
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-950 font-sans font-medium leading-relaxed">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-300/40 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>E-COMET PROVEN PROTOCOL</span>
                    <span>100% AUDITABLE</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. STANDARDIZED PACKAGES & PRICING (Orbit · Nova · Cosmic)            */}
      {/* Includes India ₹ vs International $ Currency Toggle                   */}
      {/* ===================================================================== */}
      <section id="pricing" className="sec-pricing relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Standardized Packages
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
                Structured scope designed for every stage.
              </h2>
            </div>

            {/* Currency Switcher Toggle */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-100 border border-slate-200 self-start md:self-auto shadow-inner">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'INR' ? 'bg-space-950 text-white shadow-sm' : 'text-slate-600 hover:text-black'
                }`}
              >
                India (₹ INR)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'USD' ? 'bg-space-950 text-white shadow-sm' : 'text-slate-600 hover:text-black'
                }`}
              >
                Global ($ USD)
              </button>
            </div>
          </div>

          {/* 3 Tier Cards: Orbit · Nova · Cosmic */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packageData.tiers.map((tier, idx) => {
              const isPopular = tier.popular;
              const priceDisplay = currency === 'INR' ? tier.inrPrice : tier.usdPrice;
              const subDisplay = currency === 'INR' ? tier.inrSub : tier.usdSub;

              return (
                <div 
                  key={idx}
                  className={`card-pricing rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                    isPopular 
                      ? 'bg-space-950 text-white shadow-xl ring-2 ring-space-950 lg:-translate-y-2' 
                      : 'bg-[#fafafa] text-space-950 border border-slate-200/90 hover:shadow-md'
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00B4D8] text-space-950 text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-sm">
                      Recommended Tier
                    </div>
                  )}

                  <div>
                    {/* Top Tier Info */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/30 mb-6">
                      <span className={`text-xs font-mono uppercase tracking-widest font-bold ${isPopular ? 'text-cyan-300' : 'text-slate-500'}`}>
                        {tier.badge}
                      </span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.colorHex }} />
                    </div>

                    <h3 className={`font-serif text-3xl font-normal mb-2 ${isPopular ? 'text-white' : 'text-space-950'}`}>
                      {tier.name}
                    </h3>

                    <p className={`text-xs font-sans mb-6 ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {tier.description}
                    </p>

                    {/* Price Block */}
                    <div className="py-5 my-4 border-y border-slate-200/20">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-4xl font-serif font-normal ${isPopular ? 'text-white' : 'text-space-950'}`}>
                          {priceDisplay}
                        </span>
                      </div>
                      <span className={`text-xs font-mono block mt-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {subDisplay}
                      </span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 pt-3">
                      <span className={`text-[11px] font-mono uppercase tracking-wider block font-bold mb-3 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        Included Deliverables:
                      </span>
                      {tier.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs font-sans leading-relaxed">
                          <span className={`font-bold flex-shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-emerald-600'}`}>
                            ✓
                          </span>
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tier Action Button */}
                  <div className="pt-8 mt-8 border-t border-slate-200/20">
                    <a
                      href="#closing"
                      className={`w-full py-3 rounded-full text-xs font-sans font-semibold text-center block transition-all shadow-sm ${
                        isPopular
                          ? 'bg-white text-space-950 hover:bg-slate-100'
                          : 'bg-space-950 text-white hover:bg-slate-800'
                      }`}
                    >
                      Request {tier.name} Quote →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mandatory Commercial Policy Disclaimer (from Brief Section 12) */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-sans leading-relaxed flex items-start gap-3.5">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">i</span>
            <div>
              <strong className="text-space-950 font-mono text-[11px] uppercase tracking-wider block mb-1">
                Pricing &amp; Commercial Scope Policy:
              </strong>
              <p>
                {packageData.disclaimer || "Packages are subject to scope confirmation. Taxes, advertising spend, third-party costs, and out-of-scope work may be charged separately. E-Comet does not guarantee sales, ranking, or ROAS."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ Accordion)                         */}
      {/* ===================================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="sec-faq relative py-20 sm:py-28 bg-white overflow-hidden hairline-b">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-8">
            
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Clarity &amp; Answers
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                const isPaper = idx % 2 === 0;
                const cardBg = isPaper ? 'bg-[#f5f3ed] border-[#E9E6DF]' : 'bg-[#edf0f3] border-[#E2E5E9]';
                return (
                  <div 
                    key={idx}
                    className={`card-faq rounded-2xl border ${cardBg} overflow-hidden transition-all shadow-2xs`}
                  >
                    <button 
                      type="button" 
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <span className="text-base sm:text-lg font-serif font-normal text-space-950">
                        {faq.q}
                      </span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-transform duration-200 ${isOpen ? 'bg-space-950 text-white rotate-45' : 'bg-white text-space-800 shadow-2xs'}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-black/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 9. SIBLING SERVICES NAVIGATION (Related in this Pillar)               */}
      {/* ===================================================================== */}
      {relatedServices.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Explore More in this Pillar
              </span>
              <p className="font-serif text-xl font-normal text-space-950">
                Connected services in {service.category}:
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {relatedServices.map((rel) => (
                <Link 
                  key={rel.id}
                  to={`/services/${rel.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-sans font-medium text-space-950 hover:bg-space-950 hover:text-white transition-all shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: rel.colorHex }}></span>
                  <span>{rel.shortTitle || rel.title}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================== */}
      {/* 10. CLOSING SECTION & LEAD ENQUIRY FORM                               */}
      {/* ===================================================================== */}
      <ClosingSection />

      {/* Site Footer */}
      <Footer />

    </div>
  );
}
