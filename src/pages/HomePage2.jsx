import React, { useEffect } from 'react';
import CelestialHero from '../components/Hero3D/CelestialHero';
import Home2CosmicHandoff from '../components/Home2/Home2CosmicHandoff';
import Home2MatrixSection from '../components/Home2/Home2MatrixSection';
import Home2StargateSection from '../components/Home2/Home2StargateSection';
import Home2OdysseySection from '../components/Home2/Home2OdysseySection';
import Home2StellarWorkSection from '../components/Home2/Home2StellarWorkSection';
import Home2ObservatorySection from '../components/Home2/Home2ObservatorySection';
import Home2QuantumFaq from '../components/Home2/Home2QuantumFaq';
import ClosingSection from '../components/Sections/ClosingSection';
import Footer from '../components/Sections/Footer';

export default function HomePage2() {
  useEffect(() => {
    // Scroll progress line
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
    <div className="relative w-full bg-[#02040C] select-none text-white">
      {/* Scroll Progress Line */}
      <div 
        id="scroll-progress-line" 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 origin-left z-50 transform scale-x-0"
      />

      {/* 3D Celestial Hero with Custom Cosmic Portal Handoff */}
      <CelestialHero 
        renderOverlay={(progress) => <Home2CosmicHandoff progress={progress} />}
        trackHeightClass="h-[180vh]"
      />

      {/* Main Home 2 Architectural Experience */}
      <main id="main-content" className="relative z-20">
        <Home2MatrixSection />
        <Home2StargateSection />
        <Home2OdysseySection />
        <Home2StellarWorkSection />
        <Home2ObservatorySection />
        <Home2QuantumFaq />
        <ClosingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
