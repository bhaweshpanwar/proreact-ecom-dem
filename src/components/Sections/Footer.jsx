import React from 'react';
import { Link } from 'react-router-dom';
import SingleCometCanvas from '../Hero3D/SingleCometCanvas';

export default function Footer() {
  const socialChannels = [
    {
      name: 'Instagram',
      handle: '@ecomet.agency',
      href: 'https://instagram.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      handle: 'ecomet-agency',
      href: 'https://linkedin.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      handle: '@ecometgrowth',
      href: 'https://youtube.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      handle: '@ecomet_agency',
      href: 'https://x.com/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      handle: 'Direct Hotline',
      href: 'https://wa.me/91XXXXXXXXXX',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. "BEYOND DIGITAL. INTO THE NEXT ORBIT."
          LIGHT ARCHITECTURAL PRE-FOOTER SECTION (#FFFFFF)
          Clean architectural transition between dark form and dark footer.
          Pure modern sans-serif typography.
         ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-white text-[#080B10] border-t border-stone-200/90 py-20 sm:py-28 select-none">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest text-[#647285] font-semibold block">
                07 / NEXT ORBIT BLUEPRINT
              </span>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-grotesk font-black text-[#080B10] tracking-tight uppercase leading-[1.05]">
                Beyond Digital.<br />
                <span className="text-[#647285] font-bold">Into the Next Orbit.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed pt-2 max-w-2xl">
                One integrated growth partner engineered for category leaders, high-growth consumer brands, and ambitious enterprises. Full-funnel marketplace scale, web engineering, and performance marketing under one unified orbit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <a 
                href="/#closing" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white text-xs font-sans font-semibold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request Custom Growth Blueprint</span>
                <span>→</span>
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-[#080B10] text-xs font-sans font-semibold uppercase tracking-wider border border-stone-300 transition-all hover:border-stone-500 shadow-xs cursor-pointer"
              >
                <span>Direct WhatsApp Consultation</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DEEP SPACE FOOTER (COSMIC BLACK #080B10)
          FEATURING THAT REAL 3D COMET (SingleCometCanvas)
          Header and footer of comet section removed per user request.
         ───────────────────────────────────────────────────────────── */}
      <footer id="main-footer" className="relative bg-[#080B10] text-slate-400 border-t border-white/10 overflow-hidden select-none">
        
        {/* Real 3D Comet Showcase & Social Links */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-white/10 relative">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Comet Stage with Big Stretched E-COMET OUTVERSE Typography Behind */}
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center my-6 overflow-hidden">
              
              {/* Massive Dark Gray Sans-Serif Stretched Typography Behind Comet */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
                <span 
                  className="inline-block font-sans font-black tracking-tighter text-[#222C3A] uppercase whitespace-nowrap leading-none select-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 7.5vw, 10rem)',
                    transform: 'scaleY(1.55)',
                    transformOrigin: 'center center'
                  }}
                >
                  E-COMET OUTVERSE
                </span>
              </div>

              {/* That Real 3D Comet sitting on top */}
              <div className="relative z-10 w-full flex items-center justify-center pointer-events-auto">
                <SingleCometCanvas height="h-[340px] sm:h-[400px]" title="E-Comet Core" />
              </div>

            </div>

            {/* Social Media Brand Ecosystem Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
              {socialChannels.map((channel, cIdx) => (
                <a
                  key={cIdx}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white text-slate-300 hover:text-[#080B10] border border-white/10 hover:border-white transition-all duration-300 text-xs font-sans font-medium shadow-xs group hover:scale-105 active:scale-95"
                  aria-label={channel.name}
                >
                  <span className="text-slate-400 group-hover:text-[#080B10] transition-colors">
                    {channel.icon}
                  </span>
                  <span>{channel.name}</span>
                  <span className="text-[10px] text-slate-500 group-hover:text-[#080B10] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. 5 RICH LINK COLUMNS
           ───────────────────────────────────────────────────────────── */}
        <div className="py-16 sm:py-20">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 text-xs font-sans pb-14">
              
              {/* Col 1: E-Commerce Management */}
              <div className="space-y-3.5">
                <strong className="text-white block font-semibold tracking-wide font-sans">
                  E-Commerce Management
                </strong>
                <ul className="space-y-2.5 text-slate-400">
                  <li><Link to="/services/amazon-operations" className="hover:text-white transition-colors">Amazon Seller Account</Link></li>
                  <li><Link to="/services/flipkart-management" className="hover:text-white transition-colors">Flipkart Growth &amp; PLA</Link></li>
                  <li><Link to="/services/amazon-operations" className="hover:text-white transition-colors">Amazon PPC Advertising</Link></li>
                  <li><Link to="/services/marketplace-management" className="hover:text-white transition-colors">Meesho, Myntra &amp; Nykaa</Link></li>
                  <li><Link to="/services/quick-commerce" className="hover:text-white transition-colors">Quick Commerce (Blinkit)</Link></li>
                  <li><Link to="/services/ecommerce-management" className="text-slate-300 hover:text-white font-mono transition-colors">View Pillar Overview →</Link></li>
                </ul>
              </div>

              {/* Col 2: Digital Marketing */}
              <div className="space-y-3.5">
                <strong className="text-white block font-semibold tracking-wide font-sans">
                  Digital Marketing
                </strong>
                <ul className="space-y-2.5 text-slate-400">
                  <li><Link to="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization</Link></li>
                  <li><Link to="/services/performance-marketing" className="hover:text-white transition-colors">Google Search &amp; Shopping Ads</Link></li>
                  <li><Link to="/services/performance-marketing" className="hover:text-white transition-colors">Meta &amp; Instagram Ads</Link></li>
                  <li><Link to="/services/local-seo" className="hover:text-white transition-colors">Local SEO &amp; Maps</Link></li>
                  <li><Link to="/services/uiux-design" className="hover:text-white transition-colors">Conversion Rate Optimization</Link></li>
                  <li><Link to="/services/digital-marketing" className="text-slate-300 hover:text-white font-mono transition-colors">View Pillar Overview →</Link></li>
                </ul>
              </div>

              {/* Col 3: Website Development */}
              <div className="space-y-3.5">
                <strong className="text-white block font-semibold tracking-wide font-sans">
                  Website Development
                </strong>
                <ul className="space-y-2.5 text-slate-400">
                  <li><Link to="/services/shopify-stores" className="hover:text-white transition-colors">Custom Shopify Stores</Link></li>
                  <li><Link to="/services/shopify-stores" className="hover:text-white transition-colors">WordPress &amp; WooCommerce</Link></li>
                  <li><Link to="/services/websites" className="hover:text-white transition-colors">High-Converting Landing Pages</Link></li>
                  <li><Link to="/services/websites" className="hover:text-white transition-colors">Modern Web Engineering</Link></li>
                  <li><Link to="/services/websites" className="hover:text-white transition-colors">Speed &amp; Infrastructure</Link></li>
                  <li><Link to="/services/website-development" className="text-slate-300 hover:text-white font-mono transition-colors">View Pillar Overview →</Link></li>
                </ul>
              </div>

              {/* Col 4: YouTube & Video */}
              <div className="space-y-3.5">
                <strong className="text-white block font-semibold tracking-wide font-sans">
                  YouTube &amp; Video
                </strong>
                <ul className="space-y-2.5 text-slate-400">
                  <li><Link to="/services/youtube-growth" className="hover:text-white transition-colors">YouTube Channel Growth</Link></li>
                  <li><Link to="/services/video-motion" className="hover:text-white transition-colors">Commercial Video Production</Link></li>
                  <li><Link to="/services/youtube-growth" className="hover:text-white transition-colors">High-CTR Custom Thumbnails</Link></li>
                  <li><Link to="/services/video-motion" className="hover:text-white transition-colors">Reels &amp; Shorts Editing</Link></li>
                  <li><Link to="/services/youtube-video-services" className="text-slate-300 hover:text-white font-mono transition-colors">View Pillar Overview →</Link></li>
                </ul>
              </div>

              {/* Col 5: Company & Navigation */}
              <div className="space-y-3.5">
                <strong className="text-white block font-semibold tracking-wide font-sans">
                  Company &amp; Navigation
                </strong>
                <ul className="space-y-2.5 text-slate-400">
                  <li><Link to="/about-us" className="hover:text-white transition-colors font-medium text-slate-200">About Us (Mission &amp; Values)</Link></li>
                  <li><a href="/#goals" className="hover:text-white transition-colors">Growth Blueprint</a></li>
                  <li><a href="/#process" className="hover:text-white transition-colors">How We Work (Process)</a></li>
                  <li><a href="/#selected-work" className="hover:text-white transition-colors">Selected Work</a></li>
                  <li><Link to="/services/ecommerce-management#pricing" className="hover:text-white transition-colors">Standard Packages &amp; Pricing</Link></li>
                  <li><a href="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
                  <li><a href="/#closing" className="hover:text-white transition-colors">Request Growth Audit</a></li>
                </ul>
              </div>

            </div>

            {/* Mandatory Commercial Policy Disclaimer */}
            <div className="py-6 border-t border-white/10 text-[11px] font-sans text-slate-500 leading-relaxed">
              <p>
                <strong className="text-slate-400">Disclosure:</strong> Service scope, availability, pricing, third-party costs, and timelines are confirmed individually. Business outcomes depend on multiple factors and are not guaranteed. E-Comet Growth Agency is an independent consultancy. All platform trademarks belong to their respective owners.
              </p>
            </div>

            {/* Legal & Copyright Row */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-slate-500">
              <p>© {new Date().getFullYear()} E-Comet Growth Agency. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <Link to="/about-us" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/services/ecommerce-management" className="hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact / Audit</Link>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </div>
            </div>

          </div>
        </div>

      </footer>
    </>
  );
}
