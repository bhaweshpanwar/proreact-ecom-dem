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

    // 2. Custom Cursor Follower (Desktop only)
    const cursor = document.getElementById('custom-cursor');
    const label = document.getElementById('custom-cursor-label');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animId;

    if (cursor && !window.matchMedia('(pointer: coarse)').matches) {
      cursor.classList.remove('hidden');

      const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        animId = requestAnimationFrame(animateCursor);
      };
      animateCursor();

      // Expand to pill over interactive carousel cards
      const dragElements = document.querySelectorAll('[data-cursor="Drag"]');
      const onMouseEnterDrag = () => {
        cursor.style.width = '60px';
        cursor.style.height = '28px';
        cursor.style.backgroundColor = 'rgba(14, 18, 24, 0.9)';
        if (label) {
          label.textContent = 'Drag';
          label.classList.remove('hidden');
        }
      };
      const onMouseLeaveDrag = () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.backgroundColor = 'rgba(14, 18, 24, 0.85)';
        if (label) label.classList.add('hidden');
      };

      dragElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterDrag);
        el.addEventListener('mouseleave', onMouseLeaveDrag);
      });

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('mousemove', onMouseMove);
        dragElements.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnterDrag);
          el.removeEventListener('mouseleave', onMouseLeaveDrag);
        });
        if (animId) cancelAnimationFrame(animId);
      };
    }

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
