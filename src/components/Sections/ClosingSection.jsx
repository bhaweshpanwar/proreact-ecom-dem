import React, { useState, useRef } from 'react';

export default function ClosingSection() {
  const [selectedServices, setSelectedServices] = useState(['ecommerce', 'marketing']);
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
    { id: 'ecommerce', label: 'E-Commerce & Marketplaces (Amazon / Flipkart)' },
    { id: 'marketing', label: 'Performance Marketing & SEO' },
    { id: 'web', label: 'D2C Shopify & Web Architecture' },
    { id: 'video', label: 'Commercial Video & YouTube Production' },
    { id: 'creative', label: 'Brand Identity & Social Creative' },
    { id: 'full-funnel', label: 'Full-Funnel Transformation' }
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
    }, 600);
  };

  return (
    <section ref={sectionRef} id="closing" aria-labelledby="closing-heading" className="relative py-20 sm:py-32 bg-white overflow-hidden hairline-b">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 id="closing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 font-normal tracking-tight leading-[1.15] mb-4">
            Growth, on a steady <span className="italic text-blue-600 font-normal">orbit.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Connect directly with our senior partners. We analyze your commercial footprint and craft an actionable execution blueprint.
          </p>
        </div>

        {/* Form Card matching Upper Cards UI */}
        <div className="relative z-10 max-w-3xl mx-auto rounded-[28px] sm:rounded-[32px] bg-[#FAFAFA] border border-stone-200/90 p-8 sm:p-12 lg:p-14 hover:bg-white hover:border-space-950 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500">
          
          {submitted ? (
            /* Success Confirmation View */
            <div id="audit-form-success" className="py-8 sm:py-12 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl font-bold mx-auto border border-emerald-200 shadow-2xs">
                <svg className="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-700">
                  Consultation Request Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-space-950 font-normal">
                  We Have Received Your Brief.
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-space-950">{formData.name}</strong>. Our senior growth architect is personally reviewing your digital and marketplace presence for <strong className="text-space-950">{formData.brand || 'your brand'}</strong>. We will deliver a tailored blueprint to <span className="font-mono text-space-950">{formData.email}</span> within 24–48 hours.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-space-950 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <span>Direct WhatsApp Desk</span>
                  <span>→</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-space-950 text-xs font-semibold transition-all"
                >
                  Submit Another Brief
                </button>
              </div>

              <div className="pt-6 border-t border-stone-200/60 text-[11px] font-mono text-slate-400 flex flex-wrap justify-center gap-6">
                <span>STRICT NDA CONFIDENTIALITY</span>
                <span>24-48 HOUR TURNAROUND</span>
                <span>NO SALES PRESSURE</span>
              </div>
            </div>
          ) : (
            /* Clean, Harmonious Single-Card Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name & Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="audit-name" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="audit-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white border text-xs sm:text-sm text-space-950 placeholder-stone-400 transition-all font-sans hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 shadow-2xs ${
                      errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200/90'
                    }`}
                  />
                  {errors.name && <span className="text-[11px] text-rose-500 mt-1 block font-sans">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="audit-brand" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    id="audit-brand"
                    name="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Zen Botanics"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200/90 text-xs sm:text-sm text-space-950 placeholder-stone-400 transition-all font-sans hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 shadow-2xs"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="audit-email" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2">
                    Business Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="audit-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white border text-xs sm:text-sm text-space-950 placeholder-stone-400 transition-all font-sans hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 shadow-2xs ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200/90'
                    }`}
                  />
                  {errors.email && <span className="text-[11px] text-rose-500 mt-1 block font-sans">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="audit-phone" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2">
                    Phone / WhatsApp <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="audit-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white border text-xs sm:text-sm text-space-950 placeholder-stone-400 transition-all font-sans hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 shadow-2xs ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-stone-200/90'
                    }`}
                  />
                  {errors.phone && <span className="text-[11px] text-rose-500 mt-1 block font-sans">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 3: Simple Service Selector Pills */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2.5">
                  Services Needed <span className="text-slate-400 font-normal font-sans">(Select one or more)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedServices.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleService(opt.id)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-sans font-medium transition-all flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-space-950 text-white shadow-xs border border-space-950'
                            : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200/90'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-stone-300'}`} />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Brief Message / Objectives */}
              <div>
                <label htmlFor="audit-message" className="block text-[11px] font-mono font-bold text-space-950 uppercase tracking-wider mb-2">
                  Growth Goals / Current Challenges <span className="text-slate-400 font-normal font-sans">(Optional)</span>
                </label>
                <textarea
                  id="audit-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your category, target timeline, or channels you want to accelerate..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200/90 text-xs sm:text-sm text-space-950 placeholder-stone-400 transition-all font-sans hover:border-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-space-950 shadow-2xs resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-full bg-space-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-sans font-semibold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Preparing Consultation Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Custom Growth Blueprint</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Reassurances (Zero Emojis, Clean Typography) */}
              <div className="pt-4 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-sans gap-2 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Strict NDA Protected
                  </span>
                  <span>·</span>
                  <span>Senior Strategist Review</span>
                </div>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-space-950 underline font-mono text-[11px]"
                >
                  Direct WhatsApp Desk →
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
