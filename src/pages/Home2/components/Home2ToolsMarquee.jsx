import React from 'react';

export default function Home2ToolsMarquee({ data }) {
  const {
    eyebrow = "08 / TECH STACK & PLATFORMS",
    headline = "Tools we operate with daily.",
    subtext = "Certified native practitioners across leading global commerce and growth engineering software.",
    tools = [
      { name: "Shopify Plus", category: "Storefront", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
      { name: "Amazon SP-API", category: "Marketplace", color: "text-amber-600 bg-amber-50 border-amber-200" },
      { name: "Google Ads", category: "Performance", color: "text-blue-600 bg-blue-50 border-blue-200" },
      { name: "Meta Ads Manager", category: "Conversion", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
      { name: "Flipkart Seller Hub", category: "Marketplace", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
      { name: "GA4 & BigQuery", category: "Telemetry", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
      { name: "Klaviyo CRM", category: "Retention", color: "text-rose-600 bg-rose-50 border-rose-200" },
      { name: "Semrush Pro", category: "SEO", color: "text-orange-600 bg-orange-50 border-orange-200" },
      { name: "Figma Studio", category: "Creative", color: "text-purple-600 bg-purple-50 border-purple-200" },
      { name: "JioMart Engine", category: "Commerce", color: "text-teal-600 bg-teal-50 border-teal-200" }
    ]
  } = data || {};

  const toolList = Array.isArray(tools) ? tools : [];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FFFFFF] text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 inline-block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-black text-2xl sm:text-4xl uppercase text-slate-950 tracking-tight">
            {headline}
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-[40ch] leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Marquee Ticker Row with Colorful Badges */}
      <div className="border-t border-b border-slate-200 py-6 bg-slate-50/70 overflow-hidden select-none">
        <div className="flex w-max animate-marquee space-x-8 whitespace-nowrap">
          {toolList.concat(toolList).map((tool, idx) => {
            const toolName = typeof tool === 'string' ? tool : tool.name;
            const category = typeof tool === 'object' ? tool.category : 'E-Com';
            const colorClass = typeof tool === 'object' && tool.color ? tool.color : 'text-slate-800 bg-white border-slate-200';

            return (
              <div 
                key={idx} 
                className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border shadow-xs transition-all hover:scale-105 ${colorClass}`}
              >
                <span className="font-grotesk font-bold text-base sm:text-lg uppercase tracking-wider">
                  {toolName}
                </span>
                <span className="font-sans text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/80 shadow-xs">
                  {category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid Overview with Clean Badges */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {toolList.slice(0, 10).map((tool, idx) => {
          const toolName = typeof tool === 'string' ? tool : tool.name;
          return (
            <div 
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 font-sans text-xs font-semibold text-slate-700 flex items-center justify-between shadow-xs transition-colors"
            >
              <span>{toolName}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          );
        })}
      </div>

    </section>
  );
}
