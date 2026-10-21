import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SECTORS = [
  {
    id: 'marketplaces',
    name: 'Sector 01: Marketplaces',
    badge: 'COMMERCE ENGINE',
    title: 'Own the Digital Shelf Across Major Channels',
    desc: 'Complete catalogue synchronization, daily Buy-Box governance, Brand Registry protection, and algorithmic Sponsored Ads on Amazon, Flipkart, and Quick Commerce.',
    image: '/images/space/dark-card-market.jpg',
    capabilities: [
      'Amazon Brand Store & A+ Content',
      'Flipkart SuperCoins & Promotion Sync',
      'Algorithmic PPC & ROAS Bid Management',
      'Quick Commerce (Blinkit / Zepto) Launch'
    ],
    metric: '99.4%',
    metricLabel: 'Buy Box Protection Index',
    link: '/services/ecommerce-management'
  },
  {
    id: 'marketing',
    name: 'Sector 02: Performance Media',
    badge: 'ACQUISITION VELOCITY',
    title: 'High-Intent Customer Acquisition That Scales',
    desc: 'Precision search visibility, Meta Advantage+ funnels, and programmatic Google Ads designed around contribution margin and customer lifetime value.',
    image: '/images/space/dark-card-ads.jpg',
    capabilities: [
      'Google Search & Performance Max (PMax)',
      'Meta Precision Conversion Campaigns',
      'Technical SEO & Schema Architecture',
      'First-Party Conversion API (CAPI) Tracking'
    ],
    metric: '4.8x – 6.5x',
    metricLabel: 'Average Blended ROAS',
    link: '/services/digital-marketing'
  },
  {
    id: 'web',
    name: 'Sector 03: Web Architecture',
    badge: 'CONVERSION ARCHITECTURE',
    title: 'Fast, Headless Storefronts That Convert',
    desc: 'Modern Shopify Liquid and headless React architectures with sub-second page loads, conversion-optimized checkouts, and custom app integrations.',
    image: '/images/space/dark-card-web.jpg',
    capabilities: [
      'Custom Shopify Theme & Storefront Build',
      'Core Web Vitals Performance Optimization',
      'Checkout Funnel & Cart Drawer CRO',
      'ERP, WMS & Payment Gateway Sync'
    ],
    metric: '< 0.8s',
    metricLabel: 'Largest Contentful Paint (LCP)',
    link: '/services/web-development'
  },
  {
    id: 'creative',
    name: 'Sector 04: Cinema & Motion',
    badge: 'PRESTIGE ASSETS',
    title: 'Visual Assets That Demand Attention and Trust',
    desc: 'Commercial fashion photography, 3D CGI product renders, high-velocity Reels, and YouTube brand videos that elevate perceived market value.',
    image: '/images/space/dark-card-creative.jpg',
    capabilities: [
      'High-Resolution Studio & Model Shoots',
      '3D CGI Photorealistic Product Motion',
      'Short-Form Vertical Video Production',
      'Omni-Channel Brand Design Systems'
    ],
    metric: '12M+',
    metricLabel: 'Verified High-Intent Impressions',
    link: '/services/video-production-editing'
  }
];

export default function Home2StargateSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SECTORS[activeIdx];

  return (
    <section id="stargate" className="relative py-24 sm:py-36 bg-[#040711] text-white overflow-hidden">
      
      {/* Dynamic Cosmic Background Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {SECTORS.map((sec, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
            style={{
              opacity: activeIdx === idx ? 1 : 0
            }}
          >
            <img 
              src={sec.image} 
              alt={sec.title}
              className="w-full h-full object-cover scale-105"
              style={{
                filter: 'brightness(0.35) contrast(1.15) blur(10px)',
                transform: activeIdx === idx ? 'scale(1.05)' : 'scale(1.0)',
                transition: 'transform 2s ease-out'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#040711] via-black/40 to-[#040711]" />
          </div>
        ))}
        {/* Fine Star Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,rgba(4,7,17,0.9)_100%)]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Sector Dial Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-3">
              02 · The 4 Growth Stargates
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
              Select Your Next <br />
              <span className="italic bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Growth Frontier.
              </span>
            </h2>
          </div>

          {/* Interactive Sector Nav Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            {SECTORS.map((sec, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                0{idx + 1} // {sec.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Master Glassmorphic Sector Console */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-black/60 backdrop-blur-2xl border border-white/15 p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sector Briefing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-mono tracking-wider border border-cyan-500/30">
                {current.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                ACTIVE SECTOR 0{activeIdx + 1} / 04
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              {current.desc}
            </p>

            {/* Checklist of Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {current.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2.5 text-xs font-sans text-slate-200">
                  <span className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-6 flex items-center gap-6">
              <Link
                to={current.link}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-mono font-semibold hover:bg-cyan-200 transition-all hover:scale-105 shadow-md"
              >
                <span>Launch Sector Operations</span>
                <span>→</span>
              </Link>
              <div className="hidden sm:block">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">{current.metricLabel}</span>
                <span className="text-sm font-mono font-bold text-cyan-300">{current.metric}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage Showcase */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer">
              <img 
                src={current.image} 
                alt={current.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  REAL-TIME TELEMETRY ACTIVE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white">
                  0{activeIdx + 1} // PROTOCOL
                </span>
              </div>

              {/* Bottom Stat Card */}
              <div className="absolute bottom-5 left-5 right-5 z-10 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">{current.metricLabel}</span>
                  <span className="text-xl sm:text-2xl font-serif text-white font-normal">{current.metric}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Integration Window</span>
                  <span className="text-sm font-mono text-emerald-400 font-bold">14 Days Rapid Launch</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
