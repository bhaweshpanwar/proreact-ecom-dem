import React, { useState } from 'react';

export default function Home2FinalCta({ data }) {
  const [selectedServices, setSelectedServices] = useState(['ecommerce', 'marketing']);
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
    eyebrow = "12 / INITIATE TRANSMISSION",
    headline = "Enter the next orbit.",
    subtext = "Request your 48-Hour Diagnostic Growth Audit or schedule a confidential briefing with our senior team."
  } = data || {};

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
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-emerald-400/30 text-xs font-mono font-medium text-slate-200 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{eyebrow}</span>
          </div>

          <h2 className="font-grotesk font-bold text-[clamp(40px,6vw,90px)] leading-[0.92] tracking-[-0.04em] uppercase text-[#FFFFFF] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {headline}
          </h2>
          <p className="font-grotesk text-sm sm:text-base text-[#D4D4D4] leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {subtext}
          </p>
        </div>

        {/* Enhanced Glassmorphic Form Card with Cyan/Emerald Accents */}
        <div className="max-w-3xl mx-auto bg-[#060D12]/85 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-6 sm:p-12 shadow-[0_30px_100px_rgba(4,47,46,0.6)] hover:border-emerald-400/35 transition-all duration-500 relative overflow-hidden">
          
          {/* Top Specular Edge Highlight in Emerald Tint */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent pointer-events-none" />

          {/* Ambient Inner Corner Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald-500/[0.06] blur-3xl pointer-events-none" />

          {/* Telemetry Status Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2 text-white/90 font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wider text-emerald-300">GROWTH TELEMETRY INTAKE</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#A3A3A3]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></span>
              <span>48-HOUR DIAGNOSTIC QUEUE: ACTIVE</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-6 font-sans">
              <div className="w-16 h-16 rounded-2xl border border-white bg-white text-black flex items-center justify-center text-2xl font-bold mx-auto shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                ✓
              </div>
              
              <div className="space-y-2">
                <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#8A8A8A]">
                  Transmission Confirmed
                </span>
                <h3 className="font-grotesk font-bold text-2xl sm:text-3xl uppercase text-[#FFFFFF]">
                  We Have Received Your Brief.
                </h3>
              </div>

              <p className="font-grotesk text-xs sm:text-sm text-[#A3A3A3] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth architect is personally reviewing your commercial footprint for <strong className="text-white">{formData.brand || 'your brand'}</strong>. We will deliver a tailored diagnostic blueprint to <span className="font-sans text-white font-semibold">{formData.email}</span> within 24–48 hours.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
                }}
                className="mt-4 px-6 py-3 rounded-xl border border-white/20 hover:border-white bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider font-semibold text-white transition-all cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Multi-Select Services Selection */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-[#FFFFFF] font-bold mb-3">
                  Select Scope &amp; Focus Areas <span className="text-[#8A8A8A] font-normal lowercase">(select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`text-left text-xs font-grotesk px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? 'bg-white text-black border-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-[1.02]'
                            : 'bg-white/[0.04] text-[#A3A3A3] border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.08]'
                        }`}
                      >
                        <span className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded-full text-[10px] ${
                          isSelected ? 'bg-black text-white font-black' : 'border border-[#666666] text-transparent'
                        }`}>
                          ✓
                        </span>
                        {srv.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Grid Inputs: Name, Brand, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A3A3A3] font-semibold mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                  />
                  {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A3A3A3] font-semibold mb-2">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Orbit Labs"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A3A3A3] font-semibold mb-2">
                    Business Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arjun@orbitlabs.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                  />
                  {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A3A3A3] font-semibold mb-2">
                    WhatsApp / Direct Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              {/* 3. Project Brief & Growth Objectives */}
              <div>
                <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A3A3A3] font-semibold mb-2">
                  Growth Objectives &amp; Specific Challenges <span className="text-[#666666] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your current monthly revenue, primary marketplaces, or where you're seeking higher efficiency..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all resize-none"
                />
              </div>

              {/* 4. Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4.5 rounded-xl bg-white hover:bg-emerald-50 text-black font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_50px_rgba(16,185,129,0.35)] hover:scale-[1.01] active:scale-[0.99] group disabled:opacity-50"
                >
                  <span>{submitting ? 'Transmitting Diagnostic Request...' : 'Request 48-Hour Growth Diagnostic Audit'}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-bold">→</span>
                </button>

                <div className="flex flex-wrap items-center justify-between pt-4 text-[11px] font-sans text-[#8A8A8A] uppercase tracking-wider gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Zero Sales Pressure
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> 100% Confidential NDA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-emerald-400">✓</span> Senior Partner Review
                  </span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>

    </section>
  );
}
