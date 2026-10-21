import React from 'react';

export default function Home2Problem({ data }) {
  const {
    eyebrow = "02 / THE BOTTLENECK",
    headline = "Too many freelancers. Too little growth.",
    subtext = "Most expanding businesses end up managing 5 disconnected vendors: an ad agency that ignores catalogues, a web developer who blames the designer, and marketplace account managers operating in a dark room. Nobody owns the bottom-line revenue number.",
    painPoints = [
      {
        num: "01",
        label: "VENDOR FRAGMENTATION",
        title: "Disconnected Execution",
        desc: "Designers don't know Amazon catalog formatting. Ad buyers don't know technical SEO. You spend your weeks relaying feedback across 5 Slack channels.",
        accent: "amber"
      },
      {
        num: "02",
        label: "VANITY METRIC TRAP",
        title: "Impressions Over Margin",
        desc: "Agencies celebrate clicks, followers, and ad impressions while your net contribution margin and Buy-Box win rate stay completely flat.",
        accent: "rose"
      },
      {
        num: "03",
        label: "THE JUNIOR PASS-OFF",
        title: "Pitch Team vs Real Team",
        desc: "Pitched by senior agency founders, then handed off to junior interns who learn on your company ad budget. Zero commercial skin in the game.",
        accent: "indigo"
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

  return (
    <section id="problem" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#0A0D18] border-b border-slate-200 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-slate-200">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 inline-block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-slate-950">
              {headline}
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-[60ch]">
              {subtext}
            </p>
          </div>
        </div>

        {/* 3-Column Pain Points Grid with Distinct Color Identities */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
          {painPoints.map((point, idx) => {
            const isAmber = point.accent === 'amber';
            const isRose = point.accent === 'rose';
            return (
              <div 
                key={idx} 
                className="py-8 sm:py-12 md:px-8 first:pl-0 last:pr-0 space-y-4 group hover:bg-slate-50/70 transition-colors rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    isAmber ? 'bg-amber-100 text-amber-800' : isRose ? 'bg-rose-100 text-rose-800' : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {point.label}
                  </span>
                  <span className={`font-sans text-sm font-extrabold ${
                    isAmber ? 'text-amber-600' : isRose ? 'text-rose-600' : 'text-indigo-600'
                  }`}>
                    [{point.num}]
                  </span>
                </div>
                <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-slate-900 leading-snug group-hover:text-black transition-colors">
                  {point.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Split Pair (Vibrant Color Space Photo + Modern Stat Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 pt-12 sm:pt-16 items-stretch">
          
          {/* Left Half: Space Image with Rich Contrast */}
          <div className="lg:col-span-7 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none border border-slate-200 overflow-hidden min-h-[380px] sm:min-h-[460px] relative bg-black group">
            <img
              src={statBlock.image}
              alt="Deep Space Planetary Horizons"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute top-4 left-4 bg-indigo-950/90 text-cyan-300 font-sans font-bold text-[11px] px-3.5 py-1.5 uppercase rounded-md border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>SECTOR 02 // REALITY CHECK</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white p-3.5 rounded-lg border border-white/10 backdrop-blur-md font-sans text-xs flex items-center justify-between">
              <span className="text-slate-300 font-medium">Unified Execution Pod</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span>✓</span> Zero Siloed Communications
              </span>
            </div>
          </div>

          {/* Right Half: Solid Architectural Canvas with Giant Colored Gradient Stats */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-indigo-50/20 to-slate-100 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none border-t lg:border-t border-b border-l-0 lg:border-l border-r border-slate-200 p-8 sm:p-12 flex flex-col justify-between space-y-8 shadow-sm">
            
            {/* Stat 1 */}
            <div className="space-y-3 pb-8 border-b border-slate-200">
              <div className="font-grotesk font-black text-[clamp(64px,7vw,110px)] leading-[0.85] tracking-tight bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 bg-clip-text text-transparent">
                {statBlock.statPrimary}
              </div>
              <div className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>{statBlock.statLabelPrimary}</span>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {statBlock.statSub}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-3">
              <div className="font-grotesk font-black text-[clamp(56px,6vw,96px)] leading-[0.85] tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {statBlock.statSecondary}
              </div>
              <div className="font-sans text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>{statBlock.statLabelSecondary}</span>
              </div>
              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {statBlock.statSecondarySub}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
