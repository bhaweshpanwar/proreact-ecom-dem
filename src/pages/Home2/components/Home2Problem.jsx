import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2Problem({ data }) {
  const sectionRef = useRef(null);

  const {
    eyebrow = "02 / THE BOTTLENECK",
    headline = "Too many freelancers. Too little growth.",
    subtext = "Most expanding businesses end up managing 5 disconnected vendors: an ad agency that ignores catalogues, a web developer who blames the designer, and marketplace account managers operating in a dark room. Nobody owns the bottom-line revenue number.",
    painPoints = [
      {
        num: "01",
        label: "VENDOR FRAGMENTATION",
        title: "Disconnected Execution",
        desc: "Designers don't know Amazon catalog formatting. Ad buyers don't know technical SEO. You spend your weeks relaying feedback across 5 Slack channels."
      },
      {
        num: "02",
        label: "VANITY METRIC TRAP",
        title: "Impressions Over Margin",
        desc: "Agencies celebrate clicks, followers, and ad impressions while your net contribution margin and Buy-Box win rate stay completely flat."
      },
      {
        num: "03",
        label: "THE JUNIOR PASS-OFF",
        title: "Pitch Team vs Real Team",
        desc: "Pitched by senior agency founders, then handed off to junior interns who learn on your company ad budget. Zero commercial skin in the game."
      }
    ],
    statBlock = {
      image: "/images/space/ring-part-three.jpg",
      statPrimary: "5+",
      statLabelPrimary: "Vendors Replaced",
      statSub: "One sovereign team handling marketplaces, ad budgets, storefronts and creative.",
      statSecondary: "24h",
      statLabelSecondary: "Direct Slack & WhatsApp Response",
      statSecondarySub: "Direct partner access. No tiered ticketing queues."
    }
  } = data || {};

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Smooth physical rise of next section as user scrolls down from hero
      gsap.fromTo(
        sectionRef.current,
        { y: 60, opacity: 0.94 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 98%",
            end: "top 72%",
            scrub: 0.8,
          }
        }
      );

      // 2. High-impact staggered lift of problem elements
      gsap.fromTo(
        ".problem-anim-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="problem" 
      ref={sectionRef} 
      className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5] will-change-transform z-20"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header Row */}
        <div className="problem-anim-item grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#E5E5E5]">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <p className="font-grotesk text-base sm:text-lg text-[#555555] leading-relaxed max-w-[60ch]">
              {subtext}
            </p>
          </div>
        </div>

        {/* 3-Column Pain Points Grid (Separated by Thin 1px Rules) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {painPoints.map((point, idx) => (
            <div key={idx} className="problem-anim-item py-8 sm:py-12 md:px-8 first:pl-0 last:pr-0 space-y-4">
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

        {/* Split Pair (Photo on Left, Solid Light Grey Block on Right with Giant Stats) */}
        <div className="problem-anim-item grid grid-cols-1 lg:grid-cols-12 gap-0 pt-12 sm:pt-16 items-stretch">
          
          {/* Left Half: Space Image */}
          <div className="lg:col-span-7 border border-[#E5E5E5] overflow-hidden min-h-[360px] sm:min-h-[460px] relative bg-[#000000]">
            <img
              src={statBlock.image}
              alt="Deep Space Planetary Horizons"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[11px] px-3 py-1 uppercase tracking-wider">
              SECTOR 02 // REALITY CHECK
            </div>
          </div>

          {/* Right Half: Solid Light Grey Block with Giant Editorial Numbers */}
          <div className="lg:col-span-5 bg-[#F2F2F2] border-t lg:border-t border-b border-l-0 lg:border-l border-r border-[#E5E5E5] p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-wider text-[#8A8A8A] block font-semibold">
                [EFFICIENCY BENCHMARK]
              </span>
              <div className="font-grotesk font-bold text-[clamp(80px,12vw,160px)] leading-[0.88] tracking-[-0.05em] text-[#000000]">
                {statBlock.statPrimary}
              </div>
              <span className="font-grotesk font-bold text-lg sm:text-xl text-[#000000] block">
                {statBlock.statLabelPrimary}
              </span>
              <p className="font-grotesk text-xs sm:text-sm text-[#666666] leading-relaxed">
                {statBlock.statSub}
              </p>
            </div>

            <div className="pt-6 border-t border-[#D9D9D9] space-y-1">
              <div className="font-grotesk font-bold text-4xl sm:text-5xl text-[#000000] tracking-tight">
                {statBlock.statSecondary}
              </div>
              <span className="font-sans text-xs uppercase text-[#8A8A8A] block font-semibold">
                {statBlock.statLabelSecondary}
              </span>
              <p className="font-grotesk text-xs text-[#666666]">
                {statBlock.statSecondarySub}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
