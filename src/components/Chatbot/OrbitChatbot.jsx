import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrbitChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Greetings! I am Cosmo, your E-Comet orbital guide. How can I assist your brand's growth trajectory today?",
      quickReplies: [
        'Audit my Amazon & Marketplace sales',
        'Explore Performance SEO & Ads',
        'Shopify & Web Development',
        'What are the standard pricing packages?',
        'Talk directly to a human strategist'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue.trim();
    if (!query) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      let actionLink = null;
      let actionLabel = null;
      const lower = query.toLowerCase();

      if (lower.includes('amazon') || lower.includes('marketplace') || lower.includes('flipkart')) {
        botResponse = "We manage end-to-end marketplace operations across Amazon, Flipkart, Blinkit, and Zepto — optimizing catalog hygiene, Buy Box defense, A+ content, and sponsored PPC advertising with strict unit economics.";
        actionLink = '/services/ecommerce-management';
        actionLabel = 'Explore E-Commerce Pillar →';
      } else if (lower.includes('pricing') || lower.includes('cost') || lower.includes('package')) {
        botResponse = "We offer 3 standardized pricing tiers: Orbit (Starter launchpad), Nova (Accelerated scale), and Cosmic (Omni-channel dominance). Custom quotes are confirmed per business scope.";
        actionLink = '/services/ecommerce-management#pricing';
        actionLabel = 'View Pricing Matrices →';
      } else if (lower.includes('web') || lower.includes('shopify') || lower.includes('develop')) {
        botResponse = "Our web engineering team builds custom Shopify stores, headless web apps, and high-conversion landing pages engineered for sub-second speeds and maximum checkout conversion.";
        actionLink = '/services/website-development';
        actionLabel = 'View Web Engineering →';
      } else if (lower.includes('seo') || lower.includes('ads') || lower.includes('marketing') || lower.includes('google')) {
        botResponse = "Our digital marketing architecture combines technical SEO, Google Search & Shopping Ads, and Meta paid social to capture high-intent buyers and drive measurable ROAS.";
        actionLink = '/services/digital-marketing';
        actionLabel = 'View Digital Marketing →';
      } else if (lower.includes('audit') || lower.includes('human') || lower.includes('strategist') || lower.includes('contact') || lower.includes('whatsapp')) {
        botResponse = "You can request a complimentary 24–48h Strategic Growth Blueprint directly from our lead strategists, or message our desk on WhatsApp immediately!";
        actionLink = 'https://wa.me/91XXXXXXXXXX';
        actionLabel = 'Fast-Track on WhatsApp →';
      } else {
        botResponse = "Every brand's orbit is unique. Tell us about your current roadblocks or growth target, and our senior strategists will synthesize an auditable action plan.";
        actionLink = '/#closing';
        actionLabel = 'Request Custom Audit →';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponse,
          actionLink,
          actionLabel,
          quickReplies: [
            'What are the standard pricing packages?',
            'Explore Performance SEO & Ads',
            'Talk directly to a human strategist'
          ]
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] select-none font-sans">
      
      {/* =================================================================== */}
      {/* CHAT WINDOW MODAL                                                   */}
      {/* =================================================================== */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="Cosmo AI Assistant"
          className="mb-4 w-[360px] sm:w-[400px] h-[540px] max-h-[82vh] bg-[#0A0E17]/98 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-[-15px_15px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden animate-slideUp text-white"
        >
          {/* Top Header Bar */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0F1624] to-[#141C2E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Astronaut Head Avatar in Header */}
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-b from-white/20 to-white/5 border border-white/20 p-1 flex items-center justify-center shadow-inner">
                <AstronautHeadSVG className="w-full h-full" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0E1218] animate-pulse"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-lg font-bold text-white tracking-wide">Cosmo</h4>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[9px] uppercase font-bold tracking-wider">
                    AI GUIDE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">E-Comet Orbital Navigator</p>
              </div>
            </div>

            {/* Close Cross Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Scrollable Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#38BDF8] text-space-950 font-medium rounded-br-xs shadow-md'
                      : 'bg-white/10 text-slate-200 border border-white/10 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action CTA Button inside message */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-white/10">
                      {msg.actionLink.startsWith('http') ? (
                        <a
                          href={msg.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-semibold transition-all shadow-sm"
                        >
                          <span>{msg.actionLabel}</span>
                        </a>
                      ) : (
                        <Link
                          to={msg.actionLink}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-space-950 hover:bg-slate-100 text-[11px] font-semibold transition-all shadow-sm"
                        >
                          <span>{msg.actionLabel}</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick reply chips */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickReplies.map((reply, rIdx) => (
                      <button
                        key={rIdx}
                        type="button"
                        onClick={() => handleSendMessage(reply)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all text-left cursor-pointer"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 text-xs px-3 py-2 bg-white/5 rounded-2xl w-fit border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[10px] font-mono ml-1 text-slate-500">Synthesizing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Message Input Box */}
          <div className="p-3 sm:p-4 bg-[#0B0F17] border-t border-white/10">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about services, pricing, audit..."
                className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-200 disabled:opacity-40 text-[#080B10] flex items-center justify-center transition-all cursor-pointer flex-shrink-0 shadow-md"
              >
                <svg className="w-4 h-4 fill-current rotate-45 -translate-y-0.5" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      )}

      {/* =================================================================== */}
      {/* FLOATING TRIGGER BUTTON: CREATIVE ASTRONAUT HEAD ICON               */}
      {/* =================================================================== */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close orbital guide" : "Open orbital guide"}
        className="group relative flex items-center justify-center cursor-pointer transition-all focus:outline-none"
      >
        {/* Soft Ambient Halo */}
        <div className="absolute -inset-1 rounded-full bg-slate-400/20 blur-md group-hover:scale-110 transition-all duration-300"></div>

        {/* Main Circular Button Shell */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#080B10] border border-white/20 group-hover:border-white/40 p-2 shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95 overflow-hidden">
          
          {/* Subtle cosmic star speckles in background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none"></div>

          {/* Astronaut Head SVG Icon */}
          <AstronautHeadSVG className="w-full h-full relative z-10 transition-transform duration-300 group-hover:rotate-6" />

          {/* Active Online Indicator Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B0F17] z-20 shadow-sm animate-pulse"></span>
        </div>

        {/* Floating Tooltip Pill */}
        {!isOpen && (
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#0E1218]/90 border border-white/15 text-white text-[11px] font-mono tracking-wider whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>Ask Cosmo AI</span>
            <span className="text-cyan-400 ml-1">✦</span>
          </div>
        )}
      </button>

    </div>
  );
}

/**
 * Creative Astronaut Head SVG
 * Crafted to evoke the brand's logo astronaut with sleek helmet and luminous cyan visor.
 */
function AstronautHeadSVG({ className = "w-full h-full" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Helmet Shell Gradient */}
        <linearGradient id="helmetGrad" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E2E8F0" />
          <stop offset="85%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Curved Cyan Visor Gradient */}
        <linearGradient id="visorGrad" x1="20%" y1="15%" x2="80%" y2="85%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="35%" stopColor="#0284C7" />
          <stop offset="70%" stopColor="#0B192C" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Visor Glint Reflection */}
        <linearGradient id="glintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>

        {/* Ear Nodules Gradient */}
        <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>

      {/* 1. Comms Antenna Node */}
      <rect x="48" y="4" width="4" height="12" rx="2" fill="#E2E8F0" />
      <circle cx="50" cy="5" r="3.5" fill="#38BDF8" />

      {/* 2. Side Audio / Comms Nodules (Ears) */}
      <rect x="8" y="42" width="8" height="18" rx="4" fill="url(#earGrad)" />
      <circle cx="12" cy="51" r="2" fill="#38BDF8" />
      <rect x="84" y="42" width="8" height="18" rx="4" fill="url(#earGrad)" />
      <circle cx="88" cy="51" r="2" fill="#38BDF8" />

      {/* 3. Outer Helmet Dome */}
      <path 
        d="M50 14 C27 14, 15 28, 15 50 C15 72, 28 85, 50 85 C72 85, 85 72, 85 50 C85 28, 73 14, 50 14 Z" 
        fill="url(#helmetGrad)" 
        stroke="#FFFFFF" 
        strokeWidth="1.5"
      />

      {/* 4. Helmet Neck Collar Ring */}
      <ellipse cx="50" cy="85" rx="26" ry="6.5" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
      <ellipse cx="50" cy="87.5" rx="22" ry="4.5" fill="#1E293B" />

      {/* 5. Main Visor (Curved Panoramic Space Shield) */}
      <path 
        d="M50 25 C32 25, 23 35, 23 49 C23 64, 32 72, 50 72 C68 72, 77 64, 77 49 C77 35, 68 25, 50 25 Z" 
        fill="url(#visorGrad)" 
        stroke="#1E293B" 
        strokeWidth="1.8"
      />

      {/* 6. Realistic Visor Glint Reflection (Curved Planetary Highlight) */}
      <path 
        d="M32 32 C42 27, 58 27, 68 32 C65 38, 55 42, 42 42 C34 42, 32 36, 32 32 Z" 
        fill="url(#glintGrad)" 
      />

      {/* 7. Subtle Secondary Star Reflection in Visor */}
      <circle cx="65" cy="48" r="1.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="34" cy="56" r="1" fill="#38BDF8" opacity="0.6" />

      {/* 8. Chin Ventilation Grid / Mic */}
      <line x1="43" y1="78" x2="57" y2="78" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="45" y1="81" x2="55" y2="81" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
