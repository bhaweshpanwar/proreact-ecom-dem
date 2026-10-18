import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

/**
 * SingleCometCanvas
 * 
 * Clean, dark, cinematic monolithic 3D Asteroid (from Blender Asteroid_1a).
 * Stripped of all side-clutter, companion comets, tails, and HUD badges.
 * Features a dark, moody deep-space basaltic tone with realistic crater relief.
 */
export default function SingleCometCanvas({ colorHex = '#38BDF8', title = 'Service Comet' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 460;
    let height = container.clientHeight || 480;
    let animId;
    let disposed = false;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);
    camera.lookAt(0, 0, 0);

    // 2. High-performance renderer with bright, crisp exposure
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25; // Bright, clear, crisp visibility
    container.appendChild(renderer.domElement);

    // 3. Clean neutral space lighting (Diffused, non-glare, non-shiny)
    // Generous ambient light illuminates all craters evenly without specular hotspots
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Key directional light for soft sculptural relief
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-5.5, 4.2, 4.2);
    scene.add(keyLight);

    // Soft neutral rim light from behind (no orange, zero light from below)
    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 0.8);
    rimLight.position.set(5.0, 3.0, -3.5);
    scene.add(rimLight);

    // 4. Comet Root Pivot
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const mainCometPivot = new THREE.Group();
    masterGroup.add(mainCometPivot);

    // 5. 2K PBR Textures
    const textureLoader = new THREE.TextureLoader();
    const colorTex = textureLoader.load('/assets/asteroid_color_2k.jpg');
    colorTex.colorSpace = THREE.SRGBColorSpace;

    const normalTex = textureLoader.load('/assets/asteroid_normal_2k.jpg');
    normalTex.colorSpace = THREE.NoColorSpace;

    const aoTex = textureLoader.load('/assets/asteroid_ao_2k.jpg');
    aoTex.colorSpace = THREE.NoColorSpace;

    // 100% Matte, Non-Shiny Natural Regolith Rock Material
    // roughness = 1.0 and metalness = 0.0 eliminates all specular glare / shine
    const pbrMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xdce2ea), // Bright natural stone tone
      map: colorTex,
      normalMap: normalTex,
      normalScale: new THREE.Vector2(1.5, 1.5),
      roughness: 1.0, // 100% matte dry rock - ZERO shininess
      metalness: 0.0, // Non-metallic, non-reflective
      aoMap: aoTex,
      aoMapIntensity: 1.0
    });

    // 6. Temporary dark placeholder while OBJ loads
    const tempGeo = new THREE.IcosahedronGeometry(1.05, 4);
    const tempMat = new THREE.MeshStandardMaterial({
      color: 0x12161c,
      roughness: 0.95,
      metalness: 0.05
    });
    let placeholderMesh = new THREE.Mesh(tempGeo, tempMat);
    mainCometPivot.add(placeholderMesh);

    // 7. Load the Blender 3D Asteroid
    const objLoader = new OBJLoader();
    objLoader.load(
      '/assets/asteroid_1a.obj',
      (obj) => {
        if (disposed) return;
        const rawMesh = obj.children[0];
        if (!rawMesh) return;

        const asteroidGeo = rawMesh.geometry;
        asteroidGeo.center();
        asteroidGeo.computeVertexNormals();

        // Remove placeholder
        if (placeholderMesh) {
          mainCometPivot.remove(placeholderMesh);
          placeholderMesh.geometry.dispose();
          placeholderMesh.material.dispose();
          placeholderMesh = null;
        }

        // Attach dark monolithic asteroid
        const mainAsteroidMesh = new THREE.Mesh(asteroidGeo, pbrMaterial);
        mainAsteroidMesh.scale.setScalar(0.72);
        mainCometPivot.add(mainAsteroidMesh);
      },
      undefined,
      (err) => {
        console.warn('Asteroid load error:', err);
      }
    );

    // 8. Subtle Mouse Parallax & Smooth Rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = nx * 0.35;
      targetY = ny * 0.25;
    };

    window.addEventListener('mousemove', onMouseMove);

    // 9. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Subtle Parallax easing
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      masterGroup.rotation.y = mouseX;
      masterGroup.rotation.x = mouseY;

      // Natural slow, hypnotic celestial tumbling in space
      mainCometPivot.rotation.y = elapsed * 0.16;
      mainCometPivot.rotation.x = Math.sin(elapsed * 0.11) * 0.12;
      mainCometPivot.rotation.z = Math.cos(elapsed * 0.09) * 0.06;

      // Gentle subtle floating drift
      mainCometPivot.position.y = Math.sin(elapsed * 0.5) * 0.06;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 460;
      height = container.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);

      renderer.dispose();
      pbrMaterial.dispose();
      colorTex.dispose();
      normalTex.dispose();
      aoTex.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [colorHex]);

  return (
    <div className="relative w-full flex items-center justify-center select-none">
      {/* Pure 3D Canvas - completely clean of all side clutter and HUD badges */}
      <div 
        ref={mountRef} 
        className="w-full max-w-[520px] h-[400px] sm:h-[480px] lg:h-[520px] relative flex items-center justify-center pointer-events-auto"
        title={`${title} - 3D Celestial Core`}
      />
    </div>
  );
}
