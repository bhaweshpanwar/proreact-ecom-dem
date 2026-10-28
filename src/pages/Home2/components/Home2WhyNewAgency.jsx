import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home2WhyNewAgency({ data }) {
  const sectionRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const headingRef = useRef(null);

  const {
    eyebrow = "07 / THE CONTRAST",
    pullQuoteBlack = "Legacy agencies sell you headcounts.",
    pullQuoteGrey = "We deliver direct velocity.",
    fourPoints = [
      {
        num: "01",
        title: "Senior People on Your Account",
        desc: "You collaborate directly with founders and senior practitioners who build and execute. No junior bait-and-switch."
      },
      {
        num: "02",
        title: "Direct WhatsApp & Slack Access",
        desc: "Instant, real-time communications. No support ticketing queues, no 72-hour delay answering urgent catalogue issues."
      },
      {
        num: "03",
        title: "No 12-Month Lock-In",
        desc: "We operate on performance trust. Clear month-to-month retainers after onboarding. We earn your partnership continuously."
      },
      {
        num: "04",
        title: "Weekly Net Contribution Reports",
        desc: "We report actual commercial revenue, margin, and blended ROAS. Zero vanity graphs designed to mask flat sales."
      }
    ]
  } = data || {};

  const blackWords = (pullQuoteBlack || "").split(/\s+/).filter(Boolean);
  const greyWords = (pullQuoteGrey || "").split(/\s+/).filter(Boolean);

  useEffect(() => {
    if (!pinWrapperRef.current || !headingRef.current) return;
    const words = headingRef.current.querySelectorAll('.quote-word');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
      const scrollDistance = isMobile ? 1400 : 2200;

      // Ensure initial color is visible muted gray
      gsap.set(words, { color: '#555555' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });

      // Word-by-word gradual transition to pure white
      tl.to(words, {
        color: '#FFFFFF',
        duration: 1,
        stagger: 0.28,
        ease: 'power1.inOut',
      });

      // Hold on all-white statement before releasing pin to next section
      tl.to({}, { duration: 0.9 });

    }, sectionRef);

    return () => ctx.revert();
  }, [pullQuoteBlack, pullQuoteGrey]);

  return (
    <section ref={sectionRef} className="relative border-b border-[#E5E5E5]">
      
      {/* Top Half: Huge Pull-Quote Statement Pinned with Slow Scrub to Pure White */}
      <div 
        ref={pinWrapperRef}
        className="relative w-full min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col justify-center py-20 sm:py-28 px-4 sm:px-8 lg:px-16 border-b border-[#262626]"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          {eyebrow && (
            <div className="mb-6 sm:mb-10 flex items-center gap-3">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#8A8A8A] uppercase">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-[#333333]" />
            </div>
          )}

          <h2 
            ref={headingRef}
            className="font-grotesk font-bold text-[clamp(36px,6.5vw,110px)] leading-[0.92] tracking-[-0.04em] uppercase"
          >
            <span className="block mb-3 sm:mb-6">
              {blackWords.map((word, idx) => (
                <span 
                  key={`b-${idx}`} 
                  className="quote-word inline-block mr-[0.24em] text-[#555555] will-change-[color]"
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block">
              {greyWords.map((word, idx) => (
                <span 
                  key={`g-${idx}`} 
                  className="quote-word inline-block mr-[0.24em] text-[#555555] will-change-[color]"
                >
                  {word}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom Half: 4 Short Points on Solid Light-Grey Band (#F2F2F2) */}
      <div className="bg-[#F2F2F2] text-[#000000] py-16 sm:py-24 px-4 sm:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D9D9D9] border-t border-b border-[#D9D9D9]">
            {fourPoints.map((point, idx) => (
              <div 
                key={idx}
                className="py-8 sm:py-10 sm:px-8 first:pl-0 last:pr-0 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-[#8A8A8A] uppercase font-semibold tracking-wider">
                    ADVANTAGE [{point.num}]
                  </span>
                  <span className="font-sans text-xs font-bold text-[#000000]">
                    ✓
                  </span>
                </div>

                <h3 className="font-grotesk font-bold text-lg sm:text-xl text-[#000000] leading-snug">
                  {point.title}
                </h3>

                <p className="font-grotesk text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
