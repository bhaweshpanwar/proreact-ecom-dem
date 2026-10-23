import React, { useEffect, useRef, useState } from 'react';

export default function Home2SampleWork({ data }) {
  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

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

  // Triple set for seamless infinite looping
  const repeatedProjects = [...projects, ...projects, ...projects];

  // Continuous smooth auto-glide animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const step = () => {
      if (!isPausedRef.current && el) {
        const oneThird = el.scrollWidth / 3;
        el.scrollLeft += 0.65;
        if (oneThird > 0 && el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (oneThird > 0 && el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [projects]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleMouseEnterCard = (idx) => {
    isPausedRef.current = true;
    setHoveredIdx(idx);
  };

  const handleMouseLeaveCard = () => {
    isPausedRef.current = false;
    setHoveredIdx(null);
  };

  return (
    <section id="work" className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Header Row with Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626] mb-12">
          <div>
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,80px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-[50ch] leading-relaxed">
              {subtext}
            </p>
          </div>

          {/* Directional Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 border border-[#333333] hover:border-[#FFFFFF] bg-[#0A0A0A] hover:bg-[#FFFFFF] text-white hover:text-black flex items-center justify-center font-sans font-bold text-base transition-colors cursor-pointer"
              aria-label="Previous concept slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 border border-[#333333] hover:border-[#FFFFFF] bg-[#0A0A0A] hover:bg-[#FFFFFF] text-white hover:text-black flex items-center justify-center font-sans font-bold text-base transition-colors cursor-pointer"
              aria-label="Next concept slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track with Auto-Glide & Hover Expansion */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { 
            if (hoveredIdx === null) {
              isPausedRef.current = false; 
            }
          }}
          onTouchStart={() => { isPausedRef.current = true; }}
          onTouchEnd={() => { isPausedRef.current = false; }}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing items-stretch"
        >
          {repeatedProjects.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAnyHovered = hoveredIdx !== null;
            
            // Width & styling calculation:
            // When hovered: card widens to 480px / 540px.
            // When sibling hovered: card shrinks to 240px and softens opacity.
            // When no card hovered: uniform normal width 300px / 340px.
            const cardWidthClass = isHovered
              ? "w-[420px] sm:w-[500px] lg:w-[560px] opacity-100 z-10 border-[#FFFFFF] shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
              : isAnyHovered
                ? "w-[220px] sm:w-[250px] opacity-45 border-[#222222]"
                : "w-[290px] sm:w-[340px] opacity-100 border-[#262626]";

            return (
              <div
                key={idx}
                onMouseEnter={() => handleMouseEnterCard(idx)}
                onMouseLeave={handleMouseLeaveCard}
                className={`flex-shrink-0 ${cardWidthClass} transition-all duration-500 ease-out bg-[#0A0A0A] p-4 flex flex-col justify-between space-y-4 group cursor-pointer border`}
              >
                {/* Portrait Work Photo Frame */}
                <div className="relative aspect-[9/13] w-full overflow-hidden bg-[#111111]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#000000] text-[#FFFFFF] font-sans font-semibold text-[10px] px-2.5 py-0.5 uppercase tracking-wider border border-[#333333]">
                    {item.num} // SPEC
                  </div>
                </div>

                {/* Caption & Metadata Underneath */}
                <div className="space-y-2 pt-2">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-[#8A8A8A] font-semibold block">
                    {item.category}
                  </span>
                  <h3 className="font-grotesk font-bold text-lg text-[#FFFFFF] leading-snug group-hover:text-[#FFFFFF] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-grotesk text-xs text-[#A3A3A3] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-sans font-medium text-[9px] px-2 py-0.5 border border-[#262626] text-[#8A8A8A] uppercase tracking-wider">
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
