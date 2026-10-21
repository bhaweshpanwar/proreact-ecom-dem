import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeAstronautFace({ className = "w-full h-full" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 64;
    let height = container.clientHeight || 64;
    let animId;
    let disposed = false;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.3);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup for Sculptural 3D Depth
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Key Light for crisp highlights and visor glint
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.6);
    keyLight.position.set(-4, 4, 4.5);
    scene.add(keyLight);

    // Platinum Rim Light for helmet silhouette definition
    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 2.0);
    rimLight.position.set(4, 2, -3.5);
    scene.add(rimLight);

    // 3. Astronaut Head Root Group
    const headGroup = new THREE.Group();
    scene.add(headGroup);

    // 4. Outer Helmet Shell
    const helmetGeo = new THREE.SphereGeometry(1.0, 36, 28);
    helmetGeo.scale(1.0, 1.08, 1.0);
    const helmetMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.28,
      metalness: 0.12
    });
    const helmetMesh = new THREE.Mesh(helmetGeo, helmetMat);
    headGroup.add(helmetMesh);

    // 5. Neck Collar Ring
    const collarGeo = new THREE.TorusGeometry(0.82, 0.11, 16, 36);
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.5,
      metalness: 0.35
    });
    const collarMesh = new THREE.Mesh(collarGeo, collarMat);
    collarMesh.position.y = -0.88;
    collarMesh.rotation.x = Math.PI / 2;
    headGroup.add(collarMesh);

    // 6. Smoked Obsidian Panoramic Visor (3D Curved Shield)
    const visorGeo = new THREE.SphereGeometry(0.78, 36, 28);
    visorGeo.scale(0.96, 0.78, 0.88);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x090d14,
      roughness: 0.08,
      metalness: 0.95
    });
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.position.set(0, 0.08, 0.38);
    headGroup.add(visorMesh);

    // Visor Gasket Seal (Outer Trim)
    const gasketGeo = new THREE.TorusGeometry(0.68, 0.035, 12, 36);
    const gasketMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8,
      metalness: 0.1
    });
    const gasketMesh = new THREE.Mesh(gasketGeo, gasketMat);
    gasketMesh.position.set(0, 0.08, 0.72);
    headGroup.add(gasketMesh);

    // 7. Ear Comms Nodules (Left and Right)
    const earGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.18, 24);
    const earMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.45,
      metalness: 0.4
    });

    const leftEar = new THREE.Mesh(earGeo, earMat);
    leftEar.position.set(-1.02, 0.02, 0);
    leftEar.rotation.z = Math.PI / 2;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, earMat);
    rightEar.position.set(1.02, 0.02, 0);
    rightEar.rotation.z = Math.PI / 2;
    headGroup.add(rightEar);

    // Comms Antenna
    const antennaStemGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.45, 8);
    const antennaTipGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const antennaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.2 });

    const antennaStem = new THREE.Mesh(antennaStemGeo, antennaMat);
    antennaStem.position.set(0.72, 1.08, 0);
    antennaStem.rotation.z = -0.15;
    headGroup.add(antennaStem);

    const antennaTip = new THREE.Mesh(antennaTipGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.4 }));
    antennaTip.position.set(0.76, 1.32, 0);
    headGroup.add(antennaTip);

    // 8. Subtle Mouse Tracking
    let targetRotY = 0;
    let targetRotX = 0;

    const onPointerMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = nx * 0.45;
      targetRotX = -ny * 0.25;
    };
    window.addEventListener('pointermove', onPointerMove);

    // 9. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Ambient celestial floating bob and gentle sway
      const swayY = Math.sin(elapsed * 1.6) * 0.12;
      const swayX = Math.cos(elapsed * 1.2) * 0.06;
      const bob = Math.sin(elapsed * 2.2) * 0.06;

      headGroup.rotation.y += (targetRotY + swayY - headGroup.rotation.y) * 0.06;
      headGroup.rotation.x += (targetRotX + swayX - headGroup.rotation.x) * 0.06;
      headGroup.position.y = bob;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 64;
      height = container.clientHeight || 64;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      helmetGeo.dispose();
      helmetMat.dispose();
      collarGeo.dispose();
      collarMat.dispose();
      visorGeo.dispose();
      visorMat.dispose();
      gasketGeo.dispose();
      gasketMat.dispose();
      earGeo.dispose();
      earMat.dispose();
      antennaStemGeo.dispose();
      antennaTipGeo.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`} 
    />
  );
}
