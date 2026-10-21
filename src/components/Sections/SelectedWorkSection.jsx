import React, { useRef } from 'react';

export default function SelectedWorkSection() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const amount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const workItems = [
    { 
      sector: "D2C Wellness", 
      metric: "+310%", 
      metricLabel: "Organic Revenue Compounding",
      deliverable: "Search visibility & marketplace launch",
      accent: "#2563EB",
      image: "/images/space/work-1.jpg"
    },
    { 
      sector: "Apparel & Fashion", 
      metric: "3.8x", 
      metricLabel: "Return on Ad Spend (ROAS)",
      deliverable: "Shopify architecture & checkout CRO",
      accent: "#3B82F6",
      image: "/images/space/work-2.jpg"
    },
    { 
      sector: "Home & Living", 
      metric: "#1 Bestseller", 
      metricLabel: "Category Market Share",
      deliverable: "Amazon catalogue & Sponsored Brands",
      accent: "#60A5FA",
      image: "/images/space/work-3.jpg"
    },
    { 
      sector: "B2B Enterprise", 
      metric: "-42%", 
      metricLabel: "Cost Per Qualified Acquisition",
      deliverable: "High-intent pipeline & brand collateral",
      accent: "#2563EB",
      image: "/images/space/work-4.jpg"
    },
    { 
      sector: "Consumer Electronics", 
      metric: "12M+", 
      metricLabel: "Verified Video Impressions",
      deliverable: "Commercial motion & multi-channel scale",
      accent: "#38BDF8",
      image: "/images/space/work-5.jpg"
    }
  ];

  return (
    <section id="selected-work" aria-labelledby="work-heading" className="relative py-16 sm:py-28 bg-white overflow-hidden">
      
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-sans text-space-600 uppercase tracking-widest block mb-2">Selected work</span>
          <h2 id="work-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-space-950 tracking-tight leading-tight">
            Work we're proud to build.
          </h2>
        </div>
        
        {/* Arrow Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button 
            type="button" 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#080B10] hover:text-white hover:border-[#080B10] transition-all text-space-950 cursor-pointer shadow-xs" 
            aria-label="Previous work slide"
          >
            ←
          </button>
          <button 
            type="button" 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#080B10] hover:text-white hover:border-[#080B10] transition-all text-space-950 cursor-pointer shadow-xs" 
            aria-label="Next work slide"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div 
          ref={carouselRef}
          id="work-carousel" 
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 cursor-grab select-none"
        >
          {workItems.map((item, idx) => (
            <div key={idx} className="work-card flex-shrink-0 w-[280px] sm:w-[320px] snap-start group cursor-pointer">
              
              {/* Intelligent Architectural Card (Cosmic Black Brand Primary with Photography) */}
              <div className="aspect-[9/13] rounded-card bg-[#080B10] text-white p-6 sm:p-7 relative overflow-hidden mb-3 shadow-lg flex flex-col justify-between border border-white/10 group-hover:border-slate-400 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer">
                
                {/* Background Space Photography & Cinematic Overlay */}
                <img 
                  src={item.image} 
                  alt={item.sector}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/75 to-[#080B10]/40 pointer-events-none" />

                {/* Background Subtle Geometric Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Top Row: Sector Pill & Index */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-slate-200 border border-white/15">
                    {item.sector}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Center Vector Infographic & Metrics */}
                <div className="relative z-10 my-auto py-6 space-y-4">
                  {/* Vector Growth Curve Graphic */}
                  <div className="w-full h-20 flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" fill="none">
                      <path 
                        d={`M0 50 Q 50 ${40 - idx * 5}, 100 ${30 - idx * 4} T 200 ${10 + (idx % 2) * 5}`} 
                        stroke="#FFFFFF" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        opacity="0.9"
                      />
                      <circle cx="200" cy={`${10 + (idx % 2) * 5}`} r="4" fill="#FFFFFF" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-serif text-3xl sm:text-4xl text-white font-normal block tracking-tight drop-shadow-sm">
                      {item.metric}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block mt-1">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Bottom Deliverable Summary */}
                <div className="relative z-10 pt-4 border-t border-white/15 backdrop-blur-xs">
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {item.deliverable}
                  </p>
                </div>

              </div>

              <p className="text-xs font-mono text-space-800">
                [{item.sector}] — [{item.deliverable}]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
