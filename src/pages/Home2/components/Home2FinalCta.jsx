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
    <section id="final-cta" className="relative pt-20 sm:pt-32 pb-0 bg-[#000000] text-[#FFFFFF] border-b border-[#262626] overflow-hidden">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 mb-16 sm:mb-24 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] block">
            {eyebrow}
          </span>
          <h2 className="font-grotesk font-bold text-[clamp(40px,6vw,90px)] leading-[0.92] tracking-[-0.04em] uppercase text-[#FFFFFF]">
            {headline}
          </h2>
          <p className="font-grotesk text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Mini Contact Form: Sharp, Flat, Editorial Black & White */}
        <div className="max-w-xl mx-auto bg-[#0A0A0A] border border-[#262626] p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-4 font-mono">
              <span className="text-2xl text-[#FFFFFF]">✓</span>
              <h3 className="font-grotesk font-bold text-xl uppercase text-[#FFFFFF]">
                Transmission Received.
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                A senior partner will review your digital footprint and WhatsApp you within 24 hours to coordinate audit access.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] mb-2">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#FFFFFF]"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8A8A8A] mb-2">
                  Primary Growth Focus
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#333333] text-[#FFFFFF] font-grotesk text-sm focus:outline-none focus:border-[#FFFFFF]"
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
                className="w-full py-4 bg-[#FFFFFF] hover:bg-[#E5E5E5] text-[#000000] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                <span>{submitting ? 'Transmitting...' : 'Request 48-Hour Growth Audit'}</span>
                <span>→</span>
              </button>

              <span className="block font-mono text-[10px] text-center text-[#666666] uppercase pt-2">
                *Zero sales pressure · 100% confidential
              </span>
            </form>
          )}
        </div>

      </div>

      {/* Giant Oversized E-COMET Wordmark (Cropped by Bottom of Viewport, Exact Match to Reference) */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none -mb-3 sm:-mb-6">
        <div className="font-grotesk font-black text-[clamp(90px,21vw,360px)] leading-[0.80] tracking-[-0.05em] text-[#141414] text-center uppercase whitespace-nowrap">
          {wordmark}
        </div>
      </div>

    </section>
  );
}
