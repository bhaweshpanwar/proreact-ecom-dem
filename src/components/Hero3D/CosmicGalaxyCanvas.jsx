import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  createPinpointStarTexture,
  createVolumetricNebulaTexture
} from './ProceduralTextures';

export default function CosmicGalaxyCanvas({ accentColorHex = '#38BDF8' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 600;
    let animId;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.002);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 400);
    camera.position.set(0, 0, 45);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Ambient & Subtle Cosmic Lighting (Deep neutral space)
    const ambientLight = new THREE.AmbientLight(0x080c16, 0.4);
    scene.add(ambientLight);

    const neutralLight = new THREE.DirectionalLight(0xffffff, 0.4);
    neutralLight.position.set(30, 20, 20);
    scene.add(neutralLight);

    // 3. Deep Starfield (2400 Stars - Clean white, diamond & neutral celestial tint)
    const starCount = 2400;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalettes = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xf8fafc),
      new THREE.Color(0xdbeafe),
      new THREE.Color(0xffedd5),
      new THREE.Color(0xcfd8dc)
    ];

    for (let i = 0; i < starCount; i++) {
      const r = 35 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const c = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      const brightness = 0.45 + Math.random() * 0.55;
      starColors[i * 3] = c.r * brightness;
      starColors[i * 3 + 1] = c.g * brightness;
      starColors[i * 3 + 2] = c.b * brightness;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const pinpointStarTex = createPinpointStarTexture();
    const starMat = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      map: pinpointStarTex,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 4. Subtle Deep Space Dust (Dark charcoal/slate, zero violet)
    const nebulaTex = createVolumetricNebulaTexture(20, 30, 45);
    const nebulaGroup = new THREE.Group();
    scene.add(nebulaGroup);

    const nebulaColors = [0x060911, 0x0a101f, 0x080d19, 0x0d1527];
    for (let i = 0; i < 18; i++) {
      const c = nebulaColors[i % nebulaColors.length];
      const nebMat = new THREE.SpriteMaterial({
        map: nebulaTex,
        color: c,
        transparent: true,
        opacity: 0.07 + Math.random() * 0.05,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const nebSprite = new THREE.Sprite(nebMat);
      nebSprite.position.set(
        (Math.random() - 0.5) * 110,
        (Math.random() - 0.5) * 60,
        -40 - Math.random() * 60
      );
      const s = 45 + Math.random() * 55;
      nebSprite.scale.set(s, s, 1);
      nebulaGroup.add(nebSprite);
    }

    // 6. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Subtle, slow cosmic drift
      starPoints.rotation.y = elapsed * 0.012;
      starPoints.rotation.x = Math.sin(elapsed * 0.008) * 0.04;
      nebulaGroup.rotation.y = -elapsed * 0.006;
      nebulaGroup.rotation.z = Math.cos(elapsed * 0.005) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [accentColorHex]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
}
