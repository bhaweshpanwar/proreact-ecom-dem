import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture
} from '../Hero3D/ProceduralTextures';

export default function WhyCometCanvas({ colorHex = '#38BDF8', activeIndex = 0 }) {
  const mountRef = useRef(null);
  const activeRef = useRef(activeIndex);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 460;
    let height = container.clientHeight || 520;
    let animId;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070A12, 0.018);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const sunColor = new THREE.Color(colorHex);
    const ambientLight = new THREE.AmbientLight(0x0e1726, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, 4.0);
    keyLight.position.set(-8, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(sunColor, 3.2);
    rimLight.position.set(6, -3, -4);
    scene.add(rimLight);

    // 3. Central Comet Group
    const cometGroup = new THREE.Group();
    scene.add(cometGroup);

    // 4. Procedural Textured Nucleus with Impact Craters
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const nucleusGeo = new THREE.IcosahedronGeometry(1.45, 4);
    nucleusGeo.scale(1.08, 0.94, 0.98);

    const posAttr = nucleusGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      const freq = 2.8;
      const noise =
        Math.sin(v.x * freq) * Math.cos(v.y * freq) * 0.14 +
        Math.sin(v.z * 1.8) * 0.08;
      v.addScaledVector(v.clone().normalize(), noise);
      posAttr.setXYZ(i, v.x, v.y, v.z);
    }
    nucleusGeo.computeVertexNormals();

    const nucleusMat = new THREE.MeshStandardMaterial({
      map: nucleusTex,
      bumpMap: bumpTex,
      bumpScale: 0.32,
      roughness: 0.82,
      metalness: 0.12
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    cometGroup.add(nucleusMesh);

    // 5. Luminous Ion Coma Glow (Soft spherical aura, no artificial sharp tail)
    const comaTex = createGlowSpriteTexture(
      Math.round(sunColor.r * 255),
      Math.round(sunColor.g * 255),
      Math.round(sunColor.b * 255)
    );
    const comaMat = new THREE.SpriteMaterial({
      map: comaTex,
      color: sunColor,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const comaSprite = new THREE.Sprite(comaMat);
    comaSprite.scale.set(4.8, 4.8, 1);
    cometGroup.add(comaSprite);

    // 6. Orbital Trajectory Ellipse Ring
    const orbitCurve = new THREE.EllipseCurve(0, 0, 4.2, 2.6, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(120);
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMat = new THREE.LineDashedMaterial({
      color: sunColor,
      dashSize: 0.25,
      gapSize: 0.15,
      transparent: true,
      opacity: 0.45
    });
    const orbitLine = new THREE.Line(orbitGeo, orbitMat);
    orbitLine.computeLineDistances();
    orbitLine.rotation.x = Math.PI / 2.8;
    orbitLine.rotation.y = Math.PI / 6;
    scene.add(orbitLine);

    // 7. Ambient Cosmic Particles
    const starCount = 260;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 32;
      starPos[i + 1] = (Math.random() - 0.5) * 26;
      starPos[i + 2] = (Math.random() - 0.5) * 20 - 2;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.16,
      color: 0xc8d8e8,
      transparent: true,
      opacity: 0.5
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 8. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.7;
      targetY = y * 0.45;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Target positions/rotations for each of the 4 Why points
    const pointAngles = [
      { rx: 0.2, ry: 0.4, yOffset: 0.4 },
      { rx: -0.25, ry: 1.3, yOffset: 0.1 },
      { rx: 0.35, ry: 2.2, yOffset: -0.2 },
      { rx: -0.15, ry: 3.1, yOffset: -0.5 }
    ];

    // 9. Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      const pIdx = Math.min(Math.max(activeRef.current, 0), 3);
      const targetConfig = pointAngles[pIdx];

      // Smooth interpolation toward point orientation + slow autonomous drift
      const targetRotY = targetConfig.ry + elapsed * 0.18 + mouseX;
      const targetRotX = targetConfig.rx + Math.sin(elapsed * 0.35) * 0.12 + mouseY;
      const targetPosY = targetConfig.yOffset + Math.sin(elapsed * 0.8) * 0.15;

      cometGroup.rotation.y += (targetRotY - cometGroup.rotation.y) * 0.04;
      cometGroup.rotation.x += (targetRotX - cometGroup.rotation.x) * 0.04;
      cometGroup.position.y += (targetPosY - cometGroup.position.y) * 0.04;

      nucleusMesh.rotation.z = elapsed * 0.09;
      orbitLine.rotation.z = elapsed * 0.03;
      starField.rotation.y = elapsed * 0.008;

      renderer.render(scene, camera);
    };
    animate();

    // 10. Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 460;
      height = container.clientHeight || 520;
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
      nucleusGeo.dispose();
      nucleusMat.dispose();
      comaMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, [colorHex]);

  return (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[520px] flex items-center justify-center select-none group cursor-grab active:cursor-grabbing">
      {/* Background Soft Celestial Radial Aura */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
        style={{
          background: `radial-gradient(circle at center, ${colorHex} 0%, transparent 65%)`
        }}
      />
      
      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="relative w-full h-full" />
    </div>
  );
}
