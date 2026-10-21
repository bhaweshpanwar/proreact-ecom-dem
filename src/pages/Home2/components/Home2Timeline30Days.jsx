import React from 'react';

export default function Home2Timeline30Days({ data }) {
  const {
    eyebrow = "05 / ONBOARDING ROADMAP",
    headline = "Your first 30 days.",
    subtext = "Plain, concrete deliverables from day one. Exactly what happens when you partner with E-Comet.",
    weeks = [
      {
        week: "WEEK 01",
        phase: "RECONNAISSANCE & AUDIT",
        accent: "cyan",
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
        accent: "blue",
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
        accent: "indigo",
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
        accent: "emerald",
        deliverables: [
          "First comprehensive weekly unit economic report",
          "Pruning negative keywords and low-margin ad spend",
          "Initial baseline comparison vs pre-launch metrics",
          "Approval of month two scaling targets"
        ]
      }
    ]
  } = data || {};

  return (
    <section id="timeline" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-slate-200 items-end">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 inline-block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-grotesk font-black text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-slate-950">
              {headline}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-[50ch]">
              {subtext}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right font-sans text-xs font-bold text-indigo-600 uppercase tracking-wider">
            <span>[4 WEEKS TO COMPOUNDING]</span>
          </div>
        </div>

        {/* 4-Week Horizontal Grid with Progressive Accent Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {weeks.map((item, idx) => {
            const isCyan = item.accent === 'cyan';
            const isBlue = item.accent === 'blue';
            const isIndigo = item.accent === 'indigo';
            const isEmerald = item.accent === 'emerald';

            return (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-8 bg-white border transition-all duration-300 hover:-translate-y-1 ${
                  isCyan ? 'border-cyan-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10' :
                  isBlue ? 'border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10' :
                  isIndigo ? 'border-indigo-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10' :
                  'border-emerald-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className={`font-grotesk font-bold text-lg ${
                      isCyan ? 'text-cyan-600' :
                      isBlue ? 'text-blue-600' :
                      isIndigo ? 'text-indigo-600' :
                      'text-emerald-600'
                    }`}>
                      {item.week}
                    </span>
                    <span className={`font-sans text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isCyan ? 'bg-cyan-50 text-cyan-700' :
                      isBlue ? 'bg-blue-50 text-blue-700' :
                      isIndigo ? 'bg-indigo-50 text-indigo-700' :
                      'bg-emerald-50 text-emerald-700'
                    }`}>
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-bold text-base text-slate-900 uppercase tracking-tight">
                    {item.phase}
                  </h3>

                  {/* Deliverables Checklist */}
                  <ul className="space-y-3 pt-2">
                    {item.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-600 leading-snug">
                        <span className={`flex-shrink-0 font-bold ${
                          isCyan ? 'text-cyan-500' :
                          isBlue ? 'text-blue-500' :
                          isIndigo ? 'text-indigo-500' :
                          'text-emerald-500'
                        }`}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between">
                  <span>TIMEFRAME</span>
                  <span className="text-slate-800 font-bold">DAYS {idx * 7 + 1}–{(idx + 1) * 7}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
