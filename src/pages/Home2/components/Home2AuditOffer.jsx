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
    <section id="audit" className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#262626] mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
          </div>
          <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] max-w-[48ch] leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Master Split Block (Image on Left, Solid Black Block on Right with Full-Width Action Bar at Bottom) */}
        <div className="border border-[#333333] bg-[#0A0A0A] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Half: Space Image (Full Color) */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[500px] border-b lg:border-b-0 lg:border-r border-[#262626] overflow-hidden bg-[#000000]">
              <img
                src={image}
                alt="Orbital Satellite Observation - Free Growth Audit"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[10px] sm:text-[11px] px-3 py-1 uppercase tracking-wider border border-[#333333]">
                48-HOUR TURNAROUND · COMPLIMENTARY
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#000000]/85 p-3 border border-[#262626] font-sans font-semibold text-xs text-[#A3A3A3] flex justify-between tracking-wider">
                <span>QUALIFIED BRANDS ONLY</span>
                <span className="text-[#FFFFFF]">ZERO SALES PRESSURE</span>
              </div>
            </div>

            {/* Right Half: Solid Black Block Listing What the Audit Includes */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 bg-[#0A0A0A]">
              <div className="space-y-6">
                <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block">
                  [AUDIT DELIVERABLES CHECKLIST]
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {auditFeatures.map((feat, idx) => (
                    <div key={idx} className="space-y-2 border-l border-[#333333] pl-4">
                      <span className="font-sans text-[11px] text-[#8A8A8A] block font-semibold">
                        0{idx + 1} // CRITICAL AREA
                      </span>
                      <h3 className="font-grotesk font-bold text-base sm:text-lg text-[#FFFFFF]">
                        {feat.title}
                      </h3>
                      <p className="font-grotesk text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#262626] flex items-center justify-between font-sans text-xs text-[#8A8A8A] font-semibold tracking-wider">
                <span>NO PASSWORDS REQUIRED (READ-ONLY ACCESS)</span>
                <span>CONFIDENTIALITY GUARANTEED</span>
              </div>
            </div>

          </div>

          {/* Full-Width Rectangular Bottom Action Bar */}
          <a
            href="#final-cta"
            className="w-full py-5 sm:py-6 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-sm sm:text-base font-bold uppercase tracking-wider transition-colors flex items-center justify-between px-6 sm:px-12 border-t border-[#333333]"
          >
            <span>Request Your Free Growth Audit Today</span>
            <span className="text-xl sm:text-2xl">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}
