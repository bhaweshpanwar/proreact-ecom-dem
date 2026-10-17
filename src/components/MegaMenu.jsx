import React from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA, MEGA_MENU_DATA } from '../data/megaMenuData';

export default function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }) {
  if (!activeMenu) return null;

  return (
    <>
      {/* Background backdrop blur (Click to dismiss) */}
      <div 
        className="fixed inset-0 top-20 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity animate-fadeIn cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Menu Dropdown */}
      <div 
        className="fixed top-20 left-0 right-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 transition-all duration-300 animate-slideDown max-h-[calc(100vh-5rem)] overflow-y-auto"
        role="region"
        aria-label="Services navigation menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-8 relative">
          
          {/* Header Row: Title & Close Button */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                E-Comet Services Architecture
              </span>
              <h3 className="font-serif text-2xl font-normal text-space-950">
                Core Capabilities &amp; Growth Pillars
              </h3>
            </div>

            <button 
              type="button" 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* 6 Parent Pillars Grid (3 columns on lg, 2 on md, 1 on sm) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS_DATA.map((pillar) => (
              <div 
                key={pillar.id}
                className="group p-5 rounded-2xl bg-[#fafafa] hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Link 
                      to={pillar.primarySlug}
                      onClick={onClose}
                      className="flex items-center gap-2 group-hover:text-black"
                    >
                      <span 
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: pillar.colorHex }}
                      />
                      <h4 className="font-serif text-lg font-normal text-space-950 hover:underline">
                        {pillar.title}
                      </h4>
                    </Link>

                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-200/70 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Pillar Tagline */}
                  <p className="text-xs text-slate-500 font-sans mb-3.5 leading-snug">
                    {pillar.tagline}
                  </p>

                  {/* Sub-services list */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    {pillar.links.slice(0, 5).map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link 
                          to={link.href}
                          onClick={onClose}
                          className="text-[12.5px] font-sans text-slate-600 hover:text-space-950 hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                        >
                          <span className="text-[10px] text-slate-400">·</span>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Pillar Link */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link 
                    to={pillar.primarySlug}
                    onClick={onClose}
                    className="text-xs font-sans font-semibold text-space-950 group-hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Pillar</span>
                    <span>→</span>
                  </Link>

                  <span className="text-[11px] font-mono text-slate-400">
                    {pillar.links.length} services
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar: Brand Promise & Quote Action */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sans font-medium text-slate-700">
                <strong>Need a tailored combination?</strong> E-Comet provides customized scopes across marketplaces, web, and marketing with clear deliverables.
              </span>
            </div>

            <a 
              href="#closing"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-space-950 hover:bg-slate-800 text-white font-sans text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Get a Custom Quote →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
