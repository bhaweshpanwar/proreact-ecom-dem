import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';

export default function Home2QuantumFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  const mid = Math.ceil(FAQS_DATA.length / 2);
  const col1 = FAQS_DATA.slice(0, mid);
  const col2 = FAQS_DATA.slice(mid);

  const renderFaqItem = (faq, idx) => {
    const isOpen = openIndex === idx;
    return (
      <div 
        key={idx}
        onClick={() => toggleFaq(idx)}
        className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer overflow-hidden ${
          isOpen
            ? 'bg-[#0E1528] border-cyan-500/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
            : 'bg-[#080D1A]/80 border-white/10 hover:border-white/25 hover:bg-[#0C1222]'
        }`}
      >
        <button 
          type="button" 
          onClick={(e) => { e.stopPropagation(); toggleFaq(idx); }}
          className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
          aria-expanded={isOpen}
        >
          <h3 className="font-serif text-lg sm:text-xl text-white font-normal leading-snug group-hover:text-cyan-200 transition-colors pr-2">
            {faq.q}
          </h3>
          <span 
            className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm font-mono flex-shrink-0 transition-all duration-300 ${
              isOpen ? 'rotate-45 bg-cyan-400 text-black border-cyan-400' : 'text-slate-400 group-hover:text-white'
            }`}
          >
            +
          </span>
        </button>

        {isOpen && (
          <div className="pt-4 mt-4 border-t border-white/10 text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="text-cyan-400 font-bold select-none mt-0.5">―</span>
              <p>{faq.a}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="relative py-24 sm:py-36 bg-[#040713] text-white overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-3">
            06 · Mission Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12] mb-4">
            Answers on Scope, <br />
            <span className="italic bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Pricing &amp; Speed to Market.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Direct, technical answers about marketplaces, ad accounts, deliverables, and how we integrate into your business.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          <div className="space-y-4 sm:space-y-5 w-full">
            {col1.map((faq, idx) => renderFaqItem(faq, idx))}
          </div>
          <div className="space-y-4 sm:space-y-5 w-full">
            {col2.map((faq, idx) => renderFaqItem(faq, idx + mid))}
          </div>
        </div>

      </div>
    </section>
  );
}
