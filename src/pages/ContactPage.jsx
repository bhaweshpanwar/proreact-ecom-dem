import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Sections/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    service: 'Amazon & Marketplaces',
    budget: '$5,000 - $15,000 / mo',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const serviceOptions = [
    'Amazon & Marketplaces',
    'Google Ads (Search & Shopping)',
    'Meta Advantage+ Funnels',
    'Technical & Organic SEO',
    'Custom Shopify & Web Architecture',
    'Video Production & Creative'
  ];

  const budgetOptions = [
    '< ₹1,00,000 / mo (Seed)',
    '₹1,00,000 - ₹5,00,000 / mo (Growth)',
    '₹5,00,000 - ₹20,00,000 / mo (Scale)',
    '₹20,00,000+ / mo (Enterprise)'
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFCFB] text-[#0A0D14] font-sans antialiased pt-28">
      
      {/* 1. Header / Breadcrumb & Title Section */}
      <section className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 border-b border-slate-200/80">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Contact & Growth Audit</span>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E4572E] animate-pulse"></span>
            Direct Partner Access · 24-Hour Guaranteed Response
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#080B10] uppercase mb-6 leading-[1.08]">
            Let’s Engineer Your Next <span className="text-[#E4572E]">Digital Orbit.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
            Speak directly with our senior growth architects. No pitch teams passing work to junior interns, no tiered ticketing queues, and zero vendor fragmentation.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid (Direct Details Left · Interactive Form Right) */}
      <section className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Direct Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Primary Email Channels Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E4572E]">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Direct Inquiries</div>
                  <h3 className="text-lg font-bold text-slate-900">Official Email Channels</h3>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* Global Email */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between group hover:bg-slate-100/70 transition-colors">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 block">International & Global Operations</span>
                    <a href="mailto:info@e-cometoutverse.com" className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#E4572E] transition-colors break-all">
                      info@e-cometoutverse.com
                    </a>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleCopyEmail('info@e-cometoutverse.com')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail === 'info@e-cometoutverse.com' ? (
                      <span className="text-[11px] font-mono font-bold text-emerald-600">Copied!</span>
                    ) : (
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                  </button>
                </div>

                {/* Regional India Email */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between group hover:bg-slate-100/70 transition-colors">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 block">India Domestic & Regional Growth</span>
                    <a href="mailto:info@e-cometoutverse.in" className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#E4572E] transition-colors break-all">
                      info@e-cometoutverse.in
                    </a>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleCopyEmail('info@e-cometoutverse.in')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail === 'info@e-cometoutverse.in' ? (
                      <span className="text-[11px] font-mono font-bold text-emerald-600">Copied!</span>
                    ) : (
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Physical Headquarters Address */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                  <h3 className="text-lg font-bold text-slate-900">Operations & Creative Lab</h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  E-COMET OUTVERSE Architecture
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Greater Area, Indore,<br />
                  Madhya Pradesh — 452001, India
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Operating Timezone:</span>
                  <span className="font-bold text-slate-800">IST (UTC +5:30)</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Hotline */}
            <div className="p-6 rounded-2xl bg-[#080B10] text-white border border-slate-800 shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Direct Live Channel
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">Need Immediate Consultation?</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Message our senior partner directly for immediate campaign triage or marketplace emergencies.
                  </p>
                </div>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                  aria-label="Direct WhatsApp Hotline"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Official Social Media Channels (Demo handles) */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Digital Presence & Media
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-slate-400 text-center transition-all group"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#E4572E] block">Instagram</span>
                  <span className="text-[10px] text-slate-400 font-mono">@ecomet.agency</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-slate-400 text-center transition-all group"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 block">LinkedIn</span>
                  <span className="text-[10px] text-slate-400 font-mono">ecomet-agency</span>
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-slate-400 text-center transition-all group"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover:text-red-600 block">YouTube</span>
                  <span className="text-[10px] text-slate-400 font-mono">@ecometgrowth</span>
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-slate-400 text-center transition-all group"
                >
                  <span className="text-xs font-bold text-slate-800 group-hover:text-slate-900 block">X / Twitter</span>
                  <span className="text-[10px] text-slate-400 font-mono">@ecomet_agency</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Comprehensive Growth Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
              
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-3">
                    Audit Request Received.
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
                    Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our growth partners will review your brand details and reply with a structured growth blueprint to <span className="font-bold text-slate-800">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        brand: '',
                        service: 'Amazon & Marketplaces',
                        budget: '$5,000 - $15,000 / mo',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E4572E] block mb-1">
                      Start Your Evaluation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                      Request a Confidential Growth Audit
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      We sign bilateral NDAs before accessing ad accounts or marketplace catalogues.
                    </p>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      1. Core Practice Area You Need:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, service: opt }))}
                          className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                            formData.service === opt
                              ? 'bg-slate-950 text-white border-slate-950 shadow-2xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Brand / Storefront URL
                      </label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                        placeholder="yourbrand.com or Amazon Store"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Monthly Budget Range */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Estimated Monthly Marketing / Commercial Scope:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                          className={`px-3 py-2 rounded-xl text-[11px] font-semibold text-center border transition-all ${
                            formData.budget === b
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Objectives */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current Bottleneck or Target Revenue Objective:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Briefly describe what you are looking to scale (e.g., reduce Amazon TACOS, improve organic rankings, build custom Shopify store)..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#080B10] text-white font-bold text-sm uppercase tracking-wider hover:bg-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Request Free Commercial Growth Audit</span>
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                    <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400 font-mono">
                      <span>✓ 100% Confidential</span>
                      <span>•</span>
                      <span>✓ Bilateral NDA Guaranteed</span>
                      <span>•</span>
                      <span>✓ Zero Spam</span>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
