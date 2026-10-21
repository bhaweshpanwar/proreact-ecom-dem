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
    <section id="faq" className="relative py-20 sm:py-32 bg-[#FFFFFF] text-slate-950 border-b border-slate-200 overflow-hidden">
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
            <span>[05 DIRECT POLICIES]</span>
          </div>
        </div>

        {/* Clean Modern Accordion List */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`py-6 sm:py-8 cursor-pointer select-none group transition-colors px-4 rounded-xl ${
                  isOpen ? 'bg-indigo-50/30' : 'hover:bg-slate-50/60'
                }`}
                onClick={() => toggle(idx)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className={`font-sans text-xs sm:text-sm font-bold pt-1 px-2.5 py-0.5 rounded-md ${
                      isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className={`font-grotesk font-bold text-lg sm:text-xl transition-colors ${
                        isOpen ? 'text-indigo-950' : 'text-slate-900 group-hover:text-indigo-600'
                      }`}>
                        {faq.q}
                      </h3>
                      {isOpen && (
                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-[70ch]">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-sans text-sm font-bold transition-transform ${
                    isOpen ? 'bg-indigo-600 text-white border-indigo-600 rotate-45' : 'border-slate-300 text-slate-600'
                  }`}>
                    +
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
