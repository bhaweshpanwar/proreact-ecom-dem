import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

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
        className="faq-item bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
      >
        <button 
          type="button" 
          onClick={() => toggleFaq(idx)}
          className="faq-trigger w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base font-serif font-semibold text-space-950 pr-2">
            {faq.q}
          </span>
          <span 
            className={`faq-icon w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 ${
              isOpen ? 'bg-space-950 text-white rotate-45' : 'bg-slate-100 text-space-800'
            }`}
          >
            +
          </span>
        </button>
        {isOpen && (
          <div className="faq-content px-5 sm:px-6 pb-6 text-xs sm:text-sm text-space-600 leading-relaxed border-t border-slate-100 pt-3.5">
            {faq.a}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-14 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        <div className="rounded-container bg-mist p-8 sm:p-14 lg:p-16 border border-[#E4EAF0]/90 shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans text-space-600 uppercase tracking-widest font-semibold block mb-3">
              Questions &amp; Scope
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-5xl lg:text-6xl font-serif text-space-950 tracking-tight leading-tight mb-4">
              Frequently Asked <span className="italic text-ember">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-space-600 font-sans leading-relaxed">
              Direct answers on scope, marketplaces, tech stack, pricing models, and how we collaborate.
            </p>
          </div>

          <div id="faq-accordions-wrap" className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 w-full items-start">
            <div className="space-y-4 w-full">
              {col1.map((faq, idx) => renderFaqItem(faq, idx))}
            </div>
            <div className="space-y-4 w-full">
              {col2.map((faq, idx) => renderFaqItem(faq, idx + mid))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
