import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
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
  radius: 6.20,
  tiltDegrees: 18.5,
  surfaceRotationSpeed: 0.0006,
  cloudRotationSpeed: 0.00095
};

export const CAMERA_CONFIG = {
  defaultPos: new THREE.Vector3(0, 8.4, 25.5),
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
    this.isMobile = this.width < 768;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

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

    // High-performance visibility observer (0% CPU & 0% GPU when hero is scrolled out of view)
    this.isHeroVisible = true;
    this.handleScrollVisibility = () => {
      // If user has scrolled down past the hero height, freeze 3D rendering immediately
      const isPastHero = (window.scrollY || document.documentElement.scrollTop) > (this.height * 1.05);
      if (isPastHero && this.isHeroVisible) {
        this.isHeroVisible = false;
      } else if (!isPastHero && !this.isHeroVisible) {
        this.isHeroVisible = true;
      }
    };
    window.addEventListener('scroll', this.handleScrollVisibility, { passive: true });

    this.animate = this.animate.bind(this);
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
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

    // Deep cosmic space ambient light - restores Earth's dark night side shadow
    const ambientLight = new THREE.AmbientLight(0x060c18, 0.35);
    this.scene.add(ambientLight);

    // Subtle dark blue rim light from behind Earth
    const rimLight = new THREE.DirectionalLight(0x101a35, 0.30);
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
    // Dynamic counts: scaled down on mobile for buttery-smooth 60 FPS
    const starCountBg = this.isMobile ? 900 : SPACE_CONFIG.starCountBg;
    const starCountFg = this.isMobile ? 200 : SPACE_CONFIG.starCountFg;
    const milkyWayCount = this.isMobile ? 500 : SPACE_CONFIG.milkyWayCount;
    const nebulaCount = this.isMobile ? 6 : SPACE_CONFIG.nebulaCount;

    // 1. Deep starfield
    const bgGeo = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(starCountBg * 3);
    const bgColors = new Float32Array(starCountBg * 3);
    const colorPalettes = [
      new THREE.Color(0xdceaff),
      new THREE.Color(0xffffff),
      new THREE.Color(0xffd180),
      new THREE.Color(0x9bc2ff),
      new THREE.Color(0x6d44a6),
      new THREE.Color(0x58348c)
    ];

    for (let i = 0; i < starCountBg; i++) {
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

    // 2. Volumetric Nebula (Reduced to 6 on mobile to completely eliminate multi-pass overdraw lag)
    const nebulaTex = createVolumetricNebulaTexture(50, 12, 95);
    const nebulaColors = [0x080e1a, 0x0a1424, 0x070c16, 0x0b1628, 0x050912];
    for (let i = 0; i < nebulaCount; i++) {
      const c = nebulaColors[i % nebulaColors.length];
      const nebMat = new THREE.SpriteMaterial({
        map: nebulaTex,
        color: c,
        transparent: true,
        opacity: 0.03 + Math.random() * 0.02,
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
    const fgPositions = new Float32Array(starCountFg * 3);
    for (let i = 0; i < starCountFg; i++) {
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
    const mwPositions = new Float32Array(milkyWayCount * 3);
    const mwColors = new Float32Array(milkyWayCount * 3);
    const mwPalettes = [new THREE.Color(0x11233d), new THREE.Color(0x1a3354), new THREE.Color(0x0e1c30), new THREE.Color(0x0a1626)];

    for (let i = 0; i < milkyWayCount; i++) {
      const t = (Math.random() - 0.5) * 125;
      mwPositions[i * 3] = t;
      mwPositions[i * 3 + 1] = t * 0.42 + (Math.random() - 0.5) * 18;
      mwPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const baseC = mwPalettes[Math.floor(Math.random() * mwPalettes.length)];
      const lum = Math.random() * 0.25 + 0.05;
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
      opacity: 0.12,
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

    // 1. High-Resolution NASA Surface Map (Local asset first, fallback to CDN)
    texLoader.load(
      '/assets/earth_atmos_2048.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        this.earthSurfaceMat.map = tex;
        this.earthSurfaceMat.needsUpdate = true;
      },
      undefined,
      () => {
        texLoader.load(
          'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            this.earthSurfaceMat.map = tex;
            this.earthSurfaceMat.needsUpdate = true;
          }
        );
      }
    );

    // 2. NASA Specular / Roughness Map (Specular sheen on oceans, matte continents)
    texLoader.load(
      '/assets/earth_specular_2048.jpg',
      (specTex) => {
        this.earthSurfaceMat.roughnessMap = specTex;
        this.earthSurfaceMat.needsUpdate = true;
      },
      undefined,
      () => {
        texLoader.load(
          'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
          (specTex) => {
            this.earthSurfaceMat.roughnessMap = specTex;
            this.earthSurfaceMat.needsUpdate = true;
          }
        );
      }
    );

    // 3. NASA Normal Map (Relief and topographic bumps on mountain ranges)
    texLoader.load(
      '/assets/earth_normal_2048.jpg',
      (normTex) => {
        this.earthSurfaceMat.normalMap = normTex;
        this.earthSurfaceMat.normalScale = new THREE.Vector2(0.85, 0.85);
        this.earthSurfaceMat.needsUpdate = true;
      },
      undefined,
      () => {
        texLoader.load(
          'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
          (normTex) => {
            this.earthSurfaceMat.normalMap = normTex;
            this.earthSurfaceMat.normalScale = new THREE.Vector2(0.85, 0.85);
            this.earthSurfaceMat.needsUpdate = true;
          }
        );
      }
    );

    this.earthSurfaceMesh = new THREE.Mesh(surfaceGeo, this.earthSurfaceMat);
    const baseScale = this.isMobile ? 0.50 : 1.0;
    this.earthSurfaceMesh.scale.set(baseScale, baseScale, baseScale);
    this.earthGroup.add(this.earthSurfaceMesh);

    // Clouds Sphere (Rotating independently)
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
      '/assets/earth_clouds_1024.png',
      (cloudTex) => {
        cloudTex.colorSpace = THREE.SRGBColorSpace;
        this.earthCloudsMat.map = cloudTex;
        this.earthCloudsMat.needsUpdate = true;
      },
      undefined,
      () => {
        texLoader.load(
          'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
          (cloudTex) => {
            cloudTex.colorSpace = THREE.SRGBColorSpace;
            this.earthCloudsMat.map = cloudTex;
            this.earthCloudsMat.needsUpdate = true;
          }
        );
      }
    );

    this.earthCloudsMesh = new THREE.Mesh(cloudGeo, this.earthCloudsMat);
    this.earthCloudsMesh.scale.set(baseScale, baseScale, baseScale);
    this.earthGroup.add(this.earthCloudsMesh);

    this.scene.add(this.earthGroup);
  }

  setupComets() {
    // 2K PBR Textures for authentic Blender 3D Asteroid_1a
    const textureLoader = new THREE.TextureLoader();
    this.asteroidColorTex = textureLoader.load('/assets/asteroid_color_2k.jpg');
    this.asteroidColorTex.colorSpace = THREE.SRGBColorSpace;

    this.asteroidNormalTex = textureLoader.load('/assets/asteroid_normal_2k.jpg');
    this.asteroidNormalTex.colorSpace = THREE.NoColorSpace;

    this.asteroidAoTex = textureLoader.load('/assets/asteroid_ao_2k.jpg');
    this.asteroidAoTex.colorSpace = THREE.NoColorSpace;

    // 100% Matte, Non-Shiny Natural Porous Regolith Rock Material
    // roughness: 1.0, metalness: 0.0 - zero specular glare / shine
    // Tone reduced by ~18% per user request for balanced deep-space basalt
    this.asteroidPbrMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xb4bcc4), // ~18% reduced brightness stone tone
      map: this.asteroidColorTex,
      normalMap: this.asteroidNormalTex,
      normalScale: new THREE.Vector2(1.5, 1.5),
      roughness: 1.0, // 100% matte dry rock - ZERO shininess
      metalness: 0.0, // Non-metallic, non-reflective
      aoMap: this.asteroidAoTex,
      aoMapIntensity: 1.0,
      transparent: true,
      opacity: 1.0
    });

    // Unequal realistic radii across pillars and services (varying sizes)
    const COMET_RADII = [
      0.84, 0.44, 0.68, 0.36, 0.78, 0.46,
      0.72, 0.38, 0.62, 0.44, 0.80, 0.40
    ];

    SERVICES_COMETS.forEach((service, index) => {
      const cometGroup = new THREE.Group();
      const radius = COMET_RADII[index % COMET_RADII.length];

      // Temporary placeholder while OBJ loads
      const placeholderGeo = new THREE.IcosahedronGeometry(radius, 2);
      const nucleusMat = this.asteroidPbrMat.clone();
      const nucleusMesh = new THREE.Mesh(placeholderGeo, nucleusMat);
      cometGroup.add(nucleusMesh);

      // Raycast hit proxy
      const hitProxyGeo = new THREE.SphereGeometry(radius * 1.6, 10, 10);
      const hitProxyMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitProxyMesh = new THREE.Mesh(hitProxyGeo, hitProxyMat);
      hitProxyMesh.userData = { cometIndex: index };
      cometGroup.add(hitProxyMesh);
      this.raycastHitMeshes.push(hitProxyMesh);

      // (Comet tail light completely removed per user request for authentic celestial feel)

      // 3D Orbital Positioning (Proportioned to larger Earth)
      const totalServices = SERVICES_COMETS.length;
      const baseAngle = service.angle || (index / totalServices) * Math.PI * 2;
      const orbitRadius = service.orbitRadius || 15.2 + ((index % 5) - 2.0) * 0.95;
      const orbitTilt = service.inclination !== undefined ? service.inclination : 0.22;
      const elevationOffset = ((index % 3) - 1) * 0.55;

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
        radius: radius,
        group: cometGroup,
        nucleusMesh: nucleusMesh,
        hitProxyMesh: hitProxyMesh,
        labelEl: labelEl,
        baseAngle: baseAngle,
        orbitRadius: orbitRadius,
        orbitTilt: orbitTilt,
        elevationOffset: elevationOffset,
        speed: service.speed || 0.040,
        rotationSpeed: new THREE.Vector2(0.003 + Math.random() * 0.003, 0.004 + Math.random() * 0.003)
      });
    });

    this.loadAsteroidModel();
  }

  loadAsteroidModel() {
    const objLoader = new OBJLoader();
    objLoader.load(
      '/assets/asteroid_1a.obj',
      (obj) => {
        if (this.isDestroyed) return;
        const rawMesh = obj.children[0];
        if (!rawMesh) return;

        const asteroidGeo = rawMesh.geometry;
        asteroidGeo.center();
        asteroidGeo.computeVertexNormals();
        this.asteroidSharedGeo = asteroidGeo;

        // Upgrade all main service comets to authentic Blender 3D Asteroid_1a
        this.comets.forEach((comet, index) => {
          const oldGeo = comet.nucleusMesh.geometry;
          comet.nucleusMesh.geometry = asteroidGeo;
          if (oldGeo) oldGeo.dispose();

          const scale = (comet.radius / 1.05) * 0.80;
          comet.nucleusMesh.scale.set(
            scale * (1.0 + ((index % 3) - 1) * 0.08),
            scale * 0.94,
            scale * (1.0 + (((index + 1) % 3) - 1) * 0.08)
          );
          // Varied unique initial rotational attitudes
          comet.nucleusMesh.rotation.set(
            (index * 1.7) % (Math.PI * 2),
            (index * 2.3) % (Math.PI * 2),
            (index * 0.9) % (Math.PI * 2)
          );
        });

        // Upgrade all ambient deep-space comets to authentic mini Asteroids
        this.ambientComets.forEach((ac) => {
          const oldGeo = ac.nucleusMesh.geometry;
          ac.nucleusMesh.geometry = asteroidGeo;
          if (oldGeo) oldGeo.dispose();

          const aScale = (ac.radius / 1.05) * 0.75;
          ac.nucleusMesh.scale.setScalar(aScale);
          ac.nucleusMesh.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          );
        });
      },
      undefined,
      (err) => {
        console.warn('Asteroid model loading error in CelestialEngine:', err);
      }
    );
  }

  setupAmbientComets() {
    // Scaled down on mobile to 6 mini comets (24 on desktop)
    const freeCometCount = this.isMobile ? 6 : 24;
    for (let i = 0; i < freeCometCount; i++) {
      const aGroup = new THREE.Group();
      // Small mini comets
      const aRadius = 0.08 + Math.random() * 0.14;

      const aGeo = new THREE.IcosahedronGeometry(aRadius, 1);
      const aMat = this.asteroidPbrMat ? this.asteroidPbrMat.clone() : new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 1.0,
        metalness: 0.0,
        transparent: true,
        opacity: 0.75
      });
      aMat.opacity = 0.75;
      const aMesh = new THREE.Mesh(aGeo, aMat);
      aGroup.add(aMesh);

      // (Tails removed per user request for authentic celestial bodies)

      const baseAngle = Math.random() * Math.PI * 2;
      const orbitRadius = 11.0 + Math.random() * 11.0;
      const orbitTilt = (Math.random() - 0.5) * 0.85;
      const initX = Math.cos(baseAngle) * orbitRadius;
      const initZ = Math.sin(baseAngle) * orbitRadius;
      const initY = Math.sin(baseAngle) * (orbitRadius * Math.sin(orbitTilt)) + (Math.random() - 0.5) * 2.0;
      aGroup.position.set(initX, initY, initZ).add(EARTH_CONFIG.center);

      this.scene.add(aGroup);

      this.ambientComets.push({
        radius: aRadius,
        group: aGroup,
        nucleusMesh: aMesh,
        baseAngle: baseAngle,
        orbitRadius: orbitRadius,
        orbitTilt: orbitTilt,
        speed: (0.02 + Math.random() * 0.035) * (Math.random() > 0.4 ? 1 : -1),
        rotationSpeed: new THREE.Vector2(0.005 + Math.random() * 0.005, 0.006 + Math.random() * 0.005)
      });
    }
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

    const baseScale = this.isMobile ? 0.50 : 1.0;
    if (this.selectedCometIndex === -1 && this.heroScrollProgress === 0) {
      this.targetCameraPos.copy(CAMERA_CONFIG.defaultPos);
      if (this.earthSurfaceMesh) this.earthSurfaceMesh.scale.set(baseScale, baseScale, baseScale);
      if (this.earthCloudsMesh) this.earthCloudsMesh.scale.set(baseScale, baseScale, baseScale);
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

  onCanvasClick(e) {
    if (e) {
      this.mouseNDC.x = (e.clientX / this.width) * 2 - 1;
      this.mouseNDC.y = -(e.clientY / this.height) * 2 + 1;
    }
    this.raycaster.setFromCamera(this.mouseNDC, this.camera);
    const intersects = this.raycaster.intersectObjects(this.raycastHitMeshes);
    if (intersects.length > 0) {
      const hitIndex = intersects[0].object.userData.cometIndex;
      this.selectComet(hitIndex);
    } else if (this.hoveredCometIndex !== -1) {
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

    // Freeze render loop immediately when hero is scrolled out of view (0% CPU/GPU overhead)
    if (!this.isHeroVisible) return;

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
    const baseScale = this.isMobile ? 0.50 : 1.0;
    if (this.heroScrollProgress > 0) {
      const p = this.heroScrollProgress;
      const t = Math.min(Math.pow(p / 0.50, 1.8), 1.0);
      const startY = CAMERA_CONFIG.defaultPos.y;
      const startZ = CAMERA_CONFIG.defaultPos.z;

      this.camera.position.set(0, startY + (5.2 - startY) * t, startZ - (startZ - 0.3) * t);
      this.currentLookAt.set(0, -1.2 + (4.8 - (-1.2)) * t, 0);
      this.camera.lookAt(this.currentLookAt);

      const earthScale = baseScale * (1.0 + t * 1.8);
      if (this.earthSurfaceMesh) this.earthSurfaceMesh.scale.setScalar(earthScale);
      if (this.earthCloudsMesh) this.earthCloudsMesh.scale.setScalar(earthScale);
    } else {
      if (this.earthSurfaceMesh) this.earthSurfaceMesh.scale.set(baseScale, baseScale, baseScale);
      if (this.earthCloudsMesh) this.earthCloudsMesh.scale.set(baseScale, baseScale, baseScale);

      if (this.selectedCometIndex !== -1) {
        // Classic smooth camera tracking of selected comet
        const activeComet = this.comets[this.selectedCometIndex];
        const activeWorldPos = new THREE.Vector3();
        activeComet.group.getWorldPosition(activeWorldPos);

        this.targetCameraPos.set(
          activeWorldPos.x - 2.2,
          activeWorldPos.y + 1.8,
          activeWorldPos.z + 4.4
        );
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
    // Drastically slow down orbit progress when examining a focused comet
    this.globalOrbitProgress += (this.selectedCometIndex !== -1 ? 0.003 : 0.038) * delta * 0.9;
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

      // Update 2D Label Screen Projection (Seamless across Desktop, Tablet & Mobile)
      if (comet.labelEl && this.camera) {
        comet.labelEl.style.display = 'block';
        const tempV = pos.clone().project(this.camera);
        const isBehindCamera = tempV.z > 1.0;
        if (isBehindCamera || this.heroScrollProgress > 0.1) {
          comet.labelEl.style.opacity = '0';
          comet.labelEl.style.pointerEvents = 'none';
        } else {
          const x = (tempV.x * 0.5 + 0.5) * this.width;
          const y = (-(tempV.y * 0.5) + 0.5) * this.height;
          comet.labelEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
          
          const isSelected = this.selectedCometIndex === comet.index;
          if (isSelected) {
            comet.labelEl.classList.add('is-focused');
          } else {
            comet.labelEl.classList.remove('is-focused');
          }
          
          comet.labelEl.style.opacity = String(visibilityFactor);
          comet.labelEl.style.pointerEvents = visibilityFactor > 0.4 ? 'auto' : 'none';
        }
      }
    });
  }

  updateAmbientComets(delta, elapsedTime) {
    this.ambientComets.forEach(ac => {
      const currentAngle = ac.baseAngle + this.globalOrbitProgress * (ac.speed / 0.040);
      const localX = Math.cos(currentAngle) * ac.orbitRadius;
      const localZ = Math.sin(currentAngle) * ac.orbitRadius;
      const localY = Math.sin(currentAngle) * (ac.orbitRadius * Math.sin(ac.orbitTilt));

      ac.group.position.set(localX, localY, localZ).add(EARTH_CONFIG.center);

      ac.nucleusMesh.rotation.x += ac.rotationSpeed.x;
      ac.nucleusMesh.rotation.y += ac.rotationSpeed.y;
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

    if (this.asteroidSharedGeo) {
      this.asteroidSharedGeo.dispose();
    }
    if (this.asteroidColorTex) this.asteroidColorTex.dispose();
    if (this.asteroidNormalTex) this.asteroidNormalTex.dispose();
    if (this.asteroidAoTex) this.asteroidAoTex.dispose();
    if (this.asteroidPbrMat) this.asteroidPbrMat.dispose();

    this.comets.forEach(c => {
      if (c.nucleusMesh) {
        if (c.nucleusMesh.geometry && c.nucleusMesh.geometry !== this.asteroidSharedGeo) {
          c.nucleusMesh.geometry.dispose();
        }
        if (c.nucleusMesh.material) {
          c.nucleusMesh.material.dispose();
        }
      }
      if (c.hitProxyMesh) {
        if (c.hitProxyMesh.geometry) c.hitProxyMesh.geometry.dispose();
        if (c.hitProxyMesh.material) c.hitProxyMesh.material.dispose();
      }
    });

    this.ambientComets.forEach(ac => {
      if (ac.nucleusMesh) {
        if (ac.nucleusMesh.geometry && ac.nucleusMesh.geometry !== this.asteroidSharedGeo) {
          ac.nucleusMesh.geometry.dispose();
        }
        if (ac.nucleusMesh.material) {
          ac.nucleusMesh.material.dispose();
        }
      }
    });

    if (this.handleScrollVisibility) {
      window.removeEventListener('scroll', this.handleScrollVisibility);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
