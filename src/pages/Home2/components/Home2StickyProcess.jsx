import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2StickyProcess({ data }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultSteps = [
    {
      num: "01",
      name: "Discover",
      tag: "FORENSIC DIAGNOSIS",
      heading: "Full Account Telemetry & Gap Analysis",
      desc: "We dive straight into your Google Ads query logs, Amazon Buy-Box share, catalogue health, and checkout drop-off rates. No generic playbooks. We uncover the exact leak points costing you margin.",
      deliverable: "Comprehensive 48-Hour Growth Diagnostic & Unit Economic Model",
      deliverablesList: [
        "Google & Meta Ad Account Forensics",
        "Amazon & Marketplace Buy-Box Audit",
        "Storefront Checkout Drop-off & Conversion Barriers",
        "Unit Economic & Contribution Margin Model"
      ],
      buttonText: "Read the Discover Chapter",
      bgColor: "#FF5226", // Vibrant Orange / Coral
      image: "/images/space/process-discover-new.jpg"
    },
    {
      num: "02",
      name: "Build",
      tag: "FOUNDATION OVERHAUL",
      heading: "Architecture, Catalogue & Campaign Construction",
      desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
      deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
      deliverablesList: [
        "Clean Campaign Structure & Negative Keyword Lists",
        "Catalogue SKU Variations & Category Alignment",
        "Custom Web Speed Optimization & Checkout CRO",
        "Conversion API (CAPI) & GA4 Tracking Setup"
      ],
      buttonText: "Read the Build Chapter",
      bgColor: "#A485FF", // Vibrant Violet / Lavender
      image: "/images/space/process-build-new.jpg"
    },
    {
      num: "03",
      name: "Launch",
      tag: "SYNCHRONIZED IGNITION",
      heading: "Omni-Channel Coordinated Go-Live",
      desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
      deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
      deliverablesList: [
        "Synchronized Multi-Platform Campaign Ignition",
        "Active Amazon Brand Store & A+ Content Live",
        "Direct Tracking & Attribution Verification",
        "Live Margin & Blended ROAS Monitoring"
      ],
      buttonText: "Read the Launch Chapter",
      bgColor: "#E9F835", // Vibrant Electric Acid Yellow
      image: "/images/space/process-launch-new.jpg"
    },
    {
      num: "04",
      name: "Grow",
      tag: "SYSTEMATIC COMPOUNDING",
      heading: "Continuous Algorithmic Calibration",
      desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
      deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
      deliverablesList: [
        "Weekly Net Contribution & Margin Governance",
        "Search Query Harvesting & Algorithmic Bidding",
        "Competitor Buy-Box Anomaly Detection",
        "High-Velocity Creative Testing & Iteration"
      ],
      buttonText: "Read the Grow Chapter",
      bgColor: "#00D2FF", // Vibrant Electric Cyan / Azure
      image: "/images/space/quan-you-zhang-8jW6xCtmYsw-unsplash.jpg"
    }
  ];

  const steps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards || cards.length < 4 || !containerRef.current) return;

      // Exact Z-Index Hierarchy:
      // Card 0 (Discover) is on top (z-40)
      // Card 1 (Build) is directly behind (z-30)
      // Card 2 (Launch) is behind Card 1 (z-20)
      // Card 3 (Grow) is at the bottom (z-10)
      gsap.set(cards[0], { yPercent: 0, zIndex: 40 });
      gsap.set(cards[1], { yPercent: 0, zIndex: 30 });
      gsap.set(cards[2], { yPercent: 0, zIndex: 20 });
      gsap.set(cards[3], { yPercent: 0, zIndex: 10 });

      // Smooth 1:1 immediate continuous scroll - no double scroll, no deadzones
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * 2.4}`,
          pin: true,
          scrub: 0.2, // Instant 1:1 physical response
          anticipatePin: 1,
        }
      });

      // Each card lifts immediately on scroll in a single natural swipe
      tl.to(cards[0], { yPercent: -100, ease: 'none', duration: 1.0 })
        .to(cards[1], { yPercent: -100, ease: 'none', duration: 1.0 })
        .to(cards[2], { yPercent: -100, ease: 'none', duration: 1.0 });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden select-none bg-[#000000]"
    >
      {/* 4 Full-Bleed Vibrant Editorial Cards (Zero Shadow, Hard Geometric Edge) */}
      {steps.map((step, idx) => {
        const deliverables = step.deliverablesList || [
          "Strategic Diagnostic & Process Mapping",
          "Channel Architecture & Inventory Sync",
          "Conversion Tracking & Event Attribution",
          "Unit Economic & Margin Governance"
        ];

        return (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            style={{ backgroundColor: step.bgColor || defaultSteps[idx]?.bgColor }}
            className="absolute inset-0 w-full h-full text-[#0A0A0A] overflow-hidden flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 sm:py-12 lg:py-14 will-change-transform"
          >
            <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between">
              
              {/* TOP SECTION: Number, Name & Header Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-2 sm:pt-4">
                
                {/* Top-Left: Big Number & Step Name */}
                <div className="lg:col-span-5">
                  <span className="font-grotesk font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none block text-[#0A0A0A]">
                    {step.num}
                  </span>
                  <h2 className="font-grotesk font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none text-[#0A0A0A] mt-1 sm:mt-2">
                    {step.name}
                  </h2>
                </div>

                {/* Top-Right: Section Headline & Explanatory Paragraph */}
                <div className="lg:col-span-7 space-y-2 sm:space-y-3">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl lg:text-3xl text-[#0A0A0A] tracking-tight leading-tight">
                    {step.heading}
                  </h3>
                  <p className="font-grotesk text-xs sm:text-sm lg:text-base text-[#0A0A0A]/85 leading-relaxed max-w-2xl font-medium">
                    {step.desc}
                  </p>
                </div>

              </div>

              {/* BOTTOM SECTION: 1/4 Bottom-Left Image & Bottom-Right Checklist + Inverting Black Button */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-2 sm:pb-4">
                
                {/* Bottom-Left: Shortened Corner Image (~1/4 of Card Area) */}
                <div className="lg:col-span-5">
                  <div className="w-full max-w-md lg:max-w-lg aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-black/15 bg-black/10">
                    <img
                      src={step.image}
                      alt={step.name}
                      className="w-full h-full object-cover select-none"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Bottom-Right: Deliverables List & Inverting Black Button */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  
                  {/* Kicker */}
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#0A0A0A]/70 font-bold block">
                    IN THIS CHAPTER, WE'LL COVER:
                  </span>

                  {/* Horizontal Divider Rows */}
                  <div className="divide-y divide-black/20 border-y border-black/20">
                    {deliverables.map((item, i) => (
                      <div 
                        key={i} 
                        className="py-2 sm:py-2.5 font-grotesk text-xs sm:text-sm font-semibold text-[#0A0A0A] flex items-center justify-between"
                      >
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solid Black Button (Inverts to White on Hover as seen in recording) */}
                  <a
                    href="#closing"
                    className="w-full py-3.5 sm:py-4 px-6 bg-[#000000] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] border border-[#000000] transition-colors duration-200 flex items-center justify-between font-sans text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer group"
                  >
                    <span>{step.buttonText || `Read the ${step.name} Chapter`}</span>
                    <span className="font-bold text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>

                </div>

              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}
