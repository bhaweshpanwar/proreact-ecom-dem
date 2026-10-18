import * as THREE from 'three';

/**
 * High-Resolution Procedural Asteroid/Comet Nucleus Texture (2048x2048)
 * Generates natural carbonaceous regolith, multi-scale impact crater bowls,
 * ejecta blankets, and micro-mineral speckles.
 */
export function createProceduralCometTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  // Deep carbonaceous/basaltic base gradient
  const baseGrad = ctx.createRadialGradient(1024, 1024, 0, 1024, 1024, 1600);
  baseGrad.addColorStop(0, '#1a1f26');
  baseGrad.addColorStop(0.5, '#12161c');
  baseGrad.addColorStop(1, '#0a0d12');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 2048, 2048);

  // 1. Large rolling regolith dust swells & mineral strata (400 passes)
  for (let i = 0; i < 400; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 2048;
    const r = Math.random() * 260 + 60;
    const opacity = Math.random() * 0.18 + 0.04;
    const tone = Math.floor(Math.random() * 45 + 18);

    const dabGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
    dabGrad.addColorStop(0, `rgba(${tone}, ${tone + 2}, ${tone + 6}, ${opacity})`);
    dabGrad.addColorStop(0.7, `rgba(${tone}, ${tone}, ${tone}, ${opacity * 0.4})`);
    dabGrad.addColorStop(1, `rgba(${tone}, ${tone}, ${tone}, 0)`);

    ctx.fillStyle = dabGrad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Primary & Secondary Impact Craters with sunlit rims & shadowed deep bowls (120 craters)
  for (let i = 0; i < 120; i++) {
    const cx = Math.random() * 2048;
    const cy = Math.random() * 2048;
    const cr = Math.random() * 110 + 25;

    // Outer rim uplift (lighter basaltic ejecta)
    const rimGrad = ctx.createRadialGradient(cx, cy, cr * 0.75, cx, cy, cr * 1.25);
    rimGrad.addColorStop(0, 'rgba(45, 54, 68, 0.5)');
    rimGrad.addColorStop(0.6, 'rgba(32, 38, 48, 0.3)');
    rimGrad.addColorStop(1, 'rgba(18, 22, 28, 0)');
    ctx.fillStyle = rimGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // Deep shadowed crater cavity
    const bowlGrad = ctx.createRadialGradient(cx - cr * 0.25, cy - cr * 0.25, 0, cx, cy, cr);
    bowlGrad.addColorStop(0, 'rgba(3, 4, 7, 0.95)');
    bowlGrad.addColorStop(0.6, 'rgba(8, 11, 16, 0.85)');
    bowlGrad.addColorStop(0.85, 'rgba(18, 23, 32, 0.5)');
    bowlGrad.addColorStop(1, 'rgba(40, 48, 62, 0.2)');

    ctx.fillStyle = bowlGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Dense micro-crater pits & fine rocky texture (600 micro-impacts)
  for (let i = 0; i < 600; i++) {
    const mx = Math.random() * 2048;
    const my = Math.random() * 2048;
    const mr = Math.random() * 12 + 3;

    ctx.fillStyle = Math.random() > 0.4 ? 'rgba(4, 5, 8, 0.8)' : 'rgba(55, 65, 80, 0.35)';
    ctx.beginPath();
    ctx.arc(mx, my, mr, 0, Math.PI * 2);
    ctx.fill();
  }

  // 4. Photorealistic mineral grain noise (Direct pixel manipulation)
  const imgData = ctx.getImageData(0, 0, 2048, 2048);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    // Add subtle fine grit noise (-12 to +12)
    const n = (Math.random() - 0.5) * 24;
    data[i] = Math.min(255, Math.max(0, data[i] + n));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n + 2)); // slight cool iron tint
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

/**
 * High-Resolution Procedural Bump Texture for Deep Surface Relief (2048x2048)
 * Creates sharp ridges, jagged rocky fractures, and cavernous crater depth.
 */
export function createProceduralBumpTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  // Neutral mid-gray elevation baseline
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, 2048, 2048);

  // 1. Broad tectonic macro ridges & tectonic shelves (200 passes)
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 2048;
    const y = Math.random() * 2048;
    const r = Math.random() * 400 + 150;
    const isPeak = Math.random() > 0.45;
    const val = isPeak ? 220 : 40;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${val}, ${val}, ${val}, 0.25)`);
    grad.addColorStop(0.7, `rgba(${val}, ${val}, ${val}, 0.08)`);
    grad.addColorStop(1, `rgba(${val}, ${val}, ${val}, 0)`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Deep crater depressions (carve dark wells with bright rims)
  for (let i = 0; i < 90; i++) {
    const cx = Math.random() * 2048;
    const cy = Math.random() * 2048;
    const cr = Math.random() * 120 + 30;

    // Raised crater rim (high elevation = white/light gray)
    const rimGrad = ctx.createRadialGradient(cx, cy, cr * 0.8, cx, cy, cr * 1.2);
    rimGrad.addColorStop(0, 'rgba(235, 235, 235, 0.6)');
    rimGrad.addColorStop(1, 'rgba(128, 128, 128, 0)');
    ctx.fillStyle = rimGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr * 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Crater bowl floor (deep indentation = dark gray/black)
    const bowlGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr * 0.85);
    bowlGrad.addColorStop(0, 'rgba(15, 15, 15, 0.85)');
    bowlGrad.addColorStop(0.7, 'rgba(40, 40, 40, 0.5)');
    bowlGrad.addColorStop(1, 'rgba(128, 128, 128, 0)');
    ctx.fillStyle = bowlGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, cr * 0.85, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Fine grain surface roughness noise
  const imgData = ctx.getImageData(0, 0, 2048, 2048);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (Math.random() - 0.5) * 36;
    const v = Math.min(255, Math.max(0, data[i] + n));
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
  }
  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Soft Coma & Particle Halo Sprite Texture (256x256)
 */
export function createGlowSpriteTexture(r, g, b) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 256, 256);
  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 108);
  grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1.0)`);
  grad.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, 0.65)`);
  grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.20)`);
  grad.addColorStop(0.85, `rgba(${r}, ${g}, ${b}, 0.03)`);
  grad.addColorStop(1.0, `rgba(${r}, ${g}, ${b}, 0.0)`);

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(128, 128, 108, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

/**
 * Crisp Pinpoint Celestial Star Texture (64x64)
 */
export function createPinpointStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
  grad.addColorStop(0.12, 'rgba(255, 255, 255, 0.95)');
  grad.addColorStop(0.32, 'rgba(220, 240, 255, 0.45)');
  grad.addColorStop(0.65, 'rgba(160, 200, 255, 0.08)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Ultra-Soft Diffuse Celestial Gas / Blur Sprite Texture
 */
export function createUltraBlurTexture(r, g, b) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.38)`);
  grad.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, 0.22)`);
  grad.addColorStop(0.48, `rgba(${r}, ${g}, ${b}, 0.08)`);
  grad.addColorStop(0.78, `rgba(${r}, ${g}, ${b}, 0.02)`);
  grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Procedural Volumetric Nebula Cloud Sprite Texture (256x256)
 */
export function createVolumetricNebulaTexture(r, g, b) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.82)`);
  grad.addColorStop(0.25, `rgba(${r}, ${g}, ${b}, 0.42)`);
  grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.12)`);
  grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  return new THREE.CanvasTexture(canvas);
}

/**
 * High-Detail Procedural Equirectangular Earth Texture (1024x512)
 */
export function createProceduralEarthTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep royal sapphire ocean base
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
  oceanGrad.addColorStop(0, '#0d47a1');
  oceanGrad.addColorStop(0.25, '#1565c0');
  oceanGrad.addColorStop(0.5, '#1976d2');
  oceanGrad.addColorStop(0.75, '#1565c0');
  oceanGrad.addColorStop(1, '#0d47a1');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Continental shelf shallow turquoise/cyan fringes
  ctx.fillStyle = '#00b4d8';
  const continents = [
    { x: 190, y: 150, rx: 110, ry: 75, angle: -0.1 },
    { x: 285, y: 330, rx: 65, ry: 105, angle: 0.15 },
    { x: 620, y: 140, rx: 200, ry: 85, angle: 0.05 },
    { x: 535, y: 275, rx: 85, ry: 110, angle: 0.0 },
    { x: 835, y: 350, rx: 70, ry: 50, angle: -0.1 },
    { x: 380, y: 75, rx: 45, ry: 35, angle: 0.2 }
  ];

  continents.forEach(c => {
    ctx.beginPath();
    ctx.ellipse(c.x, c.y, c.rx * 1.18, c.ry * 1.18, c.angle, 0, Math.PI * 2);
    ctx.fill();
  });

  // Landmass terrain
  continents.forEach((c, idx) => {
    const landGrad = ctx.createRadialGradient(c.x, c.y, 10, c.x, c.y, c.rx);
    landGrad.addColorStop(0, idx % 2 === 0 ? '#2d6a4f' : '#386641');
    landGrad.addColorStop(0.65, '#1b4332');
    landGrad.addColorStop(0.88, '#6b705c');
    landGrad.addColorStop(1, '#0077b6');
    ctx.fillStyle = landGrad;
    ctx.beginPath();
    ctx.ellipse(c.x, c.y, c.rx, c.ry, c.angle, 0, Math.PI * 2);
    ctx.fill();
  });

  // Polar Ice Caps (Arctic and Antarctic)
  const northIce = ctx.createLinearGradient(0, 0, 0, 72);
  northIce.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
  northIce.addColorStop(0.55, 'rgba(255, 255, 255, 0.95)');
  northIce.addColorStop(0.85, 'rgba(224, 242, 254, 0.7)');
  northIce.addColorStop(1, 'rgba(186, 230, 253, 0.0)');
  ctx.fillStyle = northIce;
  ctx.fillRect(0, 0, 1024, 72);

  const southIce = ctx.createLinearGradient(0, 464, 0, 512);
  southIce.addColorStop(0, 'rgba(186, 230, 253, 0.0)');
  southIce.addColorStop(0.3, 'rgba(224, 242, 254, 0.85)');
  southIce.addColorStop(1, 'rgba(255, 255, 255, 0.98)');
  ctx.fillStyle = southIce;
  ctx.fillRect(0, 464, 1024, 48);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Procedural Atmospheric Cloud Layer Texture (1024x512)
 */
export function createProceduralEarthCloudsTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 1024, 512);

  for (let i = 0; i < 180; i++) {
    const x = Math.random() * 1024;
    const y = 80 + Math.random() * 350;
    const rx = Math.random() * 95 + 35;
    const ry = Math.random() * 25 + 10;
    const alpha = Math.random() * 0.35 + 0.15;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, rx);
    grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    grad.addColorStop(0.5, `rgba(250, 252, 255, ${alpha * 0.6})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Brilliant white polar cloud blanket at the North Pole
  for (let p = 0; p < 35; p++) {
    const px = Math.random() * 1024;
    const py = Math.random() * 65;
    const pr = Math.random() * 90 + 50;
    const pGrad = ctx.createRadialGradient(px, py, 0, px, py, pr);
    pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    pGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.65)');
    pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}
