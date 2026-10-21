import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    num: '01',
    badge: 'STAGE 01 // IMMERSION',
    title: 'Discover & Deep Telemetry',
    heading: 'Uncovering the Unit Economic Truth',
    desc: 'We examine your Search Console, Ad Accounts, Catalogue Health, Buy-Box metrics, and customer conversion paths. Zero assumptions, pure forensic data.',
    stat: '48 Hours',
    statLabel: 'Full Forensic Delivery',
    image: '/images/space/process-discover.jpg'
  },
  {
    num: '02',
    badge: 'STAGE 02 // LEVERAGE',
    title: 'Audit & High-Impact Blueprint',
    heading: 'Isolating the 20% That Moves 80%',
    desc: 'We identify the high-velocity SKUs, profitable search clusters, and ad creative formats that will generate 80% of your bottom-line momentum.',
    stat: '80 / 20',
    statLabel: 'Pareto Optimization Ratio',
    image: '/images/space/process-audit.jpg'
  },
  {
    num: '03',
    badge: 'STAGE 03 // IGNITION',
    title: 'Build & Synchronized Launch',
    heading: 'Omni-Channel Live Deployment',
    desc: 'New listings, brand stores, ad campaigns, and checkout optimizations go live in sync so each channel fuels and compounds the others.',
    stat: '100% Sync',
    statLabel: 'Multi-Channel Handoff',
    image: '/images/space/process-build.jpg'
  },
  {
    num: '04',
    badge: 'STAGE 04 // ESCAPE VELOCITY',
    title: 'Scale & Systematic Compounding',
    heading: 'Continuous Algorithmic Calibration',
    desc: 'Weekly bid calibrations, query log pruning, buy-box algorithms, and creative refreshes keep your margins protected as scale accelerates.',
    stat: '+310%',
    statLabel: 'Annual Compound Compounding',
    image: '/images/space/process-scale.jpg'
  }
];

export default function Home2OdysseySection() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

      // Initial positions
      gsap.set(cards[0], { xPercent: 0, scale: 1, opacity: 1 });
      gsap.set(cards[1], { xPercent: 115, scale: 0.95, opacity: 0 });
      gsap.set(cards[2], { xPercent: 115, scale: 0.95, opacity: 0 });
      gsap.set(cards[3], { xPercent: 115, scale: 0.95, opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 5%',
            end: '+=1800',
            pin: true,
            scrub: 0.4,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              if (p < 0.22) setActiveStage(0);
              else if (p < 0.52) setActiveStage(1);
              else if (p < 0.80) setActiveStage(2);
              else setActiveStage(3);
            }
          }
        });
        timelineRef.current = tl;

        // Stage 1 -> 2
        tl.to(cards[1], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 0.2);
        tl.to(cards[0], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 0.2);

        // Stage 2 -> 3
        tl.to(cards[2], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 1.4);
        tl.to(cards[1], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 1.4);
        tl.to(cards[0], { opacity: 0, ease: 'none', duration: 0.5 }, 1.4);

        // Stage 3 -> 4
        tl.to(cards[3], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 2.6);
        tl.to(cards[2], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 2.6);
        tl.to(cards[1], { opacity: 0, ease: 'none', duration: 0.5 }, 2.6);
      });

      mm.add("(max-width: 767px)", () => {
        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 6%',
            end: '+=1400',
            pin: true,
            scrub: 0.4,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              if (p < 0.22) setActiveStage(0);
              else if (p < 0.52) setActiveStage(1);
              else if (p < 0.80) setActiveStage(2);
              else setActiveStage(3);
            }
          }
        });
        timelineRef.current = tlMobile;

        tlMobile.to(cards[1], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 0.2);
        tlMobile.to(cards[0], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 0.2);

        tlMobile.to(cards[2], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 1.4);
        tlMobile.to(cards[1], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 1.4);
        tlMobile.to(cards[0], { opacity: 0, duration: 0.5 }, 1.4);

        tlMobile.to(cards[3], { xPercent: 0, scale: 1, opacity: 1, ease: 'none', duration: 1 }, 2.6);
        tlMobile.to(cards[2], { scale: 0.94, opacity: 0.3, ease: 'none', duration: 1 }, 2.6);
        tlMobile.to(cards[1], { opacity: 0, duration: 0.5 }, 2.6);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePillClick = (idx) => {
    setActiveStage(idx);
    const tl = timelineRef.current;
    if (tl && tl.scrollTrigger) {
      const targets = [0.05, 0.38, 0.68, 0.98];
      const st = tl.scrollTrigger;
      const pos = st.start + (st.end - st.start) * targets[idx];
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const current = STAGES[activeStage];

  return (
    <section ref={sectionRef} id="odyssey" className="relative py-20 sm:py-32 overflow-hidden min-h-screen bg-[#02050E] text-white">
      
      {/* Full-bleed Cosmic Background Matching Active Stage Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {STAGES.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
            style={{ opacity: activeStage === idx ? 1 : 0 }}
          >
            <img 
              src={s.image} 
              alt={s.title} 
              className="w-full h-full object-cover scale-105"
              style={{
                filter: 'brightness(0.65) contrast(1.05)',
                transform: activeStage === idx ? 'scale(1.04)' : 'scale(1.0)',
                transition: 'transform 1.8s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#02050E]/80 via-transparent to-[#02050E]/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,rgba(2,5,14,0.75)_100%)]" />
          </div>
        ))}
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Observatory Glass Deck */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#0A0F1D]/85 backdrop-blur-2xl p-8 sm:p-14 lg:p-16 border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Control Column */}
            <div className="lg:col-span-5 space-y-6 select-none">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                  03 · The Launch Protocol
                </span>

                {/* Stage Jump Pills */}
                <div className="flex items-center gap-1.5">
                  {STAGES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePillClick(idx)}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeStage === idx
                          ? 'bg-cyan-400 text-black shadow-md'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Rail */}
              <div className="flex items-center gap-3">
                <div className="w-32 sm:w-44 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-300" 
                    style={{ width: `${(activeStage + 1) * 25}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-cyan-300 font-bold">
                  PHASE 0{activeStage + 1} / 04
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                  {current.badge}
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {current.desc}
              </p>

              {/* Stat Highlight Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{current.statLabel}</span>
                  <span className="text-xl font-serif text-white font-normal">{current.stat}</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED PROTOCOL
                </span>
              </div>

              <p className="text-xs font-mono text-slate-400">
                ↓ Scroll downward to advance orbit stages
              </p>
            </div>

            {/* Right Stacked Swipe Cards Deck */}
            <div className="lg:col-span-7 w-full relative">
              <div className="relative w-full h-[470px] sm:h-[520px] lg:h-[540px]">
                {STAGES.map((s, idx) => (
                  <div
                    key={idx}
                    ref={el => cardRefs.current[idx] = el}
                    onClick={() => handlePillClick(idx)}
                    className="absolute inset-0 w-full h-full p-6 sm:p-9 rounded-[28px] sm:rounded-[32px] bg-[#0E1526] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden cursor-pointer select-none will-change-transform group"
                    style={{ zIndex: 10 + idx }}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <span className="text-xs font-mono font-bold tracking-wider text-cyan-300">
                          {s.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          STAGE 0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-serif text-white leading-snug mb-3">
                        {s.heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                        {s.desc}
                      </p>
                    </div>

                    {/* Integrated Space Photo Frame */}
                    <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mt-auto border border-white/15">
                      <img 
                        src={s.image} 
                        alt={s.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                        <span>LIVE SECTOR SYNC</span>
                        <span className="text-cyan-300 font-bold">{s.stat}</span>
                      </div>
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
