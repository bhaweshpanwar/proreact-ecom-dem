import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2ToolsMarquee({ data }) {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const sectionRef = useRef(null);

  const {
    eyebrow = "08 / TECH STACK & PLATFORMS",
    headline = "Tools we operate with daily.",
    subtext = "Text-only verification. We work natively inside standard enterprise growth and commerce software.",
    tools = [
      "Shopify",
      "Amazon Seller Central",
      "Google Ads",
      "Meta Ads Manager",
      "Flipkart Seller Hub",
      "Google Analytics 4",
      "Google Search Console",
      "WordPress",
      "Klaviyo",
      "Semrush",
      "Figma",
      "JioMart Seller Engine"
    ]
  } = data || {};

  // Alternate set for second opposing row
  const row2Tools = [
    "Amazon SP-API",
    "Meta CAPI Tracking",
    "Shopify Liquid Engine",
    "Google Merchant Center",
    "Blinkit Vendor Portal",
    "Zepto Partner Central",
    "Looker Studio BI",
    "GSAP ScrollTrigger",
    "Next.js Architecture",
    "Tailwind Engine",
    "PostgreSQL Telemetry",
    "Klaviyo Flow Automations"
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Velocity-reactive skew and speedup when user scrolls
      const clamp = gsap.utils.clamp(-8, 8);
      const skewSetter1 = gsap.quickSetter(track1Ref.current, "skewX", "deg");
      const skewSetter2 = gsap.quickSetter(track2Ref.current, "skewX", "deg");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const skewVal = clamp(velocity / -300);
          skewSetter1(skewVal);
          skewSetter2(-skewVal);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-bold text-2xl sm:text-4xl uppercase text-[#000000] tracking-tight">
            {headline}
          </h2>
        </div>
        <p className="font-sans text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider max-w-[40ch]">
          {subtext}
        </p>
      </div>

      {/* Marquee Ticker Track 1 (Leftward Flow) */}
      <div className="border-t border-b border-[#E5E5E5] py-4 bg-[#F9F9F9] overflow-hidden select-none">
        <div 
          ref={track1Ref}
          className="animate-marquee space-x-12 whitespace-nowrap font-grotesk font-bold text-lg sm:text-2xl uppercase tracking-wider text-[#000000]"
        >
          {tools.concat(tools).concat(tools).map((tool, idx) => (
            <div key={idx} className="flex items-center gap-12 group cursor-default">
              <span className="hover:text-[#8A8A8A] transition-colors">{tool}</span>
              <span className="text-[#CCCCCC] font-sans text-xs select-none">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker Track 2 (Rightward Opposing Flow) */}
      <div className="border-b border-[#E5E5E5] py-3.5 bg-[#FFFFFF] overflow-hidden select-none">
        <div 
          ref={track2Ref}
          className="animate-marquee-reverse space-x-12 whitespace-nowrap font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest text-[#666666]"
        >
          {row2Tools.concat(row2Tools).concat(row2Tools).map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 group cursor-default">
              <span className="hover:text-[#000000] transition-colors">{item}</span>
              <span className="text-[#E0E0E0] select-none">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Fallback / Multi-platform Overview */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {tools.slice(0, 6).map((tool, idx) => (
          <div 
            key={idx}
            className="p-3 border border-[#E5E5E5] bg-[#FFFFFF] font-sans text-xs uppercase font-semibold text-[#555555] flex items-center justify-between tracking-wide hover:border-[#000000] hover:text-[#000000] transition-colors"
          >
            <span>{tool}</span>
            <span className="text-[#8A8A8A]">0{idx + 1}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
