import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_INDUSTRIES } from '../data/marketplaceData';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Sectors');
  const cardsContainerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero text entrance
      gsap.fromTo(
        '.market-hero-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );

      // 2. Card scroll animations
      gsap.utils.toArray('.marketplace-industry-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, cardsContainerRef);

    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  // Filtered industries based on active category and live search query
  const filteredIndustries = useMemo(() => {
    return MARKETPLACE_INDUSTRIES.filter((ind) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All Sectors' || ind.category === selectedCategory;

      if (!matchesCategory) return false;

      // Query filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = ind.title.toLowerCase().includes(q);
      const inPersona = ind.targetPersona.toLowerCase().includes(q);
      const inTagline = ind.tagline.toLowerCase().includes(q);
      const inOverview = ind.overview.toLowerCase().includes(q);
      const inCategory = ind.category.toLowerCase().includes(q);
      const inSector = ind.sectorBadge.toLowerCase().includes(q);
      const inKeywords = ind.searchKeywords.some((kw) => kw.toLowerCase().includes(q));
      const inParagraphs = ind.paragraphs.some((p) => p.toLowerCase().includes(q));
      const inCapabilities = ind.keyCapabilities.some((c) => c.toLowerCase().includes(q));

      return (
        inTitle ||
        inPersona ||
        inTagline ||
        inOverview ||
        inCategory ||
        inSector ||
        inKeywords ||
        inParagraphs ||
        inCapabilities
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Cosmic Obsidian Aesthetic matching Service Detail)      */}
      {/* ========================================================================= */}
      <section className="relative min-h-[640px] sm:min-h-[700px] bg-[#000000] text-white pt-32 pb-20 px-4 sm:px-8 overflow-hidden flex flex-col justify-center">
        {/* Interactive Cosmic Galaxy Three.js Starfield Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-85">
          <CosmicGalaxyCanvas accentColorHex="#38BDF8" />
        </div>

        {/* Ambient Gradient Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-radial-[at_top_center] from-transparent via-[#000000]/60 to-[#000000] pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl bg-blue-500/20" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl bg-amber-500/15" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center">
          
          {/* Telemetry Monospace Badge */}
          <div className="market-hero-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-mono font-medium tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-slate-200">
              MASTERMIND INDUSTRY DIRECTORY · LIVE SEARCH INDEX
            </span>
          </div>

          {/* Primary Serif Headline */}
          <h1 className="market-hero-anim font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.05] tracking-tight text-white max-w-5xl mb-6">
            Specialized Growth Systems for Every Industry & Trade
          </h1>

          {/* Dynamic Cyan Accent Line */}
          <div className="market-hero-anim flex items-center justify-center gap-2 mb-8" aria-hidden="true">
            <span className="h-1 sm:h-1.5 rounded-full w-24 sm:w-36 bg-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.8)]" />
            <span className="h-1 sm:h-1.5 rounded-full w-4 sm:w-6 bg-[#38BDF8] opacity-80" />
            <span className="h-1 sm:h-1.5 rounded-full w-1.5 sm:w-2 bg-[#38BDF8] opacity-40" />
          </div>

          {/* Descriptive Subtitle */}
          <p className="market-hero-anim font-sans text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10">
            From local cafes and multi-speciality hospitals to motorcycle repair garages, spice millers, and clothing boutiques—purpose-built digital marketing, marketplace operations, and customer acquisition playbooks engineered for your specific business reality.
          </p>

          {/* Telemetry Stats Strip */}
          <div className="market-hero-anim grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-5 px-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 max-w-3xl w-full text-left">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Target Sectors
              </span>
              <span className="text-base sm:text-lg font-sans font-bold text-white">
                16 Major Trades
              </span>
            </div>
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Intent Queries
              </span>
              <span className="text-base sm:text-lg font-sans font-bold text-white">
                120+ Search Clusters
              </span>
            </div>
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Playbook Architecture
              </span>
              <span className="text-base sm:text-lg font-sans font-bold text-white">
                Deep Custom Execution
              </span>
            </div>
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Boilerplate Guarantee
              </span>
              <span className="text-base sm:text-lg font-sans font-bold text-emerald-400">
                0% Fluff · 100% Real
              </span>
            </div>
          </div>

          {/* Quick Jump Anchor Button */}
          <div className="market-hero-anim mt-10">
            <a
              href="#directory-cards"
              className="px-8 py-3.5 rounded-full bg-white text-space-950 font-sans text-xs font-semibold hover:bg-slate-100 transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Explore Industry Blueprints</span>
              <span>↓</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE SEARCH & CATEGORY FILTER CONTROL BAR                       */}
      {/* ========================================================================= */}
      <section id="directory-cards" className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs py-4 px-4 sm:px-8 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Real-Time Search Bar */}
          <div className="relative flex-1 max-w-lg">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search by trade or query (e.g. "cafe", "hospital", "bike repair", "spices", "clothes")...'
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-stone-100 border border-stone-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-space-950 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Results Count & Quick Reset */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
            <span className="text-xs font-mono text-slate-600">
              Showing <span className="font-bold text-space-950">{filteredIndustries.length}</span> of {MARKETPLACE_INDUSTRIES.length} Sectors
            </span>
            {(selectedCategory !== 'All Sectors' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All Sectors');
                  setSearchQuery('');
                }}
                className="text-xs font-mono text-blue-600 hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

        </div>

        {/* Scrollable Category Filter Pills */}
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-stone-200/60 overflow-x-auto scrollbar-none flex items-center gap-2 pb-1">
          {MARKETPLACE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#080B10] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUICK JUMP SECTOR TILES (Compact Overview Bar)                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-space-950" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
              Fast Jump Index // Click any industry to jump directly to its strategic blueprint
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {MARKETPLACE_INDUSTRIES.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-space-950 text-slate-700 hover:text-slate-900 text-xs font-sans transition-all hover:shadow-2xs"
              >
                <span className="font-mono text-[10px] text-slate-400 font-bold">{ind.code}</span>
                <span>{ind.sectorBadge}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FULL-WIDTH INDUSTRY STRATEGY CARDS CONTAINER                           */}
      {/* ========================================================================= */}
      <main ref={cardsContainerRef} className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
        
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="font-serif text-2xl text-slate-800 mb-2">No matching industry blueprints found</p>
            <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
              We did not find any sector matching "{searchQuery}". Clear your search query or reset the sector filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Sectors');
              }}
              className="px-6 py-2.5 rounded-full bg-space-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          filteredIndustries.map((ind) => {
            return (
              <article
                key={ind.id}
                id={ind.id}
                className="marketplace-industry-card w-full rounded-[28px] sm:rounded-[36px] bg-white border border-stone-200/90 shadow-sm hover:border-space-950 hover:shadow-md transition-all duration-300 overflow-hidden scroll-mt-36"
              >
                {/* ---------------- Card Header Ribbon ---------------- */}
                <div className="p-6 sm:p-10 md:p-12 border-b border-stone-100 bg-gradient-to-b from-stone-50/70 to-white">
                  
                  {/* Top Metadata Line */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-900 text-white text-[10px] font-mono font-bold tracking-wider">
                        SECTOR INDEX // {ind.code}
                      </span>
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide"
                        style={{
                          backgroundColor: `${ind.accentColor}15`,
                          color: ind.accentColor
                        }}
                      >
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: ind.accentColor }} 
                        />
                        {ind.sectorBadge.toUpperCase()}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500">
                      Category: {ind.category}
                    </span>
                  </div>

                  {/* Main Display Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-slate-900 tracking-tight leading-tight mb-4">
                    {ind.title}
                  </h2>

                  {/* Target Persona Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-100/90 border border-stone-200/80 text-xs font-sans font-medium text-slate-700 mb-5">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-500">Target Persona:</span>
                    <span>{ind.targetPersona}</span>
                  </div>

                  {/* Stylized Tagline Callout */}
                  <div 
                    className="pl-4 py-1.5 border-l-4 my-2 text-base sm:text-lg font-sans font-medium text-slate-800 italic leading-snug"
                    style={{ borderColor: ind.accentColor }}
                  >
                    "{ind.tagline}"
                  </div>

                  {/* Executive Overview Box */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-stone-100/60 border border-stone-200/60 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Strategic Landscape & Executive Thesis:
                    </span>
                    {ind.overview}
                  </div>

                </div>

                {/* ---------------- Deep Multi-Paragraph Content ---------------- */}
                <div className="p-6 sm:p-10 md:p-12 space-y-6">
                  
                  <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                    <span className="w-2 h-2 rounded-full bg-space-950" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                      In-Depth Operational & Growth Analysis (The Playbook)
                    </h3>
                  </div>

                  {/* Rich Paragraphs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-2">
                    {ind.paragraphs.map((para, pIdx) => (
                      <div 
                        key={pIdx} 
                        className="rounded-2xl p-5 sm:p-6 bg-stone-50/50 border border-stone-200/60 hover:bg-stone-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          <span 
                            className="w-5 h-5 rounded-full text-white text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: ind.accentColor }}
                          >
                            {pIdx + 1}
                          </span>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                            Execution Pillar 0{pIdx + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                          {para}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ---------------- Key Capabilities Deliverables ---------------- */}
                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ind.accentColor }} />
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-600">
                        Concrete Capabilities & Deliverables for this Sector
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {ind.keyCapabilities.map((cap, cIdx) => (
                        <div 
                          key={cIdx}
                          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:border-slate-400 transition-colors"
                        >
                          <span className="text-emerald-600 font-bold text-sm leading-none mt-0.5">✓</span>
                          <span className="text-xs font-medium text-slate-800 leading-snug">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ---------------- Search Intent SEO Query Matrix ---------------- */}
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        High-Intent Search Queries Target Matrix (Organic Google SEO Clusters):
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {ind.searchKeywords.map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="inline-flex items-center px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-slate-600 text-[11px] font-mono transition-colors"
                        >
                          <span className="text-slate-400 mr-1.5">#</span>
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ---------------- Primary Service Link (NO CTA FORM) ---------------- */}
                  <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-stone-50/70 p-5 rounded-2xl">
                    <div className="space-y-0.5">
                      <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500 block">
                        Associated Practice Core Service
                      </span>
                      <p className="text-xs font-sans text-slate-700">
                        View our end-to-end operational deliverables, SLAs, and technical specifications for this practice.
                      </p>
                    </div>

                    <Link
                      to={ind.primaryServiceLink}
                      className="px-5 py-2.5 rounded-full bg-space-950 hover:bg-slate-800 text-white font-sans text-xs font-semibold tracking-wide transition-all hover:scale-105 shadow-sm inline-flex items-center gap-2 flex-shrink-0"
                    >
                      <span>{ind.primaryServiceLabel}</span>
                    </Link>
                  </div>

                </div>
              </article>
            );
          })
        )}

      </main>

      {/* ========================================================================= */}
      {/* 5. FOOTER REASSURANCE STRIP (No CTA Form as requested)                    */}
      {/* ========================================================================= */}
      <section className="bg-stone-100 border-t border-stone-200 py-12 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-mono font-bold text-slate-700">
            <span>E-COMET OUTVERSE MASTERMIND ARCHITECTURE</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal">
            Real industry execution. Zero recycled templates.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every trade demands its own physics. Whether managing margin thresholds on Zomato, slashing RTO on Myntra, or capturing urgent emergency call queries on Google Maps, our practice leads engineer custom systems designed for bottom-line unit economics.
          </p>
        </div>
      </section>

      {/* Primary Global Site Footer */}
      <Footer />

    </div>
  );
}
