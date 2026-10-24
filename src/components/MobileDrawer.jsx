import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA } from '../data/megaMenuData';

export default function MobileDrawer({ isOpen, onClose }) {
  const [expandedPillar, setExpandedPillar] = useState(null);

  if (!isOpen) return null;

  const togglePillar = (id) => {
    setExpandedPillar(prev => prev === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <Link to="/" onClick={onClose} className="block select-none">
              <span className="font-sans font-black text-base tracking-tighter text-[#080B10] uppercase">
                E-COMET OUTVERSE
              </span>
            </Link>
            <button 
              type="button" 
              onClick={onClose} 
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 flex flex-col space-y-2">
            <Link
              to="/about-us"
              onClick={onClose}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              About Us
            </Link>

            {/* 8 Core Service Pillars Accordions */}
            <div className="pt-2 pb-2">
              <span className="px-3 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Core Service Pillars (8)
              </span>

              <div className="space-y-1.5">
                {PILLARS_DATA.map((pillar) => {
                  const isExpanded = expandedPillar === pillar.id;
                  return (
                    <div key={pillar.id} className="rounded-xl border border-stone-200/90 overflow-hidden bg-[#FAFAFA]">
                      <button
                        type="button"
                        onClick={() => togglePillar(pillar.id)}
                        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-white transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            {pillar.number}
                          </span>
                          <span className="text-xs font-semibold text-slate-900 leading-snug">
                            {pillar.title}
                          </span>
                        </div>
                        <span className="text-slate-400 text-xs font-mono flex-shrink-0 ml-2">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-3.5 pb-3.5 pt-2 border-t border-stone-200/70 bg-white space-y-4">
                          <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                            {pillar.tagline}
                          </p>

                          {/* Render Categories */}
                          <div className="space-y-3.5 pt-1">
                            {pillar.divisions.map((division, dIdx) => (
                              <div key={dIdx} className="space-y-1 pl-2 border-l-2 border-stone-200">
                                <span className="text-[10.5px] font-mono font-bold text-space-950 uppercase block tracking-wider">
                                  {division.kicker?.replace(/^Division\s+\d+:\s*/i, '')}
                                </span>
                                <div className="space-y-1 pl-1">
                                  {division.links.map((link, lIdx) => (
                                    <Link
                                      key={lIdx}
                                      to={link.href}
                                      onClick={onClose}
                                      className="block py-0.5 text-xs text-slate-600 hover:text-black hover:translate-x-1 transition-all leading-snug"
                                    >
                                      › {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2.5 mt-2 border-t border-slate-100">
                            <Link
                              to={pillar.primarySlug}
                              onClick={onClose}
                              className="text-xs font-semibold text-space-950 hover:underline flex items-center gap-1"
                            >
                              <span>Explore {pillar.shortTitle} Overview</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              to="/marketplace"
              onClick={onClose}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Marketplace
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-slate-200 flex flex-col gap-2.5 mt-6">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Talk on WhatsApp</span>
          </a>
          <a
            href="#closing"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Get a Custom Quote →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
