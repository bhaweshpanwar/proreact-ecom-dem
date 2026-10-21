import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftCard = document.getElementById('audience-card-left');
      const rightCard = document.getElementById('audience-card-right');
      const grid = document.getElementById('intro-cards-grid');

      if (leftCard && rightCard && grid) {
        const mm = gsap.matchMedia();

        // Desktop (>= 1024px): Smooth swiping-in entrance from left and right
        mm.add("(min-width: 1024px)", () => {
          gsap.fromTo(leftCard,
            { x: -90, opacity: 0, scale: 0.95 },
            {
              x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { 
                trigger: grid, 
                start: 'top 85%', 
                toggleActions: 'play none none reverse'
              }
            }
          );
          gsap.fromTo(rightCard,
            { x: 90, opacity: 0, scale: 0.95 },
            {
              x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { 
                trigger: grid, 
                start: 'top 85%', 
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        // Mobile (< 1024px): Smooth vertical swipe
        mm.add("(max-width: 1023px)", () => {
          gsap.fromTo([leftCard, rightCard],
            { y: 40, opacity: 0, scale: 0.97 },
            {
              y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'power3.out', stagger: 0.15,
              scrollTrigger: { 
                trigger: grid, 
                start: 'top 88%', 
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }

      // Continuous Marquee with dynamic scroll-velocity skew
      const track = document.getElementById('capability-marquee-track');
      if (track) {
        gsap.to(track, {
          xPercent: -50,
          ease: 'none',
          duration: 25,
          repeat: -1
        });

        let proxy = { skew: 0 };
        const skewSetter = gsap.quickSetter(track, "skewX", "deg");
        const clamp = gsap.utils.clamp(-6, 6);

        ScrollTrigger.create({
          onUpdate: (self) => {
            const skew = clamp(self.getVelocity() / -250);
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: "power3.out",
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew)
              });
            }
          }
        });
      }

      // Confetti Drift
      const confettis = sectionRef.current?.querySelectorAll('.confetti-square');
      if (confettis) {
        confettis.forEach(c => {
          const speed = parseFloat(c.getAttribute('data-speed')) || 1;
          gsap.to(c, {
            y: 40 * speed,
            rotation: 45 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: c.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="intro" aria-labelledby="whiteout-heading" className="relative pt-6 pb-16 sm:pb-28 bg-white overflow-hidden hairline-b">
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two Side-by-Side Tinted Panels */}
        <div id="intro-cards-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-20" style={{ perspective: '1600px' }}>
          
          {/* LEFT PANEL: Modern architectural #FFFFFF -> Marketplace Growth */}
          <div id="audience-card-left" className="audience-panel rounded-[32px] sm:rounded-[36px] bg-white hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 sm:p-10 border border-stone-200/90 transition-[border-color,box-shadow] duration-300 flex flex-col justify-between relative overflow-hidden group will-change-transform shadow-xs cursor-pointer">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-2">For brands that sell online</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 leading-tight mb-4">
                Marketplace growth, handled.
              </h3>
              <p className="text-sm text-space-600 font-sans leading-relaxed max-w-md">
                From Day-One catalogue onboarding and buy-box governance to algorithmic PPC advertising across Amazon, Flipkart, and quick commerce.
              </p>
              <div className="pt-6">
                <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white text-xs font-medium transition-all hover:scale-[1.02] shadow-sm">
                  <span>Explore Marketplaces</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase: Orbital Satellite Space Imagery */}
            <div className="w-full h-60 sm:h-64 rounded-2xl overflow-hidden relative border border-slate-200/80 shadow-sm group-hover:scale-[1.01] transition-transform duration-500 flex flex-col justify-between p-4 sm:p-5 select-none">
              <img 
                src="/images/space/card-marketplace.jpg" 
                alt="Orbital Satellite representing Synchronized Marketplace Operations" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ORBITAL SYNC · 100% HEALTH
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white">
                  MULTI-CHANNEL
                </span>
              </div>

              {/* Bottom Deliverables Pill Bar */}
              <div className="relative z-10 space-y-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] font-sans font-medium flex items-center gap-1">
                    <span className="text-emerald-400 font-bold">✓</span> Amazon & Flipkart Verified
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] font-sans font-medium flex items-center gap-1">
                    <span className="text-emerald-400 font-bold">✓</span> 99.4% Buy Box
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white text-[10px] font-sans font-medium flex items-center gap-1">
                    <span className="text-emerald-400 font-bold">✓</span> A+ Brand Content
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Modern architectural #FFFFFF -> Marketing & Websites */}
          <div id="audience-card-right" className="audience-panel rounded-[32px] sm:rounded-[36px] bg-white hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 sm:p-10 border border-stone-200/90 transition-[border-color,box-shadow] duration-300 flex flex-col justify-between relative overflow-hidden group will-change-transform shadow-xs cursor-pointer">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-2">For businesses that need customers</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 leading-tight mb-4">
                Traffic, leads and sites that convert.
              </h3>
              <p className="text-sm text-space-600 font-sans leading-relaxed max-w-md">
                High-intent organic search visibility, Meta/Google performance advertising, and custom storefront engineering connected to real pipeline.
              </p>
              <div className="pt-6">
                <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#080B10] hover:bg-[#252B36] text-white text-xs font-medium transition-all hover:scale-[1.02] shadow-sm">
                  <span>Explore Marketing</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase: High-Velocity Comet Space Imagery */}
            <div className="w-full h-60 sm:h-64 rounded-2xl overflow-hidden relative border border-slate-200/80 shadow-sm group-hover:scale-[1.01] transition-transform duration-500 flex flex-col justify-between p-4 sm:p-5 select-none">
              <img 
                src="/images/space/card-traffic.jpg" 
                alt="Accelerating Comet Trail representing High-Intent Audience Traffic" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  ACQUISITION VELOCITY · ACTIVE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-white">
                  HIGH-INTENT
                </span>
              </div>

              {/* Bottom Metric Strip */}
              <div className="relative z-10 flex items-center justify-between gap-3 bg-black/50 backdrop-blur-md border border-white/15 p-2.5 rounded-xl text-white">
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-300 block">Performance ROAS</span>
                  <span className="text-sm font-sans font-bold text-cyan-300">4.8x – 6.5x Blended</span>
                </div>
                <div className="h-6 w-px bg-white/20" />
                <div>
                  <span className="text-[9px] font-mono uppercase text-slate-300 block">Lead Pipeline</span>
                  <span className="text-sm font-sans font-bold text-white">100% Pre-Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Slim Text Marquee with Scroll-Velocity Skew */}
        <div id="capability-marquee-wrap" className="overflow-hidden py-4 hairline-t hairline-b select-none">
          <div id="capability-marquee-track" className="flex whitespace-nowrap gap-12 text-xs sm:text-sm font-sans text-space-600 font-medium will-change-transform">
            <span>SEO</span> <span>·</span>
            <span>Google Ads</span> <span>·</span>
            <span>Meta Ads</span> <span>·</span>
            <span>Amazon</span> <span>·</span>
            <span>Flipkart</span> <span>·</span>
            <span>Shopify</span> <span>·</span>
            <span>WordPress</span> <span>·</span>
            <span>Branding</span> <span>·</span>
            <span>Reels</span> <span>·</span>
            <span>Analytics</span> <span>·</span>
            <span>SEO</span> <span>·</span>
            <span>Google Ads</span> <span>·</span>
            <span>Meta Ads</span> <span>·</span>
            <span>Amazon</span> <span>·</span>
            <span>Flipkart</span> <span>·</span>
            <span>Shopify</span> <span>·</span>
            <span>WordPress</span> <span>·</span>
            <span>Branding</span> <span>·</span>
            <span>Reels</span> <span>·</span>
            <span>Analytics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
