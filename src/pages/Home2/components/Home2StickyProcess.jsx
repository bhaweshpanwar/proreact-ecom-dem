import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2StickyProcess({ data }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

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
        image: "/images/space/process-discover.jpg",
        colorGradient: "from-cyan-500 to-blue-600",
        badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
      },
      {
        num: "02",
        name: "Build",
        tag: "FOUNDATION OVERHAUL",
        heading: "Architecture, Catalogue & Campaign Construction",
        desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
        deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
        image: "/images/space/process-build.jpg",
        colorGradient: "from-blue-600 to-indigo-600",
        badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
      },
      {
        num: "03",
        name: "Launch",
        tag: "SYNCHRONIZED IGNITION",
        heading: "Omni-Channel Coordinated Go-Live",
        desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
        deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
        image: "/images/space/process-audit.jpg",
        colorGradient: "from-indigo-600 to-purple-600",
        badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
      },
      {
        num: "04",
        name: "Grow",
        tag: "SYSTEMATIC COMPOUNDING",
        heading: "Continuous Algorithmic Calibration",
        desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
        deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
        image: "/images/space/process-scale.jpg",
        colorGradient: "from-emerald-600 to-teal-600",
        badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
      }
    ]
  } = data || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = containerRef.current;
      if (!trigger) return;

      ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.25) setActiveStep(0);
          else if (p < 0.52) setActiveStep(1);
          else if (p < 0.78) setActiveStep(2);
          else setActiveStep(3);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const current = steps[activeStep] || steps[0];

  return (
    <section id="process" ref={containerRef} className="relative min-h-screen bg-[#F8FAFC] text-slate-950 border-b border-slate-200 flex items-center overflow-hidden py-16 sm:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Label Header */}
        <div className="pb-8 border-b border-slate-200 mb-10 flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
          <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600">
            {eyebrow}
          </span>
          <span className="text-slate-800">
            STEP {current.num} OF 04 // <span className="text-indigo-600">{current.name.toUpperCase()}</span>
          </span>
        </div>

        {/* 2-Column Pinned Sticky Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Left Column: Pinned Step Indicator & Massive Number */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className={`font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${current.badgeBg}`}>
                {current.tag}
              </span>
              <span className="font-sans text-xs font-semibold text-slate-400 uppercase">
                PHASE STAGE
              </span>
            </div>

            {/* Giant Number with Gradient Fill */}
            <div className={`font-grotesk font-black text-[clamp(90px,14vw,200px)] leading-[0.8] tracking-tighter bg-gradient-to-r ${current.colorGradient} bg-clip-text text-transparent select-none transition-all duration-500`}>
              {current.num}
            </div>

            <div className="space-y-3">
              <h3 className="font-grotesk font-bold text-3xl sm:text-4xl text-slate-950 uppercase tracking-tight">
                {current.name}
              </h3>
              <p className="font-sans text-base text-slate-600 leading-relaxed max-w-[42ch]">
                {headline}
              </p>
            </div>

            {/* Step Selection Buttons */}
            <div className="flex items-center gap-2 pt-2">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeStep === idx 
                      ? 'w-10 bg-indigo-600' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Step Content & Visuals */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10 transition-all duration-500">
            
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 mb-8 border border-slate-100 group">
              <img
                src={current.image}
                alt={`${current.name} - E-Comet Growth Stage`}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-slate-900/90 text-cyan-300 font-sans font-bold text-[10px] sm:text-[11px] px-3 py-1 uppercase rounded-md border border-cyan-500/30 backdrop-blur-md">
                STAGE {current.num} ARCHITECTURE
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white font-sans text-xs sm:text-sm font-semibold flex items-center justify-between">
                <span>{current.heading}</span>
                <span className="text-emerald-400 font-bold">100% Dedicated Pod</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-grotesk font-bold text-2xl text-slate-950 uppercase tracking-tight">
                {current.heading}
              </h4>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.desc}
              </p>
              
              <div className="pt-4 border-t border-slate-100 flex items-start sm:items-center gap-3 font-sans text-xs sm:text-sm text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <div>
                  <span className="font-bold text-slate-900 block sm:inline mr-2">Deliverable:</span>
                  <span className="text-slate-600">{current.deliverable}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
