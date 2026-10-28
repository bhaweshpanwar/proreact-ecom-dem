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
    image = "/images/space/ring-part-three.jpg",
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

    // 1. Desktop & Large Screens (lg: 1024px+)
    mm.add("(min-width: 1024px)", () => {
      // Initially, image wrapper covers the full 100% width
      gsap.set(imgWrapperRef.current, { width: "100%", height: "100%", left: 0, top: 0 });
      gsap.set(cardsRef.current, { opacity: 0, x: 40 });
      if (imgRef.current) gsap.set(imgRef.current, { scale: 1 });
      if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
      if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        }
      });

      // Step 1: Image smoothly contracts to 56% width on the LEFT, unmasking the cards on the RIGHT
      tl.to(
        imgWrapperRef.current,
        {
          width: "56%",
          ease: "power3.inOut",
          duration: 1.1,
        },
        "unmask"
      );

      // Step 2: Cards fade in and slide subtly into place
      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
          duration: 0.9,
        },
        "unmask+=0.2"
      );

      if (imgRef.current) {
        tl.to(
          imgRef.current,
          {
            scale: 1.04,
            ease: "power3.inOut",
            duration: 1.1,
          },
          "unmask"
        );
      }

      // Step 3: Count-up animation for 8+
      const counter1 = { val: 0 };
      tl.to(
        counter1,
        {
          val: 8,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            if (primaryCountRef.current) {
              primaryCountRef.current.innerText = `${Math.round(counter1.val)}+`;
            }
          }
        },
        "unmask+=0.2"
      );

      // Step 4: Count-up animation for 1 Team
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
        "unmask+=0.2"
      );

      tl.eventCallback("onReverseComplete", () => {
        if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
        if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";
      });
    });

    // 2. Mobile & Tablet Screens (< 1024px)
    mm.add("(max-width: 1023px)", () => {
      gsap.set(imgWrapperRef.current, { width: "100%", height: "100%", top: 0, left: 0 });
      gsap.set(cardsRef.current, { opacity: 0, y: 30 });
      if (primaryCountRef.current) primaryCountRef.current.innerText = "0+";
      if (secondaryCountRef.current) secondaryCountRef.current.innerText = "0";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        }
      });

      tl.to(
        imgWrapperRef.current,
        {
          height: "42%",
          ease: "power3.inOut",
          duration: 1.0,
        },
        "unmaskMobile"
      );

      tl.to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 0.9,
        },
        "unmaskMobile+=0.2"
      );

      const counter1 = { val: 0 };
      tl.to(
        counter1,
        {
          val: 8,
          duration: 1.1,
          ease: "power2.out",
          onUpdate: () => {
            if (primaryCountRef.current) {
              primaryCountRef.current.innerText = `${Math.round(counter1.val)}+`;
            }
          }
        },
        "unmaskMobile+=0.2"
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
        "unmaskMobile+=0.2"
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
      className="relative w-full min-h-[600px] h-screen overflow-hidden select-none bg-[#F2F2F2] border-b border-[#E5E5E5] z-20"
    >
      {/* 1. LEFT IMAGE WRAPPER (Starts Full Width z-20, Contracts to 56% to Unmask Cards) */}
      <div
        ref={imgWrapperRef}
        className="absolute left-0 top-0 bottom-0 h-full z-20 overflow-hidden shadow-2xl will-change-[width,height]"
      >
        <img
          ref={imgRef}
          src={image}
          alt="E-Comet Unified Digital Strategy"
          className="w-full h-full object-cover object-center select-none will-change-transform"
          loading="eager"
        />
        {/* Subtle cinematic edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25 pointer-events-none" />
      </div>

      {/* 2. RIGHT CARDS CONTAINER (Positioned in Right 44%, Unmasked as Image Contracts) */}
      <div
        ref={cardsRef}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[44%] h-full z-10 flex flex-col bg-[#F2F2F2] border-l border-[#E5E5E5]"
      >
        {/* CARD 1: 8+ Services Unified (Airy, Refined Editorial Design, Non-Bulky Fonts) */}
        <div className="flex-1 bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-[#000000] border-b border-[#E5E5E5] select-none">
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
              <span ref={primaryCountRef}>8+</span>
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
        <div className="flex-1 bg-[#F2F2F2] p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-[#000000] select-none">
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
              <span ref={secondaryCountRef}>1</span> Team
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
