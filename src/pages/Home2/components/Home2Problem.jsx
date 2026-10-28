import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2Problem({ data }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const imgContainerRef = useRef(null);
  const imgParallaxRef = useRef(null);
  const statPrimaryRef = useRef(null);

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
    ],
    statBlock = {
      image: "/images/space/ring-part-three.jpg",
      statPrimary: "8+",
      statLabelPrimary: "Services Unified",
      statSub: "One integrated partner managing marketplaces, ad campaigns, storefronts, and brand creative under a single connected strategy.",
      statSecondary: "Direct Team Communication",
      statLabelSecondary: "Clear updates. Structured support.",
      statSecondarySub: "Work directly with our team for project discussions, progress updates and coordinated digital solutions."
    }
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

      // 3. Planetary Space Photo Parallax Window (drifts inside its frame on scroll)
      if (imgParallaxRef.current && imgContainerRef.current) {
        gsap.fromTo(
          imgParallaxRef.current,
          { yPercent: -16 },
          {
            yPercent: 16,
            ease: "none",
            scrollTrigger: {
              trigger: imgContainerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }

      // 4. Giant Benchmark Stat Number Floating Parallax
      if (statPrimaryRef.current) {
        gsap.fromTo(
          statPrimaryRef.current,
          { y: 20 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: statPrimaryRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            }
          }
        );
      }
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
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-bold block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <h2 className="font-grotesk font-bold text-[clamp(32px,5vw,78px)] leading-[0.96] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <div className="space-y-4 max-w-[65ch]">
              <p className="font-grotesk text-base sm:text-lg text-[#555555] leading-relaxed">
                {subtext}
              </p>
              {secondaryText && (
                <p className="font-grotesk text-base sm:text-lg text-[#555555] leading-relaxed">
                  {secondaryText}
                </p>
              )}
              {highlightText && (
                <p className="font-grotesk font-bold text-xs sm:text-sm text-[#000000] tracking-wider uppercase pt-1">
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
                <span className="font-sans text-xs text-[#8A8A8A] uppercase tracking-wider font-semibold">
                  {point.label}
                </span>
                <span className="font-sans text-sm font-bold text-[#000000]">
                  [{point.num}]
                </span>
              </div>
              <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-[#000000] leading-snug">
                {point.title}
              </h3>
              <p className="font-grotesk text-sm sm:text-base text-[#666666] leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Split Pair (Planetary Photo with Window Parallax on Left, Solid Block with Stat on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 pt-12 sm:pt-16 items-stretch">
          
          {/* Left Half: Space Image with Window Parallax */}
          <div 
            ref={imgContainerRef}
            className="lg:col-span-7 border border-[#E5E5E5] overflow-hidden min-h-[380px] sm:min-h-[480px] relative bg-[#000000] select-none"
          >
            <img
              ref={imgParallaxRef}
              src={statBlock.image}
              alt="Deep Space Planetary Horizons"
              className="w-full h-[140%] object-cover absolute -top-[20%] left-0 will-change-transform"
              loading="lazy"
            />
          </div>

          {/* Right Half: Solid Light Grey Block with Giant Editorial Numbers */}
          <div className="lg:col-span-5 bg-[#F2F2F2] border-t lg:border-t border-b border-l-0 lg:border-l border-r border-[#E5E5E5] p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <div 
                ref={statPrimaryRef}
                className="font-grotesk font-bold text-[clamp(80px,12vw,160px)] leading-[0.88] tracking-[-0.05em] text-[#000000] will-change-transform"
              >
                {statBlock.statPrimary}
              </div>
              <span className="font-grotesk font-bold text-lg sm:text-xl text-[#000000] block">
                {statBlock.statLabelPrimary}
              </span>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                {statBlock.statSub}
              </p>
            </div>

            <div className="pt-6 border-t border-[#D9D9D9] space-y-2">
              <div className="font-grotesk font-bold text-xl sm:text-2xl text-[#000000] tracking-tight leading-snug">
                {statBlock.statSecondary}
              </div>
              <span className="font-sans text-xs uppercase text-[#8A8A8A] block font-semibold">
                {statBlock.statLabelSecondary}
              </span>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                {statBlock.statSecondarySub}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
