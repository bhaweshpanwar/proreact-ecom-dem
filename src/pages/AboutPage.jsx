import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home2FinalCta from './Home2/components/Home2FinalCta';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Animation
      gsap.fromTo(
        '.about-hero-title-word',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(
        '.about-fade-up',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2
        }
      );

      // 2. Scroll Scrub for Philosophy Section Headline
      const philWords = containerRef.current?.querySelectorAll('.phil-scrub-word');
      if (philWords && philWords.length > 0) {
        gsap.to(philWords, {
          color: '#000000',
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '.sec-philosophy-heading',
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 0.6
          }
        });
      }

      // 3. Stagger for Discipline Cards
      gsap.fromTo(
        '.craft-card-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-craft-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Stagger for Values Rows
      gsap.fromTo(
        '.value-row-anim',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.sec-values-list',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Framework Steps Entrance
      gsap.fromTo(
        '.framework-step-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.sec-framework-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split headline for word-by-word animation
  const headline = "Helping Businesses Build a Stronger Digital Presence.";
  const headlineWords = headline.split(' ');

  const philQuote = "Digital growth starts with understanding the business — not choosing tools without purpose.";
  const philWords = philQuote.split(' ');

  // 4 Foundational Disciplines
  const craftDisciplines = [
    {
      num: "01",
      code: "SPEC // CREATIVE",
      pillar: "Creative Services",
      title: "Brand Identity & Logo Systems",
      desc: "Distinctive typography, color palettes, visual guidelines, packaging concepts, and tactile brand systems engineered to command premium positioning on digital feeds and retail shelves.",
      subdesc: "Designed with consumer psychology to convert first-time shoppers into repeat brand advocates.",
      image: "/images/space/dark-card-creative.jpg",
      tags: ["PACKAGING", "IDENTITY", "3D ASSETS", "TYPOGRAPHY"]
    },
    {
      num: "02",
      code: "SPEC // STOREFRONT",
      pillar: "Website Development",
      title: "Business & E-Commerce Stores",
      desc: "High-performance Shopify Plus builds, Next.js commerce architectures, sub-second checkout funnels, and responsive corporate portals with 95+ Core Web Vitals score.",
      subdesc: "Engineered for zero downtime, lightning load speeds, and maximum transaction throughput.",
      image: "/images/space/dark-card-web.jpg",
      tags: ["SHOPIFY PLUS", "HEADLESS", "CRO", "CORE WEB VITALS"]
    },
    {
      num: "03",
      code: "SPEC // MARKETPLACE",
      pillar: "E-Commerce Management",
      title: "Marketplace Catalogue & Operations",
      desc: "End-to-end Amazon 1P/3P and Flipkart seller onboarding, conversion-optimized A+ content, PLA ads management, inventory health monitoring, and buy-box protection.",
      subdesc: "Maximizing organic keyword ranking while strictly maintaining contribution margin and target TACoS.",
      image: "/images/space/card-marketplace.jpg",
      tags: ["AMAZON 1P/3P", "FLIPKART", "BUY-BOX", "A+ CONTENT"]
    },
    {
      num: "04",
      code: "SPEC // CINEMA",
      pillar: "YouTube & Video Services",
      title: "Video Editing & Shorts / Reels",
      desc: "Dynamic pacing, motion graphics, high-CTR thumbnail packaging, channel SEO, and short-form video repurposing crafted to capture algorithmic watch time.",
      subdesc: "Turning passive viewers into engaged social audiences and high-intent inbound customers.",
      image: "/images/space/goals-galaxy.jpg",
      tags: ["COMMERCIAL VIDEO", "REELS / SHORTS", "HIGH-CTR", "MOTION"]
    }
  ];

  // 5 Operating Values
  const values = [
    {
      num: "01",
      tag: "NO AMBIGUITY",
      title: "Clarity",
      desc: "Explain the scope, process, deliverables, and performance expectations in straightforward language with zero technical gatekeeping or buzzwords.",
      detail: "Every partner knows exactly who is executing what, when milestones arrive, and how progress is objectively verified."
    },
    {
      num: "02",
      tag: "GOAL-ALIGNED",
      title: "Purpose",
      desc: "Recommend services and architectural choices based strictly on real commercial needs rather than unnecessary technological complexity.",
      detail: "We don't push enterprise stacks when lean headless solves the problem, preserving capital for inventory and acquisition velocity."
    },
    {
      num: "03",
      tag: "ADAPTIVE SCOPE",
      title: "Flexibility",
      desc: "Shape service scope around the project, resources, and agreed requirements instead of forcing rigid pre-packaged retainers.",
      detail: "As market dynamics pivot or seasonal demand surges, our practice pods scale dynamically to protect your margins."
    },
    {
      num: "04",
      tag: "UNIFIED VOICE",
      title: "Consistency",
      desc: "Support a coherent, elevated brand presentation across all relevant digital channels, packaging touchpoints, and marketplace nodes.",
      detail: "From Amazon A+ layouts to direct Shopify checkouts, your customer experiences a cohesive brand narrative that commands premium pricing."
    },
    {
      num: "05",
      tag: "UPFRONT HONESTY",
      title: "Transparency",
      desc: "Discuss deliverables, timelines, pricing, revision boundaries, and third-party fees (ad spend, platform hosting) before work begins.",
      detail: "No hidden costs, no surprise add-ons, and no inflated promises. Honest roadmaps that build genuine, lasting commercial trust."
    }
  ];

  // 5-Stage Framework Roadmap
  const frameworkSteps = [
    {
      stage: "STAGE 01",
      name: "Understand",
      summary: "Understand your business, target audience, current digital setup, and commercial goals.",
      execution: "We audit catalog health, conversion leaks, and channel unit economics before proposing architecture.",
      percent: "20%"
    },
    {
      stage: "STAGE 02",
      name: "Identify",
      summary: "Identify the relevant digital opportunities, competitive gaps, and operational challenges.",
      execution: "Benchmarking buy-box dynamics, search volume, keyword indexation, and creative performance gaps.",
      percent: "40%"
    },
    {
      stage: "STAGE 03",
      name: "Define",
      summary: "Define specific services, deliverables, responsibilities, timelines, and proposal scope.",
      execution: "Written deliverables, fixed revision guardrails, and senior lead accountability locked in upfront.",
      percent: "60%"
    },
    {
      stage: "STAGE 04",
      name: "Execute",
      summary: "Execute the agreed work with meticulous attention to detail, quality, and brand consistency.",
      execution: "100% senior in-house squad delivery with zero telephone handoffs to junior trainees.",
      percent: "80%"
    },
    {
      stage: "STAGE 05",
      name: "Review",
      summary: "Review the work against agreed metrics, discuss feedback, and plan appropriate next steps.",
      execution: "Transparent weekly telemetry dashboards with verified attribution and zero vanity metrics.",
      percent: "100%"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#000000] text-[#FFFFFF] select-none overflow-x-hidden pt-20">

      {/* ===================================================================== */}
      {/* 1. MONOLITHIC HERO: COSMIC MASTHEAD & EDITORIAL TELEMETRY             */}
      {/* ===================================================================== */}
      <section ref={heroRef} className="relative min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between border-b border-[#262626] bg-[#000000] overflow-hidden">
        
        {/* Cinematic Deep Space Background Underlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <img 
            src="/images/space/ring-part-three.jpg" 
            alt="E-Comet Outverse Orbit" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/60 to-[#000000]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#000000]" />
        </div>

        {/* Top Telemetry Header Bar */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626] font-sans text-xs uppercase tracking-widest text-[#8A8A8A]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
              <span className="text-[#FFFFFF] font-bold">AGENCY DOSSIER // 2026</span>
              <span>·</span>
              <span>ABOUT E-COMET</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span>ESTABLISHED OPERATING SYSTEM</span>
              <span>·</span>
              <span className="text-[#FFFFFF]">DIRECT COMMERCIAL GOVERNANCE</span>
            </div>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left 8 Cols: Monumental Display Headline */}
            <div className="lg:col-span-8 space-y-6">
              <span className="about-fade-up inline-block px-3 py-1 bg-[#141414] border border-[#2E2E2E] text-[#A3A3A3] font-sans text-[11px] uppercase tracking-wider font-semibold">
                CORE AGENCY IDENTITY
              </span>

              <h1 className="font-grotesk font-black text-[clamp(40px,6.2vw,96px)] leading-[0.93] tracking-[-0.04em] uppercase text-[#FFFFFF]">
                {headlineWords.map((word, idx) => (
                  <span key={idx} className="about-hero-title-word inline-block mr-[0.24em] will-change-transform">
                    {word}
                  </span>
                ))}
              </h1>

              <p className="about-fade-up font-grotesk text-base sm:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed">
                A business-first approach to e-commerce management, digital marketing, website development, and video services.
              </p>
            </div>

            {/* Right 4 Cols: Narrative Body & Action Triggers */}
            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-[#262626] lg:pl-8">
              <p className="about-fade-up font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                E-Comet brings practical digital capabilities under one coordinated governance model. We eliminate agency silos, vague retainers, and fragmented communication to help ambitious brands build long-term enterprise equity and scalable customer acquisition.
              </p>

              <div className="about-fade-up flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                <a
                  href="#closing"
                  className="px-6 py-3.5 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </a>

                <a
                  href="#philosophy"
                  className="px-6 py-3.5 bg-[#0A0A0A] hover:bg-[#141414] border border-[#333333] hover:border-[#666666] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Our Philosophy</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 4-Quadrant Verified Telemetry Strip */}
        <div className="relative z-10 w-full border-t border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-md">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#262626]">
              <div className="py-4 sm:py-5 pr-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold text-[#FFFFFF]">✓</span>
                <span className="font-sans text-[11px] sm:text-xs text-[#A3A3A3] uppercase tracking-wider">100% In-House Senior Execution</span>
              </div>
              <div className="py-4 sm:py-5 px-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold text-[#FFFFFF]">✓</span>
                <span className="font-sans text-[11px] sm:text-xs text-[#A3A3A3] uppercase tracking-wider">Direct Written SLAs</span>
              </div>
              <div className="py-4 sm:py-5 px-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold text-[#FFFFFF]">✓</span>
                <span className="font-sans text-[11px] sm:text-xs text-[#A3A3A3] uppercase tracking-wider">Zero Junior Delegation</span>
              </div>
              <div className="py-4 sm:py-5 pl-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold text-[#FFFFFF]">✓</span>
                <span className="font-sans text-[11px] sm:text-xs text-[#A3A3A3] uppercase tracking-wider">4 Synchronized Pillars</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ===================================================================== */}
      {/* 2. THE CORE PHILOSOPHY & CONTRAST (Stark Editorial White Band)        */}
      {/* ===================================================================== */}
      <section id="philosophy" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 sm:pb-24 border-b border-[#E5E5E5]">
            
            {/* Left 4 Cols: Telemetry Kicker & Context */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
                01 / BRAND GENESIS &amp; POSITIONING
              </span>
              <h3 className="font-grotesk font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#000000] leading-tight">
                The Anti-Bloat Agency Mandate.
              </h3>
              <p className="font-grotesk text-sm text-[#666666] leading-relaxed">
                E-Comet is a digital services brand supporting businesses across e-commerce, digital marketing, website development, and YouTube and video services.
              </p>
              <p className="font-grotesk text-sm text-[#666666] leading-relaxed">
                Whether a business is starting online, improving its current presence, or bringing multiple channels together, our approach is to understand the requirement, define the scope, and recommend suitable next steps.
              </p>
            </div>

            {/* Right 8 Cols: Giant Editorial Contrast Headline with Scroll Scrub */}
            <div className="lg:col-span-8">
              <h2 className="sec-philosophy-heading font-grotesk font-bold text-[clamp(32px,5vw,76px)] leading-[0.98] tracking-[-0.035em] uppercase mb-8">
                {philWords.map((word, idx) => (
                  <span key={idx} className="phil-scrub-word inline-block mr-[0.24em] text-[#CCCCCC] will-change-[color]">
                    {word}
                  </span>
                ))}
              </h2>

              <p className="font-grotesk text-base sm:text-lg text-[#444444] leading-relaxed max-w-3xl">
                Instead of selling bloated agency packages with generic retainers, we build bespoke operational pods around your product margins, inventory cycles, and audience behavior.
              </p>
            </div>

          </div>

          {/* 3 Foundational Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5] pt-12">
            
            {/* Pillar 01 */}
            <div className="py-8 md:py-0 md:pr-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-bold">
                  TENET [01]
                </span>
                <span className="font-sans text-xs font-bold text-[#000000]">✓</span>
              </div>
              <h4 className="font-grotesk font-bold text-xl uppercase text-[#000000]">
                Clarity First
              </h4>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                Straightforward scope, written deliverable guardrails, and realistic milestones before work begins. Zero technical gatekeeping or vanity jargon.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="py-8 md:py-0 md:px-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-bold">
                  TENET [02]
                </span>
                <span className="font-sans text-xs font-bold text-[#000000]">✓</span>
              </div>
              <h4 className="font-grotesk font-bold text-xl uppercase text-[#000000]">
                Connected
              </h4>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                E-commerce, web engineering, video production, and performance ads synchronised under one roof. When ad spend scales, inventory is synchronized.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="py-8 md:py-0 md:pl-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-bold">
                  TENET [03]
                </span>
                <span className="font-sans text-xs font-bold text-[#000000]">✓</span>
              </div>
              <h4 className="font-grotesk font-bold text-xl uppercase text-[#000000]">
                No Bloat
              </h4>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                Pragmatic solutions shaped around real business resources, unit economics, and cash flow reality. Preserving capital for commercial growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. PURPOSE & HORIZON: MISSION & VISION SPLIT MONOLITH                 */}
      {/* ===================================================================== */}
      <section className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
              02 / PURPOSE &amp; HORIZON
            </span>
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              Guided by purpose, measured by reliability.
            </h2>
          </div>

          {/* Twin Bento Monolith Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Panel: Our Mission */}
            <div className="relative group bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
              {/* Subtle Atmospheric Space Image Overlay on Hover */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <img 
                  src="/images/space/process-build.jpg" 
                  alt="Mission Execution Space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/85" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#FFFFFF] font-bold">
                    [01] THE EXECUTION MANDATE
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-[#8A8A8A]">
                    OPERATIONAL SLA
                  </span>
                </div>

                <h3 className="font-grotesk font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#FFFFFF]">
                  Our Mission
                </h3>

                <blockquote className="font-grotesk text-base sm:text-lg text-[#FFFFFF] font-medium leading-relaxed border-l-2 border-[#FFFFFF] pl-4">
                  "To help businesses navigate the modern digital landscape through practical services, clear communication, and commercial solutions aligned directly with their goals and resources."
                </blockquote>

                <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  We eliminate arbitrary retainer waste, technical gatekeeping, and fragmented agency handoffs. Whether deploying bespoke e-commerce infrastructure, executing algorithmic paid campaigns, or engineering high-converting retail storefronts, our mandate is measurable business value and transparent operational integrity.
                </p>

                <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  Every engagement is guided by senior practice leads who take direct accountability for unit economics, turnaround speed, and long-term brand equity.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-[#262626] flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#8A8A8A]">
                <span>100% IN-HOUSE SQUAD</span>
                <span>DIRECT FOUNDER TRUST</span>
              </div>
            </div>

            {/* Right Panel: Our Vision */}
            <div className="relative group bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] transition-colors p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
              {/* Subtle Atmospheric Space Image Overlay on Hover */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <img 
                  src="/images/space/process-scale.jpg" 
                  alt="Vision Long Horizon Space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/85" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#FFFFFF] font-bold">
                    [02] THE LONG HORIZON
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-[#8A8A8A]">
                    ENTERPRISE EQUITY
                  </span>
                </div>

                <h3 className="font-grotesk font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#FFFFFF]">
                  Our Vision
                </h3>

                <blockquote className="font-grotesk text-base sm:text-lg text-[#FFFFFF] font-medium leading-relaxed border-l-2 border-[#FFFFFF] pl-4">
                  "To build E-Comet into a globally recognised digital services brand known for unmistakable strategic clarity, reliable execution, and a business-first approach."
                </blockquote>

                <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  As the intersection of commerce, search, and algorithmic video accelerates, digital brands need infrastructure that compounds over years rather than chasing short-lived vanity metrics.
                </p>

                <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  Our horizon is to be the benchmark operating partner for founders and category leaders seeking resilient, multi-channel growth without compromising brand substance or margin control.
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-[#262626] flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#8A8A8A]">
                <span>GLOBAL RECOGNITION</span>
                <span>COMPOUNDING RESILIENCE</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. FOUR FOUNDATIONAL DISCIPLINES: ARCHITECTURAL GALLERY                */}
      {/* ===================================================================== */}
      <section className="sec-craft-grid relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626] mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block mb-2">
                03 / CRAFT DISCIPLINES
              </span>
              <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
                Crafted across 4 foundational disciplines.
              </h2>
            </div>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] max-w-[45ch] leading-relaxed">
              Each discipline operates standalone or synchronizes seamlessly as an integrated multi-channel growth engine.
            </p>
          </div>

          {/* 4 Architectural Cards with Full Rich Color Space Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="craft-card-anim group bg-[#0A0A0A] border border-[#262626] hover:border-[#FFFFFF] transition-all duration-300 flex flex-col justify-between p-4 sm:p-5 cursor-pointer"
              >
                {/* Space Image Frame */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#111111] mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[10px] px-2.5 py-0.5 uppercase tracking-wider border border-[#333333]">
                    {item.code}
                  </div>
                </div>

                {/* Pillar Content */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-sans text-[10.5px] uppercase tracking-wider text-[#8A8A8A] font-semibold block">
                      PILLAR · {item.pillar}
                    </span>
                    <h3 className="font-grotesk font-bold text-lg sm:text-xl text-[#FFFFFF] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-grotesk text-xs text-[#A3A3A3] leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="font-grotesk text-[11px] text-[#666666] leading-relaxed">
                      {item.subdesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-[#262626] flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-sans font-medium text-[9px] px-2 py-0.5 border border-[#262626] text-[#8A8A8A] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. THE 5 OPERATING VALUES: INTERACTIVE SLATE                           */}
      {/* ===================================================================== */}
      <section className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky Left Editorial Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
                04 / OUR OPERATING PRINCIPLES
              </span>
              <h2 className="font-grotesk font-bold text-[clamp(36px,5vw,70px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
                Five values that define how we work.
              </h2>
              <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-md">
                We hold ourselves to straightforward standards that prioritize client clarity, scope integrity, and genuine business value over unnecessary complexity.
              </p>

              {/* Decorative Live Telemetry Box */}
              <div className="p-5 bg-[#0A0A0A] border border-[#262626] space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#FFFFFF] font-bold block">
                  GOVERNANCE STATUS
                </span>
                <p className="font-grotesk text-xs text-[#8A8A8A]">
                  Zero arbitrary retainers. 100% written accountability on all five pillars.
                </p>
              </div>
            </div>

            {/* Right Column: 5 Stacked Value Rows */}
            <div className="sec-values-list lg:col-span-7 divide-y divide-[#262626] border-y border-[#262626]">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="value-row-anim group py-8 sm:py-10 transition-colors duration-300 hover:bg-[#0A0A0A] px-4 -mx-4 cursor-pointer"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline">
                    
                    {/* Number */}
                    <div className="sm:col-span-3 flex items-center justify-between sm:block">
                      <span className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#8A8A8A] font-bold block mb-1">
                        [{val.num}] // {val.tag}
                      </span>
                      <h3 className="font-grotesk font-bold text-2xl sm:text-3xl uppercase text-[#FFFFFF] group-hover:translate-x-1 transition-transform">
                        {val.title}
                      </h3>
                    </div>

                    {/* Description & Detail */}
                    <div className="sm:col-span-9 space-y-2">
                      <p className="font-grotesk text-sm sm:text-base text-[#FFFFFF] leading-relaxed">
                        {val.desc}
                      </p>
                      <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                        {val.detail}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. THE 5-STAGE EXECUTION ROADMAP: HORIZONTAL FRAMEWORK                */}
      {/* ===================================================================== */}
      <section className="sec-framework-grid relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
              05 / THE EXECUTION ROADMAP
            </span>
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              A structured roadmap from discovery to delivery.
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-xl">
              Systematic phases designed to eliminate guesswork, establish clear accountability, and compound margin.
            </p>
          </div>

          {/* 5 Sequential Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
            {frameworkSteps.map((step, idx) => (
              <div
                key={idx}
                className="framework-step-card group bg-[#0A0A0A] border border-[#262626] hover:border-[#666666] p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#262626] mb-4">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#8A8A8A]">
                      {step.stage}
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#FFFFFF]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl uppercase text-[#FFFFFF] mb-2 group-hover:text-[#FFFFFF]">
                    {step.name}
                  </h3>

                  <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-3">
                    {step.summary}
                  </p>

                  <p className="font-grotesk text-[11px] text-[#666666] leading-relaxed">
                    {step.execution}
                  </p>
                </div>

                {/* Progress Metric Bar */}
                <div className="w-full pt-4 border-t border-[#262626]">
                  <div className="flex items-center justify-between text-[10px] font-sans text-[#8A8A8A] mb-1.5 uppercase font-semibold">
                    <span>PROGRESS</span>
                    <span className="text-[#FFFFFF]">{step.percent}</span>
                  </div>
                  <div className="w-full h-1 bg-[#1A1A1A] overflow-hidden">
                    <div 
                      className="h-full bg-[#FFFFFF] transition-all duration-700"
                      style={{ width: step.percent }}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 7. BRAND INTEGRITY & COMMERCIAL TRANSPARENCY GUARANTEE                 */}
      {/* ===================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="relative bg-[#0A0A0A] border border-[#262626] p-8 sm:p-14 lg:p-16 overflow-hidden">
            {/* Space Photography Ambient Underlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img 
                src="/images/space/ring-part-2.jpg" 
                alt="Brand Integrity Guarantee Space" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-[#A3A3A3] font-sans text-[11px] font-bold uppercase tracking-wider inline-block">
                  Brand Integrity &amp; Transparency Guarantee
                </span>

                <h3 className="font-grotesk font-bold text-3xl sm:text-5xl uppercase text-[#FFFFFF] leading-tight tracking-tight">
                  Clear expectations. Zero false claims.
                </h3>

                <p className="font-grotesk text-xs sm:text-base text-[#A3A3A3] leading-relaxed max-w-2xl">
                  We believe in genuine accountability. We do not make exaggerated claims or guarantee arbitrary sales, rankings, or ROAS figures. All project scopes, timelines, revision limits, and third-party fees (ad spend, platform hosting, licenses) are confirmed in writing before work begins.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:text-right">
                <a 
                  href="#closing" 
                  className="px-6 py-4 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Request a Custom Quote →
                </a>
                <Link 
                  to="/explore-pillars" 
                  className="px-6 py-4 bg-[#000000] hover:bg-[#141414] border border-[#333333] hover:border-[#FFFFFF] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  Explore 6 Pillars
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 8. FINAL CTA FORM (Home2 Full Form Architecture) & FOOTER             */}
      {/* ===================================================================== */}
      <Home2FinalCta 
        data={{
          eyebrow: "06 / INITIATE BRIEFING",
          headline: "Enter the next orbit.",
          subtext: "Connect directly with our senior partners. We analyze your commercial footprint and craft an actionable execution blueprint.",
          wordmark: "E-COMET"
        }}
      />

      <Footer />

    </div>
  );
}