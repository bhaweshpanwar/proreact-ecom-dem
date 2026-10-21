import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2StickyProcess({ data }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const {
    steps = [
      {
        num: "01",
        name: "Discover",
        tag: "FORENSIC DIAGNOSIS",
        heading: "Full Account Telemetry & Gap Analysis",
        desc: "We dive straight into your Google Ads query logs, Amazon Buy-Box share, catalogue health, and checkout drop-off rates. No generic playbooks. We uncover the exact leak points costing you margin.",
        deliverable: "Comprehensive 48-Hour Growth Diagnostic & Unit Economic Model",
        image: "/images/space/process-discover.jpg"
      },
      {
        num: "02",
        name: "Build",
        tag: "FOUNDATION OVERHAUL",
        heading: "Architecture, Catalogue & Campaign Construction",
        desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
        deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
        image: "/images/space/process-build.jpg"
      },
      {
        num: "03",
        name: "Launch",
        tag: "SYNCHRONIZED IGNITION",
        heading: "Omni-Channel Coordinated Go-Live",
        desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
        deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
        image: "/images/space/process-audit.jpg"
      },
      {
        num: "04",
        name: "Grow",
        tag: "SYSTEMATIC COMPOUNDING",
        heading: "Continuous Algorithmic Calibration",
        desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
        deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
        image: "/images/space/process-scale.jpg"
      }
    ]
  } = data || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

      // Card 0 starts active. Subsequent cards wait below at yPercent: 100 with higher zIndexes
      gsap.set(cards[0], { yPercent: 0, scale: 1, zIndex: 10 });
      gsap.set(cards[1], { yPercent: 100, scale: 1, zIndex: 20 });
      gsap.set(cards[2], { yPercent: 100, scale: 1, zIndex: 30 });
      gsap.set(cards[3], { yPercent: 100, scale: 1, zIndex: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2800',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        }
      });

      // --- 1. Card 02 (Build) swipes in from bottom over Card 01 ---
      tl.to(cards[1], { yPercent: 0, ease: 'none', duration: 1 }, 0.2);
      tl.to(cards[0], { yPercent: -15, scale: 0.96, ease: 'none', duration: 1 }, 0.2);

      // --- 2. Card 03 (Launch) swipes in from bottom over Card 02 ---
      tl.to(cards[2], { yPercent: 0, ease: 'none', duration: 1 }, 1.5);
      tl.to(cards[1], { yPercent: -15, scale: 0.96, ease: 'none', duration: 1 }, 1.5);

      // --- 3. Card 04 (Grow) swipes in from bottom over Card 03 ---
      tl.to(cards[3], { yPercent: 0, ease: 'none', duration: 1 }, 2.8);
      tl.to(cards[2], { yPercent: -15, scale: 0.96, ease: 'none', duration: 1 }, 2.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#02040C] overflow-hidden select-none"
    >
      {/* 4 Immersive Full-Bleed Space Cards */}
      {steps.map((step, idx) => (
        <div
          key={idx}
          ref={(el) => (cardRefs.current[idx] = el)}
          className="absolute inset-0 w-full h-full bg-[#02040C] overflow-hidden will-change-transform shadow-[0_-30px_80px_rgba(0,0,0,0.95)]"
        >
          {/* Full Screen Width Space Image */}
          <img
            src={step.image}
            alt={step.name}
            className="absolute inset-0 w-full h-full object-cover select-none will-change-transform"
            loading="eager"
          />

          {/* Deep Cinematic Gradient Scrim (ensures white typography is 100% legible) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

          {/* Clean Step Counter in Top Right */}
          <div className="absolute top-8 right-8 sm:top-12 sm:right-12 z-20 font-grotesk font-bold text-lg sm:text-2xl text-white/80 tracking-widest uppercase select-none">
            {step.num} / 04
          </div>

          {/* White Typography Content Layer */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto h-full px-6 sm:px-12 lg:px-16 pt-24 sm:pt-32 lg:pt-36 flex flex-col justify-start">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              
              {/* Step Tag */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-white px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20">
                  STEP {step.num}
                </span>
                <span className="font-sans text-xs sm:text-sm font-medium tracking-wider uppercase text-white/75">
                  {step.tag}
                </span>
              </div>

              {/* White Heading */}
              <h3 className="font-grotesk font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
                {step.name}. <br />
                <span className="text-white/85 text-xl sm:text-3xl lg:text-4xl font-bold tracking-normal block mt-2">
                  {step.heading}
                </span>
              </h3>

              {/* White Description */}
              <p className="font-grotesk text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl">
                {step.desc}
              </p>

              {/* White Key Deliverable Pill */}
              <div className="pt-2">
                <div className="inline-block p-4 sm:p-5 bg-black/70 backdrop-blur-md border border-white/20 max-w-xl">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-white/60 font-semibold block mb-1">
                    KEY DELIVERABLE
                  </span>
                  <span className="text-sm sm:text-base font-grotesk font-semibold text-white block">
                    {step.deliverable}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
