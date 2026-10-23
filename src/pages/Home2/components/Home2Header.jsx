import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home2Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] text-[#FFFFFF] border-b border-[#262626]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Wordmark & Metadata */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/" className="flex items-center gap-2 group select-none">
            <span className="font-grotesk font-black text-lg sm:text-xl tracking-tight uppercase text-white">
              E-COMET
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 border border-[#333333] text-[#8A8A8A] uppercase">
              Report 2026
            </span>
          </Link>
          <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] border-l border-[#262626] pl-4">
            Digital Growth Agency
          </span>
        </div>

        {/* Desktop Quick Chapter Links (Inspired by Reference Report Bar) */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#A3A3A3]">
          <a href="#problem" className="px-3 py-1.5 hover:text-white transition-colors">
            01 / Problem
          </a>
          <span className="text-[#333333]">|</span>
          <a href="#services" className="px-3 py-1.5 hover:text-white transition-colors">
            02 / Five Orbits
          </a>
          <span className="text-[#333333]">|</span>
          <a href="#process" className="px-3 py-1.5 hover:text-white transition-colors">
            03 / Process
          </a>
          <span className="text-[#333333]">|</span>
          <a href="#timeline" className="px-3 py-1.5 hover:text-white transition-colors">
            04 / 30 Days
          </a>
          <span className="text-[#333333]">|</span>
          <a href="#audit" className="px-3 py-1.5 hover:text-white transition-colors">
            05 / Free Audit
          </a>
        </nav>

        {/* Right Action: CTA & Version Switcher */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="hidden sm:inline-flex items-center font-mono text-[11px] uppercase text-[#8A8A8A] hover:text-white px-2.5 py-1 border border-transparent hover:border-[#333333] transition-colors"
            title="Switch to original 3D Hero Home"
          >
            ← Home 1
          </Link>

          <a
            href="#audit"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#FFFFFF] text-[#000000] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors"
          >
            <span>Request Audit</span>
            <span>→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 text-white border border-[#333333] hover:bg-[#1A1A1A] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="font-mono text-xs uppercase">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#262626] px-6 py-6 font-mono text-xs uppercase space-y-4 text-[#A3A3A3]">
          <a 
            href="#problem" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 border-b border-[#1F1F1F] hover:text-white"
          >
            01 / The Problem
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 border-b border-[#1F1F1F] hover:text-white"
          >
            02 / Five Orbits (Services)
          </a>
          <a 
            href="#process" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 border-b border-[#1F1F1F] hover:text-white"
          >
            03 / How We Work (4 Steps)
          </a>
          <a 
            href="#timeline" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 border-b border-[#1F1F1F] hover:text-white"
          >
            04 / Your First 30 Days
          </a>
          <a 
            href="#audit" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 border-b border-[#1F1F1F] hover:text-white"
          >
            05 / Free Growth Audit
          </a>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-400 hover:text-white"
          >
            ← Return to Home 1
          </Link>
        </div>
      )}
    </header>
  );
}
