import React, { useEffect, useRef, useState } from 'react';
import { CelestialEngine } from './CelestialEngine';
import ServiceDrawer from './ServiceDrawer';
import WhiteoutIntroStage from './WhiteoutIntroStage';

export default function CelestialHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const labelsRef = useRef(null);
  const engineRef = useRef(null);

  const [selectedComet, setSelectedComet] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const engine = new CelestialEngine({
      canvas: canvasRef.current,
      labelsContainer: labelsRef.current,
      onSelectComet: (cometData) => setSelectedComet(cometData),
    });
    engineRef.current = engine;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const track = containerRef.current;
      if (!track) return;
      const maxScroll = track.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(p);
      engine.setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      engine.destroy();
    };
  }, []);

  return (
    <div id="hero-scroll-track" ref={containerRef} className="relative w-full h-[200vh] z-10">
      <div id="hero-sticky-container" className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10">
        
        {/* 3D WebGL Canvas */}
        <canvas id="webgl-canvas" ref={canvasRef} className="block w-full h-full" />

        {/* Cinematic Atmospheric Vignette & Corner Solar Warmth */}
        <div className="viewport-atmospheric-overlay" aria-hidden="true" />

        {/* Projected 2D HTML Labels */}
        <div id="labels-container" ref={labelsRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden" />

        {/* Comet Detail Drawer */}
        <ServiceDrawer 
          service={selectedComet} 
          onClose={() => {
            setSelectedComet(null);
            engineRef.current?.deselectComet();
          }} 
        />

        {/* Pure Whiteout Transition Hand-off */}
        <WhiteoutIntroStage progress={scrollProgress} />

      </div>
    </div>
  );
}
