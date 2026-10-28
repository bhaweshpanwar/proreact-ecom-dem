import React, { useState } from 'react';

export default function Home2FinalCta({ data }) {
  const [selectedServices, setSelectedServices] = useState(['marketplace', 'marketing']);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    eyebrow = "Contact Us",
    headline = "Enter the next orbit.",
    subtext = "Request your growth diagnostic or schedule a direct consultation with our senior team."
  } = data || {};

  const serviceOptions = [
    { id: 'marketplace', label: 'Marketplace Management (Amazon · Flipkart · Quick Commerce)' },
    { id: 'marketing', label: 'Digital Marketing (Meta · Google Ads · SEO · AI Search)' },
    { id: 'web', label: 'Website Development (Shopify · WordPress · Custom Web)' },
    { id: 'creative', label: 'Creatives & Graphic Design (Branding · Ad Creatives)' },
    { id: 'photography', label: 'Photography & Photoshoots (Product · Catalogue · Commercial)' },
    { id: 'video', label: 'Video Production & Editing (Reels · Ads · YouTube Films)' },
    { id: 'youtube', label: 'YouTube Strategy & Channel Growth (YouTube SEO · Channel Management)' },
    { id: 'integrated', label: 'Integrated Digital Solutions (Full-Funnel Growth Framework)' },
    { id: 'custom', label: 'Custom Advisory & Strategic Consulting' }
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
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid business email.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="closing" className="relative pt-20 sm:pt-32 pb-20 sm:pb-32 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      <span id="final-cta" className="absolute -top-24 pointer-events-none" />
      
      {/* Cinematic Deep-Space Video with Unique Emerald-Cyan / Deep Teal Aurora Shade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.65; }}
          className="w-full h-full object-cover opacity-75 scale-105"
          style={{
            filter: 'contrast(1.2) brightness(0.9) saturate(1.3)'
          }}
        >
          <source src="/assets/why-video.mp4" type="video/mp4" />
          <source src="/197387-904825088.mp4" type="video/mp4" />
        </video>

        {/* 1. Unique Cyan-Emerald / Celestial Teal Duotone Color Shade Layer */}
        <div 
          className="absolute inset-0 mix-blend-color opacity-90 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #042f2e 0%, #0d9488 35%, #0284c7 75%, #082f49 100%)'
          }}
        />

        {/* 2. Luminous Deep-Ocean / Emerald Aurora Highlights */}
        <div 
          className="absolute inset-0 mix-blend-screen opacity-55 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(20, 184, 166, 0.45) 0%, rgba(6, 78, 59, 0.3) 50%, transparent 80%)'
          }}
        />

        {/* 3. Deep Vignette to Anchor High Contrast for Typography and Form */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/50 to-[#020617]/95 pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-75 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 45%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 75%, #000000 100%)'
          }}
        />

        {/* 4. Moving Aurora Breathing Glow behind the Form */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1050px] h-[700px] sm:h-[950px] rounded-full blur-[170px] opacity-35 bg-gradient-to-tr from-emerald-500/40 via-teal-400/35 to-cyan-500/35 pointer-events-none animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-medium text-slate-200 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{eyebrow}</span>
          </div>

          <h2 className="font-grotesk font-bold text-[clamp(26px,4.5vw,64px)] leading-tight tracking-[-0.03em] uppercase text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] whitespace-nowrap">
            {headline}
          </h2>
          <p className="font-grotesk text-sm sm:text-base text-[#D4D4D4] leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {subtext}
          </p>
        </div>

        {/* Clean, Welcoming White Form Card - Wide with Sharp Form Corners (0 Border Radius) */}
        <div className="max-w-6xl mx-auto bg-white text-slate-900 rounded-none p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.65)] relative overflow-hidden border border-slate-200">
          
          {/* Top Form Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
            <div>
              <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
                Contact Us
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-grotesk">
                Tell us about your brand, challenges, and commercial priorities. We will respond within 24 hours.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Direct Senior Review
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> 100% Confidential
              </span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-6 font-sans">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-2xl font-bold mx-auto shadow-sm">
                ✓
              </div>
              
              <div className="space-y-2">
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Message Received
                </span>
                <h3 className="font-grotesk font-bold text-2xl sm:text-3xl text-slate-900 uppercase">
                  Thank you for reaching out.
                </h3>
              </div>

              <p className="font-grotesk text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior team is reviewing your requirements for <strong className="text-slate-900">{formData.brand || 'your brand'}</strong>. We will get back to you at <span className="font-sans text-slate-900 font-semibold">{formData.email}</span> within 24 hours.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
                }}
                className="mt-4 px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-slate-50 hover:bg-slate-100 text-xs uppercase tracking-wider font-semibold text-slate-900 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (5 of 12 cols): 9 Services Selector with Rounded Buttons */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-baseline justify-between mb-1">
                  <label className="block font-sans text-xs uppercase tracking-wider text-slate-900 font-bold">
                    Select Services &amp; Focus Areas
                  </label>
                  <span className="text-[11px] font-sans text-slate-500 font-normal lowercase">
                    (select all that apply)
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`text-left text-xs font-grotesk px-3.5 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between w-full ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs scale-[1.01]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <span className="pr-2 leading-snug">{srv.label}</span>
                        <span className={`inline-flex items-center justify-center w-3.5 h-3.5 shrink-0 rounded-full text-[10px] font-bold transition-colors ${
                          isSelected ? 'bg-white text-slate-900 font-black' : 'border border-slate-300 text-transparent'
                        }`}>
                          ✓
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column (7 of 12 cols): Rounded Inputs, Textarea, Button */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Name & Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-grotesk text-sm focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10 transition-all"
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Brand / Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-grotesk text-sm focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-grotesk text-sm focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10 transition-all"
                    />
                    {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      WhatsApp / Direct Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-grotesk text-sm focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10 transition-all"
                    />
                    {errors.phone && <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Project Details &amp; Specific Goals <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-grotesk text-sm focus:outline-none focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10 transition-all resize-none"
                  />
                </div>

                {/* Rounded Submit Button + Badges */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-14 sm:h-16 rounded-xl bg-slate-900 hover:bg-black text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{submitting ? 'Sending Request...' : 'Send Message'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">→</span>
                  </button>

                  <div className="flex flex-wrap items-center justify-between pt-4 text-[11px] font-sans text-slate-500 uppercase tracking-wider gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span> Direct Senior Team Review
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span> 100% Confidential
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span> Fast Response Within 24 Hours
                    </span>
                  </div>
                </div>

              </div>

            </form>
          )}
        </div>

      </div>

    </section>
  );
}
