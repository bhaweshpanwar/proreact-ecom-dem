import React, { useState, useRef, useEffect } from 'react';

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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65;
      videoRef.current.play().catch(() => {});
    }
  }, []);

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
    <section 
      ref={sectionRef} 
      id="closing" 
      aria-labelledby="closing-heading" 
      className="relative py-24 sm:py-36 bg-[#000000] text-white overflow-hidden min-h-[920px] flex items-center justify-center select-none"
    >
      {/* ===================================================================== */}
      {/* 1. CINEMATIC BACKGROUND VIDEO OF ASTEROID MOVING IN DEEP SPACE        */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.65; }}
          className="w-full h-full object-cover opacity-70 scale-105"
        >
          <source src="/assets/why-video.mp4" type="video/mp4" />
          <source src="/197387-904825088.mp4" type="video/mp4" />
        </video>

        {/* Ambient Vignette & Deep Space Atmosphere */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#000000]/85 via-black/40 to-[#000000]/90" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: 'radial-gradient(circle at 50% 45%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 80%, #000000 100%)'
          }}
          aria-hidden="true"
        />

        {/* Subtle Ambient Spotlight */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 pointer-events-none bg-white"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-8 relative z-10">
        
        {/* ===================================================================== */}
        {/* 2. SECTION HEADER WITH COSMIC TELEMETRY BADGE                         */}
        {/* ===================================================================== */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-slate-200 mb-6 shadow-lg">
            <span>E-COMET PRACTICE DESK · DIRECT COMMERCIAL ACCESS</span>
          </div>

          <h2 id="closing-heading" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight leading-[1.08] mb-4">
            Growth, on a steady <span className="italic text-white font-normal">orbit.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
            Connect directly with our senior partners. We analyze your commercial footprint and craft an actionable execution blueprint.
          </p>
        </div>

        {/* ===================================================================== */}
        {/* 3. AESTHETIC GLASSMORPHIC FORM CONTAINER                              */}
        {/* ===================================================================== */}
        <div className="relative z-10 max-w-3xl mx-auto rounded-[32px] sm:rounded-[38px] bg-black/60 backdrop-blur-2xl border border-white/20 p-8 sm:p-12 lg:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.85)] hover:border-white/30 transition-all duration-500 overflow-hidden">
          
          {/* Top Specular Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
          
          {/* Ambient Inner Corner Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />

          {submitted ? (
            /* Success Confirmation View */
            <div id="audit-form-success" className="py-8 sm:py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl font-bold mx-auto border border-emerald-400/30 shadow-[0_0_30px_rgba(52,211,153,0.25)]">
                <svg className="w-7 h-7 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Consultation Request Confirmed
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-white font-normal">
                  We Have Received Your Brief.
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth architect is personally reviewing your digital and marketplace presence for <strong className="text-white">{formData.brand || 'your brand'}</strong>. We will deliver a tailored blueprint to <span className="font-mono text-white font-semibold">{formData.email}</span> within 24–48 hours.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-space-950 text-xs font-semibold shadow-md transition-all hover:scale-105"
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
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 text-[11px] font-mono text-slate-400 flex flex-wrap justify-center gap-6">
                <span>STRICT NDA CONFIDENTIALITY</span>
                <span>24-48 HOUR TURNAROUND</span>
                <span>ZERO OBLIGATION AUDIT</span>
              </div>
            </div>
          ) : (
            /* Clean, Aesthetic Form on Moving Asteroid */
            <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
              
              {/* Row 1: Name & Brand Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="audit-name" className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="audit-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.14] border text-xs sm:text-sm text-white placeholder-slate-400 transition-all font-sans focus:outline-none focus:ring-1 focus:ring-white/40 shadow-inner ${
                      errors.name ? 'border-rose-400/90 bg-rose-500/10' : 'border-white/15 focus:border-white/50'
                    }`}
                  />
                  {errors.name && <span className="text-[11px] text-rose-400 mt-1.5 block font-sans">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="audit-brand" className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    id="audit-brand"
                    name="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Zen Botanics"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.14] border border-white/15 focus:border-white/50 text-xs sm:text-sm text-white placeholder-slate-400 transition-all font-sans focus:outline-none focus:ring-1 focus:ring-white/40 shadow-inner"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="audit-email" className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Business Email <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="audit-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.14] border text-xs sm:text-sm text-white placeholder-slate-400 transition-all font-sans focus:outline-none focus:ring-1 focus:ring-white/40 shadow-inner ${
                      errors.email ? 'border-rose-400/90 bg-rose-500/10' : 'border-white/15 focus:border-white/50'
                    }`}
                  />
                  {errors.email && <span className="text-[11px] text-rose-400 mt-1.5 block font-sans">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="audit-phone" className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Phone / WhatsApp <span className="text-slate-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="audit-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-5 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.14] border text-xs sm:text-sm text-white placeholder-slate-400 transition-all font-sans focus:outline-none focus:ring-1 focus:ring-white/40 shadow-inner ${
                      errors.phone ? 'border-rose-400/90 bg-rose-500/10' : 'border-white/15 focus:border-white/50'
                    }`}
                  />
                  {errors.phone && <span className="text-[11px] text-rose-400 mt-1.5 block font-sans">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 3: Simple Service Selector Pills */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2.5">
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
                            ? 'bg-white text-space-950 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white scale-[1.02]'
                            : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 border border-white/15 hover:border-white/25'
                        }`}
                      >
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Brief Message / Objectives */}
              <div>
                <label htmlFor="audit-message" className="block text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Growth Goals / Current Challenges <span className="text-slate-400 font-normal font-sans">(Optional)</span>
                </label>
                <textarea
                  id="audit-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your category, target timeline, or channels you want to accelerate..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.14] border border-white/15 focus:border-white/50 text-xs sm:text-sm text-white placeholder-slate-400 transition-all font-sans focus:outline-none focus:ring-1 focus:ring-white/40 shadow-inner resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-full bg-white hover:bg-slate-100 text-space-950 text-xs sm:text-sm font-sans font-semibold tracking-wide transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-space-950/30 border-t-space-950 rounded-full animate-spin" />
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

              {/* Trust Reassurances */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-sans gap-3 text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <span>Strict NDA Protected</span>
                  <span>·</span>
                  <span>Senior Strategist Review</span>
                </div>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:underline transition-colors font-mono text-[11px]"
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
