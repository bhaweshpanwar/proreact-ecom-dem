import React from 'react';

export default function ServiceDrawer({ service, onClose }) {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-y-0 right-0 max-w-md w-full glass-panel-dark text-white p-8 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto animate-slideLeft border-l border-violet-500/30"
      style={{ backdropFilter: 'blur(24px)' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span 
              className="w-3.5 h-3.5 rounded-full" 
              style={{ backgroundColor: service.colorHex }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Orbital Node · {service.id}
            </span>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mt-6">
          <h3 className="font-serif text-3xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-indigo-300 font-medium">
            {service.tagline}
          </p>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Deliverables */}
        <div className="mt-8">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Core Architecture Deliverables
          </h4>
          <ul className="space-y-3">
            {service.deliverables?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-8 border-t border-white/10 flex flex-col gap-3">
        <a 
          href={`/services/${service.id}`}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          Explore Full Service Architecture →
        </a>
        <a 
          href="#closing" 
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/30"
        >
          Book Priority Growth Audit
        </a>
      </div>
    </div>
  );
}
