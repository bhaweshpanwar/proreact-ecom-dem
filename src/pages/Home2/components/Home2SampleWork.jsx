import React, { useRef } from 'react';

export default function Home2SampleWork({ data }) {
  const scrollRef = useRef(null);

  const {
    eyebrow = "09 / CONCEPT PORTFOLIO",
    headline = "Sample Work (Concept Projects).",
    subtext = "Explicitly labelled as conceptual frameworks. Demonstrating our technical methodology and aesthetic standards across key sectors.",
    projects = [
      {
        num: "CONCEPT 01",
        category: "D2C HEALTH & NUTRITION",
        title: "Multi-Marketplace Synchronization",
        desc: "Unified catalogue architecture, Amazon Brand Store overhaul, and high-intent keyword capture models.",
        image: "/images/space/work-1.jpg",
        tags: ["AMAZON", "CATALOGUE", "BUY-BOX"],
        color: "amber"
      },
      {
        num: "CONCEPT 02",
        category: "HIGH-FASHION & APPAREL",
        title: "Headless Shopify & Checkout CRO",
        desc: "Sub-second mobile loading speed, cart drawer conversion triggers, and Meta Advantage+ catalogue funnels.",
        image: "/images/space/work-2.jpg",
        tags: ["SHOPIFY", "META ADS", "CRO"],
        color: "rose"
      },
      {
        num: "CONCEPT 03",
        category: "ARCHITECTURAL HOME LIVING",
        title: "Category Market Share Dominance",
        desc: "Sponsored Brands video architecture, competitor Buy-Box monitoring, and organic search ranking.",
        image: "/images/space/work-3.jpg",
        tags: ["SPONSORED ADS", "VIDEO", "SEO"],
        color: "cyan"
      },
      {
        num: "CONCEPT 04",
        category: "B2B INDUSTRIAL SUPPLY",
        title: "High-Intent Qualified Pipeline",
        desc: "Google Search bottom-funnel keyword bidding, CRM tracking hooks, and conversion landing page models.",
        image: "/images/space/work-4.jpg",
        tags: ["GOOGLE ADS", "B2B PIPELINE", "CAPI"],
        color: "indigo"
      },
      {
        num: "CONCEPT 05",
        category: "CONSUMER HARDWARE & TECH",
        title: "3D CGI Commercial Product Motion",
        desc: "Photorealistic 3D rendering, feature breakdown animations, and short-form launch creative.",
        image: "/images/space/work-5.jpg",
        tags: ["3D CGI", "MOTION", "CINEMA"],
        color: "purple"
      }
    ]
  } = data || {};

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="relative py-20 sm:py-32 bg-[#040612] text-[#FFFFFF] border-b border-indigo-950/70 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header Row with Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 mb-12">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block mb-3">
              {eyebrow}
            </span>
            <h2 className="font-grotesk font-black text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 mt-3 max-w-[50ch] leading-relaxed">
              {subtext}
            </p>
          </div>

          {/* Directional Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 font-sans font-bold text-lg flex items-center justify-center transition-all duration-200"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 font-sans font-bold text-lg flex items-center justify-center transition-all duration-200"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        >
          {projects.map((item, idx) => {
            const isAmber = item.color === 'amber';
            const isRose = item.color === 'rose';
            const isCyan = item.color === 'cyan';
            const isIndigo = item.color === 'indigo';

            return (
              <div 
                key={idx}
                className="flex-shrink-0 w-[300px] sm:w-[360px] rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/40 p-3 flex flex-col justify-between transition-all duration-300 group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 mb-5">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Badge: Explicit Concept Tag */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 text-cyan-300 font-sans font-bold text-[10px] px-3 py-1 rounded-md border border-cyan-500/30 uppercase tracking-wider backdrop-blur-md">
                    {item.num}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-slate-300 font-sans text-xs">
                    <span className={`font-bold block uppercase text-[11px] mb-1 ${
                      isAmber ? 'text-amber-400' :
                      isRose ? 'text-rose-400' :
                      isCyan ? 'text-cyan-400' :
                      isIndigo ? 'text-indigo-400' :
                      'text-purple-400'
                    }`}>
                      {item.category}
                    </span>
                    <span className="font-grotesk font-bold text-white text-base leading-tight block">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Details & Tags */}
                <div className="space-y-4 px-2 pb-2">
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {item.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded font-sans text-[10px] font-bold uppercase bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
