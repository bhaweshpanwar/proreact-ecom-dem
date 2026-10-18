import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS_DATA } from '../data/megaMenuData';

/**
 * MegaMenu
 * 
 * Fluid interactive split-deck services architecture menu.
 * When hovering a pillar card in a row:
 * - The hovered card dynamically expands (76% width) to unveil 3 rich sub-pillar columns (15+ capabilities).
 * - Adjacent cards in the row smoothly shrink into sleek vertical tabs displaying only their title and indicator.
 * - Moving to any shrunken card seamlessly swapp-expands it into full focus.
 */
export default function MegaMenu({ activeMenu, onClose, onMouseEnter, onMouseLeave }) {
  const [hoveredId, setHoveredId] = useState(null);

  if (!activeMenu) return null;

  // Split into 2 rows of 3 pillars each
  const row1 = PILLARS_DATA.slice(0, 3);
  const row2 = PILLARS_DATA.slice(3, 6);

  const renderPillarCard = (pillar, rowList) => {
    const isHovered = hoveredId === pillar.id;
    const isRowActive = rowList.some(p => p.id === hoveredId);
    const isShrunk = isRowActive && !isHovered;

    // Flex sizing on desktop
    // Default: equal 1/3 (w-1/3, flex-1)
    // Hovered: expansive full-focus (w-[76%], flex-[7.5])
    // Shrunk: slim vertical anchor tab (w-[12%], flex-[1.2])
    const flexClass = isHovered
      ? 'lg:flex-[7.5] lg:w-[76%] bg-white border-slate-300 shadow-xl'
      : isShrunk
        ? 'lg:flex-[1.2] lg:w-[12%] bg-[#F8F9FA] hover:bg-white border-slate-200 cursor-pointer'
        : 'lg:flex-1 lg:w-1/3 bg-[#FAFAFA] hover:bg-white border-slate-200 hover:border-slate-300 hover:shadow-md';

    return (
      <div
        key={pillar.id}
        onMouseEnter={() => setHoveredId(pillar.id)}
        className={`group relative rounded-[22px] border p-5 sm:p-6 transition-[flex,width,background-color] duration-1000 lg:duration-[1400ms] ease-[cubic-bezier(0.25,1,0.35,1)] overflow-hidden flex flex-col justify-between min-w-0 ${flexClass}`}
        style={{
          minHeight: '380px',
        }}
      >
        {/* ================================================================= */}
        {/* 1. SHRUNKEN STATE VIEW (Compact vertical deck tab)                */}
        {/* ================================================================= */}
        {isShrunk && (
          <div className="hidden lg:flex flex-col items-center justify-between h-full w-full py-2 animate-fadeIn select-none">
            {/* Top Index Number */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono font-bold text-slate-400">
                0{PILLARS_DATA.findIndex(p => p.id === pillar.id) + 1}
              </span>
            </div>

            {/* Vertical Rotated Title (No blue hover) */}
            <div className="flex-1 flex items-center justify-center my-6">
              <span className="font-serif text-[15px] font-normal text-space-950 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap tracking-wide group-hover:text-black transition-colors">
                {pillar.title}
              </span>
            </div>

            {/* Expand Prompt Icon */}
            <div className="w-7 h-7 rounded-full bg-slate-200/70 group-hover:bg-[#080B10] group-hover:text-white flex items-center justify-center text-xs font-bold text-slate-600 transition-all shadow-xs">
              +
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 2. DEFAULT UNHOVERED VIEW (Balanced 1/3 card - Clean, No Footer)  */}
        {/* ================================================================= */}
        {!isRowActive && (
          <div className="flex flex-col justify-between h-full w-full animate-fadeIn">
            <div>
              {/* Top Header without color dot or blue hover */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <Link
                  to={pillar.primarySlug}
                  onClick={onClose}
                  className="flex items-center gap-2"
                >
                  <h4 className="font-serif text-lg font-normal text-space-950 transition-colors">
                    {pillar.title}
                  </h4>
                </Link>

                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-200/70 text-slate-700">
                  {pillar.badge}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs text-slate-500 font-sans mb-3.5 leading-snug line-clamp-2">
                {pillar.tagline}
              </p>

              {/* Sub-services list (5 items) */}
              <ul className="space-y-1.5 pt-2.5 border-t border-slate-200/60">
                {pillar.links.slice(0, 5).map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="text-[12.5px] font-sans text-slate-600 hover:text-[#080B10] hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                    >
                      <span className="text-[10px] text-slate-400">·</span>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 3. EXPANDED HOVERED VIEW (Full-width pure white stage - No Footer)*/}
        {/* ================================================================= */}
        {isHovered && (
          <div className="flex flex-col justify-between h-full w-full animate-fadeIn">
            {/* Expanded Header Bar */}
            <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h4 className="font-serif text-2xl sm:text-3xl font-normal text-space-950 tracking-tight">
                    {pillar.title}
                  </h4>
                  <span className="ml-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-900 text-white">
                    {pillar.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-2xl leading-relaxed">
                  {pillar.tagline}
                </p>
              </div>

              {/* Direct Full-Pillar Overview Button (Cosmic Black, Brand Hover) */}
              <Link
                to={pillar.primarySlug}
                onClick={onClose}
                className="self-start sm:self-auto px-4 py-2 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-sm inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Full Pillar</span>
                <span>→</span>
              </Link>
            </div>

            {/* 3 Expanded Sub-Pillars Columns (15+ Capabilities) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 flex-1">
              {(pillar.subPillars || []).map((sub, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  {/* Sub-Pillar Kicker Header (No color dot) */}
                  <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200/50">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                      {sub.kicker}
                    </span>
                  </div>

                  {/* Sub-Pillar Links (No blue on hover) */}
                  <ul className="space-y-2">
                    {sub.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className="text-[12.5px] font-sans font-medium text-slate-700 hover:text-[#080B10] hover:translate-x-1 transition-all inline-flex items-center gap-2 group/sublink"
                        >
                          <span className="text-slate-400 group-hover/sublink:text-[#080B10] transition-colors">
                            ›
                          </span>
                          <span className="leading-snug">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

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
        onMouseLeave={() => {
          setHoveredId(null);
          onMouseLeave();
        }}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 py-8 relative">
          
          {/* Header Row: Title & Close Button */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                E-Comet Services Architecture · Interactive Orbit Deck
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

          {/* Dynamic 2-Row Split-Deck Interactive Layout */}
          <div 
            className="space-y-5"
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* ROW 1: E-Commerce, Digital Marketing, Website Development */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 w-full items-stretch transition-[gap] duration-1000 lg:duration-[1400ms] ease-[cubic-bezier(0.25,1,0.35,1)]">
              {row1.map((pillar) => renderPillarCard(pillar, row1))}
            </div>

            {/* ROW 2: YouTube & Video, Creative Services, Integrated Solutions */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 w-full items-stretch transition-[gap] duration-1000 lg:duration-[1400ms] ease-[cubic-bezier(0.25,1,0.35,1)]">
              {row2.map((pillar) => renderPillarCard(pillar, row2))}
            </div>
          </div>

          {/* Bottom Bar: Brand Promise & Quote Action */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans font-medium text-slate-700">
                <strong>Need a tailored multi-pillar scope?</strong> E-Comet designs custom operational scopes across marketplaces, web, and performance marketing.
              </span>
            </div>

            <a 
              href="#closing"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white font-sans text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Get a Custom Quote →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
