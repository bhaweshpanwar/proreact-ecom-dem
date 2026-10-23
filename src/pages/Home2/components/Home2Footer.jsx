import React from 'react';
import { Link } from 'react-router-dom';

export default function Home2Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-[#FFFFFF] border-t border-[#262626] font-sans text-xs uppercase select-none tracking-wider">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1A1A1A]">
          <div className="md:col-span-5 space-y-3">
            <span className="font-grotesk font-black text-xl tracking-tight text-white block">
              E-COMET OUTVERSE
            </span>
            <p className="font-grotesk text-xs text-[#8A8A8A] max-w-[40ch] lowercase">
              photorealistic growth architecture for high-velocity commercial brands. marketplaces, paid acquisition, web storefronts, and brand cinema.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-[#8A8A8A] block font-bold">[SECTORS]</span>
            <ul className="space-y-1 text-[#CCCCCC]">
              <li><Link to="/services/ecommerce-management" className="hover:text-white">Amazon &amp; Marketplaces</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white">Google &amp; Meta Ads</Link></li>
              <li><Link to="/services/web-development" className="hover:text-white">D2C Shopify Architecture</Link></li>
              <li><Link to="/services/video-production-editing" className="hover:text-white">Commercial Cinema &amp; 3D</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-[#8A8A8A] block font-bold">[HEADQUARTERS &amp; CHANNELS]</span>
            <p className="text-[#CCCCCC]">Mumbai, Maharashtra, India</p>
            <p className="text-[#8A8A8A]">Direct: hello@ecometoutverse.com // TODO</p>
            <p className="text-[#8A8A8A]">WhatsApp: +91 99999 99999 // TODO</p>
          </div>
        </div>

        {/* Bottom Rules & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#8A8A8A] text-[11px]">
          <div>
            <span>© 2026 E-COMET OUTVERSE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white transition-colors cursor-pointer"
            >
              [BACK TO TOP ↑]
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
