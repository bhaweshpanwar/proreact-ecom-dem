import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2Timeline30Days({ data }) {
  const sectionRef = useRef(null);

  const {
    eyebrow = "05 / ONBOARDING ROADMAP",
    headline = "YOUR FIRST 30 DAYS.",
    subtext = "Clear deliverables from day one. Here's what happens when you partner with E-Comet Outverse.",
    footerStrip = "FLEXIBLE EXECUTION · SERVICE-SPECIFIC DELIVERABLES · INTEGRATED DIGITAL SOLUTIONS",
    weeks = [
      {
        week: "WEEK 01",
        phase: "RECONNAISSANCE & AUDIT",
        deliverables: [
          "Complete ad account & query log forensic export",
          "Marketplace Buy-Box health & SKU variation audit",
          "Setup of unified WhatsApp / Slack communication channel",
          "Delivery of prioritized 90-day growth roadmap"
        ]
      },
      {
        week: "WEEK 02",
        phase: "FOUNDATION & REBUILD",
        deliverables: [
          "Restructuring underperforming ad campaigns & budgets",
          "Correction of listing errors, titles & back-end search terms",
          "Storefront speed check & mobile checkout CRO fixes",
          "Creative brief approval for new photo & video modules"
        ]
      },
      {
        week: "WEEK 03",
        phase: "SYNCHRONIZED GO-LIVE",
        deliverables: [
          "Live launch of revised Google & Meta ad funnels",
          "Marketplace Sponsored Brand & Sponsored Product deployment",
          "Activation of verified first-party CAPI / GA4 tracking",
          "Daily Buy-Box monitoring & ad bid calibration"
        ]
      },
      {
        week: "WEEK 04",
        phase: "FIRST CALIBRATION REVIEW",
        deliverables: [
          "First comprehensive weekly unit economic report",
          "Pruning negative keywords and low-margin ad spend",
          "Initial baseline comparison vs pre-launch metrics",
          "Approval of month two scaling targets"
        ]
      }
    ]
  } = data || {};

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-week-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#E5E5E5] items-end">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9 space-y-4">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#666666] leading-relaxed max-w-[55ch]">
              {subtext}
            </p>
          </div>
        </div>

        {/* 4-Week Horizontal Grid Layout with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {weeks.map((item, idx) => (
            <div 
              key={idx}
              className="timeline-week-card p-6 sm:p-8 flex flex-col justify-between space-y-8 bg-[#FFFFFF] hover:bg-[#F9F9F9] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
                  <span className="font-sans text-sm font-bold text-[#000000]">
                    {item.week}
                  </span>
                  <span className="font-sans text-[10px] text-[#8A8A8A] uppercase tracking-wider font-semibold">
                    {item.phaseNumber || `PHASE 0${idx + 1}`}
                  </span>
                </div>

                <h3 className="font-grotesk font-bold text-base sm:text-lg text-[#000000] uppercase tracking-tight">
                  {item.phase}
                </h3>

                <ul className="space-y-3 font-grotesk text-xs sm:text-sm text-[#555555]">
                  {item.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="font-sans text-[#000000] font-bold select-none mt-0.5">―</span>
                      <span className="leading-snug">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] font-sans text-[11px] uppercase text-[#8A8A8A] font-semibold tracking-wider">
                <span>{item.status || `STATUS: DAY ${String(idx * 7 + 1).padStart(2, '0')}–DAY ${String((idx + 1) * 7).padStart(2, '0')}`}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        {footerStrip && (
          <div className="py-6 border-b border-[#E5E5E5] text-center">
            <p className="font-mono text-xs sm:text-[12px] uppercase tracking-widest text-[#666666] font-semibold">
              {footerStrip}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
