import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2MatrixSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const matrixCards = [
    {
      num: '01',
      tag: 'COMMERCE ENGINE',
      title: 'Marketplace Domination',
      desc: 'Catalogue synchronization, Buy-Box governance, algorithmic ad bidding and operational health across Amazon, Flipkart & Quick Commerce.',
      stat: '99.4%',
      statLabel: 'Buy Box Share',
      statSub: 'Verified Sovereign Bidding',
      image: '/images/space/card-marketplace.jpg',
      link: '/services/ecommerce-management',
      color: 'amber'
    },
    {
      num: '02',
      tag: 'ACQUISITION VELOCITY',
      title: 'Performance Media & SEO',
      desc: 'High-intent Google & Meta auction bidding, technical SEO indexing, and conversion funnels engineered for unit economic profitability.',
      stat: '4.8x – 6.5x',
      statLabel: 'Blended Return',
      statSub: 'Scaled Margin Protection',
      image: '/images/space/card-traffic.jpg',
      link: '/services/digital-marketing',
      color: 'cyan'
    },
    {
      num: '03',
      tag: 'CONVERSION ARCHITECTURE',
      title: 'Storefront Engineering',
      desc: 'Headless Shopify architecture, custom React checkouts, sub-second latency and algorithmic CRO turning traffic into compound revenue.',
      stat: '< 0.8s',
      statLabel: 'LCP Load Latency',
      statSub: 'Enterprise SLA Performance',
      image: '/images/space/dark-card-web.jpg',
      link: '/services/web-development',
      color: 'emerald'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="matrix" 
      className="relative py-20 sm:py-32 bg-[#02040C] text-white overflow-hidden"
    >
      {/* Background Starfield Grid & Ambient Nebula Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                01 · The Outverse Matrix
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
              Three Pillars. <br />
              <span className="italic bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">
                One Compounding Trajectory.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            Eliminating the friction between fragmented ad agencies, marketplace managers, and web teams. Everything executed under a unified technical standard.
          </p>
        </div>

        {/* 3 Holographic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {matrixCards.map((card, idx) => (
            <div 
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative rounded-[28px] sm:rounded-[32px] bg-[#0A0E18]/80 hover:bg-[#0E1422]/90 border border-white/10 hover:border-white/25 p-7 sm:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl cursor-pointer hover:-translate-y-1"
            >
              {/* Card Space Visual Showcase */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-inner group-hover:border-white/20 transition-all">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-[#0A0E18]/40 to-transparent pointer-events-none" />

                {/* Floating Micro Badge */}
                <div className="relative z-10 p-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-slate-300">
                    SECTOR // 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-white/80">
                    {card.num}
                  </span>
                </div>

                {/* Live Stat Floating Pill */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-2.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">{card.statLabel}</span>
                    <span className="text-sm font-sans font-bold text-cyan-300">{card.stat}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">{card.statSub}</span>
                </div>
              </div>

              {/* Title & Copy */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                  {card.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white group-hover:text-cyan-200 transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300 group-hover:text-white transition-colors">
                <Link to={card.link} className="flex items-center gap-2">
                  <span>Explore Architecture</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <span className="text-[10px] text-slate-500">LIVE SYSTEM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Performance Telemetry Strip */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center select-none">
          <div>
            <span className="text-2xl sm:text-4xl font-serif text-white font-normal block mb-1">₹140Cr+</span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Managed Marketplace GMV</span>
          </div>
          <div>
            <span className="text-2xl sm:text-4xl font-serif text-cyan-300 font-normal block mb-1">+310%</span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Avg First-Year Compound</span>
          </div>
          <div>
            <span className="text-2xl sm:text-4xl font-serif text-emerald-300 font-normal block mb-1">99.98%</span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Service Level Agreement</span>
          </div>
          <div>
            <span className="text-2xl sm:text-4xl font-serif text-amber-300 font-normal block mb-1">48 Hours</span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Rapid Audit Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
}
