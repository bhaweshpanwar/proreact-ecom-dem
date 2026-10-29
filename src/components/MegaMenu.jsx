import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA } from '../data/megaMenuData';

/**
 * MegaMenu - E-COMET OUTVERSE Final Service Divisions
 * 
 * High-performance, architectural split-deck navigation.
 * Left: 8 Core Service Pillars
 * Right: Dynamic Division Canvas showing all Divisions and exact services of the selected Pillar.
 */
export default function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }) {
  const [selectedPillarId, setSelectedPillarId] = useState(PILLARS_DATA[0].id);

  if (!activeMenu) return null;

  const activePillar = PILLARS_DATA.find(p => p.id === selectedPillarId) || PILLARS_DATA[0];

  return (
    <>
      {/* Background backdrop blur (Click to dismiss) */}
      <div 
        className="fixed inset-0 top-20 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity animate-fadeIn cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Menu Dropdown Container */}
      <div 
        className="fixed top-20 left-0 right-0 w-full bg-white border-b border-stone-200/90 shadow-2xl z-50 transition-all duration-300 animate-slideDown max-h-[calc(100vh-5rem)] overflow-y-auto select-none"
        role="region"
        aria-label="E-Comet Outverse Services Menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
          {/* Top Header Bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-stone-200/80">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                E-COMET OUTVERSE · 8 CORE PRACTICE PILLARS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-space-950">
                Core Capabilities &amp; 8 Practice Pillars
              </h3>
            </div>

            <button 
              type="button" 
              onClick={onClose}
              className="w-8 h-8 rounded-none border border-slate-200 bg-slate-50 hover:bg-[#080B10] hover:text-white text-slate-700 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Interactive Split-Deck Stage: 8 Pillars Sidebar + Dynamic Canvas */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[520px]">
            
            {/* ─────────────────────────────────────────────────────────────
                1. LEFT SIDEBAR: 8 PILLAR NAVIGATOR
               ───────────────────────────────────────────────────────────── */}
            <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col space-y-1.5 pr-0 lg:pr-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-2 mb-1">
                SELECT PILLAR (01 — 08)
              </span>

              <div className="space-y-1.5 max-h-[500px] overflow-y-auto no-scrollbar pr-1">
                {PILLARS_DATA.map((pillar) => {
                  const isActive = pillar.id === activePillar.id;
                  return (
                    <div
                      key={pillar.id}
                      onMouseEnter={() => setSelectedPillarId(pillar.id)}
                      onClick={() => setSelectedPillarId(pillar.id)}
                      className={`group p-3.5 rounded-none border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                        isActive
                          ? 'bg-[#080B10] text-white border-[#080B10] shadow-sm'
                          : 'bg-[#FAFAFA] text-space-950 border-stone-200/90 hover:bg-white hover:border-[#080B10]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`text-[11px] font-mono font-bold flex-shrink-0 ${
                          isActive ? 'text-slate-400' : 'text-slate-400 group-hover:text-space-950'
                        }`}>
                          {pillar.number}
                        </span>
                        
                        <div className="min-w-0">
                          <h4 className={`text-[13px] font-sans font-semibold tracking-tight truncate leading-snug ${
                            isActive ? 'text-white' : 'text-space-950'
                          }`}>
                            {pillar.title}
                          </h4>
                          <span className={`text-[10px] font-mono block tracking-wider ${
                            isActive ? 'text-slate-300' : 'text-slate-500'
                          }`}>
                            {pillar.badge}
                          </span>
                        </div>
                      </div>

                      <span className={`text-xs font-mono flex-shrink-0 transition-transform ${
                        isActive ? 'text-white translate-x-1' : 'text-slate-300 group-hover:text-space-950 group-hover:translate-x-1'
                      }`}>
                        →
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                2. RIGHT DETAIL STAGE: ACTIVE PILLAR DIVISIONS & SERVICES
               ───────────────────────────────────────────────────────────── */}
            <div className="flex-1 bg-white rounded-none border border-stone-200/90 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs">
              
              {/* Pillar Title Banner */}
              <div className="pb-5 border-b border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-none text-[10px] font-mono font-bold uppercase tracking-wider bg-[#080B10] text-white">
                      PILLAR {activePillar.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {activePillar.badge}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl text-space-950 font-normal tracking-tight leading-tight">
                    {activePillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {activePillar.tagline}
                  </p>
                </div>

                {/* Explore Full Pillar Overview Button */}
                <Link
                  to={activePillar.primarySlug}
                  onClick={onClose}
                  className="self-start sm:self-center px-5 py-2.5 rounded-none bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore {activePillar.shortTitle} Overview</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Dynamic Division Columns */}
              <div className={`grid gap-6 pt-6 flex-1 ${
                activePillar.divisions.length === 3 
                  ? 'grid-cols-1 md:grid-cols-3'
                  : activePillar.divisions.length === 4
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
              }`}>
                {activePillar.divisions.map((division, dIdx) => (
                  <div key={dIdx} className="space-y-3 bg-[#FAFAFA] rounded-none p-4 sm:p-5 border border-stone-200/80 hover:bg-white hover:border-[#080B10] transition-all duration-200 flex flex-col justify-between">
                    <div>
                      {/* Category Heading */}
                      <div className="pb-2.5 border-b border-stone-200/70 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-space-950 block leading-snug">
                          {division.kicker?.replace(/^Division\s+\d+:\s*/i, '')}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {division.links.length} Capabilities
                        </span>
                      </div>

                      {/* Sub-Services Exact List */}
                      <ul className="space-y-1.5">
                        {division.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link
                              to={link.href}
                              onClick={onClose}
                              className="group/item flex items-start gap-1.5 text-[12.5px] font-sans text-slate-700 hover:text-black transition-colors py-0.5 leading-snug"
                            >
                              <span className="text-slate-400 group-hover/item:text-black group-hover/item:translate-x-0.5 transition-all text-xs font-mono">
                                ›
                              </span>
                              <span className="group-hover/item:underline underline-offset-2">
                                {link.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Bottom Bar: Multi-Pillar Commercial Scope Consultation */}
          <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAFAFA] p-4 sm:p-5 rounded-none border border-stone-200/90">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans text-slate-700 leading-relaxed">
                <strong>Need a custom cross-pillar scope?</strong> E-Comet unifies marketplace growth, web engineering, performance advertising, creative design, and video production under one unified operational governance.
              </span>
            </div>

            <a 
              href="/#closing"
              onClick={onClose}
              className="px-6 py-2.5 rounded-none bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            >
              Request Custom Blueprint →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
