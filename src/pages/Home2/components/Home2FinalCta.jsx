import React, { useState } from 'react';

export default function Home2FinalCta({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'full-funnel'
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    eyebrow = "12 / INITIATE TRANSMISSION",
    headline = "Enter the next orbit.",
    subtext = "Request your 48-Hour Diagnostic Growth Audit or schedule a confidential briefing with our senior team.",
    wordmark = "E-COMET"
  } = data || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="final-cta" className="relative pt-20 sm:pt-32 pb-0 bg-[#040612] text-[#FFFFFF] border-b border-indigo-950/70 overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/15 blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 inline-block">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-black text-[clamp(40px,6vw,90px)] leading-[0.92] tracking-[-0.04em] uppercase text-[#FFFFFF]">
            {headline}
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Mini Contact Form: Sleek Glass Card with Colorful Elements */}
        <div className="max-w-xl mx-auto bg-[#070A1C]/80 border border-indigo-500/30 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl shadow-indigo-950/50">
          {submitted ? (
            <div className="text-center py-8 space-y-4 font-sans">
              <span className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </span>
              <h3 className="font-grotesk font-black text-2xl uppercase text-white">
                Transmission Received.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A senior partner will review your digital footprint and WhatsApp you within 24 hours to coordinate audit access.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040612] border border-white/10 text-white font-sans text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040612] border border-white/10 text-white font-sans text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Primary Growth Focus
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040612] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                >
                  <option value="marketplaces">Marketplace Management (Amazon / Flipkart)</option>
                  <option value="performance-ads">Performance Marketing (Google &amp; Meta Ads)</option>
                  <option value="web-development">D2C Web Architecture &amp; Shopify CRO</option>
                  <option value="creative-cinema">Creative, 3D CGI &amp; Video Production</option>
                  <option value="full-funnel">Full-Funnel Omnichannel Transformation</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-sans text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer mt-6 shadow-xl shadow-cyan-500/25"
              >
                <span>{submitting ? 'Transmitting...' : 'Request 48-Hour Growth Audit'}</span>
                <span>→</span>
              </button>

              <div className="flex items-center justify-between font-sans text-[11px] text-slate-400 uppercase pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span>✓</span> Zero sales pressure
                </span>
                <span className="text-slate-500">100% Confidential</span>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Giant Oversized E-COMET Wordmark with Cosmic Gradient */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-3 sm:-mb-6">
        <div className="font-grotesk font-black text-[clamp(90px,21vw,360px)] leading-[0.80] tracking-[-0.05em] bg-gradient-to-b from-white/15 via-cyan-500/10 to-transparent bg-clip-text text-transparent text-center uppercase whitespace-nowrap">
          {wordmark}
        </div>
      </div>

    </section>
  );
}
