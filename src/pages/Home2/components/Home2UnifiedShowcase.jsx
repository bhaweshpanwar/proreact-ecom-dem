import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2UnifiedShowcase({ data }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const imgRef = useRef(null);
  const primaryCountRef = useRef(null);
  const secondaryCountRef = useRef(null);

  const {
    image = "/images/space/dualvoidanima-art.gif",
    statPrimary = "8+",
    statLabelPrimary = "Services Unified",
    statSub = "One integrated partner managing marketplaces, ad campaigns, storefronts, and brand creative under a single connected strategy.",
    statSecondary = "Direct Team Communication",
    statLabelSecondary = "Clear updates. Structured support.",
    statSecondarySub = "Work directly with our team for project discussions, progress updates and coordinated digital solutions."
  } = data || {};

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current || !imgWrapperRef.current) return;

    const mm = gsap.matchMedia();

    // 1. Desktop & Large Screens (lg: 1024px+): Manual Scroll-Scrubbed Cinematic Pinned Storytelling
    mm.add("(min-width: 1024px)", () => {
      // Initially: GIF sits centered in the frame at 60% size with soft rounded corners
      gsap.set(imgWrapperRef.current, {
        top: "20%",
        left: "20%",
        width: "60%",
        height: "60%",
        borderRadius: "16px",
      });
      gsap.set(cardsRef.current, { xPercent: 100, opacity: 0 });
      if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
      if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";

      // Pinned scrub timeline driven manually by scroll (both forward and backward)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Stage 1 (0 -> 1.0): Expands outward from centered 60% box to 100% full screen
      tl.to(
        imgWrapperRef.current,
        {
          top: "0%",
          left: "0%",
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power2.inOut",
          duration: 1.0,
        },
        0
      );

      // Stage 2 (1.0 -> 1.9): GIF contracts smoothly to left 56% width
      tl.to(
        imgWrapperRef.current,
        {
          width: "56%",
          ease: "power2.inOut",
          duration: 0.9,
        },
        1.0
      );

      // Stage 3 (1.05 -> 1.85): Right-side cards slide in smoothly from the right
      tl.to(
        cardsRef.current,
        {
          xPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.8,
        },
        1.05
      );

      // Stage 4 (1.15 -> 1.85): Bidirectional scrubbed count-up for 8+
      const counter1 = { val: 0 };
      tl.to(
        counter1,
        {
          val: 8,
          ease: "none",
          duration: 0.7,
          onUpdate: () => {
            if (primaryCountRef.current) {
              primaryCountRef.current.innerText = `${Math.round(counter1.val)}+`;
            }
          }
        },
        1.15
      );

      // Stage 5 (1.25 -> 1.75): Bidirectional scrubbed count-up for 1 Team
      const counter2 = { val: 0 };
      tl.to(
        counter2,
        {
          val: 1,
          ease: "none",
          duration: 0.5,
          onUpdate: () => {
            if (secondaryCountRef.current) {
              secondaryCountRef.current.innerText = `${Math.round(counter2.val)}`;
            }
          }
        },
        1.25
      );

      // Stage 6 (1.9 -> 2.4): Holding pause so user can comfortably read before unpinning
      tl.to({}, { duration: 0.5 }, 1.9);
    });

    // 2. Mobile & Tablet Screens (< 1024px)
    mm.add("(max-width: 1023px)", () => {
      gsap.set(cardsRef.current, { opacity: 0, y: 24, xPercent: 0 });
      if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
      if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.8,
      });

      const counter1 = { val: 0 };
      tl.to(
        counter1,
        {
          val: 8,
          duration: 1.0,
          ease: "power2.out",
          onUpdate: () => {
            if (primaryCountRef.current) {
              primaryCountRef.current.innerText = `${Math.round(counter1.val)}+`;
            }
          }
        },
        0.1
      );

      const counter2 = { val: 0 };
      tl.to(
        counter2,
        {
          val: 1,
          duration: 0.8,
          ease: "power2.out",
          onUpdate: () => {
            if (secondaryCountRef.current) {
              secondaryCountRef.current.innerText = `${Math.round(counter2.val)}`;
            }
          }
        },
        0.1
      );

      tl.eventCallback("onReverseComplete", () => {
        if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
        if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";
      });
    });

    return () => mm.revert();
  }, [image]);

  return (
    <section
      id="unified-showcase"
      ref={sectionRef}
      className="relative w-full h-auto lg:h-screen lg:min-h-[600px] overflow-hidden select-none bg-[#FFFFFF] border-b border-[#E5E5E5] z-20"
    >
      {/* 1. LEFT IMAGE WRAPPER (Starts 60% Centered on White Canvas, Expands to Fullscreen on Scroll, then Contracts to 56% to Unmask Cards; Hidden on Mobile) */}
      <div
        ref={imgWrapperRef}
        className="hidden lg:block absolute z-20 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] will-change-[width,height,top,left] bg-[#000000] border border-black/10"
      >
        <img
          ref={imgRef}
          src={image}
          alt="E-Comet Unified Digital Strategy"
          className="w-full h-full object-cover object-center select-none will-change-transform"
          loading="eager"
        />
        {/* Subtle cinematic edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. RIGHT CARDS CONTAINER (Positioned in Right 44% on Desktop, Full Width Stacked on Mobile) */}
      <div
        ref={cardsRef}
        className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[44%] h-auto lg:h-full z-30 flex flex-col bg-[#F2F2F2] lg:border-l border-[#E5E5E5]"
      >
        {/* CARD 1: 8+ Services Unified (Airy, Refined Editorial Design, Non-Bulky Fonts) */}
        <div className="flex-1 bg-[#FFFFFF] p-6 sm:p-10 lg:p-12 xl:p-14 lg:pt-16 xl:pt-20 flex flex-col justify-between text-[#000000] border-b border-[#E5E5E5] select-none gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#777777] font-normal">
              ORBITS 01–08 · UNIFIED REVENUE
            </span>
            <span className="font-mono text-[10px] text-[#555555] border border-[#CCCCCC] rounded-none px-2 py-0.5 uppercase tracking-wider font-normal">
              FULL FUNNEL
            </span>
          </div>

          <div className="my-auto py-2">
            <div className="font-grotesk font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.035em] text-[#000000] leading-none">
              <span ref={primaryCountRef}>0+</span>
            </div>
            <h3 className="font-grotesk font-medium text-lg sm:text-xl lg:text-2xl text-[#111111] tracking-tight mt-3 leading-snug">
              {statLabelPrimary}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#555555] font-normal leading-relaxed max-w-[42ch] mt-2">
              {statSub}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-[#888888]">
            <span>MARKETPLACES</span>
            <span>·</span>
            <span>ADS</span>
            <span>·</span>
            <span>WEB</span>
            <span>·</span>
            <span>CREATIVE</span>
          </div>
        </div>

        {/* CARD 2: Direct Team Communication (Airy, Refined Editorial Design, Non-Bulky Fonts) */}
        <div className="flex-1 bg-[#F2F2F2] p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between text-[#000000] select-none gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#777777] font-normal">
              DIRECT SYNC · ZERO BOT BARRIERS
            </span>
            <span className="font-mono text-[10px] text-[#555555] border border-[#CCCCCC] rounded-none px-2 py-0.5 uppercase tracking-wider font-normal">
              ACTIVE SQUAD
            </span>
          </div>

          <div className="my-auto py-2">
            <div className="font-grotesk font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.035em] text-[#000000] leading-none">
              <span ref={secondaryCountRef}>0</span> Team
            </div>
            <h3 className="font-grotesk font-medium text-lg sm:text-xl lg:text-2xl text-[#111111] tracking-tight mt-3 leading-snug">
              {statSecondary}
            </h3>
            <span className="font-sans text-xs text-[#777777] font-normal block mt-0.5 tracking-wide">
              {statLabelSecondary}
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#555555] font-normal leading-relaxed max-w-[42ch] mt-2">
              {statSecondarySub}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-[#888888]">
            <span>WHATSAPP DIRECT</span>
            <span>·</span>
            <span>SLACK CONNECT</span>
            <span>·</span>
            <span>SPRINTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
