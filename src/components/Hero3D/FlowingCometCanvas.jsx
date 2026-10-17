import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture
} from './ProceduralTextures';

gsap.registerPlugin(ScrollTrigger);

export default function FlowingCometCanvas({ colorHex = '#38BDF8' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animId;
    let scrollTriggerInstance;

    // 1. Three.js Scene Setup (Transparent full-screen viewport)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    // 2. Lighting Setup
    const sunColor = new THREE.Color(colorHex);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 3.8);
    keyLight.position.set(-8, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(sunColor, 3.2);
    rimLight.position.set(7, -3, -4);
    scene.add(rimLight);

    // 3. Comet Group
    const cometGroup = new THREE.Group();
    scene.add(cometGroup);

    // 4. Procedural Textured Nucleus (Refined, smaller celestial scale)
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const nucleusGeo = new THREE.IcosahedronGeometry(0.82, 4);
    nucleusGeo.scale(1.0, 0.88, 0.94);

    // Crater Stamping Algorithm
    const posAttr = nucleusGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      const freq = 3.4;
      const noise =
        Math.sin(v.x * freq) * Math.cos(v.y * freq) * 0.08 +
        Math.sin(v.z * freq * 1.6) * 0.04;
      v.addScaledVector(v.clone().normalize(), noise);
      posAttr.setXYZ(i, v.x, v.y, v.z);
    }
    nucleusGeo.computeVertexNormals();

    const nucleusMat = new THREE.MeshStandardMaterial({
      map: nucleusTex,
      bumpMap: bumpTex,
      bumpScale: 0.28,
      roughness: 0.82,
      metalness: 0.12
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    cometGroup.add(nucleusMesh);

    // 5. Luminous Ion Coma Glow (Tail completely removed)
    const comaTex = createGlowSpriteTexture(
      Math.round(sunColor.r * 255),
      Math.round(sunColor.g * 255),
      Math.round(sunColor.b * 255)
    );
    const comaMat = new THREE.SpriteMaterial({
      map: comaTex,
      color: sunColor,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const comaSprite = new THREE.Sprite(comaMat);
    comaSprite.scale.set(3.0, 3.0, 1);
    cometGroup.add(comaSprite);

    // 6. Initial Placement (Inside Hero space)
    const isMobile = width < 1024;
    const initialPos = isMobile
      ? { x: 0, y: -0.8, z: -2.5, scale: 0.75 }
      : { x: 4.0, y: 0.4, z: 0, scale: 1.0 };

    cometGroup.position.set(initialPos.x, initialPos.y, initialPos.z);
    cometGroup.scale.set(initialPos.scale, initialPos.scale, initialPos.scale);

    // 7. Scroll-Driven Flow Path across Page Sections
    // The comet glides smoothly into the natural empty spaces of the page as you scroll
    const flowProps = {
      x: initialPos.x,
      y: initialPos.y,
      z: initialPos.z,
      scale: initialPos.scale,
      rotExtraY: 0
    };

    if (!isMobile) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2
        }
      });

      scrollTriggerInstance = scrollTl.scrollTrigger;

      scrollTl
        // 0% -> 18%: Hero -> Section 1 (Who Benefits - glides into right empty space)
        .to(flowProps, {
          x: 4.2,
          y: -0.4,
          z: -0.5,
          scale: 0.78,
          rotExtraY: Math.PI * 0.8,
          ease: 'power1.inOut'
        }, 0.12)
        // 18% -> 38%: Section 2 (Architecture - glides across to left side margin)
        .to(flowProps, {
          x: -4.3,
          y: 0.2,
          z: -0.8,
          scale: 0.72,
          rotExtraY: Math.PI * 1.8,
          ease: 'power1.inOut'
        }, 0.32)
        // 38% -> 58%: Section 3 (Roadmap - glides to right side empty space)
        .to(flowProps, {
          x: 4.1,
          y: -0.2,
          z: 0.2,
          scale: 0.82,
          rotExtraY: Math.PI * 2.8,
          ease: 'power1.inOut'
        }, 0.52)
        // 58% -> 78%: Section 4 (Deliverables - glides between split panels)
        .to(flowProps, {
          x: 0,
          y: 0.5,
          z: -1.2,
          scale: 0.65,
          rotExtraY: Math.PI * 3.8,
          ease: 'power1.inOut'
        }, 0.72)
        // 78% -> 100%: Section 5/6 (FAQ & Closing - settles gracefully above audit card)
        .to(flowProps, {
          x: 3.8,
          y: -0.3,
          z: -0.4,
          scale: 0.70,
          rotExtraY: Math.PI * 4.8,
          ease: 'power1.inOut'
        }, 0.90);
    }

    // 8. Mouse Parallax Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 0.65;
      targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 9. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      // Apply scroll-driven flowing coordinates
      cometGroup.position.x = flowProps.x;
      cometGroup.position.y = flowProps.y;
      cometGroup.position.z = flowProps.z;
      cometGroup.scale.set(flowProps.scale, flowProps.scale, flowProps.scale);

      // Continuous self-rotation + scroll rotation + mouse tilt
      cometGroup.rotation.y = elapsed * 0.35 + flowProps.rotExtraY + mouseX;
      cometGroup.rotation.x = Math.sin(elapsed * 0.25) * 0.12 + mouseY;
      nucleusMesh.rotation.z = elapsed * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize Handling
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      scrollTriggerInstance?.kill();
      renderer.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      comaMat.dispose();
    };
  }, [colorHex]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      aria-hidden="true"
    />
  );
}
