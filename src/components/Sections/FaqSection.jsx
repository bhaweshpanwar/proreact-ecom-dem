import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';

export default function FaqSection() {
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
        className={`group relative rounded-[24px] sm:rounded-[28px] bg-[#FAFAFA] border border-stone-200/90 transition-all duration-300 p-6 sm:p-7 overflow-hidden ${
          isOpen 
            ? 'bg-white border-[#080B10] shadow-[0_15px_35px_rgba(0,0,0,0.05)]' 
            : 'hover:bg-white hover:border-[#080B10] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]'
        }`}
      >
        <button 
          type="button" 
          onClick={() => toggleFaq(idx)}
          className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none"
          aria-expanded={isOpen}
        >
          <h3 className="font-serif text-lg sm:text-xl font-normal text-space-950 tracking-tight leading-snug group-hover:text-black transition-colors pr-2">
            {faq.q}
          </h3>
          <span 
            className={`w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-sm font-mono text-space-950 flex-shrink-0 transition-all duration-300 shadow-2xs ${
              isOpen ? 'rotate-45 bg-[#080B10] text-white border-[#080B10]' : 'group-hover:border-[#080B10]'
            }`}
          >
            +
          </span>
        </button>
        {isOpen && (
          <div className="pt-4 mt-4 border-t border-stone-200/70 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="text-slate-400 font-semibold select-none flex-shrink-0 mt-0.5">―</span>
              <p>{faq.a}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-3">
            06 · Questions &amp; Scope
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Direct answers on scope, marketplaces, tech stack, pricing models, and how we collaborate.
          </p>
        </div>

        {/* 2-Column Responsive FAQ Grid */}
        <div id="faq-accordions-wrap" className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
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
