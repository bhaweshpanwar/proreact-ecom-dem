import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    num: '01 / 04',
    stageTag: 'STAGE 01',
    badge: 'FOUNDATION',
    title: '01 Discover',
    heading: 'Deep Immersion & Audit',
    desc: 'We look under the hood of your search console, ad manager, catalogue compliance, and conversion rate. No generic playbooks.',
    shortDesc: 'We learn the business, unit economics, current channels and customer search intent.',
    footer: '01 · AUDIT & SCOPE',
    rail: '25%',
    img: '/images/space/process-discover.jpg'
  },
  {
    num: '02 / 04',
    stageTag: 'STAGE 02',
    badge: 'GAP ANALYSIS',
    title: '02 Audit',
    heading: 'Finding Core Leverage Points',
    desc: 'We isolate the 20% of catalogue SKUs, keywords, and creative modules that will produce 80% of your bottom-line momentum.',
    shortDesc: 'We find the gaps, catalog errors and the biggest growth opportunities across channels.',
    footer: '02 · HIGH-LEVERAGE BLUEPRINT',
    rail: '50%',
    img: '/images/space/process-audit.jpg'
  },
  {
    num: '03 / 04',
    stageTag: 'STAGE 03',
    badge: 'EXECUTION',
    title: '03 Build & launch',
    heading: 'Build & Synchronized Launch',
    desc: 'Campaigns, listings, web updates and creative modules go live simultaneously so your channels feed into one another.',
    shortDesc: 'Campaigns, listings, web updates and creative modules go live simultaneously.',
    footer: '03 · OMNI-CHANNEL GO LIVE',
    rail: '75%',
    img: '/images/space/process-build.jpg'
  },
  {
    num: '04 / 04',
    stageTag: 'STAGE 04',
    badge: 'SCALE & CALIBRATE',
    title: '04 Optimise',
    heading: 'Continuous Calibration',
    desc: 'We review search query logs, buy-box dynamics, and ad margins weekly, trimming waste and doubling down on winners.',
    shortDesc: 'We measure, improve and scale unit economics systematically through weekly calibrations.',
    footer: '04 · SYSTEMATIC COMPOUNDING',
    rail: '100%',
    img: '/images/space/process-scale.jpg'
  }
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  const setStage = (idx) => {
    setActiveStage(idx);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

      // Initial positions
      gsap.set(cards[0], { xPercent: 0, rotate: 0, scale: 1, opacity: 1 });
      gsap.set(cards[1], { xPercent: 125, rotate: 4, scale: 0.95, opacity: 0 });
      gsap.set(cards[2], { xPercent: 125, rotate: 4, scale: 0.95, opacity: 0 });
      gsap.set(cards[3], { xPercent: 125, rotate: 4, scale: 0.95, opacity: 0 });

      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px): Pinned Scrollytelling Timeline
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 10%',
            end: '+=2400',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              if (p < 0.25) setStage(0);
              else if (p < 0.55) setStage(1);
              else if (p < 0.82) setStage(2);
              else setStage(3);
            }
          }
        });
        timelineRef.current = tl;

        // 1 -> 2: Card 2 swipes in from right over Card 1
        tl.to(cards[1], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 0.2);
        tl.to(cards[0], { scale: 0.94, xPercent: -6, opacity: 0.45, rotate: -2, ease: 'power2.out', duration: 1 }, 0.2);

        // 2 -> 3: Card 3 swipes in over Card 2
        tl.to(cards[2], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 1.4);
        tl.to(cards[1], { scale: 0.94, xPercent: -6, opacity: 0.45, rotate: -2, ease: 'power2.out', duration: 1 }, 1.4);
        tl.to(cards[0], { scale: 0.88, xPercent: -12, opacity: 0.15, rotate: -4, ease: 'power2.out', duration: 1 }, 1.4);

        // 3 -> 4: Card 4 swipes in over Card 3
        tl.to(cards[3], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 2.6);
        tl.to(cards[2], { scale: 0.94, xPercent: -6, opacity: 0.45, rotate: -2, ease: 'power2.out', duration: 1 }, 2.6);
        tl.to(cards[1], { scale: 0.88, xPercent: -12, opacity: 0.15, rotate: -4, ease: 'power2.out', duration: 1 }, 2.6);
      });

      // Mobile (< 768px): Compact Swipe Scroll
      mm.add("(max-width: 767px)", () => {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 12%',
            end: '+=1600',
            pin: true,
            scrub: 0.5,
            onUpdate: (self) => {
              const p = self.progress;
              if (p < 0.25) setStage(0);
              else if (p < 0.55) setStage(1);
              else if (p < 0.82) setStage(2);
              else setStage(3);
            }
          }
        });
        timelineRef.current = tlMobile;

        tlMobile.to(cards[1], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 0.2);
        tlMobile.to(cards[0], { scale: 0.94, xPercent: -5, opacity: 0.4, rotate: -2, ease: 'power2.out', duration: 1 }, 0.2);

        tlMobile.to(cards[2], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 1.4);
        tlMobile.to(cards[1], { scale: 0.94, xPercent: -5, opacity: 0.4, rotate: -2, ease: 'power2.out', duration: 1 }, 1.4);

        tlMobile.to(cards[3], { xPercent: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power2.out', duration: 1 }, 2.6);
        tlMobile.to(cards[2], { scale: 0.94, xPercent: -5, opacity: 0.4, rotate: -2, ease: 'power2.out', duration: 1 }, 2.6);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePillClick = (idx) => {
    setStage(idx);
    const tl = timelineRef.current;
    if (tl && tl.scrollTrigger) {
      const targets = [0.1, 0.4, 0.7, 0.95];
      const st = tl.scrollTrigger;
      const pos = st.start + (st.end - st.start) * targets[idx];
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const current = STAGES[activeStage];

  return (
    <section ref={sectionRef} id="process" aria-labelledby="process-heading" className="relative py-14 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Architectural Container - White */}
        <div id="process-pinned-container" className="rounded-container bg-white p-7 sm:p-12 lg:p-14 border border-stone-200/90 relative overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Information Column */}
            <div className="lg:col-span-5 space-y-6 select-none">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-space-600 uppercase tracking-widest font-semibold block">Process</span>
                {/* Stage Pills For Instant Jump */}
                <div className="flex items-center gap-1.5">
                  {STAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePillClick(idx)}
                      className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                        activeStage === idx
                          ? 'bg-[#080B10] text-white border border-[#080B10]'
                          : 'bg-[#FAFAFA] text-space-600 border border-stone-200/90 hover:bg-white hover:border-space-800'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Progress Indicator Rail */}
              <div className="flex items-center gap-3 py-1">
                <div className="w-28 sm:w-36 h-[3px] bg-slate-200 rounded-full relative overflow-hidden">
                  <div 
                    className="h-full bg-[#080B10] transition-all duration-300" 
                    style={{ width: current.rail }}
                  />
                </div>
                <span className="text-xs font-mono text-space-950 font-bold">{current.num}</span>
              </div>

              {/* Large Step Title */}
              <div className="overflow-hidden py-1 min-h-[56px] sm:min-h-[72px] flex items-center">
                <h2 id="process-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-space-950 leading-tight">
                  <span className="block transition-transform duration-300">{current.title}</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-space-600 font-sans leading-relaxed max-w-md min-h-[64px]">
                {current.shortDesc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-sans text-space-600">
                <span>Scroll to progress through orbit stages</span>
              </div>
            </div>

            {/* Right Column: Pinned Horizontal Swipe Cards Stage */}
            <div className="lg:col-span-7 w-full relative">
              <div className="relative w-full h-[470px] sm:h-[510px] lg:h-[530px]">
                
                {STAGES.map((s, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    id={`process-card-${idx + 1}`}
                    onClick={() => handlePillClick(idx)}
                    className="absolute inset-0 w-full h-full p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] bg-white border border-stone-200/90 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden select-none cursor-pointer will-change-transform group"
                    style={{ zIndex: 10 + idx }}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 hairline-b mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold tracking-wider text-space-950">{s.stageTag}</span>
                        </div>
                        <span className="text-xs font-mono text-space-600 tracking-wider">{s.badge}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-space-950 font-normal leading-snug mb-2 sm:mb-3">
                        {s.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-space-600 leading-relaxed font-sans max-w-lg mb-4">
                        {s.desc}
                      </p>
                    </div>

                    {/* Visual Space Architecture Stage Showcase */}
                    <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden flex flex-col justify-between mt-auto border border-stone-200/80 shadow-2xs p-5 select-none group/stage">
                      <img 
                        src={s.img} 
                        alt={s.heading} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/stage:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />

                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/90">
                        <span className="tracking-wider">SYSTEM ARCHITECTURE PROTOCOL</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ACTIVE
                        </span>
                      </div>

                      <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                          <span className="text-[9.5px] font-mono text-slate-300 uppercase block">Phase</span>
                          <span className="text-xs sm:text-sm font-bold text-white font-sans">0{idx + 1} Run</span>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                          <span className="text-[9.5px] font-mono text-slate-300 uppercase block">Cadence</span>
                          <span className="text-xs sm:text-sm font-bold text-white font-sans">Bi-Weekly</span>
                        </div>
                        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                          <span className="text-[9.5px] font-mono text-slate-300 uppercase block">Target</span>
                          <span className="text-xs sm:text-sm font-bold text-cyan-300 font-sans">Optimal CAC</span>
                        </div>
                      </div>

                      <div className="relative z-10 w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-white h-full rounded-full transition-all duration-500" style={{ width: `${(idx + 1) * 25}%` }} />
                      </div>
                    </div>

                    <div className="pt-3.5 mt-2 flex items-center justify-between text-[11px] font-mono text-space-600 hairline-t">
                      <span>{s.footer}</span>
                      <span className="text-space-950 font-medium">STAGE 0{idx + 1} / 04</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
