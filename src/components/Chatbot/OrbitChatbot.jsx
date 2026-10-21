import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeAstronautFace from './ThreeAstronautFace';

export default function OrbitChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Welcome to E-Comet. I am your strategic practice navigator. How can we accelerate your brand's trajectory today?",
      quickReplies: [
        'Audit my Amazon & Marketplace operations',
        'Explore Performance SEO & Ads',
        'Custom Shopify & Web Engineering',
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

      if (lower.includes('amazon') || lower.includes('marketplace') || lower.includes('flipkart') || lower.includes('blinkit')) {
        botResponse = "We manage end-to-end marketplace operations across Amazon, Flipkart, Blinkit, and quick-commerce channels — optimizing taxonomy, Buy Box defense, A+ content, and sponsored PPC advertising with strict unit economics.";
        actionLink = '/services/ecommerce-management';
        actionLabel = 'Explore E-Commerce Pillar →';
      } else if (lower.includes('pricing') || lower.includes('cost') || lower.includes('package')) {
        botResponse = "We offer 3 structured engagement tiers: Orbit (Starter launchpad), Nova (Accelerated scale), and Cosmic (Omni-channel dominance). Custom agreements are confirmed per business scope.";
        actionLink = '/services/ecommerce-management#pricing';
        actionLabel = 'View Standard Packages →';
      } else if (lower.includes('web') || lower.includes('shopify') || lower.includes('develop')) {
        botResponse = "Our web engineering practice builds custom Shopify stores, headless web apps, and high-conversion landing pages engineered for sub-second speeds and maximum checkout conversion.";
        actionLink = '/services/website-development';
        actionLabel = 'View Web Engineering →';
      } else if (lower.includes('seo') || lower.includes('ads') || lower.includes('marketing') || lower.includes('google')) {
        botResponse = "Our digital marketing architecture combines technical SEO, Google Search & Shopping Ads, and Meta paid social to capture high-intent buyers and drive measurable ROAS.";
        actionLink = '/services/digital-marketing';
        actionLabel = 'View Digital Marketing →';
      } else if (lower.includes('audit') || lower.includes('human') || lower.includes('strategist') || lower.includes('contact') || lower.includes('whatsapp')) {
        botResponse = "You can request a complimentary Strategic Growth Blueprint directly from our lead strategists, or connect with our desk on WhatsApp immediately.";
        actionLink = 'https://wa.me/91XXXXXXXXXX';
        actionLabel = 'Connect on WhatsApp →';
      } else {
        botResponse = "Every brand's trajectory is unique. Tell us about your primary objectives, channels, or current roadblocks, and our senior practice leads will prepare an actionable briefing.";
        actionLink = '/#closing';
        actionLabel = 'Request Custom Growth Blueprint →';
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
    }, 550);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] select-none font-sans">
      
      {/* =================================================================== */}
      {/* CHAT WINDOW MODAL (Matched to Cosmic Black & White Luxury Brand UI) */}
      {/* =================================================================== */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="E-Comet Assistant"
          className="mb-4 w-[360px] sm:w-[410px] h-[550px] max-h-[85vh] bg-[#080B10] border border-white/15 rounded-[28px] shadow-[-20px_20px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden animate-slideUp text-white"
        >
          {/* Top Header Bar */}
          <div className="p-4 sm:p-5 bg-[#0D121B] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* 3D Astronaut Avatar */}
              <div className="relative w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner overflow-hidden">
                <ThreeAstronautFace className="w-full h-full" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399] border-2 border-[#080B10] z-10" />
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-sans text-base font-semibold text-white tracking-tight">E-Comet Assistant</h4>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[9px] uppercase tracking-wider font-semibold border border-emerald-500/30">
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">Strategic Practice Navigator</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chatbot"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 stroke-current stroke-2" viewBox="0 0 24 24" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Scrollable Body */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 no-scrollbar bg-[#080B10]">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-3 text-xs sm:text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-white text-[#080B10] font-sans font-medium rounded-2xl rounded-br-xs shadow-md'
                      : 'bg-white/[0.06] text-slate-200 border border-white/10 rounded-2xl rounded-bl-xs font-sans'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action CTA Link inside message */}
                  {msg.actionLink && (
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      {msg.actionLink.startsWith('http') ? (
                        <a
                          href={msg.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-200 text-[#080B10] text-[11px] font-sans font-semibold transition-all shadow-sm"
                        >
                          <span>{msg.actionLabel}</span>
                        </a>
                      ) : (
                        <Link
                          to={msg.actionLink}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-200 text-[#080B10] text-[11px] font-sans font-semibold transition-all shadow-sm"
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
                        className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white text-slate-300 hover:text-[#080B10] border border-white/10 hover:border-white transition-all text-left cursor-pointer font-sans shadow-xs"
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
              <div className="flex items-center gap-1.5 text-slate-400 text-xs px-3.5 py-2 bg-white/5 rounded-2xl w-fit border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono ml-1 text-slate-400">Synthesizing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Message Input Box */}
          <div className="p-3 sm:p-4 bg-[#0D121B] border-t border-white/10">
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
                placeholder="Ask about marketplaces, pricing, web, SEO..."
                className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.07] hover:bg-white/[0.1] focus:bg-white/[0.12] border border-white/15 focus:border-white/40 text-xs text-white placeholder-slate-400 focus:outline-none transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-200 disabled:opacity-30 text-[#080B10] flex items-center justify-center transition-all cursor-pointer flex-shrink-0 shadow-md"
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
      {/* FLOATING TRIGGER BUTTON: SLEEK COSMIC BLACK BRAND PILL              */}
      {/* =================================================================== */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close strategic guide" : "Open strategic guide"}
        className="group relative flex items-center justify-center cursor-pointer transition-all focus:outline-none"
      >
        {/* Soft Ambient Halo */}
        <div className="absolute -inset-1 rounded-full bg-white/10 blur-md group-hover:scale-110 transition-all duration-300" />

        {/* Main Circular Button Shell */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#080B10] border border-white/20 group-hover:border-white/40 shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95 overflow-hidden">
          
          {/* 3D Astronaut Face Micro Canvas */}
          <div className="w-full h-full pointer-events-none">
            <ThreeAstronautFace className="w-full h-full" />
          </div>

          {/* Active Online Indicator Dot */}
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399] border-2 border-[#080B10] z-20" />
        </div>

        {/* Floating Tooltip Pill */}
        {!isOpen && (
          <div className="absolute right-full mr-3 px-3.5 py-1.5 rounded-full bg-[#080B10] border border-white/20 text-white text-[11px] font-mono tracking-wider whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
            <span>Ask Practice Guide</span>
            <span className="text-white/60">✦</span>
          </div>
        )}
      </button>

    </div>
  );
}
