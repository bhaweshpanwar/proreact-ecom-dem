import React from 'react';

export default function Home2WhyNewAgency({ data }) {
  const {
    eyebrow = "07 / THE CONTRAST",
    pullQuoteBlack = "Legacy agencies sell you headcounts.",
    pullQuoteGrey = "We deliver direct velocity.",
    fourPoints = [
      {
        num: "01",
        title: "Senior People on Your Account",
        desc: "You collaborate directly with founders and senior practitioners who build and execute. No junior bait-and-switch.",
        accent: "indigo"
      },
      {
        num: "02",
        title: "Direct WhatsApp & Slack Access",
        desc: "Instant, real-time communications. No support ticketing queues, no 72-hour delay answering urgent catalogue issues.",
        accent: "emerald"
      },
      {
        num: "03",
        title: "No 12-Month Lock-In",
        desc: "We operate on performance trust. Clear month-to-month retainers after onboarding. We earn your partnership continuously.",
        accent: "amber"
      },
      {
        num: "04",
        title: "Weekly Net Contribution Reports",
        desc: "We report actual commercial revenue, margin, and blended ROAS. Zero vanity graphs designed to mask flat sales.",
        accent: "cyan"
      }
    ]
  } = data || {};

  return (
    <section className="relative border-b border-slate-200 overflow-hidden">
      
      {/* Top Half: Huge Pull-Quote Statement on Deep Cosmic Dark Band */}
      <div className="bg-[#050816] text-[#FFFFFF] py-20 sm:py-28 px-4 sm:px-8 border-b border-indigo-950/70 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block mb-6">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-black text-[clamp(36px,6.5vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase">
            {pullQuoteBlack} <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              {pullQuoteGrey}
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom Half: 4 Short Advantage Cards on Clean Architectural Canvas */}
      <div className="bg-[#F8FAFC] text-slate-950 py-16 sm:py-24 px-4 sm:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPoints.map((point, idx) => {
              const isIndigo = point.accent === 'indigo';
              const isEmerald = point.accent === 'emerald';
              const isAmber = point.accent === 'amber';
              const isCyan = point.accent === 'cyan';

              return (
                <div 
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                      isIndigo ? 'bg-indigo-50 text-indigo-700' :
                      isEmerald ? 'bg-emerald-50 text-emerald-700' :
                      isAmber ? 'bg-amber-50 text-amber-700' :
                      'bg-cyan-50 text-cyan-700'
                    }`}>
                      ADVANTAGE [{point.num}]
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-sans text-xs font-extrabold ${
                      isIndigo ? 'bg-indigo-100 text-indigo-700' :
                      isEmerald ? 'bg-emerald-100 text-emerald-700' :
                      isAmber ? 'bg-amber-100 text-amber-700' :
                      'bg-cyan-100 text-cyan-700'
                    }`}>
                      ✓
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                    {point.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
