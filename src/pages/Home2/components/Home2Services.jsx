import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home2Services({ data }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const {
    eyebrow = "03 / FIVE ORBITS",
    headline = "One team, five orbits.",
    subtext = "Every capability required to scale commercial revenue online, aligned under one sovereign technical standard.",
    services = [
      {
        num: "01",
        title: "Marketplace Management",
        tag: "AMAZON · FLIPKART · QUICK COMMERCE",
        desc: "Catalogue onboarding, daily Buy-Box governance, Sponsored Ads, and algorithmic pricing compliance across major Indian and global marketplaces.",
        image: "/images/space/card-marketplace.jpg",
        link: "/services/ecommerce-management",
        accent: "amber",
        accentHex: "#F59E0B"
      },
      {
        num: "02",
        title: "Performance Marketing & SEO",
        tag: "GOOGLE ADS · META · TECHNICAL SEO",
        desc: "High-intent Google Search, Meta Advantage+ conversion funnels, and organic search architecture focused strictly on contribution margin and CAC efficiency.",
        image: "/images/space/dark-card-ads.jpg",
        link: "/services/digital-marketing",
        accent: "rose",
        accentHex: "#F43F5E"
      },
      {
        num: "03",
        title: "Web & App Development",
        tag: "SHOPIFY LIQUID · HEADLESS · CRO",
        desc: "Sub-second storefront architecture, custom Shopify theme engineering, checkout drop-off elimination, and automated ERP integrations.",
        image: "/images/space/dark-card-web.jpg",
        link: "/services/web-development",
        accent: "cyan",
        accentHex: "#00B4D8"
      },
      {
        num: "04",
        title: "Creative & Brand Cinema",
        tag: "STUDIO SHOOTS · 3D CGI · VIDEO",
        desc: "Commercial e-commerce photography, 3D CGI photorealistic product models, and high-velocity short-form motion that elevate perceived market value.",
        image: "/images/space/dark-card-creative.jpg",
        link: "/services/creative-design",
        accent: "purple",
        accentHex: "#A855F7"
      },
      {
        num: "05",
        title: "Growth & Analytics",
        tag: "FIRST-PARTY DATA · CAPI · GA4",
        desc: "Clean telemetry dashboards, conversion API tracking, customer LTV models, and weekly unit economic audits to scale without burning margin.",
        image: "/images/space/goals-galaxy.jpg",
        link: "/services/integrated-solutions",
        accent: "emerald",
        accentHex: "#10B981"
      }
    ]
  } = data || {};

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-[#050713] text-[#FFFFFF] border-b border-indigo-950/70 overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-white/10 items-end">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-grotesk font-black text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-[50ch]">
              {subtext}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span className="text-cyan-400 font-bold">[05 SOVEREIGN CAPABILITIES]</span>
          </div>
        </div>

        {/* 5 Big Numbered Rows with Interactive Space Visuals and Color Badges */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            const isAmber = item.accent === 'amber';
            const isRose = item.accent === 'rose';
            const isCyan = item.accent === 'cyan';
            const isPurple = item.accent === 'purple';
            const isEmerald = item.accent === 'emerald';

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group relative py-8 sm:py-12 transition-all duration-300 cursor-pointer overflow-hidden rounded-xl ${
                  isHovered ? 'bg-white/[0.03]' : ''
                }`}
              >
                {/* Active Background Space Image Reveal on Hover with Color Gradient */}
                <div 
                  className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${
                    isHovered ? 'opacity-30 scale-100' : 'opacity-0 scale-98'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    isAmber ? 'from-amber-950/80 via-black/80 to-transparent' :
                    isRose ? 'from-rose-950/80 via-black/80 to-transparent' :
                    isCyan ? 'from-cyan-950/80 via-black/80 to-transparent' :
                    isPurple ? 'from-purple-950/80 via-black/80 to-transparent' :
                    'from-emerald-950/80 via-black/80 to-transparent'
                  }`} />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-4">
                  
                  {/* Step Number with Color Accent */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className={`font-grotesk font-black text-4xl sm:text-5xl transition-colors duration-300 ${
                      isHovered ? (
                        isAmber ? 'text-amber-400' :
                        isRose ? 'text-rose-400' :
                        isCyan ? 'text-cyan-400' :
                        isPurple ? 'text-purple-400' :
                        'text-emerald-400'
                      ) : 'text-slate-600'
                    }`}>
                      {item.num}
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isHovered ? (
                        isAmber ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]' :
                        isRose ? 'bg-rose-400 shadow-[0_0_8px_#f43f5e]' :
                        isCyan ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' :
                        isPurple ? 'bg-purple-400 shadow-[0_0_8px_#c084fc]' :
                        'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                      ) : 'bg-transparent'
                    }`} />
                  </div>

                  {/* Title & Tag */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className={`inline-block font-sans text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                      isAmber ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' :
                      isRose ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                      isCyan ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' :
                      isPurple ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30' :
                      'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {item.tag}
                    </span>
                    <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-200 transition-colors uppercase">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Direct Link Arrow Button */}
                  <div className="lg:col-span-1 lg:text-right">
                    <Link
                      to={item.link}
                      aria-label={`Explore ${item.title}`}
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 border ${
                        isHovered ? (
                          isAmber ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30' :
                          isRose ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/30' :
                          isCyan ? 'bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30' :
                          isPurple ? 'bg-purple-500 text-white border-purple-400 shadow-lg shadow-purple-500/30' :
                          'bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/30'
                        ) : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <span className="font-sans font-bold text-lg leading-none">→</span>
                    </Link>
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
