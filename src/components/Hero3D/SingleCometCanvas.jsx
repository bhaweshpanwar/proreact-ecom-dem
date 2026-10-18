import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture
} from '../Hero3D/ProceduralTextures';

export default function SingleCometCanvas({ colorHex = '#38BDF8', title = 'Service Comet' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 380;
    let height = container.clientHeight || 420;
    let animId;

    // 1. Three.js Scene Setup (Calibrated FOV & Distance so comet is fully visible with no clipping)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Realistic Cinematic Lighting
    const sunColor = new THREE.Color(colorHex);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Warm solar key light casting crisp relief
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 3.2);
    keyLight.position.set(-5, 3.5, 4.5);
    scene.add(keyLight);

    // Subtle celestial rim light
    const rimLight = new THREE.DirectionalLight(sunColor, 1.8);
    rimLight.position.set(4.5, -2, -3);
    scene.add(rimLight);

    // 3. Comet Group
    const cometGroup = new THREE.Group();
    scene.add(cometGroup);

    // 4. Properly Sized Nucleus (Radius: 1.05 - perfectly contained without overflowing bounds)
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const nucleusGeo = new THREE.IcosahedronGeometry(1.05, 5);
    nucleusGeo.scale(1.04, 0.96, 1.0);

    // Smooth organic displacement (No extreme bulging)
    const posAttr = nucleusGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      
      const macroDistort = 
        Math.sin(v.x * 2.2) * Math.cos(v.y * 2.2) * 0.08 +
        Math.sin(v.z * 1.8) * 0.05;

      const craterNoise =
        Math.sin(v.x * 4.5 + 1.0) * Math.sin(v.y * 4.0) * 0.04;

      const fineGrit =
        Math.sin(v.x * 10.0) * Math.cos(v.y * 10.0) * 0.015;
      
      const totalDisp = macroDistort + craterNoise + fineGrit;
      v.addScaledVector(v.clone().normalize(), totalDisp);
      posAttr.setXYZ(i, v.x, v.y, v.z);
    }
    nucleusGeo.computeVertexNormals();

    const nucleusMat = new THREE.MeshStandardMaterial({
      map: nucleusTex,
      bumpMap: bumpTex,
      bumpScale: 0.16,
      roughness: 0.85,
      metalness: 0.08,
      flatShading: false
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    cometGroup.add(nucleusMesh);

    // 5. Soft Ion Coma Halo (Subtle low-opacity glow, no blown-out haze)
    const comaTex = createGlowSpriteTexture(
      Math.round(sunColor.r * 255),
      Math.round(sunColor.g * 255),
      Math.round(sunColor.b * 255)
    );
    const comaMat = new THREE.SpriteMaterial({
      map: comaTex,
      color: sunColor,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const comaSprite = new THREE.Sprite(comaMat);
    comaSprite.scale.set(3.2, 3.2, 1);
    cometGroup.add(comaSprite);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Parallax easing
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      cometGroup.rotation.y = elapsed * 0.25 + mouseX;
      cometGroup.rotation.x = Math.sin(elapsed * 0.18) * 0.08 + mouseY;
      nucleusMesh.rotation.z = elapsed * 0.10;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 380;
      height = container.clientHeight || 420;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [colorHex]);

  return (
    <div className="relative w-full max-w-[480px] h-[380px] sm:h-[440px] lg:h-[480px] mx-auto flex items-center justify-center select-none group cursor-grab active:cursor-grabbing overflow-visible">
      {/* Background Soft Celestial Radial Aura (Very low opacity) */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colorHex} 0%, transparent 60%)`
        }}
      />
      
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="relative w-full h-full" />

    </div>
  );
}
