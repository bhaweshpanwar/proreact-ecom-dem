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
    subtext = "Request your 48-Hour Diagnostic Growth Audit or schedule a confidential briefing with our senior team.",
    wordmark = "E-COMET"
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
    <section id="closing" className="relative pt-20 sm:pt-32 pb-0 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      <span id="final-cta" className="absolute -top-24 pointer-events-none" />
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8A8A8A] font-semibold block">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-bold text-[clamp(40px,6vw,90px)] leading-[0.92] tracking-[-0.04em] uppercase text-[#FFFFFF]">
            {headline}
          </h2>
          <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Full Contact & Audit Form: Sharp Editorial Black & White */}
        <div className="max-w-3xl mx-auto bg-[#0A0A0A] border border-[#262626] p-6 sm:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
          {submitted ? (
            <div className="text-center py-10 space-y-6 font-sans">
              <div className="w-16 h-16 border border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] flex items-center justify-center text-2xl font-bold mx-auto">
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
                className="mt-4 px-6 py-3 border border-[#333333] hover:border-[#FFFFFF] bg-[#000000] text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] transition-colors cursor-pointer"
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
                        className={`text-left text-xs font-grotesk px-4 py-2.5 border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FFFFFF] text-[#000000] border-[#FFFFFF] font-bold shadow-sm'
                            : 'bg-[#000000] text-[#A3A3A3] border-[#2E2E2E] hover:border-[#666666] hover:text-[#FFFFFF]'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {srv.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Grid Inputs: Name, Brand, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF] transition-colors"
                  />
                  {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold mb-2">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Orbit Labs"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold mb-2">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arjun@orbitlabs.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF] transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold mb-2">
                    WhatsApp / Direct Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF] transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              {/* 3. Project Brief & Growth Objectives */}
              <div>
                <label className="block font-sans text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold mb-2">
                  Growth Objectives &amp; Specific Challenges <span className="text-[#666666] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your current monthly revenue, primary marketplaces, or where you're seeking higher efficiency..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF] transition-colors resize-none"
                />
              </div>

              {/* 4. Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{submitting ? 'Transmitting Request...' : 'Request 48-Hour Growth Diagnostic Audit'}</span>
                  <span>→</span>
                </button>

                <div className="flex items-center justify-between pt-3 text-[10px] font-sans text-[#666666] uppercase tracking-wider">
                  <span>*Zero sales pressure</span>
                  <span>100% Confidential NDA</span>
                  <span>Senior Team Direct</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>

      {/* Giant Oversized E-COMET Wordmark */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-3 sm:-mb-6">
        <div className="font-grotesk font-black text-[clamp(90px,21vw,360px)] leading-[0.80] tracking-[-0.05em] text-[#141414] text-center uppercase whitespace-nowrap">
          {wordmark}
        </div>
      </div>

    </section>
  );
}
