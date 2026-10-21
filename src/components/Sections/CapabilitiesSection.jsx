import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState('marketing');
  const tabsContainerRef = useRef(null);
  const tabBtnsRef = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const contentPaneRef = useRef(null);
  const sectionRef = useRef(null);

  const tabs = [
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'marketplaces', label: 'Marketplaces' },
    { id: 'websites', label: 'Websites' },
    { id: 'creative', label: 'Creative' },
  ];

  // Update sliding pill position
  useEffect(() => {
    const btn = tabBtnsRef.current[activeTab];
    const container = tabsContainerRef.current;
    if (btn && container) {
      const btnRect = btn.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - parentRect.left,
        width: btnRect.width,
        opacity: 1
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const onResize = () => {
      const btn = tabBtnsRef.current[activeTab];
      const container = tabsContainerRef.current;
      if (btn && container) {
        const btnRect = btn.getBoundingClientRect();
        const parentRect = container.getBoundingClientRect();
        setPillStyle({
          left: btnRect.left - parentRect.left,
          width: btnRect.width,
          opacity: 1
        });
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeTab]);

  useEffect(() => {
    if (contentPaneRef.current) {
      gsap.fromTo(contentPaneRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.08 }
      );
    }
  }, [activeTab]);

  return (
    <section 
      ref={sectionRef} 
      id="capabilities" 
      aria-labelledby="services-heading"
      className="relative py-20 sm:py-32 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Container Wrapper - White */}
        <div className="rounded-[2.5rem] bg-white p-6 sm:p-12 lg:p-16 border border-stone-200/90 shadow-xs">

          {/* Section Header - Left Aligned */}
          <div className="text-left max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-sans text-space-600 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-space-950 tracking-tight leading-tight">
              For everything your growth needs.
            </h2>
          </div>

          {/* Pill Tab Switcher with Sliding Indicator - Left Aligned */}
          <div className="flex items-center justify-start mb-14 sm:mb-20">
            <div 
              ref={tabsContainerRef}
              role="tablist" 
              className="relative inline-flex items-center p-1.5 rounded-full bg-[#FAFAFA] border border-stone-200/90 shadow-2xs overflow-x-auto max-w-full no-scrollbar"
            >
              {/* Sliding Indicator Pill (Cosmic Black) */}
              <div 
                className="absolute top-1.5 bottom-1.5 bg-[#080B10] rounded-full transition-all duration-300 ease-out z-0 pointer-events-none"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                  opacity: pillStyle.opacity
                }}
              />

              {tabs.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => (tabBtnsRef.current[tab.id] = el)}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 select-none cursor-pointer ${
                      isSelected ? 'text-white' : 'text-space-800 hover:text-space-950'
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panes Container */}
          <div ref={contentPaneRef} className="relative min-h-[500px]">
            
            {/* Pane 1: Digital Marketing */}
            {activeTab === 'marketing' && (
              <div className="space-y-14 animate-fadeIn">
                
                {/* SEO */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">ORGANIC TELEMETRY</span>
                      <h4 className="font-serif text-2xl text-white">High-Intent SERP Dominance</h4>
                      <p className="text-xs text-slate-400">Position #1 tracking across 450+ transactional search terms.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">ORGANIC CLICKS</span>
                        <span className="text-lg font-bold text-white">+280%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">AVG POSITION</span>
                        <span className="text-lg font-bold text-blue-400">1.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Be found on Google.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">SEO, local SEO, technical SEO and keyword research that put you in front of people already searching.</p>
                      <Link to="/services/seo" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Paid Ads */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">AUCTION BIDDING ENGINE</span>
                      <h4 className="font-serif text-2xl text-white">Full-Funnel Ad Optimization</h4>
                      <p className="text-xs text-slate-400">Real-time ROAS algorithmic budget reallocation across Google & Meta.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">BLENDED ROAS</span>
                        <span className="text-lg font-bold text-blue-400">4.6x</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CAC REDUCTION</span>
                        <span className="text-lg font-bold text-emerald-400">-38%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Reach people ready to buy.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Google Ads, Meta Ads and YouTube campaigns built around performance, tight unit economics, and clean tracking.</p>
                      <Link to="/services/performance-marketing" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Lead Gen */}
                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">CONVERSION ARCHITECTURE</span>
                      <h4 className="font-serif text-2xl text-white">Enquiry Velocity & Pipeline</h4>
                      <p className="text-xs text-slate-400">Automated WhatsApp & CRM sync turning intent into closed revenue.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">SQL PIPELINE</span>
                        <span className="text-lg font-bold text-white">₹12.4 Cr</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CONVERSION RATE</span>
                        <span className="text-lg font-bold text-blue-400">8.2%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Turn attention into enquiries.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Social media, content, email, WhatsApp, conversion optimisation and clear analytics reporting.</p>
                      <Link to="/services/lead-generation" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Pane 2: Marketplaces */}
            {activeTab === 'marketplaces' && (
              <div className="space-y-14 animate-fadeIn">
                
                {/* Launch */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">CATALOGUE PROTOCOL</span>
                      <h4 className="font-serif text-2xl text-white">Marketplace Account Clean Setup</h4>
                      <p className="text-xs text-slate-400">Brand registry, GTIN exemptions, and zero-defect catalogue sync.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">ACCOUNT HEALTH</span>
                        <span className="text-lg font-bold text-emerald-400">100% Zero Defect</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CHANNELS</span>
                        <span className="text-lg font-bold text-white">5 Active Platforms</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Launch on a clean foundation.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Seller account setup, catalogue and product listings done properly the first time across marketplaces.</p>
                      <Link to="/services/marketplace-management" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Listing SEO */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">CONVERSION LIFT</span>
                      <h4 className="font-serif text-2xl text-white">Listing SEO &amp; A+ Architecture</h4>
                      <p className="text-xs text-slate-400">Algorithmic backend search terms, infographics, and premium brand storytelling.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">BUY BOX SHARE</span>
                        <span className="text-lg font-bold text-blue-400">99.4%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CVR UPLIFT</span>
                        <span className="text-lg font-bold text-white">+52%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Rank, convert, repeat.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Listing optimisation, Amazon SEO and A+ content that turn casual browsers into verified buyers.</p>
                      <Link to="/services/amazon-operations" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Ads Scale */}
                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">MARKETPLACE PPC</span>
                      <h4 className="font-serif text-2xl text-white">Target ACOS Management</h4>
                      <p className="text-xs text-slate-400">Sponsored Products, Brands &amp; Display driving category bestseller badges.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">TARGET ACOS</span>
                        <span className="text-lg font-bold text-emerald-400">14.2%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">ORGANIC TACOS</span>
                        <span className="text-lg font-bold text-white">6.1%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Scale with smarter ads.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Amazon PPC, Flipkart ads and account health across Amazon, Flipkart, Meesho, Myntra and Nykaa.</p>
                      <Link to="/services/flipkart-management" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Pane 3: Websites */}
            {activeTab === 'websites' && (
              <div className="space-y-14 animate-fadeIn">
                
                {/* Sites */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">ENTERPRISE WEB</span>
                      <h4 className="font-serif text-2xl text-white">Editorial Performance Architecture</h4>
                      <p className="text-xs text-slate-400">Modern headless and React stacks engineered for credibility and conversion.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">LIGHTHOUSE</span>
                        <span className="text-lg font-bold text-sky-400">99 / 100</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">TIME TO FIRST BYTE</span>
                        <span className="text-lg font-bold text-white">&lt; 180ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Sites that earn trust.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Business websites designed to look premium, convey authority, and load fast on every screen.</p>
                      <Link to="/services/websites" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Stores */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">D2C COMMERCE</span>
                      <h4 className="font-serif text-2xl text-white">Frictionless Shopify Architecture</h4>
                      <p className="text-xs text-slate-400">Sub-second checkout, custom cart drawers, and upsell telemetry.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CHECKOUT CVR</span>
                        <span className="text-lg font-bold text-emerald-400">4.8%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">AVERAGE ORDER VALUE</span>
                        <span className="text-lg font-bold text-white">+28%</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Stores built to sell.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Shopify, WooCommerce and custom e-commerce builds focused purely on conversion and effortless checkout.</p>
                      <Link to="/services/shopify-stores" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Speed & Maintenance */}
                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">INFRASTRUCTURE</span>
                      <h4 className="font-serif text-2xl text-white">Edge CDN &amp; Security Shield</h4>
                      <p className="text-xs text-slate-400">Proactive patch cycles, 24/7 uptime monitoring, and vulnerability hardening.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">UPTIME SLA</span>
                        <span className="text-lg font-bold text-sky-400">99.99%</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">GLOBAL EDGE</span>
                        <span className="text-lg font-bold text-white">&lt; 0.4s</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Fast, maintained, improving.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Speed optimisation, redesigns, security patches, and ongoing proactive maintenance.</p>
                      <Link to="/services/websites" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Pane 4: Creative */}
            {activeTab === 'creative' && (
              <div className="space-y-14 animate-fadeIn">
                
                {/* Brand Identity */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">SYSTEM DESIGN</span>
                      <h4 className="font-serif text-2xl text-white">Distinctive Visual Identity</h4>
                      <p className="text-xs text-slate-400">Typography hierarchies, modular palette systems, and asset brand books.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">TOKEN SYSTEM</span>
                        <span className="text-lg font-bold text-indigo-400">Unified</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">BRAND ASSETS</span>
                        <span className="text-lg font-bold text-white">120+ Components</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">A brand people remember.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Brand identity and logo design executed with a clear, scalable system that sets you apart.</p>
                      <Link to="/services/brand-identity" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Reels & Motion */}
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">MOTION LAB</span>
                      <h4 className="font-serif text-2xl text-white">High-Retention Motion Film</h4>
                      <p className="text-xs text-slate-400">First-3-second hook mechanics and high-tempo commercial editing.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">RETENTION CURVE</span>
                        <span className="text-lg font-bold text-emerald-400">+64% 3s Hook</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">VIDEO VIEWS</span>
                        <span className="text-lg font-bold text-white">24M+ Total</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Content made for the scroll.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">High-tempo social creatives, vertical video reels, and motion assets designed to halt thumb movement.</p>
                      <Link to="/services/video-motion" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

                {/* Product Creatives */}
                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-[#0E1218] text-white rounded-2xl border border-slate-800 p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm">
                    <div className="space-y-2 max-w-xs">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">COMMERCIAL ASSETS</span>
                      <h4 className="font-serif text-2xl text-white">Packaging &amp; Lifestyle Rendering</h4>
                      <p className="text-xs text-slate-400">Photorealistic 3D packaging renders, tactile materials, and A+ modules.</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">CLICK-THROUGH (CTR)</span>
                        <span className="text-lg font-bold text-indigo-400">+41% Lift</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <span className="text-slate-400 block text-[10px]">PACKAGING UNITS</span>
                        <span className="text-lg font-bold text-white">100% Print-Ready</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Creatives that sell.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Product lifestyle visuals, A+ content infographic design, and packaging that justifies premium pricing.</p>
                      <Link to="/services/brand-identity" className="text-xs font-semibold text-[#080B10] hover:text-[#252B36] hover:underline underline-offset-4 whitespace-nowrap transition-all">Learn more →</Link>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Action Under Container */}
          <div className="text-center pt-16 hairline-t mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs font-sans text-space-600">Not sure which fits your current stage?</span>
            <a 
              href="#closing" 
              className="px-6 py-2.5 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
            >
              Discuss with our strategist →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
