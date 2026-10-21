import React from 'react';

export default function Home2ObservatorySection() {
  const whyPillars = [
    {
      num: '01',
      title: 'One Sovereign Architecture',
      subtitle: 'Not 5 Fragmented Vendors',
      desc: 'Marketplace managers, performance media buyers, web engineers, and cinema directors working in one synchronized room under one unified standard.'
    },
    {
      num: '02',
      title: 'Unit Economic Focus',
      subtitle: 'Leads, Margin & Bottom-Line GMV',
      desc: 'Every algorithm we calibrate, ad budget we allocate, and listing we optimize is measured against net contribution margin and customer LTV.'
    },
    {
      num: '03',
      title: 'Radical Transparency',
      subtitle: 'Clear Scope, Honest Reporting',
      desc: 'No black-box markups, no vague progress reports, and no account lock-ins. You own 100% of your data, ad accounts, and code repositories from Day 1.'
    }
  ];

  return (
    <section id="observatory" className="relative py-24 sm:py-36 bg-[#02050E] text-white overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Architectural Container */}
        <div className="rounded-[36px] sm:rounded-[44px] bg-[#080D1A]/90 backdrop-blur-2xl border border-white/15 p-8 sm:p-16 lg:p-20 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          
          <div className="mb-14 sm:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-3">
              05 · The Observatory // Why Outverse
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
              An Uncompromised <br />
              <span className="italic bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Growth Partnership.
              </span>
            </h2>
          </div>

          {/* 3 Comparative Rows */}
          <div className="space-y-10 sm:space-y-14 mb-16 sm:mb-20">
            {whyPillars.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-10 border-b border-white/10 group cursor-pointer"
              >
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="text-sm font-mono text-cyan-400 font-bold">{item.num}</span>
                  <span className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="text-lg sm:text-xl font-serif text-white font-normal block mb-1">
                    {item.subtitle}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Panoramic Accretion Disk Portal */}
          <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl min-h-[260px] sm:min-h-[340px] flex items-end p-6 sm:p-12 group cursor-pointer">
            <img 
              src="/images/space/why-celestial.jpg" 
              alt="Deep Space Accretion Disk Observatory"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
                    CONSTELLATION ENGINE // LIVE INFRASTRUCTURE
                  </span>
                </div>
                <p className="text-xl sm:text-3xl font-serif text-white max-w-xl leading-tight">
                  Where creative prestige meets ruthless technical execution.
                </p>
              </div>

              <div className="flex items-center gap-8 text-right font-mono text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Accountability</span>
                  <span className="text-base text-white font-bold">100% Sovereign</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Client Retention</span>
                  <span className="text-base text-cyan-300 font-bold">94.8% Year-over-Year</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
