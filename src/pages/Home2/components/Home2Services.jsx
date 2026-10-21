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
        link: "/services/ecommerce-management"
      },
      {
        num: "02",
        title: "Performance Marketing & SEO",
        tag: "GOOGLE ADS · META · TECHNICAL SEO",
        desc: "High-intent Google Search, Meta Advantage+ conversion funnels, and organic search architecture focused strictly on contribution margin and CAC efficiency.",
        image: "/images/space/dark-card-ads.jpg",
        link: "/services/digital-marketing"
      },
      {
        num: "03",
        title: "Web & App Development",
        tag: "SHOPIFY LIQUID · HEADLESS · CRO",
        desc: "Sub-second storefront architecture, custom Shopify theme engineering, checkout drop-off elimination, and automated ERP integrations.",
        image: "/images/space/dark-card-web.jpg",
        link: "/services/web-development"
      },
      {
        num: "04",
        title: "Creative & Brand Cinema",
        tag: "STUDIO SHOOTS · 3D CGI · VIDEO",
        desc: "Commercial e-commerce photography, 3D CGI photorealistic product models, and high-velocity short-form motion that elevate perceived market value.",
        image: "/images/space/dark-card-creative.jpg",
        link: "/services/creative-design"
      },
      {
        num: "05",
        title: "Growth & Analytics",
        tag: "FIRST-PARTY DATA · CAPI · GA4",
        desc: "Clean telemetry dashboards, conversion API tracking, customer LTV models, and weekly unit economic audits to scale without burning margin.",
        image: "/images/space/goals-galaxy.jpg",
        link: "/services/integrated-solutions"
      }
    ]
  } = data || {};

  return (
    <section id="services" className="relative py-20 sm:py-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[#262626] items-end">
          <div className="lg:col-span-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block">
              {eyebrow}
            </span>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-grotesk font-bold text-[clamp(36px,5.5vw,90px)] leading-[0.94] tracking-[-0.035em] uppercase text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-[50ch]">
              {subtext}
            </p>
          </div>
          <div className="lg:col-span-3 lg:text-right font-sans text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider">
            <span>[05 SOVEREIGN CAPABILITIES]</span>
          </div>
        </div>

        {/* 5 Big Numbered Rows (Hover fills with Space Image) */}
        <div className="divide-y divide-[#262626] border-b border-[#262626]">
          {services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="group relative py-8 sm:py-12 transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                {/* Active Background Space Image Reveal on Hover (Full Rich Color) */}
                <div 
                  className={`absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-45' : 'opacity-0'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-black/50 to-[#000000]/90" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <span className="font-sans text-2xl sm:text-4xl text-[#8A8A8A] group-hover:text-[#FFFFFF] transition-colors font-bold tracking-tight">
                      [{item.num}]
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold block">
                      {item.tag}
                    </span>
                    <h3 className="font-grotesk font-bold text-2xl sm:text-4xl text-[#FFFFFF] group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] group-hover:text-[#FFFFFF] transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow Link */}
                  <div className="lg:col-span-1 lg:text-right">
                    <Link
                      to={item.link}
                      className="inline-flex w-10 h-10 border border-[#333333] group-hover:border-[#FFFFFF] items-center justify-center text-sm font-sans font-bold text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-[#000000] transition-all"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      →
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
