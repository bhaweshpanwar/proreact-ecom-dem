import * as THREE from 'three';
import { SERVICES_COMETS } from '../../data/servicesData';
import { AMBIENT_COMETS } from '../../data/ambientCometsData';
import {
  createProceduralCometTexture,
  createProceduralBumpTexture,
  createGlowSpriteTexture,
  createPinpointStarTexture,
  createUltraBlurTexture,
  createVolumetricNebulaTexture,
  createProceduralEarthTexture,
  createProceduralEarthCloudsTexture
} from './ProceduralTextures';

export const SUN_CONFIG = {
  position: new THREE.Vector3(-34, 28, -6),
  color: 0xffa333,
  lightColor: 0xfff9ef,
  coreColor: 0xfffaea,
  intensity: 4.2,
  pointLightDistance: 220
};

export const SPACE_CONFIG = {
  bgDeepVoid: 0x010207,
  starCountBg: 3200,
  starCountFg: 850,
  milkyWayCount: 2200,
  nebulaCount: 40
};

export const EARTH_CONFIG = {
  center: new THREE.Vector3(0, -1.2, 0),
  radius: 4.85,
  tiltDegrees: 18.5,
  surfaceRotationSpeed: 0.0006,
  cloudRotationSpeed: 0.00095
};

export const CAMERA_CONFIG = {
  defaultPos: new THREE.Vector3(0, 7.8, 23.8),
  defaultLookAt: new THREE.Vector3(0, -1.2, 0),
  mouseParallaxMaxX: 1.0,
  mouseParallaxMaxY: 0.6
};

export class CelestialEngine {
  constructor({ canvas, labelsContainer, onSelectComet }) {
    this.canvas = canvas;
    this.labelsContainer = labelsContainer;
    this.onSelectCometCallback = onSelectComet;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    this.isMobile = this.width < 768;

    this.targetCameraPos = CAMERA_CONFIG.defaultPos.clone();
    this.targetLookAt = CAMERA_CONFIG.defaultLookAt.clone();
    this.currentLookAt = CAMERA_CONFIG.defaultLookAt.clone();

    this.mouse = new THREE.Vector2(0, 0);
    this.targetMouse = new THREE.Vector2(0, 0);
    this.raycaster = new THREE.Raycaster();
    this.mouseNDC = new THREE.Vector2(-999, -999);

    this.hoveredCometIndex = -1;
    this.selectedCometIndex = -1;
    this.heroScrollProgress = 0;
    this.globalOrbitProgress = 0;
    this.clock = new THREE.Clock();
    this.isDestroyed = false;

    this.comets = [];
    this.ambientComets = [];
    this.raycastHitMeshes = [];

    this.init();
  }

  init() {
    this.setupRenderer();
    this.setupScene();
    this.setupCamera();
    this.setupLighting();
    this.setupBackgroundCosmos();
    this.setupEarth();
    this.setupComets();
    this.setupAmbientComets();
    this.bindEvents();

    this.animate = this.animate.bind(this);
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.renderer.setClearColor(SPACE_CONFIG.bgDeepVoid, 1);
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(SPACE_CONFIG.bgDeepVoid, 0.0012);
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(48, this.width / this.height, 0.1, 350);
    this.camera.position.copy(CAMERA_CONFIG.defaultPos);
    this.camera.lookAt(CAMERA_CONFIG.defaultLookAt);
  }

  setupLighting() {
    this.sunLight = new THREE.DirectionalLight(SUN_CONFIG.lightColor, SUN_CONFIG.intensity);
    this.sunLight.position.copy(SUN_CONFIG.position);
    this.scene.add(this.sunLight);

    this.sunPoint = new THREE.PointLight(SUN_CONFIG.color, 2.4, SUN_CONFIG.pointLightDistance, 1.2);
    this.sunPoint.position.copy(SUN_CONFIG.position);
    this.scene.add(this.sunPoint);

    const ambientLight = new THREE.AmbientLight(0x0e1b3d, 0.42);
    this.scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x18244a, 0.35);
    rimLight.position.set(40, -20, 20);
    this.scene.add(rimLight);

    // Sun core disc
    const sunDiscGeo = new THREE.SphereGeometry(3.0, 32, 32);
    const sunDiscMat = new THREE.MeshBasicMaterial({ color: SUN_CONFIG.coreColor, transparent: true, opacity: 0.98 });
    const sunMesh = new THREE.Mesh(sunDiscGeo, sunDiscMat);
    sunMesh.position.copy(SUN_CONFIG.position);
    this.scene.add(sunMesh);

    // Corona sprite
    const coronaTex = createGlowSpriteTexture(255, 140, 30);
    const coronaMat = new THREE.SpriteMaterial({
      map: coronaTex,
      color: 0xffa033,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const coronaSprite = new THREE.Sprite(coronaMat);
    coronaSprite.position.copy(SUN_CONFIG.position);
    coronaSprite.scale.set(40, 40, 1);
    this.scene.add(coronaSprite);
  }

  setupBackgroundCosmos() {
    // 1. Deep starfield
    const bgGeo = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(SPACE_CONFIG.starCountBg * 3);
    const bgColors = new Float32Array(SPACE_CONFIG.starCountBg * 3);
    const colorPalettes = [
      new THREE.Color(0xdceaff),
      new THREE.Color(0xffffff),
      new THREE.Color(0xffd180),
      new THREE.Color(0x9bc2ff),
      new THREE.Color(0xa78bfa),
      new THREE.Color(0xc084fc)
    ];

    for (let i = 0; i < SPACE_CONFIG.starCountBg; i++) {
      const r = 85 + Math.random() * 125;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      bgPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      bgPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      bgPositions[i * 3 + 2] = r * Math.cos(phi);

      const c = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      const brightness = 0.5 + Math.random() * 0.5;
      bgColors[i * 3] = c.r * brightness;
      bgColors[i * 3 + 1] = c.g * brightness;
      bgColors[i * 3 + 2] = c.b * brightness;
    }

    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    bgGeo.setAttribute('color', new THREE.BufferAttribute(bgColors, 3));

    const pinpointStarTex = createPinpointStarTexture();
    const bgStarMat = new THREE.PointsMaterial({
      size: 0.52,
      vertexColors: true,
      map: pinpointStarTex,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.bgStarPoints = new THREE.Points(bgGeo, bgStarMat);
    this.scene.add(this.bgStarPoints);

    // 2. Volumetric Nebula
    const nebulaTex = createVolumetricNebulaTexture(160, 70, 255);
    const nebulaColors = [0x3b0764, 0x581c87, 0x2e1065, 0x4c1d95, 0x1e1b4b];
    for (let i = 0; i < SPACE_CONFIG.nebulaCount; i++) {
      const c = nebulaColors[i % nebulaColors.length];
      const nebMat = new THREE.SpriteMaterial({
        map: nebulaTex,
        color: c,
        transparent: true,
        opacity: 0.14 + Math.random() * 0.10,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const nebSprite = new THREE.Sprite(nebMat);
      nebSprite.position.set((Math.random() - 0.5) * 110, (Math.random() - 0.5) * 70, -35 - Math.random() * 55);
      const nScale = 45 + Math.random() * 45;
      nebSprite.scale.set(nScale, nScale, 1);
      this.scene.add(nebSprite);
    }

    // 3. Parallax Foreground Stars
    const fgGeo = new THREE.BufferGeometry();
    const fgPositions = new Float32Array(SPACE_CONFIG.starCountFg * 3);
    for (let i = 0; i < SPACE_CONFIG.starCountFg; i++) {
      fgPositions[i * 3] = (Math.random() - 0.5) * 75;
      fgPositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      fgPositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }
    fgGeo.setAttribute('position', new THREE.BufferAttribute(fgPositions, 3));
    const fgStarMat = new THREE.PointsMaterial({
      size: 0.42,
      color: 0xbedaff,
      map: pinpointStarTex,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.fgStarPoints = new THREE.Points(fgGeo, fgStarMat);
    this.scene.add(this.fgStarPoints);

    // 4. Milky Way Dust Band
    const mwGeo = new THREE.BufferGeometry();
    const mwPositions = new Float32Array(SPACE_CONFIG.milkyWayCount * 3);
    const mwColors = new Float32Array(SPACE_CONFIG.milkyWayCount * 3);
    const mwPalettes = [new THREE.Color(0x356ca8), new THREE.Color(0x5699db), new THREE.Color(0x274a80), new THREE.Color(0x581c87)];

    for (let i = 0; i < SPACE_CONFIG.milkyWayCount; i++) {
      const t = (Math.random() - 0.5) * 125;
      mwPositions[i * 3] = t;
      mwPositions[i * 3 + 1] = t * 0.42 + (Math.random() - 0.5) * 18;
      mwPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const baseC = mwPalettes[Math.floor(Math.random() * mwPalettes.length)];
      const lum = Math.random() * 0.35 + 0.08;
      mwColors[i * 3] = baseC.r * lum;
      mwColors[i * 3 + 1] = baseC.g * lum;
      mwColors[i * 3 + 2] = baseC.b * lum;
    }
    mwGeo.setAttribute('position', new THREE.BufferAttribute(mwPositions, 3));
    mwGeo.setAttribute('color', new THREE.BufferAttribute(mwColors, 3));

    const mwDustTex = createGlowSpriteTexture(180, 220, 255);
    const mwMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: mwDustTex,
      transparent: true,
      opacity: 0.44,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.milkyWayPoints = new THREE.Points(mwGeo, mwMat);
    this.milkyWayPoints.position.set(0, 0, -45);
    this.scene.add(this.milkyWayPoints);
  }

  setupEarth() {
    this.earthGroup = new THREE.Group();
    this.earthGroup.position.copy(EARTH_CONFIG.center);
    this.earthGroup.rotation.z = THREE.MathUtils.degToRad(EARTH_CONFIG.tiltDegrees);
    this.earthGroup.rotation.x = THREE.MathUtils.degToRad(14.0);

    const surfaceGeo = new THREE.SphereGeometry(EARTH_CONFIG.radius, 64, 64);
    const proceduralEarthTex = createProceduralEarthTexture();

    this.earthSurfaceMat = new THREE.MeshStandardMaterial({
      map: proceduralEarthTex,
      color: 0x90caf9,
      roughness: 0.52,
      metalness: 0.08
    });

    const texLoader = new THREE.TextureLoader();
    texLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        this.earthSurfaceMat.map = tex;
        this.earthSurfaceMat.needsUpdate = true;
      }
    );

    this.earthSurfaceMesh = new THREE.Mesh(surfaceGeo, this.earthSurfaceMat);
    this.earthGroup.add(this.earthSurfaceMesh);

    // Clouds Sphere
    const cloudGeo = new THREE.SphereGeometry(EARTH_CONFIG.radius * 1.015, 64, 64);
    const proceduralCloudTex = createProceduralEarthCloudsTexture();

    this.earthCloudsMat = new THREE.MeshStandardMaterial({
      map: proceduralCloudTex,
      transparent: true,
      opacity: 0.52,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    texLoader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
      (cloudTex) => {
        cloudTex.colorSpace = THREE.SRGBColorSpace;
        this.earthCloudsMat.map = cloudTex;
        this.earthCloudsMat.needsUpdate = true;
      }
    );

    this.earthCloudsMesh = new THREE.Mesh(cloudGeo, this.earthCloudsMat);
    this.earthGroup.add(this.earthCloudsMesh);

    this.scene.add(this.earthGroup);
  }

  setupComets() {
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const ultraBlueBlurTex = createUltraBlurTexture(56, 189, 248);
    const deepAzureBlurTex = createUltraBlurTexture(42, 145, 245);

    SERVICES_COMETS.forEach((service, index) => {
      const cometGroup = new THREE.Group();

      let radius = index % 3 === 0 ? 0.30 : index % 3 === 1 ? 0.22 : 0.16;
      let ionTailLen = 2.6 * (radius / 0.22);
      let dustTailLen = 2.0 * (radius / 0.22);

      const nucleusGeo = new THREE.IcosahedronGeometry(radius, 4);
      nucleusGeo.scale(0.95, 0.88, 0.95);

      const nucleusMat = new THREE.MeshStandardMaterial({
        map: nucleusTex,
        bumpMap: bumpTex,
        bumpScale: 0.18,
        roughness: 0.92,
        metalness: 0.05
      });
      const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
      cometGroup.add(nucleusMesh);

      // Raycast invisible hit proxy
      const hitProxyGeo = new THREE.SphereGeometry(radius * 3.6, 8, 8);
      const hitProxyMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitProxyMesh = new THREE.Mesh(hitProxyGeo, hitProxyMat);
      hitProxyMesh.userData = { cometIndex: index };
      cometGroup.add(hitProxyMesh);
      this.raycastHitMeshes.push(hitProxyMesh);

      // Coma sprite
      const comaMat = new THREE.SpriteMaterial({
        map: ultraBlueBlurTex,
        color: service.threeColor || 0x38bdf8,
        transparent: true,
        opacity: 0.34,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const comaSprite = new THREE.Sprite(comaMat);
      const comaScale = radius * 3.4;
      comaSprite.scale.set(comaScale, comaScale, 1);
      cometGroup.add(comaSprite);

      // Ion Tail
      const ionCount = 70;
      const ionGeo = new THREE.BufferGeometry();
      const ionPositions = new Float32Array(ionCount * 3);
      const ionColors = new Float32Array(ionCount * 3);
      const ionSeeds = new Float32Array(ionCount);
      for (let p = 0; p < ionCount; p++) {
        ionSeeds[p] = Math.random();
        const progress = p / ionCount;
        ionColors[p * 3] = 0.15 * (1 - progress);
        ionColors[p * 3 + 1] = 0.65 * (1 - progress);
        ionColors[p * 3 + 2] = 0.98 * (1 - progress * 0.4);
      }
      ionGeo.setAttribute('position', new THREE.BufferAttribute(ionPositions, 3));
      ionGeo.setAttribute('color', new THREE.BufferAttribute(ionColors, 3));
      const ionMat = new THREE.PointsMaterial({
        size: 1.6,
        vertexColors: true,
        map: ultraBlueBlurTex,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const ionTailPoints = new THREE.Points(ionGeo, ionMat);
      cometGroup.add(ionTailPoints);

      // Dust Tail
      const dustCount = 80;
      const dustGeo = new THREE.BufferGeometry();
      const dustPositions = new Float32Array(dustCount * 3);
      const dustColors = new Float32Array(dustCount * 3);
      const dustSeeds = new Float32Array(dustCount);
      for (let p = 0; p < dustCount; p++) {
        dustSeeds[p] = Math.random();
        const progress = p / dustCount;
        dustColors[p * 3] = 0.22 * (1 - progress * 0.5);
        dustColors[p * 3 + 1] = 0.52 * (1 - progress * 0.5);
        dustColors[p * 3 + 2] = 0.95 * (1 - progress * 0.3);
      }
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
      const dustMat = new THREE.PointsMaterial({
        size: 1.9,
        vertexColors: true,
        map: deepAzureBlurTex,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const dustTailPoints = new THREE.Points(dustGeo, dustMat);
      cometGroup.add(dustTailPoints);

      // 3D Orbital Positioning
      const totalServices = SERVICES_COMETS.length;
      const baseAngle = service.angle || (index / totalServices) * Math.PI * 2;
      const orbitRadius = service.orbitRadius || 13.6 + ((index % 5) - 2.0) * 0.85;
      const orbitTilt = service.inclination !== undefined ? service.inclination : 0.22;
      const elevationOffset = ((index % 3) - 1) * 0.45;

      const initX = Math.cos(baseAngle) * orbitRadius;
      const initZ = Math.sin(baseAngle) * orbitRadius;
      const initY = elevationOffset + Math.sin(baseAngle) * (orbitRadius * Math.sin(orbitTilt));
      cometGroup.position.set(initX, initY, initZ).add(EARTH_CONFIG.center);

      this.scene.add(cometGroup);

      // HTML DOM Label in labels container
      let labelEl = null;
      if (this.labelsContainer) {
        labelEl = document.createElement('div');
        labelEl.className = 'comet-label-wrap';
        labelEl.setAttribute('role', 'button');
        labelEl.setAttribute('tabindex', '0');
        labelEl.setAttribute('aria-label', `Explore ${service.title || service.name} service`);
        labelEl.innerHTML = `
          <div class="comet-label-inner">
            <span class="comet-label-dot" aria-hidden="true"></span>
            <span class="comet-label-text">${service.shortTitle || service.title || service.name}</span>
            <span class="comet-label-info-badge" title="Service info" aria-label="Information">i</span>
          </div>
        `;
        labelEl.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectComet(index);
        });
        labelEl.addEventListener('mouseenter', () => this.setHoverComet(index));
        labelEl.addEventListener('mouseleave', () => this.setHoverComet(-1));
        this.labelsContainer.appendChild(labelEl);
      }

      this.comets.push({
        data: service,
        index: index,
        group: cometGroup,
        nucleusMesh: nucleusMesh,
        hitProxyMesh: hitProxyMesh,
        comaSprite: comaSprite,
        defaultComaScale: comaScale,
        ionTailPoints: ionTailPoints,
        dustTailPoints: dustTailPoints,
        ionTailLength: ionTailLen,
        dustTailLength: dustTailLen,
        ionSeeds: ionSeeds,
        dustSeeds: dustSeeds,
        labelEl: labelEl,
        baseAngle: baseAngle,
        orbitRadius: orbitRadius,
        orbitTilt: orbitTilt,
        elevationOffset: elevationOffset,
        speed: service.speed || 0.040,
        rotationSpeed: new THREE.Vector2(0.003 + Math.random() * 0.003, 0.004 + Math.random() * 0.003)
      });
    });
  }

  setupAmbientComets() {
    const nucleusTex = createProceduralCometTexture();
    const bumpTex = createProceduralBumpTexture();
    const ultraBlueBlurTex = createUltraBlurTexture(56, 189, 248);

    AMBIENT_COMETS.forEach((item, i) => {
      const aGroup = new THREE.Group();
      const aRadius = item.nucleusRadius || 0.10;

      const aGeo = new THREE.IcosahedronGeometry(aRadius, 2);
      const aMat = new THREE.MeshStandardMaterial({
        map: nucleusTex,
        bumpMap: bumpTex,
        bumpScale: 0.14,
        roughness: 0.90,
        transparent: true,
        opacity: item.opacity || 0.6
      });
      const aMesh = new THREE.Mesh(aGeo, aMat);
      aGroup.add(aMesh);

      // Flowing tail
      const tailCount = 24;
      const tailGeo = new THREE.BufferGeometry();
      const tailPositions = new Float32Array(tailCount * 3);
      const tailColors = new Float32Array(tailCount * 3);
      const tailSeeds = new Float32Array(tailCount);
      for (let p = 0; p < tailCount; p++) {
        tailSeeds[p] = Math.random();
        const progress = p / tailCount;
        tailColors[p * 3] = 0.15 * (1 - progress);
        tailColors[p * 3 + 1] = 0.58 * (1 - progress);
        tailColors[p * 3 + 2] = 0.96 * (1 - progress * 0.4);
      }
      tailGeo.setAttribute('position', new THREE.BufferAttribute(tailPositions, 3));
      tailGeo.setAttribute('color', new THREE.BufferAttribute(tailColors, 3));

      const tailMat = new THREE.PointsMaterial({
        size: 1.4,
        vertexColors: true,
        map: ultraBlueBlurTex,
        transparent: true,
        opacity: 0.20,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const tailPoints = new THREE.Points(tailGeo, tailMat);
      aGroup.add(tailPoints);

      const baseAngle = item.angle;
      const orbitRadius = item.orbitRadius;
      const orbitTilt = item.inclination;
      const initX = Math.cos(baseAngle) * orbitRadius;
      const initZ = Math.sin(baseAngle) * orbitRadius;
      const initY = Math.sin(baseAngle) * (orbitRadius * Math.sin(orbitTilt));
      aGroup.position.set(initX, initY, initZ).add(EARTH_CONFIG.center);

      this.scene.add(aGroup);

      this.ambientComets.push({
        group: aGroup,
        nucleusMesh: aMesh,
        tailPoints: tailPoints,
        tailCount: tailCount,
        tailSeeds: tailSeeds,
        tailLength: item.tailLength || aRadius * 9.5,
        baseAngle: baseAngle,
        orbitRadius: orbitRadius,
        orbitTilt: orbitTilt,
        speed: item.speed || 0.035,
        rotationSpeed: new THREE.Vector2(0.004 + Math.random() * 0.004, 0.005 + Math.random() * 0.004)
      });
    });
  }

  bindEvents() {
    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onCanvasClick = this.onCanvasClick.bind(this);

    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.canvas.addEventListener('click', this.onCanvasClick, { passive: true });
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = this.width < 768;

    if (this.isMobile) {
      CAMERA_CONFIG.defaultPos.set(0, 9.8, 32.0);
    } else {
      CAMERA_CONFIG.defaultPos.set(0, 7.8, 23.8);
    }

    if (this.selectedCometIndex === -1 && this.heroScrollProgress === 0) {
      this.targetCameraPos.copy(CAMERA_CONFIG.defaultPos);
    }

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  onMouseMove(e) {
    this.mouseNDC.x = (e.clientX / this.width) * 2 - 1;
    this.mouseNDC.y = -(e.clientY / this.height) * 2 + 1;

    this.targetMouse.x = (e.clientX / this.width - 0.5) * 2;
    this.targetMouse.y = (e.clientY / this.height - 0.5) * 2;
  }

  onCanvasClick() {
    if (this.hoveredCometIndex !== -1) {
      this.selectComet(this.hoveredCometIndex);
    } else if (this.selectedCometIndex !== -1) {
      this.deselectComet();
    }
  }

  selectComet(index) {
    if (index < 0 || index >= this.comets.length) return;
    this.selectedCometIndex = index;
    const comet = this.comets[index];
    if (this.onSelectCometCallback) {
      this.onSelectCometCallback(comet.data);
    }
  }

  setHoverComet(index) {
    this.hoveredCometIndex = index;
    if (this.canvas) {
      this.canvas.style.cursor = index !== -1 ? 'pointer' : 'default';
    }
  }

  deselectComet() {
    this.selectedCometIndex = -1;
    this.targetCameraPos.copy(CAMERA_CONFIG.defaultPos);
    this.targetLookAt.copy(CAMERA_CONFIG.defaultLookAt);
    if (this.onSelectCometCallback) {
      this.onSelectCometCallback(null);
    }
  }

  setScrollProgress(progress) {
    this.heroScrollProgress = progress;
    if (progress > 0.05 && this.selectedCometIndex !== -1) {
      this.deselectComet();
    }
  }

  animate() {
    if (this.isDestroyed) return;
    this.animationFrameId = requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsedTime = this.clock.getElapsedTime();

    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

    const parallaxOffset = new THREE.Vector3(
      this.mouse.x * CAMERA_CONFIG.mouseParallaxMaxX,
      -this.mouse.y * CAMERA_CONFIG.mouseParallaxMaxY,
      0
    );

    // Polar Dive Zoom on Scroll
    if (this.heroScrollProgress > 0) {
      const p = this.heroScrollProgress;
      const t = Math.min(Math.pow(p / 0.50, 1.8), 1.0);
      const startY = CAMERA_CONFIG.defaultPos.y;
      const startZ = CAMERA_CONFIG.defaultPos.z;

      this.camera.position.set(0, startY + (5.2 - startY) * t, startZ - (startZ - 0.3) * t);
      this.currentLookAt.set(0, -1.2 + (4.8 - (-1.2)) * t, 0);
      this.camera.lookAt(this.currentLookAt);

      const earthScale = 1.0 + t * 1.8;
      if (this.earthSurfaceMesh) this.earthSurfaceMesh.scale.setScalar(earthScale);
      if (this.earthCloudsMesh) this.earthCloudsMesh.scale.setScalar(earthScale);
    } else if (this.selectedCometIndex !== -1) {
      const activeComet = this.comets[this.selectedCometIndex];
      const activeWorldPos = new THREE.Vector3();
      activeComet.group.getWorldPosition(activeWorldPos);

      this.targetCameraPos.set(activeWorldPos.x - 2.2, activeWorldPos.y + 1.8, activeWorldPos.z + 4.4);
      this.targetLookAt.copy(activeWorldPos);

      this.camera.position.lerp(this.targetCameraPos, 0.06);
      this.currentLookAt.lerp(this.targetLookAt, 0.06);
      this.camera.lookAt(this.currentLookAt);
    } else {
      const targetWithParallax = this.targetCameraPos.clone().add(parallaxOffset);
      this.camera.position.lerp(targetWithParallax, 0.05);
      this.currentLookAt.lerp(this.targetLookAt, 0.05);
      this.camera.lookAt(this.currentLookAt);
    }

    // Planetary rotation
    if (this.earthSurfaceMesh) this.earthSurfaceMesh.rotation.y += EARTH_CONFIG.surfaceRotationSpeed;
    if (this.earthCloudsMesh) this.earthCloudsMesh.rotation.y += EARTH_CONFIG.cloudRotationSpeed;

    // Background cosmic drifts
    if (this.bgStarPoints) this.bgStarPoints.rotation.y = elapsedTime * 0.012;
    if (this.milkyWayPoints) this.milkyWayPoints.rotation.z = -elapsedTime * 0.010;

    // Update Comets & Occlusion Behind Earth
    this.updateComets(delta, elapsedTime);
    this.updateAmbientComets(delta, elapsedTime);

    // Raycast hover detection
    if (!this.isMobile && this.selectedCometIndex === -1 && this.heroScrollProgress === 0) {
      this.raycaster.setFromCamera(this.mouseNDC, this.camera);
      const intersects = this.raycaster.intersectObjects(this.raycastHitMeshes);
      if (intersects.length > 0) {
        const hitIndex = intersects[0].object.userData.cometIndex;
        if (this.hoveredCometIndex !== hitIndex) {
          this.hoveredCometIndex = hitIndex;
          document.body.style.cursor = 'pointer';
        }
      } else if (this.hoveredCometIndex !== -1) {
        this.hoveredCometIndex = -1;
        document.body.style.cursor = 'default';
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  updateComets(delta, elapsedTime) {
    const sunPos = SUN_CONFIG.position;
    this.globalOrbitProgress += 0.040 * delta * 0.9;
    const PI2 = Math.PI * 2;
    const PI = Math.PI;

    this.comets.forEach(comet => {
      const currentAngle = comet.baseAngle + this.globalOrbitProgress;
      const normAngle = ((currentAngle % PI2) + PI2) % PI2;

      const localX = Math.cos(currentAngle) * comet.orbitRadius;
      const localZ = Math.sin(currentAngle) * comet.orbitRadius;
      const localY = comet.elevationOffset + Math.sin(currentAngle) * (comet.orbitRadius * Math.sin(comet.orbitTilt));

      comet.group.position.set(localX, localY, localZ).add(EARTH_CONFIG.center);
      const pos = comet.group.position;

      comet.nucleusMesh.rotation.x += comet.rotationSpeed.x;
      comet.nucleusMesh.rotation.y += comet.rotationSpeed.y;

      // Occlusion Calculation behind Earth
      let visibilityFactor = 1.0;
      if (normAngle >= 1.15 * PI && normAngle <= 1.85 * PI) {
        visibilityFactor = 0.0;
      } else if (normAngle > 0.85 * PI && normAngle < 1.15 * PI) {
        const p = (normAngle - 0.85 * PI) / (0.30 * PI);
        visibilityFactor = 0.5 * (1 + Math.cos(p * PI));
      } else if (normAngle > 1.85 * PI) {
        const p = (normAngle - 1.85 * PI) / (0.30 * PI);
        visibilityFactor = 0.5 * (1 - Math.cos(p * PI));
      } else if (normAngle < 0.15 * PI) {
        const p = (normAngle + 0.15 * PI) / (0.30 * PI);
        visibilityFactor = 0.5 * (1 - Math.cos(p * PI));
      }

      if (this.selectedCometIndex === comet.index) {
        visibilityFactor = Math.max(visibilityFactor, 0.95);
      }

      if (visibilityFactor <= 0.001) {
        comet.group.visible = false;
        if (comet.labelEl) {
          comet.labelEl.style.display = 'none';
          comet.labelEl.style.opacity = '0';
        }
        return;
      }

      comet.group.visible = true;
      if (comet.labelEl) comet.labelEl.style.display = 'block';

      if (comet.nucleusMesh.material) comet.nucleusMesh.material.opacity = visibilityFactor;
      if (comet.comaSprite.material) comet.comaSprite.material.opacity = 0.34 * visibilityFactor;
      if (comet.ionTailPoints.material) comet.ionTailPoints.material.opacity = 0.28 * visibilityFactor;
      if (comet.dustTailPoints.material) comet.dustTailPoints.material.opacity = 0.22 * visibilityFactor;

      // Tails point strictly away from the Sun
      const antiSunDir = new THREE.Vector3().subVectors(pos, sunPos).normalize();

      // Update Ion Tail
      const ionPosAttr = comet.ionTailPoints.geometry.attributes.position;
      const ionColorAttr = comet.ionTailPoints.geometry.attributes.color;
      const ionCount = 70;
      for (let p = 0; p < ionCount; p++) {
        const t = (p / ionCount + elapsedTime * 0.35 + comet.ionSeeds[p] * 0.15) % 1.0;
        const dist = t * comet.ionTailLength;
        const turbulence = Math.sin(elapsedTime * 5 + dist * 1.8 + comet.ionSeeds[p] * 12) * 0.08 * (dist / comet.ionTailLength);
        ionPosAttr.setXYZ(p, antiSunDir.x * dist + turbulence, antiSunDir.y * dist + turbulence, antiSunDir.z * dist);
        const fade = Math.sin(t * Math.PI) * Math.pow(1 - t, 0.7);
        ionColorAttr.setXYZ(p, 0.12 * fade, 0.60 * fade, 0.98 * fade);
      }
      ionPosAttr.needsUpdate = true;
      ionColorAttr.needsUpdate = true;

      // Update 2D Label Screen Projection
      if (comet.labelEl && this.camera) {
        const tempV = pos.clone().project(this.camera);
        const isBehindCamera = tempV.z > 1.0;
        if (isBehindCamera || this.heroScrollProgress > 0.1) {
          comet.labelEl.style.opacity = '0';
          comet.labelEl.style.pointerEvents = 'none';
        } else {
          const x = (tempV.x * 0.5 + 0.5) * this.width;
          const y = (-(tempV.y * 0.5) + 0.5) * this.height;
          comet.labelEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
          comet.labelEl.style.opacity = String(visibilityFactor);
          comet.labelEl.style.pointerEvents = visibilityFactor > 0.4 ? 'auto' : 'none';
        }
      }
    });
  }

  updateAmbientComets(delta, elapsedTime) {
    const sunPos = SUN_CONFIG.position;
    this.ambientComets.forEach(ac => {
      const currentAngle = ac.baseAngle + this.globalOrbitProgress * (ac.speed / 0.040);
      const localX = Math.cos(currentAngle) * ac.orbitRadius;
      const localZ = Math.sin(currentAngle) * ac.orbitRadius;
      const localY = Math.sin(currentAngle) * (ac.orbitRadius * Math.sin(ac.orbitTilt));

      ac.group.position.set(localX, localY, localZ).add(EARTH_CONFIG.center);
      const pos = ac.group.position;

      ac.nucleusMesh.rotation.x += ac.rotationSpeed.x;
      ac.nucleusMesh.rotation.y += ac.rotationSpeed.y;

      // Tail
      const antiSunDir = new THREE.Vector3().subVectors(pos, sunPos).normalize();
      const posAttr = ac.tailPoints.geometry.attributes.position;
      for (let p = 0; p < ac.tailCount; p++) {
        const t = (p / ac.tailCount + elapsedTime * 0.3 + ac.tailSeeds[p] * 0.1) % 1.0;
        const dist = t * ac.tailLength;
        posAttr.setXYZ(p, antiSunDir.x * dist, antiSunDir.y * dist, antiSunDir.z * dist);
      }
      posAttr.needsUpdate = true;
    });
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.canvas) {
      this.canvas.removeEventListener('click', this.onCanvasClick);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
