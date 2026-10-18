import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture,
  createPinpointStarTexture
} from './ProceduralTextures';

export default function RealCometCanvas() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 900;
    let height = container.clientHeight || 360;
    let animId;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(2.5, 0.8, 6.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Monochromatic Space Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x1a2333, 1.0);
    scene.add(ambientLight);

    // Sun directional key light
    const sunLight = new THREE.DirectionalLight(0xffffff, 4.2);
    sunLight.position.set(8, 6, 5);
    scene.add(sunLight);

    // Cool rim light for starlight edge definition
    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 2.2);
    rimLight.position.set(-6, -3, -4);
    scene.add(rimLight);

    // 3. Comet Root Group (Rotates and banks with trajectory & mouse)
    const cometRoot = new THREE.Group();
    scene.add(cometRoot);

    // 4. Comet Nucleus (Icy/Rocky Core)
    const nucleusGroup = new THREE.Group();
    nucleusGroup.position.set(1.6, 0.2, 0);
    cometRoot.add(nucleusGroup);

    const nucleusGeo = new THREE.IcosahedronGeometry(0.72, 4);
    nucleusGeo.scale(1.25, 0.82, 0.95);

    // Displace vertices with multi-frequency procedural noise for authentic cratered ice ridges
    const pos = nucleusGeo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n1 = Math.sin(v.x * 3.4) * Math.cos(v.y * 3.4) * Math.sin(v.z * 3.4) * 0.12;
      const n2 = Math.sin(v.x * 6.5 + 1.2) * Math.cos(v.z * 6.5) * 0.05;
      const fissure = Math.cos(v.y * 8.0) * 0.025;
      v.addScaledVector(v.clone().normalize(), n1 + n2 + fissure);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    nucleusGeo.computeVertexNormals();

    const rockTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();

    const nucleusMat = new THREE.MeshStandardMaterial({
      map: rockTex,
      bumpMap: bumpTex,
      bumpScale: 0.35,
      roughness: 0.55,
      metalness: 0.25,
      color: 0xdddddd,
      emissive: 0xffffff,
      emissiveIntensity: 0.25
    });

    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleusGroup.add(nucleusMesh);

    // Radiant Point Light at Nucleus Heart
    const nucleusCoreLight = new THREE.PointLight(0xffffff, 5.0, 16);
    nucleusGroup.add(nucleusCoreLight);

    // 5. Multi-Layer Coma Atmosphere (The Glowing Cloud)
    const glowTex = createGlowSpriteTexture(255, 255, 255);
    
    // Inner brilliant coma
    const innerComaMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffffff,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const innerComa = new THREE.Sprite(innerComaMat);
    innerComa.scale.set(2.2, 2.2, 1);
    nucleusGroup.add(innerComa);

    // Outer ethereal gaseous coma
    const outerComaMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const outerComa = new THREE.Sprite(outerComaMat);
    outerComa.scale.set(5.8, 5.8, 1);
    nucleusGroup.add(outerComa);

    // 6. Real Comet Tail Particle System (Dust Tail + Ion Stream)
    // Particles stream backwards from the nucleus along the -X axis with realistic cosmic turbulence and dispersion
    const dustCount = 1800;
    const ionCount = 600;
    const totalParticles = dustCount + ionCount;

    const tailGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const sizes = new Float32Array(totalParticles);

    // Metadata for each particle
    const particles = [];
    const starTex = createPinpointStarTexture();

    for (let i = 0; i < totalParticles; i++) {
      const isIon = i >= dustCount;
      // Progress along tail length: 0 is nucleus, 1 is tip of tail
      const progress = Math.random();
      const lengthMax = isIon ? 11.5 : 9.5;
      const dist = progress * lengthMax;

      // Lateral dispersion increases with distance (the classic comet tail fan shape)
      const spreadFactor = isIon 
        ? Math.pow(progress, 1.1) * 0.28   // Ion tail is tight and straight
        : Math.pow(progress, 1.45) * 1.85; // Dust tail curves and fans out wide

      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * spreadFactor;

      // Curved dust tail trajectory dynamics
      const curveY = isIon ? 0 : Math.pow(progress, 1.7) * 0.95;
      const curveZ = isIon ? 0 : Math.sin(progress * 1.8) * 0.3;

      const px = nucleusGroup.position.x - dist;
      const py = nucleusGroup.position.y + Math.cos(angle) * radius + curveY;
      const pz = nucleusGroup.position.z + Math.sin(angle) * radius + curveZ;

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      // Color and brightness: Brilliant white near nucleus, fading softly towards starlight
      const alpha = isIon 
        ? (1.0 - progress) * 0.95 
        : (1.0 - Math.pow(progress, 1.2)) * 0.75;

      const cVal = Math.min(1.0, 0.6 + (1.0 - progress) * 0.4);
      colors[i * 3] = cVal;
      colors[i * 3 + 1] = cVal;
      colors[i * 3 + 2] = cVal;

      sizes[i] = isIon ? (0.12 + Math.random() * 0.1) : (0.18 + progress * 0.45);

      particles.push({
        isIon,
        progress,
        lengthMax,
        speed: (isIon ? 1.6 : 0.85) + Math.random() * 0.45,
        angle,
        radiusMult: Math.random(),
        baseCurveY: curveY,
        baseCurveZ: curveZ
      });
    }

    tailGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    tailGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const tailMat = new THREE.PointsMaterial({
      size: 0.28,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const tailPoints = new THREE.Points(tailGeo, tailMat);
    cometRoot.add(tailPoints);

    // 7. Celestial Hyperbolic Trajectory Line
    const curvePoints = [];
    for (let t = -6; t <= 6; t += 0.25) {
      const cx = t;
      const cy = -0.08 * (t * t) + 1.2;
      const cz = t * 0.15;
      curvePoints.push(new THREE.Vector3(cx, cy, cz));
    }
    const trajectoryCurve = new THREE.CatmullRomCurve3(curvePoints);
    const trajectoryGeo = new THREE.BufferGeometry().setFromPoints(trajectoryCurve.getPoints(80));
    const trajectoryMat = new THREE.LineDashedMaterial({
      color: 0xffffff,
      dashSize: 0.25,
      gapSize: 0.35,
      transparent: true,
      opacity: 0.18
    });
    const trajectoryLine = new THREE.Line(trajectoryGeo, trajectoryMat);
    trajectoryLine.computeLineDistances();
    cometRoot.add(trajectoryLine);

    // 8. Interaction (Mouse hover parallax and drag)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = nx * 0.5;
      targetY = ny * 0.35;

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        dragVelocity.x = dx * 0.005;
        dragVelocity.y = dy * 0.005;
        prevMouse = { x: e.clientX, y: e.clientY };
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

      // Smooth mouse easing
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Apply drag rotation
      if (Math.abs(dragVelocity.x) > 0.0001 || Math.abs(dragVelocity.y) > 0.0001) {
        cometRoot.rotation.y += dragVelocity.x;
        cometRoot.rotation.x += dragVelocity.y;
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
      }

      // Bank comet with cursor
      cometRoot.rotation.y = mouseX * 0.38;
      cometRoot.rotation.x = -mouseY * 0.28;

      // Nucleus rotation and gentle wobble
      nucleusMesh.rotation.y += delta * 0.45;
      nucleusMesh.rotation.x += delta * 0.22;
      nucleusMesh.rotation.z += delta * 0.15;

      // Coma pulsation (authentic sublimating vapor pulse)
      const pulse = 1.0 + Math.sin(elapsed * 4.0) * 0.06;
      innerComa.scale.set(2.2 * pulse, 2.2 * pulse, 1);
      outerComa.scale.set(5.8 * (1.0 + Math.cos(elapsed * 2.5) * 0.05), 5.8 * (1.0 + Math.cos(elapsed * 2.5) * 0.05), 1);

      // Animate streaming tail particles
      const posAttr = tailGeo.attributes.position;
      const colAttr = tailGeo.attributes.color;

      for (let i = 0; i < totalParticles; i++) {
        const p = particles[i];
        
        // Advance particle backwards along tail
        p.progress += delta * (p.speed * 0.18);
        if (p.progress > 1.0) {
          p.progress = 0.0; // Respawn at nucleus
        }

        const dist = p.progress * p.lengthMax;
        const spreadFactor = p.isIon 
          ? Math.pow(p.progress, 1.1) * 0.28
          : Math.pow(p.progress, 1.45) * 1.85;

        // Turbulence wave: undulating celestial plasma flow
        const turbX = Math.sin(elapsed * 3.5 + dist * 1.8) * 0.06;
        const turbY = Math.cos(elapsed * 2.8 + dist * 1.4) * 0.08;

        const curveY = p.isIon ? 0 : Math.pow(p.progress, 1.7) * 0.95;
        const curveZ = p.isIon ? 0 : Math.sin(p.progress * 1.8) * 0.3;

        const radius = p.radiusMult * spreadFactor;
        const px = nucleusGroup.position.x - dist + turbX;
        const py = nucleusGroup.position.y + Math.cos(p.angle) * radius + curveY + turbY;
        const pz = nucleusGroup.position.z + Math.sin(p.angle) * radius + curveZ;

        posAttr.setXYZ(i, px, py, pz);

        // Alpha fade along tail length
        const brightness = p.isIon
          ? (1.0 - p.progress) * 0.95
          : (1.0 - Math.pow(p.progress, 1.3)) * 0.8;

        const baseC = Math.max(0.0, brightness);
        colAttr.setXYZ(i, baseC, baseC, baseC);
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 900;
      height = container.clientHeight || 360;
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
      nucleusGeo.dispose();
      nucleusMat.dispose();
      tailGeo.dispose();
      tailMat.dispose();
      trajectoryGeo.dispose();
      trajectoryMat.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#070A0F] via-[#090D14] to-[#080B10] border border-white/10 select-none group">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[72px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-serif font-black tracking-[0.25em] text-white/[0.03] uppercase whitespace-nowrap">
          ORBIT
        </span>
      </div>

      {/* Top HUD Celestial Telemetry Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-white font-bold uppercase tracking-widest">REAL COMET // PERIHELION STREAM</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>ION &amp; DUST TAIL ACTIVE</span>
          <span>VELOCITY: 67.4 KM/S</span>
        </div>
      </div>

      {/* 3D WebGL Canvas Container with Interactive Grab Cursor */}
      <div 
        ref={mountRef} 
        className={`relative w-full h-[280px] sm:h-[340px] md:h-[380px] cursor-grab ${
          isInteracting ? 'cursor-grabbing' : ''
        }`}
      />

      {/* Bottom Interactive Prompt Pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300 tracking-wider flex items-center gap-2 shadow-sm">
          <span className="text-white">✦</span>
          <span>Real-Time 3D Comet · Drag to align celestial trajectory</span>
          <span className="text-white">✦</span>
        </div>
      </div>

      {/* Soft Vignette Gradients */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#080B10] to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080B10] to-transparent pointer-events-none"></div>
    </div>
  );
}
