import React from 'react';

export default function Home2AuditOffer({ data }) {
  const {
    eyebrow = "06 / DIAGNOSTIC OFFER",
    headline = "The Free Growth Audit.",
    subtext = "Before you commit a single rupee to a retainer, let us inspect your actual commercial telemetry. We run a comprehensive 48-hour diagnostic across your digital channels.",
    image = "/images/space/card-marketplace.jpg",
    auditFeatures = [
      {
        title: "Search & Ad Account Forensics",
        desc: "We analyze your Google & Meta search query logs, wasted negative keyword spend, and bid efficiency across bottom-funnel queries."
      },
      {
        title: "Marketplace Listing & Buy-Box Health",
        desc: "We evaluate SKU variations, backend search terms, Amazon Brand Store architecture, and daily Buy-Box suppression risks."
      },
      {
        title: "Storefront Latency & Checkout CRO",
        desc: "We audit mobile LCP load times, cart drawer friction, and drop-off barriers causing qualified visitors to leave without buying."
      },
      {
        title: "90-Day Prioritized Action Blueprint",
        desc: "You receive a clear, actionable roadmap detailing the exact levers that will generate 80% of your initial compound momentum."
      }
    ]
  } = data || {};

  return (
    <section id="audit" className="relative py-20 sm:py-32 bg-[#040714] text-[#FFFFFF] border-b border-indigo-950/70 overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-white/10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-grotesk font-black text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-[48ch] leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Master Split Block */}
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#080C22] to-[#040612] overflow-hidden shadow-2xl shadow-indigo-950/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Half: Space Image */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[500px] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden bg-black group">
              <img
                src={image}
                alt="Orbital Satellite Observation - Free Growth Audit"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-cyan-300 font-sans font-bold text-[10px] sm:text-[11px] px-3.5 py-1.5 uppercase rounded-md border border-cyan-500/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>48-HOUR TURNAROUND · $0 COMPLIMENTARY</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-3.5 rounded-lg border border-white/10 backdrop-blur-md font-sans text-xs text-slate-300 flex justify-between items-center">
                <span className="text-cyan-400 font-semibold">QUALIFIED BRANDS ONLY</span>
                <span className="text-white font-bold">ZERO SALES PRESSURE</span>
              </div>
            </div>

            {/* Right Half: Solid Terminal Listing What the Audit Includes */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 bg-white/[0.02]">
              <div className="space-y-6">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-cyan-400 block">
                  [AUDIT DELIVERABLES CHECKLIST]
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {auditFeatures.map((feat, idx) => (
                    <div key={idx} className="space-y-2 border-l-2 border-indigo-500/50 pl-4 hover:border-cyan-400 transition-colors">
                      <span className="font-sans text-[11px] font-bold text-cyan-400 block">
                        0{idx + 1} // CRITICAL INSPECTION
                      </span>
                      <h3 className="font-grotesk font-bold text-base sm:text-lg text-[#FFFFFF]">
                        {feat.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder SLA Guarantee Callout */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 font-sans text-xs text-slate-300 flex items-center gap-3">
                <span className="text-lg">⚡</span>
                <span>
                  Delivered as a confidential video walkthrough + annotated executive PDF ready for your leadership team.
                </span>
              </div>
            </div>

          </div>

          {/* Full-Width Action Bar at Bottom of Block with Electric Gradient */}
          <a
            href="https://wa.me/919999999999?text=Hi%20E-Comet%2C%20we%20want%20to%20request%20the%2048-Hour%20Free%20Growth%20Audit" // TODO: Add verified business WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 px-6 sm:px-8 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-sans text-sm sm:text-base font-black uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-xl shadow-cyan-500/20 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              <span>Request Your Free Growth Audit Today</span>
            </div>
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
