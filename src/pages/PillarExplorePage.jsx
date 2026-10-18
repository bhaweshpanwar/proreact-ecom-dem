import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PILLARS_DATA } from '../data/megaMenuData';
import { SERVICES_DATA } from '../data/servicesData';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

// Bespoke Hero Headlines & Subtitles per Pillar (Maze reference style)
const PILLAR_HERO_CONTENT = {
  'ecommerce-management': {
    headline: 'Unlock marketplace scale across channels',
    subtitle: 'Build with senior marketplace specialists, for your brand. Direct operational execution across Amazon, Flipkart, Quick Commerce, and multi-channel catalogs with zero junior trainees.',
    badge: 'CORE PILLAR · MARKETPLACE GROWTH',
    floatingTags: ['Amazon 1P & 3P Verified', 'Flipkart PLA Active', 'Blinkit Darkstore Sync', 'A+ Infographics Certified'],
    stats: [
      { label: 'Buy-Box Win Rate', value: '98.5%+' },
      { label: 'Average TACoS', value: '< 14%' },
      { label: 'Catalog Health', value: '100% Compliant' }
    ]
  },
  'digital-marketing': {
    headline: 'Unlock performance reach across digital channels',
    subtitle: 'Drive qualified audience acquisition with algorithmic paid media, technical SEO, inbound lead generation, and automated retention flows. P&L aligned, zero vanity claims.',
    badge: 'CORE PILLAR · PERFORMANCE & ACQUISITION',
    floatingTags: ['Meta Ads Certified', 'Google Search & PMax', 'Technical SEO Sprint', 'Automated WhatsApp Flows'],
    stats: [
      { label: 'Target Blended ROAS', value: '4.2x - 6.5x' },
      { label: 'Keyword Indexing', value: 'Top 3 ASINs' },
      { label: 'Lead Verification', value: '100% Verified' }
    ]
  },
  'website-development': {
    headline: 'Build high-performance digital stores & web applications',
    subtitle: 'Fast, secure, conversion-first web architectures engineered for modern commerce. From custom Shopify Plus builds to React/Next.js corporate portals with Core Web Vitals excellence.',
    badge: 'CORE PILLAR · WEB & COMMERCE ENGINEERING',
    floatingTags: ['Shopify Plus Certified', 'Next.js & React Core', 'Core Web Vitals 95+', 'Checkout Funnel Optimization'],
    stats: [
      { label: 'Lighthouse Score', value: '95+ Mobile' },
      { label: 'Checkout Speed', value: '< 1.4s' },
      { label: 'Conversion Lift', value: '+34% Average' }
    ]
  },
  'youtube-video-services': {
    headline: 'Scale audience engagement with commercial video production',
    subtitle: 'High-retention video editing, viral Shorts/Reels repurposing, and channel packaging designed to capture watch time, earn algorithmic impressions, and compound organic brand reach.',
    badge: 'CORE PILLAR · VIDEO & MEDIA PRODUCTION',
    floatingTags: ['High-Retention Edits', 'Viral Shorts & Reels', 'High-CTR Thumbnails', 'Sound Design & Motion'],
    stats: [
      { label: 'Average Watch Time', value: '+62%' },
      { label: 'Thumbnail CTR', value: '11.4% Avg' },
      { label: 'Monthly Video Views', value: 'Compounding' }
    ]
  },
  'creative-services': {
    headline: 'Build memorable brand identity & conversion creative',
    subtitle: 'Visual identity systems, Amazon A+ content, performance ad creatives, and retail-ready packaging crafted with strategic intent and consumer psychology.',
    badge: 'CORE PILLAR · BRAND IDENTITY & VISUALS',
    floatingTags: ['Visual Identity Systems', 'A+ Content Infographics', 'High-Yield Ad Creatives', 'Retail Packaging Dielines'],
    stats: [
      { label: 'Asset Approval Rate', value: '97% First Pass' },
      { label: 'Listing Conversion Lift', value: '+28%' },
      { label: 'Delivery Guardrails', value: 'Fixed Written Scope' }
    ]
  },
  'integrated-solutions': {
    headline: 'Unify multi-discipline growth under one governance',
    subtitle: 'Break down agency silos. Multi-service retainers combining marketplace management, performance advertising, custom web development, and creative production in single-point alignment.',
    badge: 'CORE PILLAR · FULL-FUNNEL OPERATING SYSTEM',
    floatingTags: ['Cross-Pillar Roadmap', 'Unified Unit Economics', 'Direct Practice Partner Lead', 'Real-Time Telemetry'],
    stats: [
      { label: 'Pillars Synchronized', value: 'Up to 6 Practices' },
      { label: 'Agency Silos', value: '0 Silos' },
      { label: 'Governance SLA', value: 'Direct WhatsApp/Slack' }
    ]
  }
};

export default function PillarExplorePage({ pillarOverride }) {
  const { pillarId: routePillarId, slug } = useParams();
  const navigate = useNavigate();
  const cardsContainerRef = useRef(null);

  // Resolve target pillar ID
  const rawId = pillarOverride || routePillarId || slug || 'ecommerce-management';
  
  // Find matching pillar in PILLARS_DATA
  const activePillar = PILLARS_DATA.find(p => p.id === rawId || p.primarySlug.includes(rawId)) || PILLARS_DATA[0];
  const heroContent = PILLAR_HERO_CONTENT[activePillar.id] || PILLAR_HERO_CONTENT['ecommerce-management'];

  // Map services belonging to this pillar
  const pillarServices = SERVICES_DATA.filter(s => {
    if (activePillar.id === 'ecommerce-management') return s.pillarId === 'marketplaces' && s.id !== 'ecommerce-management';
    if (activePillar.id === 'digital-marketing') return s.pillarId === 'marketing' && s.id !== 'digital-marketing';
    if (activePillar.id === 'website-development') return s.pillarId === 'websites' && s.id !== 'website-development';
    if (activePillar.id === 'youtube-video-services') return s.pillarId === 'video' && s.id !== 'youtube-video-services';
    if (activePillar.id === 'creative-services') return s.pillarId === 'creative' && s.id !== 'creative-services';
    if (activePillar.id === 'integrated-solutions') return s.pillarId === 'integrated';
    return false;
  });

  // If few direct services exist in SERVICES_DATA, synthesize rich capability modules from subPillars
  const subPillarCards = (activePillar.subPillars || []).flatMap((sub, subIdx) => {
    return sub.links.map((link, lIdx) => ({
      id: link.href.replace('/services/', ''),
      title: link.label,
      shortTitle: link.label.split(' ')[0],
      tagline: `${sub.kicker} Execution Squad`,
      overview: `Dedicated operational module specializing in ${link.label.toLowerCase()} with senior practice governance and written deliverable guardrails.`,
      kicker: sub.kicker,
      colorHex: activePillar.colorHex,
      href: link.href,
      deliverables: [
        'Strategic audit & technical mapping sprint',
        'Direct practice partner delivery oversight',
        'Weekly verified performance telemetry'
      ],
      kpis: [
        { label: 'Sprint Governance', value: 'Senior Direct' },
        { label: 'Turnaround SLA', value: '48h Rapid' }
      ]
    }));
  });

  // Combine primary services with sub-pillar specializations, avoiding duplicate IDs
  const combinedCards = [...pillarServices];
  subPillarCards.forEach(subCard => {
    if (!combinedCards.some(c => c.id === subCard.id || c.title.toLowerCase() === subCard.title.toLowerCase())) {
      combinedCards.push(subCard);
    }
  });

  // Scroll to top on pillar switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePillar.id]);

  // Entrance & Stagger Animation with GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero text and pill entrance
      gsap.fromTo(
        '.maze-hero-anim',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );

      // 2. Floating preview tiles on the right
      gsap.fromTo(
        '.maze-floating-card',
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

      // 3. Staggered entrance for all services cards
      gsap.fromTo(
        '.pillar-service-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [activePillar.id]);

  const handlePillarChange = (newPillarId) => {
    navigate(`/services/${newPillarId}`);
  };

  return (
    <div className="relative min-h-screen bg-[#FBFBFA] text-slate-900 select-none overflow-x-hidden pt-20">
      
      {/* =========================================================================
          MAZE-STYLE HERO SECTION (Large Clean Canvas Container)
          ========================================================================= */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-6 sm:pb-12">
        <div className="relative bg-[#F4F4F1] border border-slate-200/90 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-sm">
          
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-3xl bg-slate-300"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Single Prominent Heading & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Category Kicker Badge */}
              <div className="maze-hero-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/70 text-[11px] font-mono font-bold tracking-wider text-slate-700 shadow-2xs mb-6">
                <span>{heroContent.badge}</span>
              </div>

              {/* Single Prominent Display Heading */}
              <h1 className="maze-hero-anim font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-tight text-space-950 leading-[1.08] mb-6">
                {heroContent.headline}
              </h1>

              {/* Clean Subtitle */}
              <p className="maze-hero-anim font-sans text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-10">
                {heroContent.subtitle}
              </p>

              {/* Dual Action Buttons (Matching Maze Reference) */}
              <div className="maze-hero-anim flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#services-grid"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-sm font-semibold tracking-wide transition-all hover:scale-105 shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>Explore All Services</span>
                  <span>↓</span>
                </a>

                <a
                  href="#closing"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-sans text-sm font-semibold tracking-wide transition-all shadow-2xs inline-flex items-center justify-center gap-2"
                >
                  <span>Book Strategic Consultation</span>
                  <span>→</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div className="maze-hero-anim mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-6 text-[12px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% In-House Senior Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct Written SLAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Zero Junior Trainees</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Visual Tiles (Maze Screenshot Style) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px]">
              
              {/* Blurred Background Card (Depth-of-field effect from Maze) */}
              <div 
                className="maze-floating-card absolute -top-4 -right-2 w-56 sm:w-64 h-48 sm:h-56 bg-white/70 border border-slate-200/70 rounded-3xl shadow-lg p-5 blur-[2.5px] opacity-75 transform rotate-6 pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-200 mb-3" />
                <div className="h-3.5 bg-slate-200 rounded-full w-3/4 mb-2" />
                <div className="h-2.5 bg-slate-100 rounded-full w-1/2" />
              </div>

              {/* Main Crisp Foreground Card 1 (Top Hero Tile - Services card style) */}
              <div className="maze-floating-card relative z-20 w-full max-w-[340px] sm:max-w-[380px] bg-[#FAFAFA] border border-stone-200/90 rounded-[28px] p-6 sm:p-7 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
                
                {/* Header Tag with Platform Dot */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200/60 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {activePillar.badge} SPRINT
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                    ACTIVE
                  </span>
                </div>

                {/* Card Title & Core Metrics - Serif font */}
                <h3 className="font-serif text-2xl font-normal text-space-950 mb-2">
                  {activePillar.title}
                </h3>
                <p className="font-sans text-xs text-slate-500 line-clamp-2 mb-5">
                  {activePillar.description}
                </p>

                {/* 3 Live Metric Badges */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  {(heroContent.stats || []).map((st, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="text-[14px] font-sans font-bold text-slate-900">
                        {st.value}
                      </div>
                      <div className="text-[9.5px] font-mono text-slate-500 leading-tight">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Platform Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {heroContent.floatingTags.slice(0, 3).map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Foreground Card 2 (Bottom Offset Mini Card) */}
              <div className="maze-floating-card absolute -bottom-6 -left-2 sm:-left-6 z-30 bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex items-center gap-3.5 max-w-[280px]">
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

              {/* Bottom Right Floating Badge Pill (Maze Reference) */}
              <div 
                className="maze-floating-card absolute bottom-2 -right-3 z-30 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center font-bold text-slate-800 hover:scale-110 transition-transform cursor-pointer"
                title="E-Comet Certified Architecture"
              >
                <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: activePillar.colorHex }} />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PILLAR SWITCHER TABS (Seamless Exploration)
          ========================================================================= */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 sticky top-20 z-30 bg-[#FBFBFA]/90 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 border-b border-slate-200">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 flex-shrink-0 hidden md:inline-block">
            EXPLORE PILLARS:
          </span>
          {PILLARS_DATA.map((pillar) => {
            const isActive = pillar.id === activePillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => handlePillarChange(pillar.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 flex-shrink-0 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-sm scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: pillar.colorHex }} 
                />
                <span>{pillar.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          ANIMATED SERVICES CARDS GRID (Requested by user)
          ========================================================================= */}
      <section id="services-grid" ref={cardsContainerRef} className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activePillar.colorHex }} />
              <span>SPECIALIZED PRACTICE SQUADS · {activePillar.shortTitle.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-space-950">
              All Services &amp; Capabilities
            </h2>
          </div>
          <p className="text-sm font-sans text-slate-500 max-w-md">
            Click any service card to view its complete operational architecture, execution roadmap, deliverables, and package pricing.
          </p>
        </div>

        {/* 3-Column Animated Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {combinedCards.map((service, index) => {
            const cardNum = String(index + 1).padStart(2, '0');
            const targetUrl = service.href || `/services/${service.id}`;

            return (
              <div
                key={service.id || index}
                className="pillar-service-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
              >
                {/* Card Top Row: Number + Pillar Indicator + Badge */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200/60 mb-5 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-space-950 transition-colors">
                        {cardNum}
                      </span>
                    </div>
                    <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-stone-200/80">
                      {service.kicker || service.category || activePillar.badge}
                    </span>
                  </div>

                  {/* Service Title - Font Serif with Cormorant matching services page */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 group-hover:text-black transition-colors duration-300 leading-snug mb-3 relative z-10">
                    <Link to={targetUrl} className="hover:underline">
                      {service.title || service.name}
                    </Link>
                  </h3>

                  {/* Service Tagline & Overview */}
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3 relative z-10">
                    {service.overview || service.tagline || service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2.5 mb-8 relative z-10">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      CORE DELIVERABLES:
                    </div>
                    {((service.deliverables && service.deliverables.slice(0, 3)) || (service.features && service.features.slice(0, 3)) || [
                      'Strategic audit & technical mapping sprint',
                      'Direct practice partner delivery oversight',
                      'Weekly verified performance telemetry'
                    ]).map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs font-sans text-slate-700 leading-snug">
                        <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span className="line-clamp-2">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Card Bottom Row: KPI Tag + Link Button */}
                  <div className="pt-5 border-t border-stone-200/80 mt-2 relative z-10 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider">
                        {(service.kpis && service.kpis[0]?.label) || 'GOVERNANCE'}
                      </span>
                      <span className="text-xs font-sans font-bold text-slate-800">
                        {(service.kpis && service.kpis[0]?.value) || 'Senior Direct'}
                      </span>
                    </div>

                    <Link
                      to={targetUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#080B10] hover:bg-[#252B36] group-hover:bg-[#252B36] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-xs group-hover:scale-105"
                    >
                      <span>View Dossier</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Hairline Bottom Border Matching Services Page Cards */}
                  <div className="mt-4">
                    <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          PILLAR STRATEGIC GUARDRAILS MATRIX (Why E-Comet Model)
          ========================================================================= */}
      <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-[#111622] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-16 border border-slate-800">
          
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-blue-400 block mb-2">
              E-COMET GOVERNANCE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-white mb-4">
              How Every Service in This Pillar Operates
            </h2>
            <p className="text-slate-400 font-sans text-base leading-relaxed">
              We eliminated the traditional agency model of junior trainees, inflated retainers, and opaque dashboards. Every capability is governed directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-2xl font-mono font-bold text-blue-400 mb-2">01</div>
              <h3 className="text-xl font-serif font-normal text-white mb-2">P&L Alignment</h3>
              <p className="text-xs font-sans text-slate-400 leading-relaxed">
                Prioritizing net unit margins and inventory velocity over reckless top-line ad spend inflation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-2xl font-mono font-bold text-blue-400 mb-2">02</div>
              <h3 className="text-xl font-serif font-normal text-white mb-2">Senior Direct Access</h3>
              <p className="text-xs font-sans text-slate-400 leading-relaxed">
                You work directly with dedicated practice partners. Zero telephone game through junior account managers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-2xl font-mono font-bold text-blue-400 mb-2">03</div>
              <h3 className="text-xl font-serif font-normal text-white mb-2">Written Fixed Scope</h3>
              <p className="text-xs font-sans text-slate-400 leading-relaxed">
                Deliverables, timelines, revision limits, and turnaround SLAs are confirmed in writing before project kickoff.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-2xl font-mono font-bold text-blue-400 mb-2">04</div>
              <h3 className="text-xl font-serif font-normal text-white mb-2">Verified Telemetry</h3>
              <p className="text-xs font-sans text-slate-400 leading-relaxed">
                Transparent weekly performance dashboards with direct attribution data and zero vanity screenshots.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CLOSING STRATEGIC BRIEFING & FOOTER
          ========================================================================= */}
      <ClosingSection />
      <Footer />

    </div>
  );
}
