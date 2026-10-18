import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture
} from './ProceduralTextures';

export default function FooterAsteroidCanvas() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 320;
    let animId;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 5.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Cinematic Deep Space Rim Lighting)
    const ambientLight = new THREE.AmbientLight(0x1a202c, 1.2);
    scene.add(ambientLight);

    // Warm Sun Key Light
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 3.8);
    keyLight.position.set(-6, 5, 4);
    scene.add(keyLight);

    // E-Comet Cyan/Ember Rim Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    rimLight.position.set(6, -3, -4);
    scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0xf59e0b, 1.5, 10);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // 3. Asteroid Root Group
    const asteroidGroup = new THREE.Group();
    scene.add(asteroidGroup);

    // 4. Procedural Cratered Asteroid Geometry
    const asteroidGeo = new THREE.IcosahedronGeometry(1.5, 4);
    // Non-uniform scaling for authentic irregular natural form
    asteroidGeo.scale(1.18, 0.92, 1.06);

    // Procedural noise displacement to create craters and rock ridges
    const pos = asteroidGeo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const len = v.length();
      // Multi-frequency noise
      const n1 = Math.sin(v.x * 2.8) * Math.cos(v.y * 2.8) * Math.sin(v.z * 2.8) * 0.14;
      const n2 = Math.sin(v.x * 5.4 + 1.2) * Math.cos(v.z * 5.4) * 0.06;
      const n3 = Math.cos(v.y * 9.2) * 0.025;
      
      // Crater depressions
      const craterDist = Math.hypot(v.x - 0.6, v.y - 0.4, v.z - 0.7);
      const craterDent = craterDist < 0.65 ? -0.12 * Math.cos((craterDist / 0.65) * (Math.PI / 2)) : 0;

      v.addScaledVector(v.clone().normalize(), n1 + n2 + n3 + craterDent);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    asteroidGeo.computeVertexNormals();

    const rockTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();

    const asteroidMat = new THREE.MeshStandardMaterial({
      map: rockTex,
      bumpMap: bumpTex,
      bumpScale: 0.32,
      roughness: 0.82,
      metalness: 0.18,
      color: 0xcccccc
    });

    const asteroidMesh = new THREE.Mesh(asteroidGeo, asteroidMat);
    asteroidGroup.add(asteroidMesh);

    // 5. Orbital Trajectory Ring
    const ringGeo = new THREE.RingGeometry(2.35, 2.38, 96);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI * 0.42;
    ringMesh.rotation.y = Math.PI * 0.12;
    asteroidGroup.add(ringMesh);

    // Second faint outer trajectory ring
    const ringGeo2 = new THREE.RingGeometry(2.82, 2.84, 96);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI * 0.48;
    ringMesh2.rotation.y = -Math.PI * 0.18;
    asteroidGroup.add(ringMesh2);

    // 6. Micro-Debris Orbiting Particle Cloud
    const debrisCount = 36;
    const debrisGroup = new THREE.Group();
    asteroidGroup.add(debrisGroup);

    const debrisGeo = new THREE.DodecahedronGeometry(0.04, 0);
    const debrisMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.9,
      metalness: 0.2
    });

    const debrisItems = [];
    for (let i = 0; i < debrisCount; i++) {
      const mesh = new THREE.Mesh(debrisGeo, debrisMat);
      const angle = (i / debrisCount) * Math.PI * 2;
      const radius = 2.1 + Math.random() * 0.9;
      const speed = (0.2 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1);
      const yOffset = (Math.random() - 0.5) * 0.8;
      const scale = 0.5 + Math.random() * 0.9;
      mesh.scale.set(scale, scale, scale);

      debrisItems.push({ mesh, angle, radius, speed, yOffset });
      debrisGroup.add(mesh);
    }

    // 7. Ambient Celestial Dust Glow
    const glowTex = createGlowSpriteTexture(56, 189, 248);
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const glowSprite = new THREE.Sprite(glowMat);
    glowSprite.scale.set(4.8, 4.8, 1);
    asteroidGroup.add(glowSprite);

    // 8. Mouse & Drag Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = nx * 0.6;
      targetY = ny * 0.4;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        dragVelocity.x = deltaX * 0.007;
        dragVelocity.y = deltaY * 0.007;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 9. Render & Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Apply drag rotation inertia
      if (Math.abs(dragVelocity.x) > 0.0001 || Math.abs(dragVelocity.y) > 0.0001) {
        asteroidMesh.rotation.y += dragVelocity.x;
        asteroidMesh.rotation.x += dragVelocity.y;
        dragVelocity.x *= 0.94;
        dragVelocity.y *= 0.94;
      }

      // Continuous natural tumble
      asteroidMesh.rotation.y += delta * 0.18;
      asteroidMesh.rotation.x += delta * 0.06;
      asteroidMesh.rotation.z += delta * 0.04;

      // Tilting with cursor
      asteroidGroup.rotation.y = mouseX * 0.45;
      asteroidGroup.rotation.x = -mouseY * 0.35;

      // Rotate orbital rings
      ringMesh.rotation.z += delta * 0.08;
      ringMesh2.rotation.z -= delta * 0.05;

      // Animate orbiting micro-debris
      debrisItems.forEach((item) => {
        item.angle += item.speed * delta;
        item.mesh.position.set(
          Math.cos(item.angle) * item.radius,
          item.yOffset + Math.sin(item.angle * 2) * 0.15,
          Math.sin(item.angle) * item.radius
        );
        item.mesh.rotation.x += delta * 0.5;
        item.mesh.rotation.y += delta * 0.8;
      });

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 800;
      height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      asteroidGeo.dispose();
      asteroidMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      debrisGeo.dispose();
      debrisMat.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#090D14] via-[#0E1218] to-[#0A0D13] border border-white/10 select-none group">
      
      {/* Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-serif font-black tracking-[0.25em] text-white/[0.03] uppercase whitespace-nowrap">
          E-COMET
        </span>
      </div>

      {/* Top HUD Celestial Details Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-500 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          <span className="text-slate-300 font-bold uppercase">ASTEROID BELT // 21-ORBIT-CORE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>COSMIC SECTOR 07</span>
          <span>GRAVITY LOCKED</span>
        </div>
      </div>

      {/* 3D WebGL Canvas Container with Cursor Grab States */}
      <div 
        ref={mountRef} 
        className={`relative w-full h-[260px] sm:h-[300px] md:h-[340px] cursor-grab ${
          isInteracting ? 'cursor-grabbing' : ''
        }`}
      />

      {/* Bottom Interactive Prompt Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-400 tracking-wider flex items-center gap-2 shadow-sm">
          <span className="text-white">✦</span>
          <span>Interactive 3D Asteroid · Drag to inspect orbit</span>
          <span className="text-cyan-400">✦</span>
        </div>
      </div>

      {/* Soft Vignette Gradients */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0E1218] to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0E1218] to-transparent pointer-events-none"></div>
    </div>
  );
}
