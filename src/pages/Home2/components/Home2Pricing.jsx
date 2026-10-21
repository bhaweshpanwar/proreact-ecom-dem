import React from 'react';

export default function Home2Pricing({ data }) {
  const {
    eyebrow = "10 / COMMERCIAL MODELS",
    headline = "Pricing clarity.",
    subtext = "Transparent partnership structures. No hidden markup fees, no percentage-of-ad-spend traps that incentivize wasteful spending.",
    tiers = [
      {
        num: "01",
        name: "FOUNDATION SPRINT",
        scope: "One-Time Architecture Overhaul",
        pricePlaceholder: "Starting from ₹75,000", // TODO: Update with finalized commercial sprint pricing
        badge: "ONE-TIME FIXED FEE",
        desc: "Ideal for brands needing a complete rebuild of their catalogue, search indexing, custom Shopify storefront, or broken ad tracking.",
        includes: [
          "Complete catalogue rebuild & variations",
          "Shopify speed & checkout CRO overhaul",
          "Meta CAPI & GA4 first-party tracking setup",
          "30 days post-launch warranty support"
        ],
        accent: "cyan"
      },
      {
        num: "02",
        name: "MONTHLY GROWTH RETAINER",
        scope: "Dedicated Multi-Channel Pod",
        pricePlaceholder: "Starting from ₹1,20,000/mo", // TODO: Update with finalized monthly retainer tiers
        badge: "MOST POPULAR · DEDICATED POD",
        desc: "A dedicated senior team managing daily marketplace Buy-Box algorithms, Google & Meta ads, creative iterations, and weekly reporting.",
        includes: [
          "Daily marketplace & ad bid governance",
          "Continuous creative motion & listing updates",
          "Direct founder Slack / WhatsApp line",
          "Weekly net contribution margin reports"
        ],
        accent: "featured"
      },
      {
        num: "03",
        name: "GROWTH DIAGNOSTIC AUDIT",
        scope: "Comprehensive 48h Inspection",
        pricePlaceholder: "$0 Complimentary for Qualified Brands", // TODO: Confirm qualifying criteria for complimentary audits
        badge: "100% COMPLIMENTARY",
        desc: "A forensic inspection of your current search query logs, Buy-Box suppression risks, and checkout drop-off before signing any agreement.",
        includes: [
          "Full search & ad account forensics",
          "Marketplace listing health score",
          "Checkout speed & mobile latency audit",
          "90-day prioritized execution roadmap"
        ],
        accent: "emerald"
      }
    ]
  } = data || {};

  return (
    <section id="pricing" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-slate-200 items-end">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 inline-block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-grotesk font-black text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-slate-950">
              {headline}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-[50ch]">
              {subtext}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right font-sans text-xs font-bold text-indigo-600 uppercase tracking-wider">
            <span>[3 TRANSPARENT ENGAGEMENTS]</span>
          </div>
        </div>

        {/* 3 Pricing Packages with Vibrant Visual Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 items-stretch">
          {tiers.map((tier, idx) => {
            const isFeatured = tier.accent === 'featured';
            const isCyan = tier.accent === 'cyan';

            return (
              <div 
                key={idx}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all duration-300 relative ${
                  isFeatured 
                    ? 'bg-gradient-to-br from-[#090D26] via-[#0E153D] to-[#060818] text-white border-2 border-indigo-500 shadow-2xl shadow-indigo-500/25 lg:-translate-y-3' 
                    : 'bg-white text-slate-950 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-950 font-sans text-[11px] font-black uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className={`flex items-center justify-between pb-4 border-b ${isFeatured ? 'border-white/10' : 'border-slate-100'}`}>
                    <span className={`font-sans text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-indigo-300' : 'text-slate-400'}`}>
                      TIER [{tier.num}]
                    </span>
                    {!isFeatured && (
                      <span className={`font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                        isCyan ? 'bg-cyan-50 text-cyan-700 border border-cyan-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`font-grotesk font-black text-2xl uppercase tracking-tight ${isFeatured ? 'text-white' : 'text-slate-950'}`}>
                      {tier.name}
                    </h3>
                    <p className={`font-sans text-xs uppercase tracking-wider mt-1 ${isFeatured ? 'text-cyan-300' : 'text-indigo-600 font-bold'}`}>
                      {tier.scope}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className={`p-4 rounded-xl font-sans ${isFeatured ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                    <div className={`font-grotesk font-black text-xl sm:text-2xl ${isFeatured ? 'text-cyan-300' : 'text-slate-900'}`}>
                      {tier.pricePlaceholder}
                    </div>
                    <span className={`text-[11px] ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                      // Final quote scoped after initial telemetry audit
                    </span>
                  </div>

                  <p className={`font-sans text-xs sm:text-sm leading-relaxed ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.desc}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-3 pt-4">
                    {tier.includes.map((inc, iIdx) => (
                      <li key={iIdx} className={`flex items-start gap-2.5 font-sans text-xs sm:text-sm leading-snug ${isFeatured ? 'text-slate-200' : 'text-slate-700'}`}>
                        <span className={`font-bold ${isFeatured ? 'text-cyan-400' : 'text-indigo-600'}`}>
                          ✓
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <a
                    href="#audit"
                    className={`w-full py-3.5 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isFeatured 
                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black shadow-lg shadow-cyan-500/20' 
                        : 'bg-slate-950 text-white hover:bg-indigo-600'
                    }`}
                  >
                    <span>Select Tier</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
