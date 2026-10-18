import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StrategicBlueprintCanvas({ activePersona = 0, colorHex = '#2563EB' }) {
  const mountRef = useRef(null);
  const stateRef = useRef({ activePersona, colorHex, mouseX: 0, mouseY: 0 });

  // Keep stateRef in sync without triggering full re-mounts
  useEffect(() => {
    stateRef.current.activePersona = activePersona;
    stateRef.current.colorHex = colorHex;
  }, [activePersona, colorHex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 480;
    let height = container.clientHeight || 420;
    let animId;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Color Palette
    const baseColor = new THREE.Color(colorHex);
    const celestialBlue = new THREE.Color(0x38BDF8);

    // 3. Central Wireframe Astrolabe / Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Nested Orbital Rings
    const ringMat1 = new THREE.LineBasicMaterial({ color: 0x334155, transparent: true, opacity: 0.6 });
    const ringMat2 = new THREE.LineBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.7 });
    const ringMatActive = new THREE.LineBasicMaterial({ color: baseColor, transparent: true, opacity: 0.95 });

    const createRing = (radius, segments = 64) => {
      const geo = new THREE.BufferGeometry();
      const pos = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        pos.push(Math.cos(theta) * radius, Math.sin(theta) * radius, 0);
      }
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      return geo;
    };

    const ring1 = new THREE.Line(createRing(7.2), ringMat1);
    const ring2 = new THREE.Line(createRing(5.4), ringMat2);
    const ring3 = new THREE.Line(createRing(3.8), ringMatActive);
    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // Central Polyhedral Lattice
    const latticeGeo = new THREE.IcosahedronGeometry(2.4, 1);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x1E293B,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    coreGroup.add(lattice);

    // Inner Glowing Core Point
    const centerPointGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const centerPointMat = new THREE.MeshBasicMaterial({ color: baseColor });
    const centerPoint = new THREE.Mesh(centerPointGeo, centerPointMat);
    coreGroup.add(centerPoint);

    // 4. The 3 Persona Satellite Nodes
    const nodesGroup = new THREE.Group();
    coreGroup.add(nodesGroup);

    const nodeColors = [0x38BDF8, 0x60A5FA, 0x818CF8];
    const nodeMeshes = [];

    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const radius = 5.4;
      const nodeGeo = new THREE.SphereGeometry(0.42, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i],
        transparent: true,
        opacity: 0.8
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      
      // Node anchor ring
      const anchorRing = new THREE.Line(createRing(0.85, 32), new THREE.LineBasicMaterial({
        color: nodeColors[i],
        transparent: true,
        opacity: 0.4
      }));
      node.add(anchorRing);
      
      nodesGroup.add(node);
      nodeMeshes.push(node);
    }

    // 5. Constellation Background Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 36;
      particlePos[i + 1] = (Math.random() - 0.5) * 28;
      particlePos[i + 2] = (Math.random() - 0.5) * 16 - 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      color: 0x94A3B8,
      transparent: true,
      opacity: 0.35
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse Parallax
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouseX = x;
      stateRef.current.mouseY = y;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Target rotations for each persona state
    const personaTargets = [
      { rx: 0.25, ry: 0.35, nodeScale: [1.6, 1.0, 1.0] },
      { rx: -0.3, ry: 1.15, nodeScale: [1.0, 1.6, 1.0] },
      { rx: 0.4, ry: 2.1, nodeScale: [1.0, 1.0, 1.6] }
    ];

    // 7. Animation Loop
    let time = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.015;

      const pIdx = Math.min(Math.max(stateRef.current.activePersona, 0), 2);
      const target = personaTargets[pIdx];

      // Smooth interpolation toward target angle + gentle ambient drift + mouse parallax
      const targetRotX = target.rx + stateRef.current.mouseY * 0.25 + Math.sin(time * 0.5) * 0.08;
      const targetRotY = target.ry + stateRef.current.mouseX * 0.35 + time * 0.12;

      coreGroup.rotation.x += (targetRotX - coreGroup.rotation.x) * 0.05;
      coreGroup.rotation.y += (targetRotY - coreGroup.rotation.y) * 0.05;

      // Individual ring counter-rotations
      ring1.rotation.z += 0.003;
      ring2.rotation.x += 0.004;
      ring3.rotation.y += 0.005;

      // Pulse nodes based on active persona
      nodeMeshes.forEach((mesh, idx) => {
        const isSelected = idx === pIdx;
        const targetScale = isSelected ? 1.5 + Math.sin(time * 4) * 0.15 : 0.9;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
      });

      // Ambient particle drift
      particles.rotation.y = time * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 480;
      const newH = container.clientHeight || 420;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMatActive.dispose();
      latticeGeo.dispose();
      latticeMat.dispose();
      centerPointGeo.dispose();
      centerPointMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[360px] sm:min-h-[420px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
      aria-hidden="true"
    />
  );
}
