import React, { useRef } from 'react';

const WORK_ITEMS = [
  {
    sector: 'D2C Wellness & Nutrition',
    metric: '+310%',
    metricLabel: 'Organic Revenue Compounding',
    deliverable: 'Multi-marketplace launch, search console dominance & A+ storefront architecture',
    image: '/images/space/work-1.jpg',
    tag: 'SCALE PROTOCOL'
  },
  {
    sector: 'High-Fashion & Luxury Apparel',
    metric: '3.8x',
    metricLabel: 'Blended Return on Ad Spend (ROAS)',
    deliverable: 'Custom Shopify checkout CRO, Meta Advantage+ catalog funnels & brand cinema',
    image: '/images/space/work-2.jpg',
    tag: 'PERFORMANCE MEDIA'
  },
  {
    sector: 'Home & Architectural Living',
    metric: '#1 Rank',
    metricLabel: 'Category Market Share Dominance',
    deliverable: 'Amazon Sponsored Brands video, buy-box governance & quick commerce scaling',
    image: '/images/space/work-3.jpg',
    tag: 'MARKETPLACE SOVEREIGN'
  },
  {
    sector: 'B2B Industrial & Enterprise',
    metric: '-42%',
    metricLabel: 'Cost Per Qualified Customer Lead',
    deliverable: 'High-intent Google Ads search pipeline, technical SEO & custom landing engines',
    image: '/images/space/work-4.jpg',
    tag: 'CONVERSION ARCHITECTURE'
  },
  {
    sector: 'Consumer Tech & Smart Audio',
    metric: '12M+',
    metricLabel: 'Verified High-Intent Impressions',
    deliverable: 'Cinema-grade 3D product motion, YouTube commercial strategy & social scaling',
    image: '/images/space/work-5.jpg',
    tag: 'CINEMA MOTION'
  }
];

export default function Home2StellarWorkSection() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const amount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="relative py-24 sm:py-36 bg-[#030612] text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            04 · Stellar Trajectories
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
            Proof Built In <br />
            <span className="italic bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">
              High-Stakes Arenas.
            </span>
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-white/20 hover:border-cyan-400 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Previous work"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-white/20 hover:border-cyan-400 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
            aria-label="Next work"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 cursor-grab select-none"
        >
          {WORK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[300px] sm:w-[350px] snap-start group cursor-pointer"
            >
              {/* Card Container */}
              <div className="aspect-[9/13] rounded-[28px] sm:rounded-[32px] bg-[#0A0F1F] border border-white/15 group-hover:border-cyan-400/60 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:shadow-[0_25px_60px_rgba(34,211,238,0.2)] transition-all duration-500 group-hover:-translate-y-1.5">
                
                {/* Background Space Image & Contrast Gradient */}
                <img 
                  src={item.image} 
                  alt={item.sector}
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/70 to-[#0A0F1F]/40 pointer-events-none" />

                {/* Top Row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-wider text-cyan-300">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Center Vector Graph & Big Metric */}
                <div className="relative z-10 my-auto py-4 space-y-4">
                  {/* SVG Vector Curve */}
                  <div className="w-full h-20 flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" fill="none">
                      <path 
                        d={`M0 50 Q 50 ${40 - idx * 5}, 100 ${28 - idx * 3} T 200 ${10 + (idx % 2) * 5}`} 
                        stroke="#22D3EE" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                        opacity="0.9"
                      />
                      <circle cx="200" cy={`${10 + (idx % 2) * 5}`} r="4" fill="#22D3EE" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-serif text-4xl sm:text-5xl text-white font-normal block tracking-tight drop-shadow-md">
                      {item.metric}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mt-1">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Bottom Deliverable Description */}
                <div className="relative z-10 pt-4 border-t border-white/15">
                  <span className="text-xs font-mono text-cyan-300 block mb-1">
                    {item.sector}
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.deliverable}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
