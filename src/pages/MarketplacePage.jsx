import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MARKETPLACE_CATEGORIES, MARKETPLACE_INDUSTRIES } from '../data/marketplaceData';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import Home2FinalCta from './Home2/components/Home2FinalCta';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Sectors');
  const [cardDisplayMode, setCardDisplayMode] = useState('full'); // 'full' (all paras visible) | 'accordion'
  const [expandedPhases, setExpandedPhases] = useState({});
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    ScrollTrigger.refresh();
  }, []);

  // Filtered industry items
  const filteredIndustries = useMemo(() => {
    return MARKETPLACE_INDUSTRIES.filter((ind) => {
      const matchesCategory =
        selectedCategory === 'All Sectors' || ind.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ind.title.toLowerCase().includes(q) ||
        ind.category.toLowerCase().includes(q) ||
        ind.tagline.toLowerCase().includes(q) ||
        ind.targetPersona.toLowerCase().includes(q) ||
        ind.overview.toLowerCase().includes(q) ||
        ind.paragraphs.some((p) => p.toLowerCase().includes(q)) ||
        ind.searchKeywords.some((kw) => kw.toLowerCase().includes(q)) ||
        ind.keyCapabilities.some((cap) => cap.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Toggle expanded state for accordion view
  const toggleCardPhases = (id) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.market-hero-stagger',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out'
        }
      );

      // 2. Cards Scroll Fade-in
      gsap.utils.toArray('.sector-dossier-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filteredIndustries, cardDisplayMode]);

  // Jump to specific card
  const scrollToSector = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#000000] text-[#FFFFFF] select-none overflow-x-hidden pt-20">
      
      {/* ========================================================================= */}
      {/* 1. BESPOKE COMMERCE HERO: THE SECTOR ATLAS                                */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] flex flex-col justify-between border-b border-[#262626] bg-[#000000] overflow-hidden">
        
        {/* Subtle Canvas Galaxy Particle Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
          <CosmicGalaxyCanvas />
        </div>

        {/* Ambient Radial Mesh Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-b from-[#E4572E]/12 via-[#38BDF8]/08 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Top Intelligence Masthead */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626] font-sans text-xs uppercase tracking-widest text-[#8A8A8A]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E4572E] animate-pulse" />
              <span className="text-[#FFFFFF] font-bold">COMMERCE DIRECTORY // 2026</span>
              <span>·</span>
              <span>16 INDUSTRY PLAYBOOKS</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span>ALGORITHMIC MARGIN PHYSICS</span>
              <span>·</span>
              <span className="text-[#FFFFFF]">ZERO GENERIC TEMPLATES</span>
            </div>
          </div>
        </div>

        {/* Hero Headline & Narrative */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="market-hero-stagger inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#2E2E2E] text-[#A3A3A3] font-sans text-[11px] uppercase tracking-wider font-semibold">
                <span className="text-[#E4572E] font-bold">●</span>
                <span>VERTICAL OPERATING DOSSIERS</span>
              </div>

              <h1 className="market-hero-stagger font-grotesk font-black text-[clamp(38px,6vw,92px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
                The Sector Atlas. <br />
                <span className="text-[#8A8A8A]">Every Trade Has Its Own Physics.</span>
              </h1>

              <p className="market-hero-stagger font-grotesk text-base sm:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed">
                Amazon Buy-Boxes. Zomato margin thresholds. Google Local 3-Packs. High-ticket B2B pipeline search. We document the precise operational strategy, customer journey, and unit economics across 16 commercial trades.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#262626] lg:pl-8">
              <p className="market-hero-stagger font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                Explore the complete technical breakdown for your sector. Each dossier details local discovery, channel margin defense, paid media acquisition, and long-term retention architecture.
              </p>

              <div className="market-hero-stagger flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2">
                <a
                  href="#directory-console"
                  className="px-6 py-3.5 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Explore Sector Directory</span>
                  <span>↓</span>
                </a>
                <a
                  href="#contact-briefing"
                  className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#141414] border border-[#333333] hover:border-[#666666] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Request Custom Trade Audit</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick-Jump Sector Navigator Bar */}
          <div className="market-hero-stagger mt-12 pt-8 border-t border-[#262626]">
            <span className="font-sans text-[10.5px] uppercase tracking-wider text-[#737373] font-semibold block mb-3">
              FAST JUMP TO SECTOR DOSSIER:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {MARKETPLACE_INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => scrollToSector(ind.id)}
                  className="whitespace-nowrap px-3 py-1.5 bg-[#0D0D0D] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#FFFFFF] text-xs font-grotesk text-[#A3A3A3] hover:text-[#FFFFFF] transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  <span className="font-mono text-[10px] text-[#FFFFFF]">[{ind.code}]</span>
                  <span>{ind.category}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Telemetry Metrics Strip */}
        <div className="relative z-10 w-full border-t border-[#262626] bg-[#0A0A0A]/95">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#262626]">
              <div className="py-4 pr-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FFFFFF]">[16]</span>
                <span className="font-sans text-[11px] text-[#A3A3A3] uppercase tracking-wider">
                  Specialized Verticals Documented
                </span>
              </div>
              <div className="py-4 px-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FFFFFF]">[64]</span>
                <span className="font-sans text-[11px] text-[#A3A3A3] uppercase tracking-wider">
                  In-Depth Operational Chapters
                </span>
              </div>
              <div className="py-4 px-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FFFFFF]">[112+]</span>
                <span className="font-sans text-[11px] text-[#A3A3A3] uppercase tracking-wider">
                  Target SEO Query Clusters
                </span>
              </div>
              <div className="py-4 pl-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#E4572E]">0%</span>
                <span className="font-sans text-[11px] text-[#A3A3A3] uppercase tracking-wider">
                  Recycled Agency Retainers
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. THE 4 PILLARS OF SECTOR PHYSICS (Completely New Section)              */}
      {/* ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
              THE COMMERCIAL CALCULUS // 4 GOVERNING LAWS
            </span>
            <h2 className="font-grotesk font-black text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              How We Evaluate Any Vertical.
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-2xl">
              Before running an ad, writing a line of code, or editing a video reel, our senior practice leads audit your sector across four non-negotiable commercial dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Law 01 */}
            <div className="p-6 bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="font-mono text-xs text-[#E4572E] font-bold">LAW 01</span>
                <span className="font-sans text-[10px] text-[#737373] uppercase tracking-wider">ACQUISITION</span>
              </div>
              <h3 className="font-grotesk font-bold text-lg uppercase text-white">
                Search Intent &amp; Discovery
              </h3>
              <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                Does your buyer search on Google Maps (hyperlocal radius), Amazon search bar (product comparison), or Meta feeds (impulse sensory)? We capture the primary discovery node.
              </p>
            </div>

            {/* Law 02 */}
            <div className="p-6 bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="font-mono text-xs text-[#38BDF8] font-bold">LAW 02</span>
                <span className="font-sans text-[10px] text-[#737373] uppercase tracking-wider">UNIT MARGIN</span>
              </div>
              <h3 className="font-grotesk font-bold text-lg uppercase text-white">
                Aggregator Commission Shield
              </h3>
              <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                Protecting net gross margins against 25-35% platform cuts (Zomato, Swiggy, Amazon fees) by pairing discovery channels with direct WhatsApp &amp; D2C ordering funnels.
              </p>
            </div>

            {/* Law 03 */}
            <div className="p-6 bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="font-mono text-xs text-[#FFFFFF] font-bold">LAW 03</span>
                <span className="font-sans text-[10px] text-[#737373] uppercase tracking-wider">ALGORITHMS</span>
              </div>
              <h3 className="font-grotesk font-bold text-lg uppercase text-white">
                Catalogue &amp; Buy-Box Physics
              </h3>
              <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                Algorithmic pricing rules, listing variations, structured schema, backend keyword density, and daily Buy-Box suppression governance to maximize transaction velocity.
              </p>
            </div>

            {/* Law 04 */}
            <div className="p-6 bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="font-mono text-xs text-[#E4572E] font-bold">LAW 04</span>
                <span className="font-sans text-[10px] text-[#737373] uppercase tracking-wider">LTV VELOCITY</span>
              </div>
              <h3 className="font-grotesk font-bold text-lg uppercase text-white">
                Retention &amp; Re-Ordering CRM
              </h3>
              <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                Converting first-time transactions into compounding repeat business. QR feedback systems, WhatsApp broadcast triggers, and automated re-stock notifications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STICKY DIRECTORY CONSOLE & CATEGORY FILTER BAR                         */}
      {/* ========================================================================= */}
      <div id="directory-console" className="sticky top-20 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-y border-[#262626]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 space-y-3.5">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#737373]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by trade, keyword, or platform (e.g. Cafe, Amazon, Hospital, Fashion, B2B)..."
                className="w-full pl-10 pr-24 py-2.5 bg-[#141414] hover:bg-[#1A1A1A] focus:bg-[#141414] text-xs sm:text-sm text-[#FFFFFF] placeholder-[#737373] border border-[#2E2E2E] focus:border-[#FFFFFF] transition-all outline-none font-grotesk"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono font-semibold text-[#8A8A8A] hover:text-[#FFFFFF] transition-colors"
                >
                  CLEAR [✕]
                </button>
              )}
            </div>

            {/* Reading View Switcher */}
            <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-sans">
              <span className="font-mono text-[11px] text-[#737373] uppercase hidden sm:inline">
                DOSSIER DENSITY:
              </span>

              <div className="inline-flex items-center p-1 bg-[#141414] border border-[#262626]">
                <button
                  onClick={() => setCardDisplayMode('full')}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                    cardDisplayMode === 'full'
                      ? 'bg-[#FFFFFF] text-[#000000] font-bold'
                      : 'text-[#8A8A8A] hover:text-[#FFFFFF]'
                  }`}
                >
                  All Paras Open
                </button>

                <button
                  onClick={() => setCardDisplayMode('accordion')}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all ${
                    cardDisplayMode === 'accordion'
                      ? 'bg-[#FFFFFF] text-[#000000] font-bold'
                      : 'text-[#8A8A8A] hover:text-[#FFFFFF]'
                  }`}
                >
                  Interactive Drawer
                </button>
              </div>
            </div>

          </div>

          {/* Horizontal Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {MARKETPLACE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All Sectors'
                  ? MARKETPLACE_INDUSTRIES.length
                  : MARKETPLACE_INDUSTRIES.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-grotesk tracking-wide transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    isSelected
                      ? 'bg-[#FFFFFF] text-[#000000] font-bold shadow-sm'
                      : 'bg-[#111111] text-[#8A8A8A] hover:bg-[#1A1A1A] hover:text-[#FFFFFF] border border-[#262626]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 font-mono ${
                      isSelected
                        ? 'bg-[#000000]/15 text-[#000000]'
                        : 'bg-white/10 text-[#8A8A8A]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Active Results Status Strip */}
      <div className="bg-[#050505] border-b border-[#262626] py-2.5 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs font-sans text-[#8A8A8A]">
          <div className="flex items-center gap-2">
            <span>INDEXING</span>
            <strong className="text-[#FFFFFF] font-mono">[{filteredIndustries.length}]</strong>
            <span>OF {MARKETPLACE_INDUSTRIES.length} SECTOR OPERATIONAL DOSSIERS</span>
            {selectedCategory !== 'All Sectors' && (
              <span className="hidden sm:inline-block px-2 py-0.5 bg-[#141414] border border-[#262626] text-[#FFFFFF] text-[11px] font-mono">
                FILTER: {selectedCategory.toUpperCase()}
              </span>
            )}
          </div>

          {(selectedCategory !== 'All Sectors' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All Sectors');
                setSearchQuery('');
              }}
              className="text-[#FFFFFF] hover:underline font-mono text-[11px] font-semibold"
            >
              RESET ALL FILTERS ↺
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTOR DOSSIER CARDS (NO IMAGES, TYPOGRAPHY & RICH PARAS)              */}
      {/* ========================================================================= */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-16">
        
        {filteredIndustries.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-[#262626] bg-[#0A0A0A] p-8 max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 bg-[#141414] text-[#FFFFFF] flex items-center justify-center mx-auto text-lg font-mono border border-[#333333]">
              ∅
            </div>
            <h3 className="font-grotesk font-bold text-xl text-[#FFFFFF]">No Sector Matched Your Query</h3>
            <p className="font-grotesk text-sm text-[#8A8A8A]">
              Try searching for common terms like "Amazon", "Shopify", "Hospital", "Fashion", "B2B", or reset your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Sectors');
                setSearchQuery('');
              }}
              className="inline-flex items-center px-5 py-2.5 bg-[#FFFFFF] text-[#000000] text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredIndustries.map((ind) => {
            const isAccordionOpen = cardDisplayMode === 'full' || !!expandedPhases[ind.id];

            const phaseLabels = [
              {
                num: "PHASE 01",
                topic: "Hyperlocal Intent & Organic Search Authority",
                desc: ind.paragraphs[0]
              },
              {
                num: "PHASE 02",
                topic: "Channel Mechanics & Margin Defense",
                desc: ind.paragraphs[1]
              },
              {
                num: "PHASE 03",
                topic: "High-Impact Paid Media Funnels",
                desc: ind.paragraphs[2]
              },
              {
                num: "PHASE 04",
                topic: "Retention, LTV & Compounding CRM",
                desc: ind.paragraphs[3]
              }
            ];

            return (
              <article
                key={ind.id}
                id={ind.id}
                className="sector-dossier-card group bg-[#0A0A0A] border border-[#262626] hover:border-[#444444] transition-all duration-300 p-6 sm:p-10 space-y-8"
              >
                
                {/* 1. Card Top Telemetry Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#FFFFFF] bg-[#141414] px-3 py-1 border border-[#333333]">
                      SPEC // {ind.code}
                    </span>
                    <span className="font-sans text-xs font-semibold text-[#CCCCCC] px-3 py-1 bg-[#141414] border border-[#262626] uppercase tracking-wider">
                      {ind.category}
                    </span>
                    <span className="font-sans text-xs text-[#8A8A8A] uppercase tracking-wider hidden sm:inline">
                      {ind.sectorBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-[#737373] uppercase tracking-wider">
                      4 OPERATIONAL PHASES DOCUMENTED
                    </span>
                  </div>
                </div>

                {/* 2. Monumental Headline & Tagline */}
                <div className="space-y-4">
                  <h2 className="font-grotesk font-black text-2xl sm:text-4xl lg:text-5xl uppercase text-[#FFFFFF] leading-[1.02] tracking-tight">
                    {ind.title}
                  </h2>

                  <blockquote className="font-grotesk text-sm sm:text-base text-[#CCCCCC] italic border-l-2 border-[#FFFFFF] pl-4 py-1 leading-relaxed">
                    "{ind.tagline}"
                  </blockquote>
                </div>

                {/* 3. Target Stakeholders Monolith */}
                <div className="p-4 bg-[#141414] border border-[#262626] space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A] font-bold block">
                    BUILT SPECIFICALLY FOR:
                  </span>
                  <p className="font-grotesk text-xs sm:text-sm text-[#FFFFFF] font-semibold leading-relaxed">
                    {ind.targetPersona}
                  </p>
                </div>

                {/* 4. Master Executive Overview Paragraph */}
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] font-bold block">
                    EXECUTIVE COMMERCIAL THESIS:
                  </span>
                  <p className="font-grotesk text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
                    {ind.overview}
                  </p>
                </div>

                {/* 5. The 4 Rich Operational Paragraphs (The Strategic Phases) */}
                {isAccordionOpen ? (
                  <div className="space-y-6 pt-4 border-t border-[#262626]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#FFFFFF] font-bold">
                        TACTICAL PLAYBOOK // 4 DEPLOYMENT PHASES:
                      </span>
                      {cardDisplayMode === 'accordion' && (
                        <button
                          onClick={() => toggleCardPhases(ind.id)}
                          className="font-mono text-xs text-[#8A8A8A] hover:text-[#FFFFFF] uppercase"
                        >
                          [ Collapse Phases ↑ ]
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {phaseLabels.map((phase, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 sm:p-6 bg-[#0F0F0F] border border-[#222222] hover:border-[#333333] transition-colors space-y-3"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                            <span className="font-mono text-xs font-bold text-[#E4572E]">
                              {phase.num}
                            </span>
                            <span className="font-sans text-[10px] text-[#737373] uppercase tracking-wider">
                              OPERATIONAL BLUEPRINT
                            </span>
                          </div>

                          <h4 className="font-grotesk font-bold text-base text-[#FFFFFF] leading-snug">
                            {phase.topic}
                          </h4>

                          <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                            {phase.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      onClick={() => toggleCardPhases(ind.id)}
                      className="w-full py-3.5 bg-[#141414] hover:bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#FFFFFF] text-xs font-mono font-bold uppercase tracking-wider text-[#FFFFFF] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Read 4 Operational Deployment Phases &amp; Deep Strategy</span>
                      <span>↓</span>
                    </button>
                  </div>
                )}

                {/* 6. Core Deliverables & Capabilities Checklist */}
                <div className="pt-6 border-t border-[#262626] space-y-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] font-bold block">
                    ENGINEERED SYSTEM CAPABILITIES &amp; SLAS:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ind.keyCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm font-grotesk text-[#CCCCCC]">
                        <span className="font-sans font-bold text-[#FFFFFF] mt-0.5">✓</span>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. Organic High-Intent SEO Query Matrix */}
                <div className="pt-6 border-t border-[#262626] space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8A8A8A] font-bold block">
                    HIGH-INTENT SEARCH QUERIES TARGET MATRIX (GOOGLE &amp; AMAZON CLUSTERS):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ind.searchKeywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#141414] border border-[#262626] text-[#A3A3A3] uppercase"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 8. Bottom Action Links */}
                <div className="pt-6 border-t border-[#262626] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs font-sans text-[#737373]">
                    <span>PRACTICE SPECIALIZATION · </span>
                    <span className="text-[#FFFFFF]">{ind.category.toUpperCase()}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="px-4 py-2.5 bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors"
                      title="Back to Top"
                    >
                      ↑ Top
                    </button>

                    <Link
                      to={ind.primaryServiceLink}
                      className="px-6 py-2.5 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <span>{ind.primaryServiceLabel.replace(' →', '')}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

              </article>
            );
          })
        )}

      </main>

      {/* ========================================================================= */}
      {/* 5. BESPOKE AUDIT INVITATION SECTION                                       */}
      {/* ========================================================================= */}
      <section id="contact-briefing" className="relative py-20 sm:py-28 bg-[#000000] text-[#FFFFFF] border-t border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
                BESPOKE SECTOR ARCHITECTURE // 48-HOUR DIAGNOSTIC
              </span>

              <h2 className="font-grotesk font-black text-[clamp(32px,5vw,78px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
                Don't See Your Exact Trade? <br />
                <span className="text-[#8A8A8A]">We Engineer Custom Funnels.</span>
              </h2>

              <p className="font-grotesk text-base sm:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed">
                Whether you operate an export-oriented industrial manufacturing facility, a multi-city diagnostic chain, or a high-velocity D2C consumer brand, our practice leads inspect your actual unit economics and build custom growth architecture.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#262626] lg:pl-8">
              <div className="p-5 bg-[#0A0A0A] border border-[#262626] space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold block">
                  PRACTICE GUARANTEE
                </span>
                <p className="font-grotesk text-xs text-[#8A8A8A]">
                  Direct partner access. Zero tiered ticketing queues. 100% written accountability on all deliverables and SLAs.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#inquiry-form"
                  className="px-6 py-4 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Request a Trade Audit →
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-4 bg-[#000000] hover:bg-[#141414] border border-[#333333] hover:border-[#FFFFFF] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  Schedule Partner Briefing
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL MULTI-SERVICE INQUIRY FORM                                        */}
      {/* ========================================================================= */}
      <div id="inquiry-form">
        <Home2FinalCta
          data={{
            eyebrow: "INITIATE TRANSMISSION // SECTOR BRIEFING",
            headline: "Enter your industry orbit.",
            subtext: "Connect directly with our senior practice partners. We audit your search footprint, catalogue health, and customer acquisition funnels within 48 hours.",
            wordmark: "E-COMET"
          }}
        />
      </div>

      {/* Global Comprehensive Site Footer */}
      <Footer />

    </div>
  );
}
