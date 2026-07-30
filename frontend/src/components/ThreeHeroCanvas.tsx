import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xe5e5e5, 0.05);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 7.5);

    // 2. Renderer & Tone Mapping
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainStudioLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainStudioLight.position.set(6, 10, 8);
    mainStudioLight.castShadow = true;
    mainStudioLight.shadow.mapSize.width = 2048;
    mainStudioLight.shadow.mapSize.height = 2048;
    scene.add(mainStudioLight);

    const mintRimLight = new THREE.DirectionalLight(0xb7f8c5, 2.5);
    mintRimLight.position.set(-6, -4, -4);
    scene.add(mintRimLight);

    const coreLight = new THREE.PointLight(0xb7f8c5, 3.5, 12);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Root Group for Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // AI Lab Scene Assembly Group
    const labAssembly = new THREE.Group();
    rootGroup.add(labAssembly);

    // ----------------------------------------------------
    // ELEMENT 1: CENTRAL AI CORE ENGINE
    // ----------------------------------------------------
    const coreGroup = new THREE.Group();
    labAssembly.add(coreGroup);

    // Frosted outer glass sphere shell
    const outerGlassGeo = new THREE.SphereGeometry(1.15, 32, 32);
    const outerGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
      reflectivity: 0.9,
    });
    const outerGlass = new THREE.Mesh(outerGlassGeo, outerGlassMat);
    coreGroup.add(outerGlass);

    // Inner glowing neural wireframe sphere
    const innerEnergyGeo = new THREE.SphereGeometry(0.75, 32, 32);
    const innerEnergyMat = new THREE.MeshBasicMaterial({
      color: 0xb7f8c5,
      wireframe: true,
    });
    const innerEnergy = new THREE.Mesh(innerEnergyGeo, innerEnergyMat);
    coreGroup.add(innerEnergy);

    // Dual Holographic Orbit Rings
    const ringGeo = new THREE.RingGeometry(1.6, 1.63, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb7f8c5,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const orbitRing1 = new THREE.Mesh(ringGeo, ringMat);
    orbitRing1.rotation.x = Math.PI / 3;
    coreGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(ringGeo, ringMat);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = Math.PI / 6;
    coreGroup.add(orbitRing2);

    // ----------------------------------------------------
    // ELEMENT 2: ARTICULATED ROBOTIC ARM
    // ----------------------------------------------------
    const armGroup = new THREE.Group();
    armGroup.position.set(-1.8, -0.6, 0.4);
    labAssembly.add(armGroup);

    // Arm Base
    const armBaseGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.15, 32);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x121212,
      roughness: 0.2,
      metalness: 0.8,
    });
    const armBase = new THREE.Mesh(armBaseGeo, darkMetalMat);
    armBase.castShadow = true;
    armGroup.add(armBase);

    // Joint 1 & Lower Arm Segment
    const j1Group = new THREE.Group();
    j1Group.position.set(0, 0.1, 0);
    armGroup.add(j1Group);

    const armSeg1Geo = new THREE.CylinderGeometry(0.07, 0.07, 0.8, 16);
    armSeg1Geo.translate(0, 0.4, 0);
    const armSeg1 = new THREE.Mesh(armSeg1Geo, darkMetalMat);
    armSeg1.rotation.z = Math.PI / 6;
    armSeg1.castShadow = true;
    j1Group.add(armSeg1);

    // Joint 2 & Upper Arm Segment
    const j2Group = new THREE.Group();
    j2Group.position.set(0.4, 0.7, 0);
    j1Group.add(j2Group);

    const armSeg2Geo = new THREE.CylinderGeometry(0.05, 0.05, 0.7, 16);
    armSeg2Geo.translate(0, 0.35, 0);
    const armSeg2 = new THREE.Mesh(armSeg2Geo, darkMetalMat);
    armSeg2.rotation.z = -Math.PI / 3;
    armSeg2.castShadow = true;
    j2Group.add(armSeg2);

    // End-Effector Gripper Claw with Mint Tip
    const clawGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const mintGlowMat = new THREE.MeshStandardMaterial({
      color: 0xb7f8c5,
      emissive: 0xb7f8c5,
      emissiveIntensity: 1.2,
    });
    const claw = new THREE.Mesh(clawGeo, mintGlowMat);
    claw.position.set(0.6, 0.3, 0);
    j2Group.add(claw);

    // ----------------------------------------------------
    // ELEMENT 3: FLOATING HOLOGRAPHIC CODE PANEL
    // ----------------------------------------------------
    const createCodePanelTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 320;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'rgba(18, 18, 18, 0.85)';
        ctx.fillRect(0, 0, 512, 320);

        ctx.strokeStyle = '#b7f8c5';
        ctx.lineWidth = 4;
        ctx.strokeRect(8, 8, 496, 304);

        ctx.fillStyle = '#b7f8c5';
        ctx.font = 'bold 22px monospace';
        ctx.fillText('// KIDS LAB AI CORE v2.6', 24, 44);

        ctx.fillStyle = '#ffffff';
        ctx.font = '18px monospace';
        ctx.fillText('import robot_core as bot', 24, 84);
        ctx.fillText('bot.initialize_sonar()', 24, 116);

        ctx.fillStyle = '#fff100';
        ctx.fillText('while bot.is_active():', 24, 156);
        ctx.fillStyle = '#b7f8c5';
        ctx.fillText('  bot.navigate_autonomous()', 44, 188);
        ctx.fillText('  bot.learn_neural_patterns()', 44, 220);

        ctx.fillStyle = '#979797';
        ctx.font = '14px monospace';
        ctx.fillText('[STATUS: 60 FPS • 100% ONLINE]', 24, 280);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const codeTexture = createCodePanelTexture();
    const codePlaneGeo = new THREE.PlaneGeometry(1.8, 1.15);
    const codePlaneMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const codePanel = new THREE.Mesh(codePlaneGeo, codePlaneMat);
    codePanel.position.set(-1.6, 1.1, -0.4);
    codePanel.rotation.y = Math.PI / 8;
    labAssembly.add(codePanel);

    // ----------------------------------------------------
    // ELEMENT 4: TINY EDUCATIONAL ROBOT COMPANION
    // ----------------------------------------------------
    const botGroup = new THREE.Group();
    botGroup.position.set(1.9, -0.6, 0.5);
    labAssembly.add(botGroup);

    // Cute Robot Body
    const botBodyGeo = new THREE.CylinderGeometry(0.3, 0.35, 0.55, 32);
    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
    });
    const botBody = new THREE.Mesh(botBodyGeo, whiteMat);
    botBody.castShadow = true;
    botGroup.add(botBody);

    // Robot Head with Mint Visor Eyes
    const botHeadGroup = new THREE.Group();
    botHeadGroup.position.set(0, 0.45, 0);
    botGroup.add(botHeadGroup);

    const botHeadGeo = new THREE.SphereGeometry(0.32, 32, 32);
    const botHead = new THREE.Mesh(botHeadGeo, darkMetalMat);
    botHead.castShadow = true;
    botHeadGroup.add(botHead);

    const visorGeo = new THREE.BoxGeometry(0.4, 0.12, 0.12);
    const visor = new THREE.Mesh(visorGeo, mintGlowMat);
    visor.position.set(0, 0.05, 0.26);
    botHeadGroup.add(visor);

    // Antenna
    const antGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 16);
    const ant = new THREE.Mesh(antGeo, darkMetalMat);
    ant.position.set(0, 0.4, 0);
    botHeadGroup.add(ant);

    const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), mintGlowMat);
    antTip.position.set(0, 0.52, 0);
    botHeadGroup.add(antTip);

    // ----------------------------------------------------
    // ELEMENT 5: ORBITING AI MICROCHIPS
    // ----------------------------------------------------
    const createChipTexture = (label: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, 128, 128);
        ctx.strokeStyle = '#b7f8c5';
        ctx.lineWidth = 3;
        ctx.strokeRect(4, 4, 120, 120);
        ctx.fillStyle = '#b7f8c5';
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const chipsGroup = new THREE.Group();
    labAssembly.add(chipsGroup);

    const chipLabels = ['PYTHON', 'NEURAL', 'ROBOT'];
    const chipMeshes: THREE.Mesh[] = [];

    chipLabels.forEach((label, i) => {
      const chipGeo = new THREE.BoxGeometry(0.65, 0.4, 0.06);
      const chipMat = new THREE.MeshStandardMaterial({
        map: createChipTexture(label),
        roughness: 0.2,
        metalness: 0.8,
      });
      const chip = new THREE.Mesh(chipGeo, chipMat);
      const angle = (i / chipLabels.length) * Math.PI * 2;
      const radius = 2.4;
      chip.position.set(Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius);
      chip.rotation.y = -angle;
      chip.castShadow = true;
      chipsGroup.add(chip);
      chipMeshes.push(chip);
    });

    // ----------------------------------------------------
    // ELEMENT 6: NEURAL NETWORK PARTICLE CLOUD
    // ----------------------------------------------------
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 11;
      particlePositions[i + 1] = (Math.random() - 0.5) * 11;
      particlePositions[i + 2] = (Math.random() - 0.5) * 9 - 1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xb7f8c5,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    });

    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Mouse Parallax Engine
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
      targetRotY = nx * 1.1;
      targetRotX = ny * 0.7;
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

    // Procedural Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();

      // 1. Mouse Parallax Inertia
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      // 2. Levitation & Floating
      labAssembly.position.y = Math.sin(time * 1.4) * 0.12;

      // 3. Central AI Core Motion
      outerGlass.rotation.y = time * 0.18;
      innerEnergy.rotation.y = -time * 0.35;
      innerEnergy.rotation.z = time * 0.25;
      orbitRing1.rotation.z = time * 0.2;
      orbitRing2.rotation.z = -time * 0.25;

      // Pulsing energy light
      const pulse = 0.8 + Math.sin(time * 3.0) * 0.4;
      coreLight.intensity = 2.5 + pulse * 1.5;

      // 4. Robotic Arm Idle Motion
      j1Group.rotation.z = Math.sin(time * 1.2) * 0.18;
      j2Group.rotation.x = Math.cos(time * 1.5) * 0.15;

      // 5. Code Panel Floating & Subtle Flicker
      codePanel.position.y = 1.1 + Math.sin(time * 1.8) * 0.06;
      codePlaneMat.opacity = 0.85 + Math.sin(time * 6.0) * 0.05;

      // 6. Educational Robot Head Tilt & Float
      botGroup.position.y = -0.6 + Math.sin(time * 2.0 + 1) * 0.08;
      botHeadGroup.rotation.z = Math.sin(time * 1.6) * 0.12;
      botHeadGroup.rotation.y = Math.cos(time * 1.2) * 0.2;

      // 7. Orbiting Microchips Motion
      chipsGroup.rotation.y = time * 0.3;

      // 8. Particle Cloud Parallax
      particleCloud.rotation.y = time * 0.03;
      particleCloud.position.x = mouseX * 0.35;
      particleCloud.position.y = -mouseY * 0.35;

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
    <div className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] flex items-center justify-center pointer-events-auto">
      <div ref={containerRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
