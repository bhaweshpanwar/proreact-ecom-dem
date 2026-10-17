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
    let height = container.clientHeight || 340;
    let animId;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const sunColor = new THREE.Color(colorHex);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.5);
    keyLight.position.set(-6, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(sunColor, 2.8);
    rimLight.position.set(5, -2, -3);
    scene.add(rimLight);

    // 3. Comet Group
    const cometGroup = new THREE.Group();
    scene.add(cometGroup);

    // 4. Procedural Textured Nucleus with Impact Craters (Refined celestial size)
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const nucleusGeo = new THREE.IcosahedronGeometry(0.85, 4);
    nucleusGeo.scale(1.0, 0.90, 0.96);

    // Crater Stamping Algorithm
    const posAttr = nucleusGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      const freq = 3.2;
      const noise =
        Math.sin(v.x * freq) * Math.cos(v.y * freq) * 0.09 +
        Math.sin(v.z * freq * 1.5) * 0.05;
      v.addScaledVector(v.clone().normalize(), noise);
      posAttr.setXYZ(i, v.x, v.y, v.z);
    }
    nucleusGeo.computeVertexNormals();

    const nucleusMat = new THREE.MeshStandardMaterial({
      map: nucleusTex,
      bumpMap: bumpTex,
      bumpScale: 0.25,
      roughness: 0.85,
      metalness: 0.08
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    cometGroup.add(nucleusMesh);

    // 5. Luminous Ion Coma Glow (Tail removed per design request)
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
    comaSprite.scale.set(3.2, 3.2, 1);
    cometGroup.add(comaSprite);

    // 6. Interactive Mouse Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.85;
      targetY = y * 0.55;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse parallax
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      cometGroup.rotation.y = elapsed * 0.38 + mouseX;
      cometGroup.rotation.x = Math.sin(elapsed * 0.25) * 0.12 + mouseY;
      nucleusMesh.rotation.z = elapsed * 0.18;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 380;
      height = container.clientHeight || 340;
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
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center select-none group cursor-grab active:cursor-grabbing">
      {/* Background Soft Celestial Radial Aura */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-25 pointer-events-none transition-opacity group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at center, ${colorHex} 0%, transparent 70%)`
        }}
      />
      
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="relative w-full h-full" />

    </div>
  );
}
