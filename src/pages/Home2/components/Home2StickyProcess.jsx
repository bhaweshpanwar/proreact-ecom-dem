import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2StickyProcess({ data }) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    steps = [
      {
        num: "01",
        name: "Discover",
        tag: "FORENSIC DIAGNOSIS",
        heading: "Full Account Telemetry & Gap Analysis",
        desc: "We dive straight into your Google Ads query logs, Amazon Buy-Box share, catalogue health, and checkout drop-off rates. No generic playbooks. We uncover the exact leak points costing you margin.",
        deliverable: "Comprehensive 48-Hour Growth Diagnostic & Unit Economic Model",
        image: "/images/space/process-discover-new.jpg"
      },
      {
        num: "02",
        name: "Build",
        tag: "FOUNDATION OVERHAUL",
        heading: "Architecture, Catalogue & Campaign Construction",
        desc: "We rebuild your ad account structures, correct SKU variations and categorization on marketplaces, and optimize your web checkout for sub-second page performance.",
        deliverable: "Approved Ad Creative Modules, Restructured SKUs & Tested Checkout Funnels",
        image: "/images/space/process-build-new.jpg"
      },
      {
        num: "03",
        name: "Launch",
        tag: "SYNCHRONIZED IGNITION",
        heading: "Omni-Channel Coordinated Go-Live",
        desc: "New campaigns, revised marketplace listings, and conversion-optimized storefronts go live simultaneously so your brand captures traffic and converts at peak efficiency.",
        deliverable: "Live Sponsored Ads, Active Amazon Brand Store & Verified CAPI Tracking",
        image: "/images/space/process-launch-new.jpg"
      },
      {
        num: "04",
        name: "Grow",
        tag: "SYSTEMATIC COMPOUNDING",
        heading: "Continuous Algorithmic Calibration",
        desc: "Every Monday we review search query logs, buy-box dynamics, and ad margins, trimming underperforming spend and doubling down on profitable winners.",
        deliverable: "Weekly Net Contribution Reports & Iterative Scale Experiments",
        image: "/images/space/quan-you-zhang-8jW6xCtmYsw-unsplash.jpg"
      }
    ]
  } = data || {};

  useEffect(() => {
    // On mobile devices (< 768px): add smooth zoom-out-to-in scroll parallax per card without pin locking
    if (isMobile) {
      const ctx = gsap.context(() => {
        cardRefs.current.forEach((card) => {
          if (!card) return;
          const img = card.querySelector('img');
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.0 },
              {
                scale: 1.14,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                }
              }
            );
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }

    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (!cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

      // 1. Discover Card 0 Entrance (smooth zoom-out to in as section scrolls into viewport)
      const img0 = cards[0].querySelector('img');
      const content0 = cards[0].querySelector('.card-content-wrap');

      if (img0) {
        gsap.fromTo(
          img0,
          { yPercent: 0, scale: 1.0 },
          {
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          }
        );
      }

      if (content0) {
        gsap.fromTo(
          content0,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 0.6,
            }
          }
        );
      }

      // 2. Set card stacking orders and initial transforms
      gsap.set(cards[0], { yPercent: 0, scale: 1, zIndex: 10 });
      gsap.set(cards[1], { yPercent: 100, scale: 1, zIndex: 20 });
      gsap.set(cards[2], { yPercent: 100, scale: 1, zIndex: 30 });
      gsap.set(cards[3], { yPercent: 100, scale: 1, zIndex: 40 });

      // Inner image initial scale: zoomed out (1.0)
      const img1 = cards[1].querySelector('img');
      const img2 = cards[2].querySelector('img');
      const img3 = cards[3].querySelector('img');
      if (img1) gsap.set(img1, { scale: 1.0, yPercent: 6 });
      if (img2) gsap.set(img2, { scale: 1.0, yPercent: 6 });
      if (img3) gsap.set(img3, { scale: 1.0, yPercent: 6 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2800',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        }
      });

      // Card 0 image gently pushes deeper into scene
      if (img0) {
        tl.to(img0, { scale: 1.25, ease: 'none', duration: 1 }, 0);
      }

      // --- 1. Card 02 (Build) swipes in from bottom with zoom-out to in ---
      tl.to(cards[1], { yPercent: 0, ease: 'none', duration: 1 }, 0.2);
      if (img1) tl.to(img1, { yPercent: 0, scale: 1.18, ease: 'none', duration: 1 }, 0.2);
      tl.to(cards[0], { yPercent: -15, scale: 0.96, opacity: 0.5, ease: 'none', duration: 1 }, 0.2);

      // --- 2. Card 03 (Launch) swipes in from bottom with zoom-out to in ---
      tl.to(cards[2], { yPercent: 0, ease: 'none', duration: 1 }, 1.5);
      if (img2) tl.to(img2, { yPercent: 0, scale: 1.18, ease: 'none', duration: 1 }, 1.5);
      tl.to(cards[1], { yPercent: -15, scale: 0.96, opacity: 0.5, ease: 'none', duration: 1 }, 1.5);

      // --- 3. Card 04 (Grow) swipes in from bottom with zoom-out to in ---
      tl.to(cards[3], { yPercent: 0, ease: 'none', duration: 1 }, 2.8);
      if (img3) tl.to(img3, { yPercent: 0, scale: 1.18, ease: 'none', duration: 1 }, 2.8);
      tl.to(cards[2], { yPercent: -15, scale: 0.96, opacity: 0.5, ease: 'none', duration: 1 }, 2.8);

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      id="process" 
      ref={containerRef} 
      className={`relative w-full bg-[#02040C] select-none ${isMobile ? 'py-8' : 'h-screen overflow-hidden'}`}
    >
      {/* 4 Immersive Full-Bleed Space Cards */}
      {steps.map((step, idx) => (
        <div
          key={idx}
          ref={(el) => (cardRefs.current[idx] = el)}
          className={`${
            isMobile 
              ? 'relative w-full min-h-[85vh] flex flex-col justify-center py-16 px-4 mb-4 border-b border-white/10 overflow-hidden shadow-2xl'
              : 'absolute inset-0 w-full h-full bg-[#02040C] overflow-hidden will-change-transform shadow-[0_-30px_80px_rgba(0,0,0,0.95)]'
          }`}
        >
          {/* Full Screen Width Space Image with smooth scale transform */}
          <img
            src={step.image}
            alt={step.name}
            className="absolute inset-0 w-full h-full object-cover select-none will-change-transform transform-gpu origin-center"
            loading="eager"
          />

          {/* Tuned Atmospheric Scrim - rich contrast & depth while keeping space colors vivid */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />

          {/* White Typography Content Layer */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto h-full px-6 sm:px-12 lg:px-16 pt-24 sm:pt-32 lg:pt-36 flex flex-col justify-start">
            <div className="card-content-wrap max-w-3xl space-y-4 sm:space-y-6 will-change-transform">
              
              {/* Step Tag */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-white px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20">
                  STEP {step.num}
                </span>
                <span className="font-sans text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  {step.tag}
                </span>
              </div>

              {/* White Heading */}
              <h3 className="font-grotesk font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                {step.name}. <br />
                <span className="text-white/90 text-xl sm:text-3xl lg:text-4xl font-bold tracking-normal block mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {step.heading}
                </span>
              </h3>

              {/* White Description */}
              <p className="font-grotesk text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {step.desc}
              </p>

              {/* White Key Deliverable Pill */}
              <div className="pt-2">
                <div className="inline-block p-4 sm:p-5 bg-black/65 backdrop-blur-md border border-white/20 max-w-xl shadow-xl">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-white/70 font-semibold block mb-1">
                    KEY DELIVERABLE
                  </span>
                  <span className="text-sm sm:text-base font-grotesk font-semibold text-white block">
                    {step.deliverable}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      ))}
    </section>
  );
}
