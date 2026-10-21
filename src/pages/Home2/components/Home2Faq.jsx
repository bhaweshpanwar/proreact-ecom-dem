import React, { useState } from 'react';

export default function Home2Faq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  const {
    eyebrow = "11 / FREQUENTLY ASKED QUESTIONS",
    headline = "Clear answers. Direct terms.",
    subtext = "Everything you need to know about our scope, coordination, contract lengths, and team structure.",
    faqs = [
      {
        q: "How fast can we get started with E-Comet?",
        a: "We initiate with the 48-Hour Growth Diagnostic Audit upon receiving read-only access. Once the roadmap and scope are approved, onboarding takes less than 5 business days to launch the first phase."
      },
      {
        q: "Do we have to sign a long-term contract?",
        a: "No. After an initial 30-day onboarding foundation period, our retainers operate on a flexible month-to-month basis with a 30-day notice. We earn your partnership every single month through measurable net contribution."
      },
      {
        q: "How do you coordinate across marketplaces and ads?",
        a: "All four core practice areas—marketplaces, performance ads, storefront engineering, and creative—work within one single room under one technical director. When an ad budget scales, the marketplace inventory and catalogue teams are automatically synchronized."
      },
      {
        q: "Who actually works on our account?",
        a: "Direct specialists and senior practitioners. We do not use the legacy agency model of pitching with founders and passing your brand to junior graduates. You communicate directly with the individuals building your campaigns."
      },
      {
        q: "What access do you need to begin the audit?",
        a: "Only read-only permissions to your primary ad accounts (Google Ads, Meta Ads Manager) and your marketplace dashboards (Amazon Seller Central, Flipkart). We never ask for admin passwords or financial withdrawal rights."
      }
    ]
  } = data || {};

  return (
    <section id="faq" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#E5E5E5] items-end">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9 space-y-4">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#000000]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#666666] leading-relaxed max-w-[55ch]">
              {subtext}
            </p>
          </div>
        </div>

        {/* Flat Accordion List with 1px Rules and +/- Icons */}
        <div className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="py-6 sm:py-8 cursor-pointer select-none group"
                onClick={() => toggle(idx)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 sm:gap-8">
                    <span className="font-sans text-xs sm:text-sm text-[#8A8A8A] font-bold pt-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-grotesk font-bold text-lg sm:text-2xl text-[#000000] group-hover:text-[#555555] transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  {/* +/- Indicator */}
                  <span className="w-8 h-8 border border-[#CCCCCC] group-hover:border-[#000000] flex items-center justify-center font-sans text-base font-bold text-[#000000] flex-shrink-0 transition-colors">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {isOpen && (
                  <div className="pt-4 pl-8 sm:pl-14 max-w-[65ch]">
                    <p className="font-grotesk text-sm sm:text-base text-[#555555] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
