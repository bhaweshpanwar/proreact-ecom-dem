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
        desc: "You collaborate directly with founders and senior practitioners who build and execute. No junior bait-and-switch."
      },
      {
        num: "02",
        title: "Direct WhatsApp & Slack Access",
        desc: "Instant, real-time communications. No support ticketing queues, no 72-hour delay answering urgent catalogue issues."
      },
      {
        num: "03",
        title: "No 12-Month Lock-In",
        desc: "We operate on performance trust. Clear month-to-month retainers after onboarding. We earn your partnership continuously."
      },
      {
        num: "04",
        title: "Weekly Net Contribution Reports",
        desc: "We report actual commercial revenue, margin, and blended ROAS. Zero vanity graphs designed to mask flat sales."
      }
    ]
  } = data || {};

  return (
    <section className="relative border-b border-[#E5E5E5] overflow-hidden">
      
      {/* Top Half: Huge Pull-Quote Statement on Solid Black Band */}
      <div className="bg-[#000000] text-[#FFFFFF] py-20 sm:py-28 px-4 sm:px-8 border-b border-[#262626]">
        <div className="w-full max-w-[1440px] mx-auto">
          <h2 className="font-grotesk font-bold text-[clamp(36px,6.5vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase">
            {pullQuoteBlack} <br />
            <span className="text-[#8A8A8A]">{pullQuoteGrey}</span>
          </h2>
        </div>
      </div>

      {/* Bottom Half: 4 Short Points on Solid Light-Grey Band (#F2F2F2) */}
      <div className="bg-[#F2F2F2] text-[#000000] py-16 sm:py-24 px-4 sm:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D9D9D9] border-t border-b border-[#D9D9D9]">
            {fourPoints.map((point, idx) => (
              <div 
                key={idx}
                className="py-8 sm:py-10 sm:px-8 first:pl-0 last:pr-0 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider">
                    ADVANTAGE [{point.num}]
                  </span>
                  <span className="font-sans text-xs font-bold text-[#000000]">
                    ✓
                  </span>
                </div>

                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-[#000000] leading-snug">
                  {point.title}
                </h3>

                <p className="font-grotesk text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
