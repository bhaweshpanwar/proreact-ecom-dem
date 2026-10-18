import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../data/servicesData';
import { PACKAGES_BY_PILLAR, USE_CASES_BY_PILLAR } from '../data/packagesData';
import { getServiceFaqs } from '../data/serviceFaqsData';
import SingleCometCanvas from '../components/Hero3D/SingleCometCanvas';
import CosmicGalaxyCanvas from '../components/Hero3D/CosmicGalaxyCanvas';
import StrategicBlueprintCanvas from '../components/ServiceDetail/StrategicBlueprintCanvas';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage({ slugOverride }) {
  const { slug: routeSlug } = useParams();
  const slug = slugOverride || routeSlug;
  const [openFaqs, setOpenFaqs] = useState([0]); // Default first FAQ open
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [activePersona, setActivePersona] = useState(0);
  const containerRef = useRef(null);
  const whyVideoRef = useRef(null);

  // Strategic Fit Dossiers tailored to engagement tiers
  const personaDossiers = [
    {
      stageTag: "DAY-1 ONBOARDING",
      slaTarget: "Rapid Setup Sprint",
      coreMetric: "Catalogue Health & Verification",
      governance: "Senior Specialist Direct",
      deliverableSummary: "Complete brand onboarding, taxonomy mapping, compliance audit, and initial catalogue architecture.",
      highlights: [
        "Structured marketplace account registration & tax compliance checks",
        "Clean catalogue variation mapping & high-indexing keyword seeds",
        "Day-1 launch verification with zero initial listing rejections"
      ]
    },
    {
      stageTag: "GROWTH & EXPANSION",
      slaTarget: "Continuous Sprints",
      coreMetric: "ROAS Efficiency & Organic Share",
      governance: "Practice Partner Direct",
      deliverableSummary: "Full-funnel advertising restructuring, proactive buy-box monitoring, and margin-defending bid automation.",
      highlights: [
        "Keyword harvest campaigns and negative targeting to halt ad spend waste",
        "A+ Content curation, brand store enhancement, and conversion testing",
        "Automated margin audits and daily buy-box recovery protocols"
      ]
    },
    {
      stageTag: "ENTERPRISE & WHOLESALE",
      slaTarget: "Strategic Governance",
      coreMetric: "Multi-Channel Margin Stability",
      governance: "Executive Director Lead",
      deliverableSummary: "Multi-channel inventory synchronization, high-volume catalogue management, and centralized business reporting.",
      highlights: [
        "Dedicated enterprise account architecture across Amazon & Flipkart",
        "Unified stock feed governance to prevent overselling penalties",
        "Quarterly P&L reviews and custom executive margin dashboards"
      ]
    }
  ];

  // 4 Core Why Differentiators (Comet Trajectory Points)
  const whyPoints = [
    {
      index: "01",
      pillar: "Commercial Focus",
      title: "Business-First Thinking",
      desc: "We start by understanding your margins, inventory, audience, and commercial priorities before choosing tools.",
      tag: "P&L ALIGNED",
      highlight: "Direct Unit Economics Audit",
      metric: "100% Margin Protected"
    },
    {
      index: "02",
      pillar: "Multi-Pillar Sync",
      title: "Connected Capabilities",
      desc: "Marketplaces, web development, video, and paid acquisition work in unified lockstep under one roof.",
      tag: "ZERO SILOS",
      highlight: "Unified Cross-Practice Roadmap",
      metric: "6 Pillars Synchronized"
    },
    {
      index: "03",
      pillar: "Integrity & Governance",
      title: "Transparent Scope",
      desc: "Deliverables, revision limits, costs, and responsibilities are discussed and agreed in writing before kickoff.",
      tag: "WRITTEN CONTRACT",
      highlight: "Fixed Scope Guardrails",
      metric: "Zero Surprise Overages"
    },
    {
      index: "04",
      pillar: "Grounded Reality",
      title: "Zero Vanity Claims",
      desc: "No fabricated testimonials or false revenue guarantees. We evaluate performance through honest operational progress.",
      tag: "HONEST DELIVERY",
      highlight: "Verified Telemetry Reporting",
      metric: "Pure Performance Telemetry"
    }
  ];

  // Find matching service by id or fallback to first
  const service = SERVICES_DATA.find(s => s.id === slug) || SERVICES_DATA[0];

  // Resolve packages and illustrative use cases for this pillar
  const packageData = PACKAGES_BY_PILLAR[service.pillarId] || PACKAGES_BY_PILLAR['marketplaces'];
  const useCases = USE_CASES_BY_PILLAR[service.pillarId] || USE_CASES_BY_PILLAR['marketplaces'];

  // Resolve 10 comprehensive FAQs tailored to service and governance (5 Left, 5 Right)
  const serviceFaqs = getServiceFaqs(service);
  const leftFaqs = serviceFaqs.slice(0, 5);
  const rightFaqs = serviceFaqs.slice(5, 10);

  // Sibling services in the same pillar
  const relatedServices = SERVICES_DATA.filter(
    s => s.pillarId === service.pillarId && s.id !== service.id
  ).slice(0, 4);

  // Guarantee 4 capabilities for this service
  const defaultCapabilities = [
    { 
      title: "Continuous Technical Governance", 
      desc: "Dedicated architect oversight, proactive health checks, and verified issue mitigation within strict turnaround SLAs."
    },
    { 
      title: "Data Telemetry & Attribution Reporting", 
      desc: "Granular attribution mapping, performance cohort analytics, and executive business dashboards for executive visibility."
    },
    { 
      title: "Direct Partner Channel Alignment", 
      desc: "Senior practice lead direct communication, bi-weekly reviews, and transparent sprint milestones with zero middleman overhead."
    },
    { 
      title: "Scalable Execution Architecture", 
      desc: "Modular, zero-defect delivery systems structured around sustainable business economics and compounding revenue margins."
    }
  ];

  const rawFeatures = service.keyFeatures || [];
  const fourCapabilities = [
    ...rawFeatures.slice(0, 4),
    ...defaultCapabilities.slice(0, Math.max(0, 4 - rawFeatures.length))
  ].slice(0, 4);

  const getCardDeliverables = (idx) => {
    const d = service.deliverables || [];
    if (d.length > 0) {
      const start = (idx * 2) % d.length;
      const d1 = d[start];
      const d2 = d[(start + 1) % d.length];
      return [d1, d2].filter(Boolean);
    }
    return [
      "Technical quality verification & performance audit",
      "Milestone reviews & direct practice partner alignment"
    ];
  };

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setOpenFaqs([0]);
    ScrollTrigger.refresh();
  }, [slug]);

  // Bespoke scroll swipe-in and stagger animations for all sections
  useEffect(() => {
    let mm;
    const ctx = gsap.context(() => {
      // 1a. Architecture Main Heading floating from right-outside directly locked to scroll
      gsap.fromTo(
        '.architecture-heading-float',
        { x: '100vw' },
        {
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.sec-architecture',
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
            invalidateOnRefresh: true,
          }
        }
      );

      // 1b. The 4 Cards in 2x2 Matrix appearing as user scrolls
      gsap.utils.toArray('.architecture-matrix-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

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

      // 3. Why Section: 4 Corner Cards & Center Video Animation
      gsap.fromTo(
        '.card-why-left',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        '.why-center-video-frame',
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        '.card-why-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-why-us',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Roadmap Staircase Cards: Flowing from bottom one-by-one on continuous scroll, reversing on scroll-up
      mm = gsap.matchMedia();

      // Desktop & large screens: Pin on arrival and animate cards sequentially 1-by-1 scrubbed to scroll
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray('.architecture-stair-card');
        if (!cards.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.sec-roadmap',
            start: 'top top',
            end: '+=1600',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });

        cards.forEach((card, idx) => {
          tl.fromTo(
            card,
            { y: 260, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 1, 
              ease: 'power2.out' 
            },
            idx * 0.95
          );
        });

        // Settle pause so final staircase is appreciated before unpin
        tl.to({}, { duration: 0.4 });
      });

      // Mobile & small tablet: Scrubbed scroll for each card individually
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray('.architecture-stair-card');
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 60%',
                scrub: 1,
                invalidateOnRefresh: true,
              }
            }
          );
        });
      });

      // 5. Use Case Split Panels - Swipe in from left & right locked directly to scroll progress
      gsap.fromTo(
        '.card-usecase-left',
        { x: -160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-usecases',
            start: 'top 85%',
            end: 'top 32%',
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
      gsap.fromTo(
        '.card-usecase-right',
        { x: 160, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-usecases',
            start: 'top 85%',
            end: 'top 32%',
            scrub: 1,
            invalidateOnRefresh: true,
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
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-faq',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => {
      if (mm) mm.revert();
      ctx.revert();
    };
  }, [slug]);

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white select-none">
      
      {/* ===================================================================== */}
      {/* 1. HERO SECTION (Deep Black Space, Zero Violet, Refined 3D Comet)     */}
      {/* ===================================================================== */}
      <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 bg-[#000000] text-white overflow-hidden min-h-[720px] lg:min-h-[840px] xl:min-h-[880px] flex items-center">
        
        {/* Full-bleed Real-Time 3D Galaxy Canvas (Starfield + Zero Violet Dust) */}
        <CosmicGalaxyCanvas accentColorHex={service.colorHex} />

        {/* Ambient Dark Vignette (Pure Black Space) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50 z-[1]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 0%, #000000 100%)'
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Breadcrumb & Live Operational Telemetry Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Orbit</Link>
              <span>/</span>
              <span className="text-slate-500 uppercase tracking-wider">{service.category}</span>
              <span>/</span>
              <span className="text-white font-semibold">{service.shortTitle || service.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
                PRACTICE TELEMETRY · 04 CORE PILLARS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal leading-[1.04] tracking-tight text-white">
                {service.title}
              </h1>

              <p className="text-xl sm:text-2xl font-sans font-normal text-slate-200">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
                {service.overview}
              </p>

              {/* 3 Executive Spec Chips */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 max-w-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Deployment SLA
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    &lt; 48-Hour Sprint
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Governance
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    Partner Direct
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                    Performance Model
                  </span>
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white">
                    Compounding Equity
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a 
                  href="#closing"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-space-950 font-sans text-xs font-semibold transition-all hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Get a Custom Quote</span>
                  <span>→</span>
                </a>

                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Talk on WhatsApp</span>
                </a>

                <a 
                  href="#pricing" 
                  className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-sans text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Packages ↓
                </a>
              </div>

            </div>

            {/* Right Celestial Arena: 3D Asteroid from Blender */}
            <div className="lg:col-span-5 flex items-center justify-center relative w-full">
              <SingleCometCanvas colorHex={service.colorHex} title={service.title} />
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. CORE CAPABILITIES (2x2 Matrix Architectural Stage)                 */}
      {/* ===================================================================== */}
      <section className="sec-architecture relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          {/* Main Display Heading tied 1:1 to scroll progress (decreased font size) */}
          <div className="mb-12 sm:mb-16 overflow-hidden">
            <h2 className="architecture-heading-float font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-space-950 tracking-tight leading-[1.15] will-change-transform">
              Engineered with zero operational bloat.
            </h2>
          </div>

          {/* 4 Cards in 2x2 Matrix: Full container width, minimum gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
            {fourCapabilities.map((feat, idx) => {
              const cardDeliverables = getCardDeliverables(idx);
              return (
                <div 
                  key={idx}
                  className="architecture-matrix-card group relative rounded-[28px] sm:rounded-[36px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-12 lg:p-14 min-h-[320px] flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Card Heading */}
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-normal text-space-950 tracking-tight leading-[1.2] mb-3.5 group-hover:text-black transition-colors duration-300 max-w-lg">
                      {feat.title}
                    </h3>

                    {/* Clean, articulate description */}
                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                      {feat.desc}
                    </p>

                    {/* Substantive Scope & Key Deliverables */}
                    <div className="pt-5 border-t border-stone-200/60">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                        Scope &amp; Deliverables
                      </span>
                      <ul className="space-y-2">
                        {cardDeliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                            <span className="text-blue-600 font-semibold select-none flex-shrink-0">―</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Clean hairline accent line (No dot) */}
                  <div className="relative z-10 mt-8">
                    <div className="h-px bg-stone-200 w-full group-hover:bg-space-950/40 transition-colors duration-500" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. STRATEGIC FIT (Split-Screen Interactive 3D Blueprint Stage)        */}
      {/* ===================================================================== */}
      <section className="sec-benefits relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column: Title & 3 Interactive Persona Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div className="max-w-2xl mb-8 sm:mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                  Strategic Fit · 03 Engagement Profiles
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
                  Who can benefit from this service?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  Tailored execution roadmaps designed around your current infrastructure, catalogue depth, and commercial targets.
                </p>
              </div>

              {/* 3 Persona Cards Stack */}
              <div className="space-y-3.5 sm:space-y-4">
                {(service.whoBenefits || []).map((item, idx) => {
                  const isActive = activePersona === idx;
                  const dossier = personaDossiers[idx] || personaDossiers[0];
                  
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActivePersona(idx)}
                      onMouseEnter={() => setActivePersona(idx)}
                      className={`card-benefit rounded-[26px] p-6 sm:p-8 border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                        isActive 
                          ? 'bg-white border-space-950 shadow-xl -translate-y-0.5' 
                          : 'bg-[#FAFAFA] border-stone-200/80 hover:bg-white hover:border-stone-400'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                          style={{ backgroundColor: service.colorHex || '#2563EB' }}
                        />
                      )}

                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                          PROFILE · 0{idx + 1}
                        </span>
                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors ${
                          isActive 
                            ? 'bg-space-950 text-white border-space-950 font-semibold' 
                            : 'bg-stone-100 text-slate-500 border-stone-200'
                        }`}>
                          {dossier.stageTag}
                        </span>
                      </div>

                      <h3 className={`font-serif text-2xl sm:text-[1.75rem] font-normal tracking-tight mb-2.5 transition-colors ${
                        isActive ? 'text-space-950' : 'text-space-900'
                      }`}>
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
                        {item.desc}
                      </p>

                      {/* Expanded criteria when active */}
                      {isActive && (
                        <div className="pt-3.5 mt-2 border-t border-stone-100 space-y-2">
                          {dossier.highlights.slice(0, 2).map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 font-sans leading-relaxed">
                              <span className="text-blue-600 font-semibold select-none">―</span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-stone-100/70 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">
                          {isActive ? '● Live Simulation Active' : '○ Select to inspect blueprint'}
                        </span>
                        <span className={`font-semibold transition-transform ${
                          isActive ? 'text-space-950 translate-x-1' : 'text-slate-400'
                        }`}>
                          View Dossier →
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Sticky Executive 3D Astrolabe Blueprint Stage */}
            <div className="lg:col-span-5 sticky top-28 self-start">
              
              <div className="rounded-[32px] bg-[#0A0E1A] border border-slate-800 shadow-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[580px]">
                
                {/* Atmospheric grid & glow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: service.colorHex || '#2563EB' }}
                />

                {/* Top Meta Terminal Bar */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300">
                      TELEMETRY DOSSIER · 0{activePersona + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 uppercase">
                    3D ASTROLABE LIVE
                  </span>
                </div>

                {/* Middle: 3D Interactive Astrolabe Blueprint Canvas */}
                <div className="relative z-10 w-full h-[260px] sm:h-[300px] my-2">
                  <StrategicBlueprintCanvas 
                    activePersona={activePersona} 
                    colorHex={service.colorHex || '#38BDF8'} 
                  />
                  
                  {/* Floating Micro-Telemetry Overlays */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 pointer-events-none">
                    NODE: {activePersona === 0 ? "ALPHA // INGESTION" : activePersona === 1 ? "BETA // ACCELERATION" : "GAMMA // GOVERNANCE"}
                  </div>

                  <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 pointer-events-none">
                    COORDINATE: 360° ACTIVE
                  </div>
                </div>

                {/* Bottom: Dynamic Spec Dossier */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80 space-y-3.5">
                  
                  <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block mb-1">TARGET SLA</span>
                      <span className="text-white font-semibold">
                        {(personaDossiers[activePersona] || personaDossiers[0]).slaTarget}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400 block mb-1">GOVERNANCE</span>
                      <span className="text-white font-semibold">
                        {(personaDossiers[activePersona] || personaDossiers[0]).governance}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-1">
                      CORE OPERATIONAL FOCUS
                    </span>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      {(personaDossiers[activePersona] || personaDossiers[0]).deliverableSummary}
                    </p>
                  </div>

                  {/* Primary Deployment Action */}
                  <a
                    href="#closing-cta"
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-space-950 font-sans font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all active:scale-[0.99] shadow-lg shadow-white/5"
                  >
                    <span>Deploy This Engagement Playbook</span>
                    <span>→</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. THE E-COMET ADVANTAGE (White Background, Center Short-Ratio Video)  */}
      {/* 4 Corners with Clean Cards (Zero Dots, Zero Header, Zero Footer)      */}
      {/* ===================================================================== */}
      <section className="sec-why-us relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              The E-Comet Advantage · 04 Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              Why businesses partner with our orbit.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl">
              An execution philosophy centered on sustainable compounding equity, transparent governance, and elimination of operational bloat.
            </p>
          </div>

          {/* 3-Column 4-Corner Layout: 2 Left Cards + Center Short Video + 2 Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column: Top-Left Card & Bottom-Left Card */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8">
              {/* Card 1: Business-First Thinking */}
              <div className="card-why-left group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                    {whyPoints[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                    {whyPoints[0].desc}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-800 leading-relaxed pt-4 border-t border-stone-200/60">
                  {whyPoints[0].highlight}
                </p>
              </div>

              {/* Card 2: Connected Capabilities */}
              <div className="card-why-left group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                    {whyPoints[1].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                    {whyPoints[1].desc}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-800 leading-relaxed pt-4 border-t border-stone-200/60">
                  {whyPoints[1].highlight}
                </p>
              </div>
            </div>

            {/* Center Column: Center Video playing in short ratio (9:16) on continuous slowmo loop */}
            <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
              <div className="why-center-video-frame w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-stone-200/90 relative bg-black group select-none">
                <video
                  ref={whyVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.65; }}
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/why-video.mp4" type="video/mp4" />
                  <source src="/197387-904825088.mp4" type="video/mp4" />
                </video>

                {/* Subtle glass overlay & top status badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/80 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 uppercase tracking-widest">
                    Orbital Core
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 uppercase tracking-wider">
                    Continuous
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Top-Right Card & Bottom-Right Card */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 sm:gap-8">
              {/* Card 3: Transparent Scope */}
              <div className="card-why-right group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                    {whyPoints[2].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                    {whyPoints[2].desc}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-800 leading-relaxed pt-4 border-t border-stone-200/60">
                  {whyPoints[2].highlight}
                </p>
              </div>

              {/* Card 4: Zero Vanity Claims */}
              <div className="card-why-right group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight leading-snug mb-3 group-hover:text-black transition-colors duration-300">
                    {whyPoints[3].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                    {whyPoints[3].desc}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-800 leading-relaxed pt-4 border-t border-stone-200/60">
                  {whyPoints[3].highlight}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. 4-STAGE EXECUTION ROADMAP (Ascending Staircase Stage)              */}
      {/* ===================================================================== */}
      <section className="sec-roadmap relative pt-24 lg:pt-28 pb-16 lg:pb-20 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-2.5">
              Execution Roadmap · 04 Progressive Stages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-3">
              A structured roadmap to compounding results.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Every stage builds sequentially on the previous milestone, advancing your business from foundational audit to compounding commercial scale.
            </p>
          </div>

          {/* Ascending Staircase Cards Grid: Items-end creates literal ascending steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-end w-full">
            {(service.process && service.process.length >= 4 ? service.process.slice(0, 4) : [
              { step: "01", title: "Commercial Analysis", desc: "Understand products, margins, capacity, and business goals." },
              { step: "02", title: "Marketplace Review", desc: "Review current setup, catalogue hygiene, and operational needs." },
              { step: "03", title: "Scope & Proposal", desc: "Confirm deliverables, responsibilities, timing, and custom quote." },
              { step: "04", title: "Setup or Optimisation", desc: "Complete agreed account, listing, and advertising work." }
            ]).map((prc, idx) => {
              // Ascending physical heights on desktop forming a real staircase
              const heightClass = idx === 0 
                ? 'lg:min-h-[350px]' 
                : idx === 1 
                  ? 'lg:min-h-[390px]' 
                  : idx === 2 
                    ? 'lg:min-h-[430px]' 
                    : 'lg:min-h-[470px]';

              const stagePillars = [
                "01 // FOUNDATION",
                "02 // AUDIT & HYGIENE",
                "03 // SCOPE AGREEMENT",
                "04 // SCALE & VELOCITY"
              ];

              const stageMilestones = [
                ["Unit economics & margin review", "Catalogue data & taxonomy mapping"],
                ["Account hygiene & compliance audit", "Search indexing & bottleneck review"],
                ["Deliverable scope boundaries", "SLA timeline & partner alignment"],
                ["Execution deployment & launch", "Weekly telemetry & compounding scale"]
              ];

              return (
                <div 
                  key={idx}
                  className={`architecture-stair-card group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-7 sm:p-9 lg:p-10 flex flex-col justify-between hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden ${heightClass}`}
                >
                  <div>
                    {/* Stage Title (Larger prominent display serif) */}
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] font-normal text-space-950 tracking-tight leading-[1.15] mb-4 group-hover:text-black transition-colors duration-300">
                      {prc.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                      {prc.desc}
                    </p>

                    {/* Milestones Breakdown */}
                    <div className="pt-5 border-t border-stone-200/60 space-y-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Key Milestones
                      </span>
                      {stageMilestones[idx].map((ms, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 font-sans leading-relaxed">
                          <span className="text-blue-600 font-semibold select-none flex-shrink-0">―</span>
                          <span>{ms}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Staircase Step Visual Indicator (Ascending stepped bars) */}
                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <div className="flex items-end justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono uppercase text-slate-400">
                        PROGRESS STEP 0{idx + 1} / 04
                      </span>
                      
                      {/* Physical mini stair glyph */}
                      <div className="flex items-end gap-1 h-5">
                        <div className={`w-1.5 rounded-xs transition-colors ${idx >= 0 ? 'bg-space-950 h-2' : 'bg-stone-200 h-2'}`} />
                        <div className={`w-1.5 rounded-xs transition-colors ${idx >= 1 ? 'bg-space-950 h-3' : 'bg-stone-200 h-3'}`} />
                        <div className={`w-1.5 rounded-xs transition-colors ${idx >= 2 ? 'bg-space-950 h-4' : 'bg-stone-200 h-4'}`} />
                        <div className={`w-1.5 rounded-xs transition-colors ${idx >= 3 ? 'bg-space-950 h-5' : 'bg-stone-200 h-5'}`} />
                      </div>
                    </div>

                    {/* Smooth progression bar */}
                    <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-space-950 rounded-full group-hover:bg-[#252B36] transition-all duration-500"
                        style={{ width: `${(idx + 1) * 25}%` }}
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. ILLUSTRATIVE USE CASES ("How we solve practical business challenges") */}
      {/* Strictly compliant with client policy: Genuine sample use cases       */}
      {/* ===================================================================== */}
      <section className="sec-usecases relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              Real-World Scenarios · 02 Practical Workflows
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              How we solve practical business challenges.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Illustrative execution scenarios demonstrating how we diagnose operational friction, deploy structured systems, and achieve verified commercial progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {useCases.map((cs, idx) => {
              const isFirst = idx === 0;
              const cardClass = isFirst ? 'card-usecase-left' : 'card-usecase-right';

              return (
                <div 
                  key={idx}
                  className={`${cardClass} group relative rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-10 lg:p-12 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col justify-between`}
                >
                  <div>
                    {/* Client Type Category Kicker */}
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                      {cs.clientType}
                    </span>

                    {/* Big Heading */}
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.5rem] font-normal text-space-950 tracking-tight leading-[1.15] mb-8 group-hover:text-black transition-colors duration-300">
                      {cs.title}
                    </h3>

                    {/* Challenge & Friction */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        Operational Friction
                      </span>
                      <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    {/* Solution & Intervention */}
                    <div className="space-y-2 pt-6 border-t border-stone-200/60 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                        E-Comet Strategy &amp; Execution
                      </span>
                      <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed font-medium">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Resulting Outcome Box */}
                  <div className="pt-6 border-t border-stone-200/80">
                    <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-stone-200/70 shadow-2xs">
                      <span className="text-blue-600 font-bold select-none flex-shrink-0 mt-0.5">―</span>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                          Verified Milestone Outcome
                        </span>
                        <p className="text-xs sm:text-sm font-sans font-medium text-space-950 leading-relaxed">
                          {cs.outcome}
                        </p>
                      </div>
                    </div>
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
      {/* 8. FREQUENTLY ASKED QUESTIONS (10 Curated Answers · 5 Left · 5 Right)  */}
      {/* ===================================================================== */}
      <section className="sec-faq relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Clear answers regarding execution governance, operational turnaround, commercial terms, and multi-channel synchronization.
            </p>
          </div>

          {/* 2-Column Grid: 5 Questions Left · 5 Questions Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
            
            {/* Left Column: 5 Questions */}
            <div className="space-y-4 sm:space-y-5">
              {leftFaqs.map((faq, lIdx) => {
                const globalIdx = lIdx;
                const isOpen = openFaqs.includes(globalIdx);

                return (
                  <div 
                    key={globalIdx}
                    className={`card-faq group relative rounded-[24px] sm:rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 transition-all duration-300 p-6 sm:p-7 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-space-950 shadow-[0_15px_35px_rgba(0,0,0,0.05)]' 
                        : 'hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
                    }`}
                  >
                    <button 
                      type="button" 
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    >
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-space-950 tracking-tight leading-snug group-hover:text-black transition-colors pr-2">
                        {faq.q}
                      </h3>
                      
                      <span className={`w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-sm font-mono text-space-950 flex-shrink-0 transition-all duration-300 shadow-2xs ${
                        isOpen ? 'rotate-45 bg-space-950 text-white border-space-950' : 'group-hover:border-space-950'
                      }`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 mt-4 border-t border-stone-200/70 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: 5 Questions */}
            <div className="space-y-4 sm:space-y-5">
              {rightFaqs.map((faq, rIdx) => {
                const globalIdx = rIdx + 5;
                const isOpen = openFaqs.includes(globalIdx);

                return (
                  <div 
                    key={globalIdx}
                    className={`card-faq group relative rounded-[24px] sm:rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 transition-all duration-300 p-6 sm:p-7 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-space-950 shadow-[0_15px_35px_rgba(0,0,0,0.05)]' 
                        : 'hover:bg-white hover:border-space-950 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
                    }`}
                  >
                    <button 
                      type="button" 
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    >
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-space-950 tracking-tight leading-snug group-hover:text-black transition-colors pr-2">
                        {faq.q}
                      </h3>
                      
                      <span className={`w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-sm font-mono text-space-950 flex-shrink-0 transition-all duration-300 shadow-2xs ${
                        isOpen ? 'rotate-45 bg-space-950 text-white border-space-950' : 'group-hover:border-space-950'
                      }`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-4 mt-4 border-t border-stone-200/70 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <span className="text-blue-600 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-sans font-medium text-space-950 hover:bg-[#080B10] hover:text-white transition-all shadow-2xs"
                >
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
