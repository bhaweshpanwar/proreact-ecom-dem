import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingSection() {
  const [selectedServices, setSelectedServices] = useState(['ecommerce', 'marketing']);
  const [targetMarket, setTargetMarket] = useState('both');
  const [businessStage, setBusinessStage] = useState('scaling');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);

  const serviceOptions = [
    { id: 'ecommerce', label: 'E-Commerce & Amazon/Flipkart', color: '#B7A27D' },
    { id: 'marketing', label: 'Digital Marketing & SEO', color: '#D9593A' },
    { id: 'web', label: 'Shopify / Web Development', color: '#5B7C99' },
    { id: 'video', label: 'YouTube & Commercial Video', color: '#F43F5E' },
    { id: 'creative', label: 'Branding & Social Creatives', color: '#B8737A' },
    { id: 'full-funnel', label: 'Full-Funnel Transformation', color: '#38BDF8' }
  ];

  const marketOptions = [
    { id: 'india', label: '🇮🇳 India Only' },
    { id: 'international', label: '🌐 Global / Export' },
    { id: 'both', label: '🚀 Domestic + Global' }
  ];

  const stageOptions = [
    { id: 'launch', label: 'New Brand / Pre-Launch' },
    { id: 'growing', label: '< ₹10L / month' },
    { id: 'scaling', label: '₹10L – ₹50L / month' },
    { id: 'enterprise', label: '₹50L+ Enterprise' }
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid business email.';
    if (!formData.phone.trim() || formData.phone.trim().length < 8) newErrors.phone = 'Please provide a valid phone or WhatsApp number.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  return (
    <section ref={sectionRef} id="closing" aria-labelledby="closing-heading" className="relative py-20 sm:py-28 bg-[#fafafa] overflow-hidden">
      
      {/* Ambient Celestial Flares */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-slate-200/50 via-slate-100/20 to-transparent blur-3xl rounded-full" aria-hidden="true"></div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Surrounding Container with Rich Stone Tone */}
        <div className="rounded-[2.5rem] bg-[#ECEAE4] p-6 sm:p-10 lg:p-16 border border-slate-300/80 shadow-sm relative overflow-hidden">

          {/* Background Subtle Space Map Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

          {/* Central Editorial Statement Header */}
          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-slate-300/60 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-ember animate-ping"></span>
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-space-950">
                INITIATE ORBIT · FAST TRACK CONSULTATION
              </span>
            </div>
            
            <h2 id="closing-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-space-950 leading-[1.08] tracking-tight mb-4">
              Growth, on a steady <span className="italic text-ember font-normal">orbit.</span>
            </h2>
            <p className="text-sm sm:text-base text-space-600 font-sans max-w-2xl mx-auto leading-relaxed">
              One unified growth agency to help your brand get discovered, dominate category marketplaces, and compound sustainable revenue.
            </p>
          </div>

          {/* ================================================================= */}
          {/* EXPANDED HIGH-CLASS MASTER CONTACT CARD (Wider, Taller, Bento)     */}
          {/* ================================================================= */}
          <div className="relative z-10 max-w-5xl lg:max-w-6xl mx-auto bg-white rounded-3xl sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] border border-slate-200/90 overflow-hidden">
            
            {submitted ? (
              /* Success Confirmation View */
              <div id="audit-form-success" className="p-10 sm:p-16 lg:p-20 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold mx-auto shadow-inner">
                  ✓
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700">
                    Transmission Acknowledged
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-space-950 font-normal">
                    Growth Plan Requested Successfully.
                  </h3>
                </div>

                <p className="text-sm text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
                  Thank you, <strong className="text-space-950">{formData.name}</strong>. Our senior growth architect is personally reviewing your digital footprint for <strong className="text-space-950">{formData.brand || 'your brand'}</strong>. We will deliver a customized strategic blueprint to <span className="font-mono text-space-950">{formData.email}</span> within 24–48 hours.
                </p>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                  >
                    <span>Fast-Track on WhatsApp Desk</span>
                    <span>→</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-space-950 text-xs font-semibold transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>

                <div className="pt-8 border-t border-slate-100 text-xs font-mono text-slate-500 flex flex-wrap justify-center gap-6">
                  <span>NDA: STRICTLY CONFIDENTIAL</span>
                  <span>TURNAROUND: 24-48 HOURS</span>
                  <span>NO SALES HARASSMENT</span>
                </div>
              </div>
            ) : (
              /* High-Class Dual-Column Form */
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Column: Strategic Value & Office Desk (5 Cols) */}
                <div className="lg:col-span-5 bg-gradient-to-b from-[#0E1218] to-[#151B24] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle Celestial Ambient Overlay */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-ember/15 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="relative z-10 space-y-6">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-2">
                        DIRECT STRATEGIST DESK
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-snug tracking-tight">
                        Let's engineer your brand's next orbital leap.
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-sans mt-3 leading-relaxed">
                        No junior salespeople or templated pitch decks. Your business is directly analyzed by senior performance and marketplace architects.
                      </p>
                    </div>

                    {/* 3 Executive Pillars of Assurance */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold text-sm">
                          ⚡
                        </div>
                        <div>
                          <strong className="text-xs font-sans font-semibold text-white block">
                            24–48h Custom Scope
                          </strong>
                          <span className="text-[11px] text-slate-400 leading-relaxed block">
                            Granular channel analysis, unit economics projection, and realistic timelines.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm">
                          🔒
                        </div>
                        <div>
                          <strong className="text-xs font-sans font-semibold text-white block">
                            100% NDA Protected
                          </strong>
                          <span className="text-[11px] text-slate-400 leading-relaxed block">
                            Your revenue metrics, brand roadmaps, and ad data are held in strict secrecy.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-sm">
                          🎯
                        </div>
                        <div>
                          <strong className="text-xs font-sans font-semibold text-white block">
                            Zero-Fluff Audit
                          </strong>
                          <span className="text-[11px] text-slate-400 leading-relaxed block">
                            Actionable critique on CAC, listing conversion rates, and ROAS friction points.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact & Location Info */}
                  <div className="relative z-10 pt-8 mt-8 border-t border-white/10 space-y-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[11px] font-bold uppercase tracking-wider">Desks Active · Accepting Q4 Brands</span>
                    </div>
                    <div className="flex flex-col gap-1 text-[11px]">
                      <span>Email: <strong className="text-white">contact@ecomet.agency</strong></span>
                      <span>Headquarters: <strong className="text-white">Indore, MP, India</strong></span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Generous Interactive Lead Form (7 Cols) */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
                  
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    
                    {/* Header info inside form */}
                    <div className="border-b border-slate-100 pb-4">
                      <h4 className="font-serif text-xl sm:text-2xl text-space-950 font-normal">
                        Request Your Strategic Blueprint
                      </h4>
                      <p className="text-xs text-slate-500 font-sans mt-1">
                        Fill in your details below and our partners will prepare a customized assessment.
                      </p>
                    </div>

                    {/* Row 1: Name & Brand Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="audit-name" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-ember">*</span>
                        </label>
                        <input
                          type="text"
                          id="audit-name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-xs sm:text-sm text-space-950 placeholder-slate-400 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 ${
                            errors.name ? 'border-ember bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        />
                        {errors.name && <span className="text-[11px] text-ember mt-1 block font-sans">{errors.name}</span>}
                      </div>

                      <div>
                        <label htmlFor="audit-brand" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Brand / Business Name
                        </label>
                        <input
                          type="text"
                          id="audit-brand"
                          name="brand"
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                          placeholder="e.g. Zen Botanics"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs sm:text-sm text-space-950 placeholder-slate-400 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone/WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="audit-email" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Business Email <span className="text-ember">*</span>
                        </label>
                        <input
                          type="email"
                          id="audit-email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-xs sm:text-sm text-space-950 placeholder-slate-400 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 ${
                            errors.email ? 'border-ember bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        />
                        {errors.email && <span className="text-[11px] text-ember mt-1 block font-sans">{errors.email}</span>}
                      </div>

                      <div>
                        <label htmlFor="audit-phone" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp <span className="text-ember">*</span>
                        </label>
                        <input
                          type="tel"
                          id="audit-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-xs sm:text-sm text-space-950 placeholder-slate-400 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 ${
                            errors.phone ? 'border-ember bg-rose-50/30' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        />
                        {errors.phone && <span className="text-[11px] text-ember mt-1 block font-sans">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Row 3: Interactive Multi-Select Service Pills */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider">
                          Services Interested In <span className="text-slate-400 font-normal font-sans">(Select all that apply)</span>
                        </label>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => {
                          const isSelected = selectedServices.includes(opt.id);
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => toggleService(opt.id)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium transition-all flex items-center gap-2 cursor-pointer ${
                                isSelected
                                  ? 'bg-space-950 text-white shadow-sm ring-1 ring-space-950 scale-[1.02]'
                                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80'
                              }`}
                            >
                              <span 
                                className="w-2 h-2 rounded-full" 
                                style={{ backgroundColor: isSelected ? '#38BDF8' : opt.color }}
                              />
                              <span>{opt.label}</span>
                              {isSelected && <span className="text-[10px] text-cyan-300">✓</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 4: Target Market & Business Stage Selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Target Geography
                        </label>
                        <select
                          value={targetMarket}
                          onChange={(e) => setTargetMarket(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs sm:text-sm text-space-950 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 cursor-pointer"
                        >
                          {marketOptions.map((m) => (
                            <option key={m.id} value={m.id}>{m.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                          Current Monthly Scale
                        </label>
                        <select
                          value={businessStage}
                          onChange={(e) => setBusinessStage(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs sm:text-sm text-space-950 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 cursor-pointer"
                        >
                          {stageOptions.map((s) => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Notes / Roadblocks textarea */}
                    <div>
                      <label htmlFor="audit-message" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-1.5">
                        Current Friction or Growth Goals <span className="text-slate-400 font-normal font-sans">(Optional)</span>
                      </label>
                      <textarea
                        id="audit-message"
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Need help lowering Amazon ACOS and rebuilding Shopify store for higher conversion..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 text-xs sm:text-sm text-space-950 placeholder-slate-400 transition-all font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 resize-none"
                      />
                    </div>

                    {/* Submit CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 rounded-full bg-space-950 hover:bg-space-900 text-white text-xs sm:text-sm font-sans font-semibold tracking-wide transition-all shadow-md hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span>Synthesizing Growth Parameters...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Custom Growth Blueprint</span>
                            <span>→</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Footnote reassurance */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-sans gap-2 text-center sm:text-left">
                      <span>🔒 Confidentiality assured. No spam or third-party sharing.</span>
                      <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-mono font-medium">
                        Prefer WhatsApp? Chat directly →
                      </a>
                    </div>

                  </form>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
