import React from 'react';
import { Link } from 'react-router-dom';

export default function Home2Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050F] text-[#FFFFFF] border-t border-indigo-950/70 font-sans text-xs select-none">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
              <span className="font-grotesk font-black text-xl tracking-tight text-white uppercase block">
                E-COMET OUTVERSE
              </span>
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-[42ch] leading-relaxed">
              Enterprise growth architecture for high-velocity commercial brands. Marketplaces, paid acquisition, web storefronts, and brand cinema.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-cyan-400 block font-bold uppercase tracking-wider text-[11px]">[SECTORS]</span>
            <ul className="space-y-1.5 text-slate-300 font-medium">
              <li><Link to="/services/ecommerce-management" className="hover:text-cyan-400 transition-colors">Amazon &amp; Marketplaces</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-cyan-400 transition-colors">Google &amp; Meta Ads</Link></li>
              <li><Link to="/services/web-development" className="hover:text-cyan-400 transition-colors">D2C Shopify Architecture</Link></li>
              <li><Link to="/services/video-production-editing" className="hover:text-cyan-400 transition-colors">Commercial Cinema &amp; 3D</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-indigo-400 block font-bold uppercase tracking-wider text-[11px]">[HEADQUARTERS &amp; CHANNELS]</span>
            <p className="text-slate-300 font-medium">Mumbai, Maharashtra, India</p>
            <p className="text-slate-400">Direct: <span className="text-slate-200">hello@ecometoutverse.com</span> // TODO</p>
            <p className="text-slate-400">WhatsApp: <span className="text-emerald-400 font-semibold">+91 99999 99999</span> // TODO</p>
          </div>
        </div>

        {/* Bottom Rules & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
          <div>
            <span>© 2026 E-COMET OUTVERSE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
              [SWITCH TO HOME 1]
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>[BACK TO TOP</span>
              <span className="text-cyan-400">↑]</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
