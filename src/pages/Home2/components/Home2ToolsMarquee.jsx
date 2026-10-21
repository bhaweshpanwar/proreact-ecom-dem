import React from 'react';

export default function Home2ToolsMarquee({ data }) {
  const {
    eyebrow = "08 / TECH STACK & PLATFORMS",
    headline = "Tools we operate with daily.",
    subtext = "Text-only verification. We work natively inside standard enterprise growth and commerce software.",
    tools = [
      "Shopify",
      "Amazon Seller Central",
      "Google Ads",
      "Meta Ads Manager",
      "Flipkart Seller Hub",
      "Google Analytics 4",
      "Google Search Console",
      "WordPress",
      "Klaviyo",
      "Semrush",
      "Figma",
      "JioMart Seller Engine"
    ]
  } = data || {};

  return (
    <section className="relative py-16 sm:py-24 bg-[#FFFFFF] text-[#000000] border-b border-[#E5E5E5] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-bold text-2xl sm:text-4xl uppercase text-[#000000] tracking-tight">
            {headline}
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8A8A8A] uppercase max-w-[40ch]">
          {subtext}
        </p>
      </div>

      {/* Marquee Ticker Row (Double Track for Seamless Loop) */}
      <div className="border-t border-b border-[#E5E5E5] py-5 bg-[#F9F9F9] overflow-hidden select-none">
        <div className="flex w-max animate-marquee space-x-12 whitespace-nowrap font-grotesk font-bold text-xl sm:text-2xl uppercase tracking-wider text-[#000000]">
          {tools.concat(tools).map((tool, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="hover:text-[#8A8A8A] transition-colors">{tool}</span>
              <span className="text-[#CCCCCC] font-mono text-xs select-none">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Fallback / Multi-platform Overview */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {tools.slice(0, 6).map((tool, idx) => (
          <div 
            key={idx}
            className="p-3 border border-[#E5E5E5] bg-[#FFFFFF] font-mono text-xs uppercase text-[#555555] flex items-center justify-between"
          >
            <span>{tool}</span>
            <span className="text-[#8A8A8A]">0{idx + 1}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
