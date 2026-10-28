import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ServiceDrawer({ service, onClose }) {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const content = (
    <aside 
      id="service-detail-drawer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-service-title"
      className="fixed top-20 bottom-0 right-0 max-w-md w-full bg-[#080B10]/95 text-white p-6 sm:p-8 shadow-[-25px_0_60px_rgba(0,0,0,0.8)] z-40 flex flex-col justify-between overflow-y-auto border-l border-white/15 backdrop-blur-2xl transition-all duration-300 animate-in slide-in-from-right"
    >
        <div>
          {/* Header Row with Distinct, High-Contrast Close Cross on Right */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
                Orbital Node · {service.id}
              </span>
            </div>

            {/* Prominent High-Visibility Close Cross Button */}
            <button 
              type="button" 
              onClick={onClose} 
              aria-label="Close service panel"
              title="Close panel (Esc)"
              className="w-10 h-10 rounded-none bg-white/20 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center border border-white/30 transition-all shadow-xl cursor-pointer group"
            >
              <svg 
                className="w-5 h-5 stroke-current stroke-2 transition-transform duration-200 group-hover:rotate-90" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="mt-6">
            <h3 id="drawer-service-title" className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white leading-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 font-medium tracking-wide">
              {service.tagline}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {service.desc}
            </p>
          </div>

          {/* Core Deliverables */}
          <div className="mt-8">
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Core Architecture Deliverables
            </h4>
            <ul className="space-y-3">
              {service.deliverables?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-sans">
                  <span className="text-slate-400 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col gap-3">
          <a 
            href={`/services/${service.id}`}
            className="w-full py-3.5 rounded-none bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
          >
            Explore Full Service Architecture →
          </a>
          <a 
            href="#closing" 
            onClick={onClose}
            className="w-full py-3.5 rounded-none bg-white text-[#080B10] hover:bg-slate-100 font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer text-center"
          >
            Book Priority Growth Audit
          </a>
        </div>
      </aside>
  );

  return ReactDOM.createPortal(content, document.body);
}
