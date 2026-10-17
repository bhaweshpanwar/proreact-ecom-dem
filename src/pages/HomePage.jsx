import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CelestialHero from '../components/Hero3D/CelestialHero';
import IntroSection from '../components/Sections/IntroSection';
import GoalsSection from '../components/Sections/GoalsSection';
import CapabilitiesSection from '../components/Sections/CapabilitiesSection';
import ProcessSection from '../components/Sections/ProcessSection';
import SelectedWorkSection from '../components/Sections/SelectedWorkSection';
import WhySection from '../components/Sections/WhySection';
import FaqSection from '../components/Sections/FaqSection';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // 1. Scroll Progress Indicator Line
    const progressLine = document.getElementById('scroll-progress-line');
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressLine && docHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        progressLine.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#02040C] select-none">
      {/* 3D Celestial Hero & Polar Dive Whiteout */}
      <CelestialHero />

      {/* Main Content Hand-off starts seamlessly from the white section */}
      <main id="main-content" className="relative bg-white z-20">
        <IntroSection />
        <GoalsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <SelectedWorkSection />
        <WhySection />
        <FaqSection />
        <ClosingSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
