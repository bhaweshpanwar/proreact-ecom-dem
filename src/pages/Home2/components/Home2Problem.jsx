import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2Problem({ data }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const {
    eyebrow = "Connected Digital Strategy",
    headline = "Different Agencies for Every Service. Still Waiting for Growth?",
    subtext = "Most expanding businesses end up managing multiple disconnected vendors: an ad agency that ignores catalogues, a web developer who blames the designer, and marketplace account managers operating in a dark room. Nobody owns the bottom-line revenue number.",
    secondaryText = "Your website, digital marketing, branding and marketplace operations shouldn't work in isolation. Bring your digital services together with one integrated growth partner.",
    highlightText = "One Business. One Connected Strategy. E-COMET OUTVERSE.",
    painPoints = [
      {
        num: "01",
        label: "DISCONNECTED DIGITAL EFFORTS",
        title: "When Digital Activities Lack Coordination",
        desc: "Marketplace listings, websites, advertising and social content can operate independently. A clearer plan can help align these activities around your business priorities."
      },
      {
        num: "02",
        label: "ACTIVITY WITHOUT A CLEAR DIRECTION",
        title: "Beyond Clicks, Posts and Impressions",
        desc: "Digital activity should serve a purpose. Define what matters to your business visibility, enquiries, product presentation, customer engagement or online sales and choose services accordingly."
      },
      {
        num: "03",
        label: "SOLUTIONS THAT FIT YOUR BUSINESS",
        title: "Not Every Business Needs Everything",
        desc: "Startup, retailer and established brand have different requirements. We start by understanding your needs before discussing relevant services."
      }
    ]
  } = data || {};

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Section Header Parallax Float
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 35 },
          {
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "top 20%",
              scrub: 0.6,
            }
          }
        );
      }

      // 2. High-impact Staggered Parallax Floating Wave across 3 Pain Point Columns
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const initialY = (idx + 1) * 24; // 24px, 48px, 72px
        gsap.fromTo(
          card,
          { y: initialY, opacity: 0.75 },
          {
            y: -initialY * 0.35,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.6,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="problem" 
      ref={sectionRef} 
      className="relative bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5] will-change-transform z-20"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-20 sm:py-32">
        
        {/* Section Header Row with Scrubbed Parallax */}
        <div 
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#E5E5E5] will-change-transform"
        >
          <div className="lg:col-span-3">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-neutral-500 font-semibold block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <h2 className="font-grotesk font-bold text-[clamp(32px,5vw,78px)] leading-[0.96] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <div className="space-y-4 max-w-[65ch]">
              <p className="font-sans text-[15px] sm:text-lg text-neutral-600 sm:text-neutral-700 font-normal leading-relaxed">
                {subtext}
              </p>
              {secondaryText && (
                <p className="font-sans text-[15px] sm:text-lg text-neutral-600 sm:text-neutral-700 font-normal leading-relaxed">
                  {secondaryText}
                </p>
              )}
              {highlightText && (
                <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-900 tracking-wider uppercase pt-1">
                  {highlightText}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3-Column Pain Points Grid with Multi-Speed Floating Parallax Waves */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className="py-8 sm:py-12 md:px-8 first:pl-0 last:pr-0 space-y-4 will-change-transform"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] sm:text-xs text-neutral-400 uppercase tracking-wider font-normal">
                  {point.label}
                </span>
                <span className="font-mono text-xs sm:text-sm font-normal text-neutral-400">
                  [{point.num}]
                </span>
              </div>
              <h3 className="font-grotesk font-semibold sm:font-bold text-lg sm:text-2xl text-neutral-950 leading-snug">
                {point.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-500 sm:text-neutral-600 font-normal leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
