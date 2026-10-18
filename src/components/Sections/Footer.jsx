import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="main-footer" className="relative pt-16 sm:pt-24 pb-16 bg-[#0E1218] text-slate-400 border-t border-white/10 overflow-hidden select-none">
      
      {/* Ambient Space Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[340px] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent blur-3xl rounded-full" aria-hidden="true"></div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Row: Editorial Prompt + Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10 mb-14">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2 font-bold">NEXT ORBIT</span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
              Make your next move.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* All-Green WhatsApp Button */}
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Talk on WhatsApp</span>
            </a>
            <a 
              href="/#closing" 
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-space-950 text-xs font-semibold transition-all hover:scale-105"
            >
              <span>Free Growth Audit</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* 5 Rich Link Columns matching Developer Brief */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 text-xs font-sans pb-14">
          
          {/* Col 1: E-Commerce Management */}
          <div className="space-y-3.5">
            <strong className="text-white block font-semibold tracking-wide">
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
            <strong className="text-white block font-semibold tracking-wide">
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
            <strong className="text-white block font-semibold tracking-wide">
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
            <strong className="text-white block font-semibold tracking-wide">
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
            <strong className="text-white block font-semibold tracking-wide">
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

        {/* Mandatory Commercial Policy Disclaimer (PDF 1 Page 2) */}
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
            <a href="/#closing" className="hover:text-white transition-colors">Contact / Audit</a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
