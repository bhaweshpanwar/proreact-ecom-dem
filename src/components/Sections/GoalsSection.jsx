import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GOALS_DATA } from '../../data/goalsData';

export default function GoalsSection() {
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
  const contentRef = useRef(null);
  const goal = GOALS_DATA[currentGoalIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentGoalIndex((prev) => (prev - 1 + GOALS_DATA.length) % GOALS_DATA.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentGoalIndex((prev) => (prev + 1) % GOALS_DATA.length);
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0.2, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
  }, [currentGoalIndex]);

  return (
    <section id="goals" aria-labelledby="goals-heading" className="relative py-14 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        <div className="rounded-container bg-white p-8 sm:p-14 lg:p-16 border border-stone-200/90 shadow-xs relative overflow-hidden">
          
          {/* Header - Left Aligned */}
          <div className="max-w-3xl mb-10 sm:mb-14 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              02 · Growth Blueprint
            </span>
            <h2 id="goals-heading" className="text-3xl sm:text-5xl lg:text-6xl font-serif text-space-950 tracking-tight leading-tight mb-4">
              What can we do for <span className="italic">you</span>?
            </h2>
            <p className="text-sm sm:text-base text-space-600 font-sans leading-relaxed max-w-2xl">
              Select your immediate objective to discover the customized growth roadmap, mapped services, and audit scope.
            </p>
          </div>

          {/* 10 Selectable Objective Pills - Left Aligned */}
          <div id="goals-pills-wrap" role="tablist" className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 w-full max-w-full mb-10 sm:mb-12">
            {GOALS_DATA.map((item, idx) => {
              const isActive = idx === currentGoalIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCurrentGoalIndex(idx)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-sans font-medium transition-all cursor-pointer flex items-center gap-2 select-none ${
                    isActive
                      ? 'bg-[#080B10] text-white border border-[#080B10] shadow-md ring-2 ring-[#080B10]/10'
                      : 'bg-[#FAFAFA] text-space-800 border border-stone-200/90 hover:bg-white hover:border-space-950 hover:shadow-xs'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Results Card - Off-White #FAFAFA, turns White on Hover */}
          <div id="goal-results-card" className="w-full max-w-full bg-[#FAFAFA] hover:bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-12 border border-stone-200/90 hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden group">
            <div ref={contentRef} className="blueprint-content-wrap space-y-6 sm:space-y-8 will-change-transform">
              
              {/* Top Meta Row */}
              <div className="blueprint-header flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-mono text-space-950 font-bold tracking-wider">{goal.badge}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-space-500 uppercase tracking-widest hidden sm:inline-block">CUSTOM ROADMAP</span>
                  
                  {/* Quick Objective Stepper Navigation */}
                  <div className="flex items-center gap-1.5 bg-slate-100/90 rounded-full p-1 border border-slate-200/70 select-none">
                    <button 
                      type="button" 
                      onClick={handlePrev}
                      className="w-6 h-6 rounded-full bg-white hover:bg-[#080B10] hover:text-white text-space-700 flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer active:scale-90"
                      title="Previous objective"
                    >
                      ←
                    </button>
                    <span className="text-[11px] font-mono px-2 text-space-700 font-semibold tracking-wide">
                      {String(currentGoalIndex + 1).padStart(2, '0')}/{String(GOALS_DATA.length).padStart(2, '0')}
                    </span>
                    <button 
                      type="button" 
                      onClick={handleNext}
                      className="w-6 h-6 rounded-full bg-white hover:bg-[#080B10] hover:text-white text-space-700 flex items-center justify-center text-xs transition-colors shadow-2xs cursor-pointer active:scale-90"
                      title="Next objective"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Headline & Narrative Summary */}
              <div className="space-y-3">
                <h3 className="blueprint-headline text-2xl sm:text-3xl lg:text-4xl font-serif text-space-950 font-normal leading-snug tracking-tight">
                  {goal.headline}
                </h3>
                <p className="blueprint-desc text-sm sm:text-base text-space-600 font-sans leading-relaxed max-w-2xl">
                  {goal.desc}
                </p>
              </div>

              {/* Recommended Service Alignment Modules */}
              <div className="blueprint-services pt-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-space-950 font-bold uppercase tracking-wider">
                    Recommended Service Alignment:
                  </span>
                  <span className="text-[11px] font-mono text-space-500">{goal.services.length} Mapped Capabilities</span>
                </div>
                <div className="blueprint-services-grid grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {goal.services.map((s, sIdx) => (
                    <a 
                      key={sIdx}
                      href={s.href} 
                      className="blueprint-service-card p-4 sm:p-5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200/80 hover:border-space-950 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group/srv relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-serif font-bold text-space-950 group-hover/srv:text-black transition-colors">{s.title}</span>
                        </div>
                        <span className="text-xs text-space-400 group-hover/srv:text-space-950 group-hover/srv:translate-x-1 transition-all">→</span>
                      </div>
                      <span className="text-xs text-space-600 leading-relaxed font-sans">{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Action & Guarantee Bar */}
              <div className="blueprint-footer pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-sans text-space-600">
                  <svg className="w-4 h-4 text-emerald-500 fill-current flex-shrink-0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Manual review delivered in 48h with bespoke scope &amp; clear deliverables.</span>
                </div>
                <a 
                  href="#closing" 
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white text-xs font-semibold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-lg group"
                >
                  <span>{goal.auditCta}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
