import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const sectionRef = useRef(null);

  const rows = [
    {
      category: "One team",
      dotColor: "bg-pillar-marketing",
      text: "Marketing, marketplaces and websites under one roof — not five vendors."
    },
    {
      category: "Outcomes first",
      dotColor: "bg-pillar-marketplaces",
      text: "Everything we do is built around leads, sales and growth, not vanity metrics."
    },
    {
      category: "Clear by default",
      dotColor: "bg-pillar-websites",
      text: "Clear scope, clear deliverables and honest reporting."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const whyRows = sectionRef.current?.querySelectorAll('.why-row');
      if (whyRows) {
        whyRows.forEach(row => {
          const text = row.querySelector('.why-statement-text');
          const dot = row.querySelector('.why-dot');
          if (!text) return;

          ScrollTrigger.create({
            trigger: row,
            start: 'top 75%',
            onEnter: () => {
              text.classList.remove('text-space-600');
              text.classList.add('text-space-950');
              if (dot) {
                gsap.fromTo(dot, { scale: 1 }, { scale: 1.8, repeat: 1, yoyo: true, duration: 0.4 });
              }
            },
            onLeaveBack: () => {
              text.classList.remove('text-space-950');
              text.classList.add('text-space-600');
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-ecomet" aria-labelledby="why-heading" className="relative py-16 sm:py-28 bg-white overflow-hidden">
      
      {/* Edge Confetti */}
      <div className="confetti-square pointer-events-none absolute top-12 left-12 w-2 h-2 rounded-sm bg-pillar-marketing opacity-60" data-speed="0.7"></div>
      <div className="confetti-square pointer-events-none absolute bottom-12 right-12 w-2 h-2 rounded-sm bg-pillar-websites opacity-60" data-speed="1.3"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Frost Container */}
        <div className="rounded-container bg-frost p-8 sm:p-16 lg:p-20 border border-slate-200/50">
          
          <div className="mb-14 sm:mb-20">
            <span className="text-xs font-sans text-space-600 uppercase tracking-widest block mb-2">Why E-Comet</span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 tracking-tight">
              An uncompromised growth partnership.
            </h2>
          </div>

          {/* 3 Large Rows Separated by Hairlines */}
          <div className="space-y-12 sm:space-y-16">
            {rows.map((row, idx) => (
              <div 
                key={idx}
                className={`why-row pb-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group ${
                  idx < rows.length - 1 ? 'hairline-b' : ''
                }`}
              >
                <div className="md:col-span-3 flex items-center gap-2">
                  <span className={`why-dot w-2 h-2 rounded-full ${row.dotColor} inline-block opacity-40 group-hover:opacity-100 transition-opacity`}></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-space-600 font-medium">{row.category}</span>
                </div>
                <div className="md:col-span-9">
                  <p className="why-statement-text text-2xl sm:text-3xl lg:text-4xl font-serif text-space-600 transition-colors duration-500 leading-snug">
                    {row.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
