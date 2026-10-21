import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleMenu = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(prev => prev === menuName ? null : menuName);
  };

  return (
    <>
      <header id="main-header" className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-slate-200 shadow-sm z-50 flex items-center transition-all duration-300">
        <div className="w-full max-w-[1360px] h-full mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo: Clean bold sans-serif typography */}
          <Link to="/" className="flex items-center flex-shrink-0 text-decoration-none group py-1 select-none">
            <span className="font-sans font-black text-lg sm:text-xl tracking-tighter text-[#080B10] uppercase transition-colors">
              E-COMET OUTVERSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
            
            {/* Home */}
            <Link 
              to="/" 
              className="px-3.5 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors"
            >
              Home
            </Link>

            {/* Home2 */}
            <Link 
              to="/home2" 
              className="px-3.5 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors flex items-center gap-1.5"
            >
              <span>Home2</span>
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-100 text-[10px] font-mono font-bold text-cyan-800 border border-cyan-200">
                v2
              </span>
            </Link>

            {/* About Us */}
            <Link 
              to="/about-us" 
              className="px-3.5 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown (The 8 Practice Pillars Mega-Menu) */}
            <button
              type="button"
              onClick={() => toggleMenu('services')}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-900 transition-colors cursor-pointer ${
                activeMenu === 'services' ? 'bg-slate-100 text-black shadow-2xs' : 'hover:bg-slate-100/70'
              }`}
              aria-expanded={activeMenu === 'services'}
            >
              <span>Services</span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-200/90 text-[10px] font-mono font-bold text-slate-700">
                8 Pillars
              </span>
              <svg 
                className={`w-3.5 h-3.5 stroke-slate-500 fill-none stroke-[2.5] transition-transform duration-200 ${
                  activeMenu === 'services' ? 'rotate-180' : ''
                }`} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>


            {/* Marketplace */}
            <Link 
              to="/marketplace" 
              className="px-3.5 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors"
            >
              Marketplace
            </Link>

            {/* Contact Us */}
            <a 
              href="/#closing" 
              className="px-3.5 py-2 rounded-full font-sans text-[13.5px] font-semibold text-slate-800 hover:bg-slate-100/80 transition-colors"
            >
              Contact Us
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* WhatsApp Quick Chat */}
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Talk on WhatsApp"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Official Primary CTA Button */}
            <a 
              href="/#closing" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080B10] text-white font-sans text-xs font-semibold hover:bg-[#252B36] transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
            >
              <span>Get a Custom Quote</span>
              <span>→</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button" 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>

          </div>

        </div>
      </header>

      {/* The 6-Pillar Mega Menu Dropdown */}
      <MegaMenu 
        activeMenu={activeMenu} 
        onClose={() => setActiveMenu(null)} 
        onMouseEnter={handleMenuEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Drawer with 6 Pillars Accordion */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
