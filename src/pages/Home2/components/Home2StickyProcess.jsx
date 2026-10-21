import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2StickyProcess({ data }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);

  const {
    eyebrow = "04 / HOW WE WORK",
    headline = "Four steps from audit to orbit.",
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

      // Initial positions: Card 0 is active, subsequent cards wait off-screen to the right
      gsap.set(cards[0], { xPercent: 0, scale: 1, opacity: 1, zIndex: 10 });
      gsap.set(cards[1], { xPercent: 105, scale: 0.96, opacity: 0, zIndex: 20 });
      gsap.set(cards[2], { xPercent: 105, scale: 0.96, opacity: 0, zIndex: 30 });
      gsap.set(cards[3], { xPercent: 105, scale: 0.96, opacity: 0, zIndex: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2400',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // Update active timeline line width linearly
            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;
            }
            // Update active step indicator
            if (p < 0.28) setActiveStep(0);
            else if (p < 0.58) setActiveStep(1);
            else if (p < 0.85) setActiveStep(2);
            else setActiveStep(3);
          }
        }
      });
      timelineRef.current = tl;

      // Linear motion: Card 2 comes out linearly right after Card 1 along the line
      tl.to(cards[1], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 0.15);
      tl.to(cards[0], { scale: 0.95, opacity: 0.35, ease: 'none', duration: 1 }, 0.15);

      // Card 3 comes out linearly right after Card 2 along the line
      tl.to(cards[2], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 1.35);
      tl.to(cards[1], { scale: 0.95, opacity: 0.35, ease: 'none', duration: 1 }, 1.35);
      tl.to(cards[0], { opacity: 0, duration: 0.4 }, 1.35);

      // Card 4 comes out linearly right after Card 3 along the line
      tl.to(cards[3], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 2.55);
      tl.to(cards[2], { scale: 0.95, opacity: 0.35, ease: 'none', duration: 1 }, 2.55);
      tl.to(cards[1], { opacity: 0, duration: 0.4 }, 2.55);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePillClick = (idx) => {
    setActiveStep(idx);
    const tl = timelineRef.current;
    if (tl && tl.scrollTrigger) {
      const targets = [0.02, 0.35, 0.68, 0.98];
      const st = tl.scrollTrigger;
      const targetScroll = st.start + (st.end - st.start) * targets[idx];
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section id="process" ref={containerRef} className="relative min-h-screen bg-[#F4F4F4] text-[#000000] border-b border-[#E5E5E5] flex flex-col justify-center overflow-hidden py-12 sm:py-20 select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header Row */}
        <div className="pb-6 mb-6 border-b border-[#DCDCDC] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block mb-1">
              {eyebrow}
            </span>
            <h2 className="font-grotesk font-bold text-2xl sm:text-4xl uppercase tracking-tight text-[#000000]">
              {headline}
            </h2>
          </div>

          {/* Linear Step Pills for Direct Jump */}
          <div className="flex items-center gap-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePillClick(idx)}
                className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-[#000000] text-[#FFFFFF] shadow-sm' 
                    : 'bg-[#FFFFFF] text-[#666666] border border-[#D5D5D5] hover:text-[#000000] hover:border-[#000000]'
                }`}
              >
                {s.num} · {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* The Continuous Linear Progress Line ("Linearly in a Line after one thing") */}
        <div className="relative w-full mb-8">
          {/* Base track */}
          <div className="w-full h-[3px] bg-[#D5D5D5] relative overflow-hidden">
            {/* Active filled line scrubbing linearly on scroll */}
            <div 
              ref={progressLineRef}
              className="absolute top-0 left-0 h-full bg-[#000000] will-change-[width] transition-[width] duration-75"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* 4 Linear Milestones along the Line */}
          <div className="flex justify-between items-center pt-2 font-sans text-[11px] uppercase tracking-wider font-semibold text-[#8A8A8A]">
            {steps.map((s, idx) => (
              <span 
                key={idx} 
                onClick={() => handlePillClick(idx)}
                className={`cursor-pointer transition-colors ${activeStep >= idx ? 'text-[#000000]' : 'text-[#A0A0A0]'}`}
              >
                PHASE 0{idx + 1} // {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* The 4 Stage Cards Animated Linearly on Scroll (Stacked Swipe Stage) */}
        <div className="relative w-full h-[520px] sm:h-[540px] lg:h-[520px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full bg-[#FFFFFF] border border-[#D5D5D5] shadow-lg p-6 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden will-change-transform"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                
                {/* Left 7 Columns: Step Detail & Typography */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  
                  {/* Step Eyebrow & Number */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#000000] text-[#FFFFFF]">
                        STEP {step.num}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="font-grotesk font-bold text-3xl sm:text-5xl lg:text-6xl text-[#000000] leading-[0.95] tracking-[-0.035em] uppercase">
                      {step.name}.
                    </h3>

                    <h4 className="font-grotesk font-bold text-lg sm:text-2xl text-[#222222] leading-snug">
                      {step.heading}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="font-grotesk text-sm sm:text-base text-[#555555] leading-relaxed max-w-[55ch]">
                    {step.desc}
                  </p>

                  {/* Key Deliverable Box */}
                  <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] space-y-1">
                    <span className="font-sans text-[10px] uppercase text-[#8A8A8A] tracking-wider font-semibold block">
                      KEY DELIVERABLE
                    </span>
                    <span className="font-grotesk font-bold text-xs sm:text-sm text-[#000000] block">
                      {step.deliverable}
                    </span>
                  </div>

                </div>

                {/* Right 5 Columns: Orbital Space Photograph */}
                <div className="lg:col-span-5 h-[220px] sm:h-[300px] lg:h-full relative overflow-hidden border border-[#E5E5E5] bg-[#000000]">
                  <img
                    src={step.image}
                    alt={step.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#000000]/80 text-[#FFFFFF] font-sans text-[10px] uppercase font-semibold px-2 py-0.5 border border-[#333333]">
                    ORBITAL TELEMETRY {step.num}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#FFFFFF] text-[#000000] font-sans text-[10px] uppercase font-bold px-2 py-0.5">
                    VERIFIED STAGE
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
