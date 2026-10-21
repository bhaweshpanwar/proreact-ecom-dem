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
    <section id="process" ref={containerRef} className="relative min-h-screen bg-[#F2F2F2] text-[#000000] border-b border-[#E5E5E5] flex items-center overflow-hidden py-16 sm:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Label Header */}
        <div className="pb-8 border-b border-[#D9D9D9] mb-10 flex items-center justify-between font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold">
          <span>{eyebrow}</span>
          <span>STEP {current.num} OF 04 // {current.name.toUpperCase()}</span>
        </div>

        {/* 2-Column Pinned Sticky Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* Left Pinned Block: Massive Step Number on Solid Black Block */}
          <div className="lg:col-span-5 bg-[#000000] text-[#FFFFFF] p-8 sm:p-14 flex flex-col justify-between min-h-[380px] sm:min-h-[500px]">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block mb-4">
                [METHODOLOGY SEQUENCE]
              </span>
              <div className="font-grotesk font-bold text-[clamp(90px,14vw,200px)] leading-[0.85] tracking-[-0.05em] text-[#FFFFFF]">
                {current.num}
              </div>
            </div>

            <div className="pt-8 border-t border-[#262626] flex items-center justify-between">
              <span className="font-grotesk font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#FFFFFF]">
                {current.name}
              </span>
              <div className="flex gap-1.5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-3 h-3 transition-colors ${
                      activeStep === idx ? 'bg-[#FFFFFF]' : 'bg-[#333333]'
                    }`}
                    aria-label={`Jump to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Details Column: Dynamically changes on scroll */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E5E5] p-8 sm:p-14 flex flex-col justify-between space-y-8 min-h-[380px] sm:min-h-[500px]">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] block">
                {current.tag}
              </span>
              <h3 className="font-grotesk font-bold text-2xl sm:text-4xl lg:text-5xl text-[#000000] leading-snug">
                {current.heading}
              </h3>
              <p className="font-grotesk text-sm sm:text-base text-[#555555] leading-relaxed max-w-[55ch]">
                {current.desc}
              </p>
            </div>

            {/* Deliverable Box with Space Photo Micro-Preview (Full Color) */}
            <div className="pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-3 aspect-[4/3] bg-[#000000] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="sm:col-span-9 space-y-1">
                <span className="font-sans text-[10px] uppercase text-[#8A8A8A] tracking-wider font-semibold block">
                  KEY DELIVERABLE
                </span>
                <span className="font-grotesk font-bold text-sm sm:text-base text-[#000000] block">
                  {current.deliverable}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
