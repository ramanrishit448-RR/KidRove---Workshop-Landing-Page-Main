import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene, Camera & Depth Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xe5e5e5, 0.06);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Studio Lighting Engine
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainStudioLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainStudioLight.position.set(6, 10, 8);
    mainStudioLight.castShadow = true;
    mainStudioLight.shadow.mapSize.width = 2048;
    mainStudioLight.shadow.mapSize.height = 2048;
    scene.add(mainStudioLight);

    // Mint Emissive Rim Light (#B7F8C5)
    const mintRimLight = new THREE.DirectionalLight(0xb7f8c5, 2.2);
    mintRimLight.position.set(-6, -4, -4);
    scene.add(mintRimLight);

    // Point Light inside AI Core
    const corePointLight = new THREE.PointLight(0xb7f8c5, 3.5, 10);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // Root Group for Parallax Animation
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // AI Core Assembly Group
    const coreAssembly = new THREE.Group();
    rootGroup.add(coreAssembly);

    // 1. Procedural Texture for Glowing Seams & Neural Circuits
    const createCircuitTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Base dark metal background
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, 512, 512);

        // Draw glowing mint circuit seams
        ctx.strokeStyle = '#b7f8c5';
        ctx.lineWidth = 6;
        ctx.shadowColor = '#b7f8c5';
        ctx.shadowBlur = 12;

        // Seam 1: Horizontal grid cuts
        ctx.beginPath();
        ctx.moveTo(0, 160);
        ctx.lineTo(512, 160);
        ctx.moveTo(0, 352);
        ctx.lineTo(512, 352);
        ctx.stroke();

        // Seam 2: Vertical circuit traces with nodes
        ctx.beginPath();
        ctx.moveTo(160, 0);
        ctx.lineTo(160, 512);
        ctx.moveTo(352, 0);
        ctx.lineTo(352, 512);
        ctx.stroke();

        // Circuit Nodes
        ctx.fillStyle = '#b7f8c5';
        [160, 352].forEach((x) => {
          [160, 352].forEach((y) => {
            ctx.beginPath();
            ctx.arc(x, y, 14, 0, Math.PI * 2);
            ctx.fill();
          });
        });
      }
      return new THREE.CanvasTexture(canvas);
    };

    const circuitTex = createCircuitTexture();

    // 2. Central Monolith / AI Intelligence Engine Core
    const coreGeo = new THREE.BoxGeometry(2.0, 2.0, 2.0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x121212,
      roughness: 0.2,
      metalness: 0.85,
      map: circuitTex,
      emissiveMap: circuitTex,
      emissive: new THREE.Color(0xb7f8c5),
      emissiveIntensity: 0.8,
    });

    const aiMonolith = new THREE.Mesh(coreGeo, coreMat);
    aiMonolith.castShadow = true;
    aiMonolith.receiveShadow = true;
    coreAssembly.add(aiMonolith);

    // 3. Frosted Outer Glass Shield Shell
    const glassGeo = new THREE.BoxGeometry(2.3, 2.3, 2.3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
      reflectivity: 0.9,
    });
    const glassShell = new THREE.Mesh(glassGeo, glassMat);
    coreAssembly.add(glassShell);

    // 4. Internal Glowing Quantum Energy Sphere
    const energyGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const energyMat = new THREE.MeshBasicMaterial({
      color: 0xb7f8c5,
      wireframe: true,
    });
    const energySphere = new THREE.Mesh(energyGeo, energyMat);
    coreAssembly.add(energySphere);

    // 5. Orbiting Quantum Micro-Panels & Data Modules
    const orbitGroup = new THREE.Group();
    coreAssembly.add(orbitGroup);

    const panelCount = 4;
    const panelMeshes: THREE.Mesh[] = [];

    const panelGeo = new THREE.BoxGeometry(0.8, 0.4, 0.08);
    const panelMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.15,
      metalness: 0.9,
      emissive: new THREE.Color(0xb7f8c5),
      emissiveIntensity: 0.3,
    });

    for (let i = 0; i < panelCount; i++) {
      const panel = new THREE.Mesh(panelGeo, panelMat);
      const angle = (i / panelCount) * Math.PI * 2;
      const radius = 2.2;
      panel.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.6, Math.sin(angle) * radius);
      panel.rotation.y = -angle;
      panel.castShadow = true;
      orbitGroup.add(panel);
      panelMeshes.push(panel);
    }

    // 6. Holographic Data Orbit Rings
    const ringGeo = new THREE.RingGeometry(2.15, 2.18, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb7f8c5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const orbitRing1 = new THREE.Mesh(ringGeo, ringMat);
    orbitRing1.rotation.x = Math.PI / 3;
    coreAssembly.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(ringGeo, ringMat);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = Math.PI / 6;
    coreAssembly.add(orbitRing2);

    // 7. Background Quantum Particle Field & Faint Connection Lines
    const particleCount = 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xb7f8c5,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });

    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Mouse Parallax Logic
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = nx;
      mouseY = ny;
      targetRotY = nx * 1.2;
      targetRotX = ny * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // 1. Mouse Parallax & Inertia
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      // 2. Idle Levitation & Breathing Scale
      coreAssembly.position.y = Math.sin(time * 1.5) * 0.12;
      const breathScale = 1 + Math.sin(time * 2.0) * 0.02;
      coreAssembly.scale.set(breathScale, breathScale, breathScale);

      // 3. Core Slow Rotation
      aiMonolith.rotation.y = time * 0.2;
      aiMonolith.rotation.x = Math.sin(time * 0.1) * 0.1;
      glassShell.rotation.y = -time * 0.15;
      energySphere.rotation.y = time * 0.4;
      energySphere.rotation.z = time * 0.3;

      // 4. Orbiting Rings & Panels Motion
      orbitGroup.rotation.y = time * 0.35;
      orbitRing1.rotation.z = time * 0.15;
      orbitRing2.rotation.z = -time * 0.2;

      // 5. Pulsing Emissive Light Intensity
      const pulse = 0.8 + Math.sin(time * 3.0) * 0.4;
      coreMat.emissiveIntensity = pulse;
      corePointLight.intensity = 2.5 + pulse * 1.5;

      // 6. Particle Field Drift
      particleField.rotation.y = time * 0.03;
      particleField.position.x = mouseX * 0.3;
      particleField.position.y = -mouseY * 0.3;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center pointer-events-auto">
      <div ref={containerRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
