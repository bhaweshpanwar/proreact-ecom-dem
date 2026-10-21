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
        ]
      },
      {
        num: "02",
        name: "MONTHLY GROWTH RETAINER",
        scope: "Dedicated Multi-Channel Pod",
        pricePlaceholder: "Starting from ₹1,20,000/mo", // TODO: Update with finalized monthly retainer tiers
        badge: "MONTH-TO-MONTH PERFORMANCE",
        desc: "A dedicated senior team managing daily marketplace Buy-Box algorithms, Google & Meta ads, creative iterations, and weekly reporting.",
        includes: [
          "Daily marketplace & ad bid governance",
          "Continuous creative motion & listing updates",
          "Direct founder Slack / WhatsApp line",
          "Weekly net contribution margin reports"
        ]
      },
      {
        num: "03",
        name: "GROWTH DIAGNOSTIC AUDIT",
        scope: "Comprehensive 48h Inspection",
        pricePlaceholder: "Complimentary for Qualified Brands", // TODO: Confirm qualifying criteria for complimentary audits
        badge: "NO OBLIGATION",
        desc: "A forensic inspection of your current search query logs, Buy-Box suppression risks, and checkout drop-off before signing any agreement.",
        includes: [
          "Full search & ad account forensics",
          "Marketplace listing health score",
          "Checkout speed & mobile latency audit",
          "90-day prioritized execution roadmap"
        ]
      }
    ]
  } = data || {};

  return (
    <section id="pricing" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#E5E5E5] items-end">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#666666] leading-relaxed max-w-[50ch]">
              {subtext}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right font-mono text-xs text-[#8A8A8A] uppercase">
            <span>[3 TRANSPARENT ENGAGEMENTS]</span>
          </div>
        </div>

        {/* 3 Flat Monochrome Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#FFFFFF] hover:bg-[#F9F9F9] transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
                  <span className="font-mono text-xs uppercase text-[#8A8A8A]">
                    TIER [{tier.num}]
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 border border-[#CCCCCC] text-[#000000] uppercase font-bold">
                    {tier.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-grotesk font-bold text-xl sm:text-2xl text-[#000000] uppercase">
                    {tier.name}
                  </h3>
                  <span className="font-mono text-xs text-[#8A8A8A] block">
                    {tier.scope}
                  </span>
                </div>

                {/* Price Line marked with // TODO */}
                <div className="py-4 border-y border-[#E5E5E5]">
                  <span className="font-grotesk font-bold text-2xl sm:text-3xl text-[#000000] block">
                    {tier.pricePlaceholder}
                  </span>
                  <span className="font-mono text-[10px] text-[#8A8A8A] uppercase">
                    *Exact scope tailored during audit // TODO
                  </span>
                </div>

                <p className="font-grotesk text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {tier.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-[10px] uppercase text-[#8A8A8A] tracking-wider block">
                    SCOPE INCLUSIONS:
                  </span>
                  <ul className="space-y-2 font-grotesk text-xs text-[#333333]">
                    {tier.includes.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="font-mono text-[#000000] font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#final-cta"
                className="w-full py-3.5 bg-[#000000] hover:bg-[#262626] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-wider text-center transition-colors block"
              >
                Inquire About {tier.name} →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
