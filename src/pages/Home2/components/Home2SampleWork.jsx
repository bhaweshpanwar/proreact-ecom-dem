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
        tags: ["AMAZON", "CATALOGUE", "BUY-BOX"]
      },
      {
        num: "CONCEPT 02",
        category: "HIGH-FASHION & APPAREL",
        title: "Headless Shopify & Checkout CRO",
        desc: "Sub-second mobile loading speed, cart drawer conversion triggers, and Meta Advantage+ catalogue funnels.",
        image: "/images/space/work-2.jpg",
        tags: ["SHOPIFY", "META ADS", "CRO"]
      },
      {
        num: "CONCEPT 03",
        category: "ARCHITECTURAL HOME LIVING",
        title: "Category Market Share Dominance",
        desc: "Sponsored Brands video architecture, competitor Buy-Box monitoring, and organic search ranking.",
        image: "/images/space/work-3.jpg",
        tags: ["SPONSORED ADS", "VIDEO", "SEO"]
      },
      {
        num: "CONCEPT 04",
        category: "B2B INDUSTRIAL SUPPLY",
        title: "High-Intent Qualified Pipeline",
        desc: "Google Search bottom-funnel keyword bidding, CRM tracking hooks, and conversion landing page models.",
        image: "/images/space/work-4.jpg",
        tags: ["GOOGLE ADS", "B2B PIPELINE", "CAPI"]
      },
      {
        num: "CONCEPT 05",
        category: "CONSUMER HARDWARE & TECH",
        title: "3D CGI Commercial Product Motion",
        desc: "Photorealistic 3D rendering, feature breakdown animations, and short-form launch creative.",
        image: "/images/space/work-5.jpg",
        tags: ["3D CGI", "MOTION", "CINEMA"]
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
    <section id="work" className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header Row with Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626] mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] block mb-2">
              {eyebrow}
            </span>
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-[50ch] leading-relaxed">
              {subtext}
            </p>
          </div>

          {/* Directional Controls (Square Editorial Style) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 border border-[#333333] hover:border-[#FFFFFF] bg-[#0A0A0A] hover:bg-[#FFFFFF] text-white hover:text-black flex items-center justify-center font-mono text-base transition-colors cursor-pointer"
              aria-label="Previous concept slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 border border-[#333333] hover:border-[#FFFFFF] bg-[#0A0A0A] hover:bg-[#FFFFFF] text-white hover:text-black flex items-center justify-center font-mono text-base transition-colors cursor-pointer"
              aria-label="Next concept slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6"
        >
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[290px] sm:w-[340px] snap-start border border-[#262626] bg-[#0A0A0A] p-4 flex flex-col justify-between space-y-4 hover:border-[#666666] transition-colors group cursor-pointer"
            >
              {/* Tall Portrait Space Photo Frame */}
              <div className="relative aspect-[9/13] w-full overflow-hidden bg-[#111111]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#000000] text-[#FFFFFF] font-mono text-[10px] px-2.5 py-0.5 uppercase border border-[#333333]">
                  {item.num} // SPEC
                </div>
              </div>

              {/* Caption & Metadata Underneath (Exact Match to Reference Style) */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A8A8A] block">
                  {item.category}
                </span>
                <h3 className="font-grotesk font-bold text-lg text-[#FFFFFF] leading-snug group-hover:text-[#E5E5E5] transition-colors">
                  {item.title}
                </h3>
                <p className="font-grotesk text-xs text-[#A3A3A3] leading-relaxed">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="font-mono text-[9px] px-2 py-0.5 border border-[#262626] text-[#8A8A8A] uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
