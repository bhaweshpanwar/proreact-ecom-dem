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

        // Desktop (>= 1024px): Dramatic corner arrival with 3D rotation
        mm.add("(min-width: 1024px)", () => {
          gsap.fromTo(leftCard,
            { x: '-70vw', y: -150, rotation: -14, scale: 0.9, opacity: 0, transformOrigin: 'top left' },
            {
              x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.25, ease: 'power3.out',
              scrollTrigger: { trigger: grid, start: 'top 82%', toggleActions: 'play none none reverse' }
            }
          );
          gsap.fromTo(rightCard,
            { x: '70vw', y: -150, rotation: 14, scale: 0.9, opacity: 0, transformOrigin: 'top right' },
            {
              x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.25, ease: 'power3.out',
              scrollTrigger: { trigger: grid, start: 'top 82%', toggleActions: 'play none none reverse' }
            }
          );
        });

        // Mobile (< 1024px): Responsive corner swoop
        mm.add("(max-width: 1023px)", () => {
          gsap.fromTo(leftCard,
            { x: '-50vw', y: -90, rotation: -8, scale: 0.94, opacity: 0, transformOrigin: 'top left' },
            {
              x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.05, ease: 'power3.out',
              scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none reverse' }
            }
          );
          gsap.fromTo(rightCard,
            { x: '50vw', y: -90, rotation: 8, scale: 0.94, opacity: 0, transformOrigin: 'top right' },
            {
              x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.05, ease: 'power3.out',
              scrollTrigger: { trigger: rightCard, start: 'top 85%', toggleActions: 'play none none reverse' }
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
    <section ref={sectionRef} id="intro" aria-labelledby="whiteout-heading" className="relative pt-6 pb-16 sm:pb-28 bg-white overflow-hidden">
      
      {/* Confetti Squares at section edge */}
      <div className="confetti-square pointer-events-none absolute top-10 left-12 w-2 h-2 rounded-sm bg-pillar-marketing opacity-60" data-speed="0.8"></div>
      <div className="confetti-square pointer-events-none absolute bottom-12 right-16 w-2 h-2 rounded-sm bg-pillar-websites opacity-60" data-speed="1.2"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">

        {/* Two Side-by-Side Tinted Panels (Paper and Mist) */}
        <div id="intro-cards-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-20" style={{ perspective: '1600px' }}>
          
          {/* LEFT PANEL: Paper Tint (#F5F3EE) -> Marketplace Growth */}
          <div id="audience-card-left" className="audience-panel rounded-container bg-paper p-8 sm:p-12 border border-[#E9E6DF]/80 flex flex-col justify-between relative overflow-hidden group will-change-transform">
            <div className="mb-10">
              <span className="text-xs font-sans text-space-600 block mb-2">For brands that sell online</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 leading-tight mb-4">
                Marketplace growth, handled.
              </h3>
              <p className="text-sm text-space-600 font-sans leading-relaxed max-w-md">
                From Day-One catalogue onboarding and buy-box governance to algorithmic PPC advertising across Amazon, Flipkart, and quick commerce.
              </p>
              <div className="pt-6">
                <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-space-950 hover:bg-space-900 text-white text-xs font-medium transition-all hover:scale-[1.02]">
                  <span>Explore Marketplaces</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Inside UI Mock: Marketplace Listing Card */}
            <div className="w-full bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm relative overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center justify-between pb-4 hairline-b mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pillar-marketplaces"></span>
                  <span className="text-xs font-sans font-semibold text-space-950">Active Catalogue Status</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium">Synchronized</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="sm:col-span-1 aspect-square rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img src="/assets/img1/amazon-listing-aplus.png" alt="Catalogue" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <div className="h-3.5 bg-slate-200 rounded w-4/5"></div>
                  <div className="h-2.5 bg-slate-100 rounded w-full"></div>
                  <div className="h-2.5 bg-slate-100 rounded w-3/4"></div>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="inline-block px-2 py-0.5 rounded bg-sand/20 text-space-950 text-[10px] font-mono">Top Category</span>
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-space-600 text-[10px] font-mono">Prime Ready</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 hairline-t text-xs text-space-800">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Title optimised</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Images improved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>A+ content ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>Ads structured</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Mist Tint (#EDF0F3) -> Marketing & Websites */}
          <div id="audience-card-right" className="audience-panel rounded-container bg-mist p-8 sm:p-12 border border-[#E4EAF0]/80 flex flex-col justify-between relative overflow-hidden group will-change-transform">
            <div className="mb-10">
              <span className="text-xs font-sans text-space-600 block mb-2">For businesses that need customers</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-space-950 leading-tight mb-4">
                Traffic, leads and sites that convert.
              </h3>
              <p className="text-sm text-space-600 font-sans leading-relaxed max-w-md">
                High-intent organic search visibility, Meta/Google performance advertising, and custom storefront engineering connected to real pipeline.
              </p>
              <div className="pt-6">
                <a href="#services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-space-950 hover:bg-space-900 text-white text-xs font-medium transition-all hover:scale-[1.02]">
                  <span>Explore Marketing</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Inside UI Mock: Search, Ad, and Web Wireframe */}
            <div className="w-full bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm relative overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-1 space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-[10px] font-mono text-space-600 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pillar-marketing"></span>
                  <span>google.com/search · high-intent query</span>
                </div>
                <div className="h-3.5 bg-space-950 rounded w-2/3 mb-1.5"></div>
                <div className="h-2 bg-slate-200 rounded w-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[9px] font-mono text-ember block mb-1 uppercase tracking-wider">Campaign Ad</span>
                  <div className="h-2.5 bg-slate-300 rounded w-4/5 mb-1"></div>
                  <div className="h-2 bg-slate-200 rounded w-full"></div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[9px] font-mono text-pillar-websites block mb-1 uppercase tracking-wider">Web Funnel</span>
                  <div className="h-2.5 bg-slate-300 rounded w-3/4 mb-1"></div>
                  <div className="h-2 bg-slate-200 rounded w-5/6"></div>
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
