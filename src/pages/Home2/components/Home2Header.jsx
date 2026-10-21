import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home2Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060813]/90 backdrop-blur-md text-[#FFFFFF] border-b border-indigo-950/60 shadow-lg shadow-black/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Wordmark & Metadata */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/home2" className="flex items-center gap-2.5 group select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
            <span className="font-grotesk font-black text-lg sm:text-xl tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">
              E-COMET
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 uppercase tracking-wider">
              Edition 2026
            </span>
          </Link>
          <span className="hidden md:inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-l border-white/10 pl-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Telemetry Active · Orbit 01</span>
          </span>
        </div>

        {/* Desktop Quick Chapter Links */}
        <nav className="hidden lg:flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wider text-slate-300">
          <a href="#problem" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            01 / Problem
          </a>
          <span className="text-slate-700">·</span>
          <a href="#services" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            02 / Five Orbits
          </a>
          <span className="text-slate-700">·</span>
          <a href="#process" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            03 / Process
          </a>
          <span className="text-slate-700">·</span>
          <a href="#timeline" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            04 / 30 Days
          </a>
          <span className="text-slate-700">·</span>
          <a href="#audit" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            05 / Free Audit
          </a>
          <span className="text-slate-700">·</span>
          <a href="#pricing" className="px-3 py-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all">
            06 / Pricing
          </a>
        </nav>

        {/* Right Action: CTA & Version Switcher */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="hidden sm:inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase text-slate-300 hover:text-white px-3 py-1.5 rounded-md border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all"
            title="Switch to original 3D Hero Home"
          >
            <span>← Home 1</span>
          </Link>

          <a
            href="#audit"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-sans text-xs font-bold uppercase tracking-wider shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
          >
            <span>Request Audit</span>
            <span>→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="lg:hidden p-2 text-white border border-white/10 hover:bg-white/5 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="font-sans text-xs font-bold uppercase">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A18] border-b border-indigo-950/80 px-6 py-6 font-sans text-xs uppercase font-semibold space-y-3 text-slate-300">
          <a 
            href="#problem" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            01 / The Problem
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            02 / Five Orbits (Services)
          </a>
          <a 
            href="#process" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            03 / How We Work (4 Steps)
          </a>
          <a 
            href="#timeline" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            04 / Your First 30 Days
          </a>
          <a 
            href="#audit" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            05 / Free Growth Audit
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2.5 border-b border-white/5 hover:text-cyan-400"
          >
            06 / Pricing Clarity
          </a>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-cyan-400 hover:text-white"
          >
            ← Return to Home 1
          </Link>
        </div>
      )}
    </header>
  );
}
