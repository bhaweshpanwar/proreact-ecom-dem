import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  const sectionRef = useRef(null);

  const rows = [
    {
      category: "One team",
      text: "Marketing, marketplaces and websites under one roof — not five vendors."
    },
    {
      category: "Outcomes first",
      text: "Everything we do is built around leads, sales and growth, not vanity metrics."
    },
    {
      category: "Clear by default",
      text: "Clear scope, clear deliverables and honest reporting."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const whyRows = sectionRef.current?.querySelectorAll('.why-row');
      if (whyRows) {
        whyRows.forEach(row => {
          const text = row.querySelector('.why-statement-text');
          if (!text) return;

          ScrollTrigger.create({
            trigger: row,
            start: 'top 75%',
            onEnter: () => {
              text.classList.remove('text-slate-400');
              text.classList.add('text-space-950');
            },
            onLeaveBack: () => {
              text.classList.remove('text-space-950');
              text.classList.add('text-slate-400');
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-ecomet" aria-labelledby="why-heading" className="relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Architectural Canvas Container - White */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-white p-8 sm:p-16 lg:p-20 border border-stone-200/90 shadow-xs">
          
          <div className="mb-14 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
              05 · Why E-Comet
            </span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15]">
              An uncompromised growth partnership.
            </h2>
          </div>

          {/* 3 Large Rows Separated by Hairlines (No dots, Clean Minimalist Typography) */}
          <div className="space-y-12 sm:space-y-16">
            {rows.map((row, idx) => (
              <div 
                key={idx}
                className={`why-row pb-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group ${
                  idx < rows.length - 1 ? 'border-b border-slate-200/80' : ''
                }`}
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    {row.category}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <p className="why-statement-text text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-400 transition-colors duration-500 leading-snug">
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
