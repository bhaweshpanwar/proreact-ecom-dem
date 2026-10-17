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
    { id: 'marketing', label: 'Digital Marketing', color: 'bg-pillar-marketing' },
    { id: 'marketplaces', label: 'Marketplaces', color: 'bg-pillar-marketplaces' },
    { id: 'websites', label: 'Websites', color: 'bg-pillar-websites' },
    { id: 'creative', label: 'Creative', color: 'bg-pillar-creative' },
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

  // Window resize listener to keep pill aligned
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

  // Stagger animation on tab content switch
  useEffect(() => {
    if (contentPaneRef.current) {
      gsap.fromTo(contentPaneRef.current.children,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="services" aria-labelledby="services-heading" className="relative py-16 sm:py-28 bg-white overflow-hidden">
      
      {/* Edge Confetti */}
      <div className="confetti-square pointer-events-none absolute top-12 right-12 w-2 h-2 rounded-sm bg-pillar-sand opacity-50" data-speed="1.1"></div>
      <div className="confetti-square pointer-events-none absolute bottom-12 left-10 w-2 h-2 rounded-sm bg-pillar-creative opacity-50" data-speed="0.9"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Large Rounded Paper Container */}
        <div className="rounded-container bg-paper p-6 sm:p-14 lg:p-16 border border-[#E9E6DF]/80">
          
          {/* Section Headline */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-sans text-space-600 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-space-950 tracking-tight leading-tight">
              For everything your growth needs.
            </h2>
          </div>

          {/* Pill Tab Switcher with Sliding Indicator */}
          <div className="flex items-center justify-center mb-14 sm:mb-20">
            <div 
              ref={tabsContainerRef}
              role="tablist" 
              className="relative inline-flex items-center p-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm overflow-x-auto max-w-full no-scrollbar"
            >
              {/* Sliding Indicator Pill */}
              <div 
                className="absolute top-1.5 bottom-1.5 bg-space-950 rounded-full transition-all duration-300 ease-out z-0 pointer-events-none"
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
                    className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 select-none ${
                      isSelected ? 'text-white' : 'text-space-800 hover:text-space-950'
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${tab.color}`}></span>
                      <span>{tab.label}</span>
                    </span>
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
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/Search & Performance Workspace.png" alt="SEO" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Be found on Google.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">SEO, local SEO, technical SEO and keyword research that put you in front of people already searching.</p>
                      <Link to="/services/seo" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/ads-performance.png" alt="Paid Ads" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Reach people ready to buy.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Google Ads, Meta Ads and YouTube campaigns built around performance, tight unit economics, and clean tracking.</p>
                      <Link to="/services/performance-marketing" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/attribution-funnel.png" alt="Lead Generation" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Turn attention into enquiries.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Social media, content, email, WhatsApp, conversion optimisation and clear analytics reporting.</p>
                      <Link to="/services/lead-generation" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pane 2: Marketplaces */}
            {activeTab === 'marketplaces' && (
              <div className="space-y-14 animate-fadeIn">
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/amazon-listing-aplus.png" alt="Marketplaces" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Launch on a clean foundation.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Seller account setup, catalogue and product listings done properly the first time across marketplaces.</p>
                      <Link to="/services/marketplace-management" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/marketplace-ppc-scale.png" alt="Listing SEO" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Rank, convert, repeat.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Listing optimisation, Amazon SEO and A+ content that turn casual browsers into verified buyers.</p>
                      <Link to="/services/amazon-operations" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/marketplace-ppc-scale.png" alt="Scale with smarter ads" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Scale with smarter ads.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Amazon PPC, Flipkart ads and account health across Amazon, Flipkart, Meesho, Myntra and Nykaa.</p>
                      <Link to="/services/flipkart-management" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pane 3: Websites */}
            {activeTab === 'websites' && (
              <div className="space-y-14 animate-fadeIn">
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/Ultra-Fast Infrastructure Device.png" alt="Business Websites" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Sites that earn trust.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Business websites designed to look premium, convey authority, and load fast on every screen.</p>
                      <Link to="/services/websites" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/shopify-flagship-store.png" alt="E-Commerce Stores" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Stores built to sell.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Shopify, WooCommerce and custom e-commerce builds focused purely on conversion and effortless checkout.</p>
                      <Link to="/services/shopify-stores" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/sub-second-speed.png" alt="Speed & Maintenance" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Fast, maintained, improving.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Speed optimisation, redesigns, security patches, and ongoing proactive maintenance.</p>
                      <Link to="/services/websites" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pane 4: Creative */}
            {activeTab === 'creative' && (
              <div className="space-y-14 animate-fadeIn">
                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/creative-brand-identity.png" alt="Brand Identity" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">A brand people remember.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Brand identity and logo design executed with a clear, scalable system that sets you apart.</p>
                      <Link to="/services/brand-identity" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6 pb-12 hairline-b">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/reels-motion-film.png" alt="Reels & Motion" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Content made for the scroll.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">High-tempo social creatives, vertical video reels, and motion assets designed to halt thumb movement.</p>
                      <Link to="/services/video-motion" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>

                <div className="service-row space-y-6">
                  <div className="preview-panel w-full aspect-[21/9] sm:aspect-[24/8] bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="/assets/img1/tactile-materials-creative.png" alt="Product Creatives" className="w-full h-full object-cover rounded-xl" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <h3 className="md:col-span-5 text-2xl sm:text-3xl font-serif text-space-950 font-normal">Creatives that sell.</h3>
                    <div className="md:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-space-600 font-sans">
                      <p className="leading-relaxed max-w-xl">Product lifestyle visuals, A+ content infographic design, and packaging that justifies premium pricing.</p>
                      <Link to="/services/brand-identity" className="text-xs font-semibold text-space-950 hover:text-ember whitespace-nowrap transition-colors">Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Action Under Container */}
          <div className="text-center pt-16 hairline-t mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs font-sans text-space-600">Not sure which fits your current stage?</span>
            <a href="#closing" className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-space-950 hover:bg-space-900 text-white text-xs font-medium transition-all hover:scale-[1.02]">
              <span>Get a free growth audit</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
