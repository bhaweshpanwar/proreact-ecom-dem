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
    { tag: "[D2C Wellness] — [Search visibility & marketplace launch]", img: "/assets/img1/Aurelis Skincare in Sunlit Stone.png" },
    { tag: "[Apparel Brand] — [Shopify architecture & checkout CRO]", img: "/assets/img1/shopify-flagship-store.png" },
    { tag: "[Home Essentials] — [Amazon catalogue & Sponsored Brands]", img: "/assets/img1/amazon-listing-aplus.png" },
    { tag: "[B2B Enterprise] — [High-intent pipeline & brand collateral]", img: "/assets/img1/search-performance-workspace.png" },
    { tag: "[Consumer Tech] — [Reels content & multi-channel launch]", img: "/assets/img1/reels-motion-film.png" }
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
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-space-950" 
            aria-label="Previous work slide"
          >
            ←
          </button>
          <button 
            type="button" 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-space-950" 
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
            <div key={idx} data-cursor="Drag" className="work-card flex-shrink-0 w-[280px] sm:w-[320px] snap-start group cursor-grab active:cursor-grabbing">
              <div className="aspect-[9/13] rounded-card bg-space-900 relative overflow-hidden mb-3 shadow-md">
                <img 
                  src={item.img} 
                  alt={item.tag} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <span className="text-xs font-mono text-slate-400">Portfolio Image</span>
                </div>
                {/* Visible Placeholder Badge */}
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-space-950/80 text-white text-[10px] font-mono backdrop-blur-sm">
                  Case Study
                </span>
                {/* Centered Play Circle */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-space-800">{item.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
