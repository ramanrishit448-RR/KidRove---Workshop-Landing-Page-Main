import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 6.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(6, 10, 6);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const mintFillLight = new THREE.DirectionalLight(0xd1ffca, 1.2);
    mintFillLight.position.set(-6, -3, -2);
    scene.add(mintFillLight);

    // Main Group
    const group = new THREE.Group();
    scene.add(group);

    // Helper: Canvas texture for Brand Badge
    const createBadgeTexture = (text: string, bgColor: string, textColor: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = textColor;
        ctx.font = '900 42px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // 1. Central Structural Cube
    const cubeGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x171717,
      roughness: 0.25,
      metalness: 0.15,
    });
    const mainCube = new THREE.Mesh(cubeGeo, cubeMat);
    mainCube.castShadow = true;
    mainCube.receiveShadow = true;
    group.add(mainCube);

    // Badge 1 (Front)
    const badgeMat1 = new THREE.MeshStandardMaterial({
      map: createBadgeTexture('DAYOS AI', '#d1ffca', '#000000'),
      roughness: 0.2,
    });
    const badgeMesh1 = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.9), badgeMat1);
    badgeMesh1.position.set(0, 0, 1.21);
    mainCube.add(badgeMesh1);

    // Badge 2 (Top)
    const badgeMat2 = new THREE.MeshStandardMaterial({
      map: createBadgeTexture('KIDS LAB', '#fff100', '#000000'),
      roughness: 0.2,
    });
    const badgeMesh2 = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), badgeMat2);
    badgeMesh2.rotation.x = -Math.PI / 2;
    badgeMesh2.position.set(0, 1.21, 0);
    mainCube.add(badgeMesh2);

    // 2. Mint Chip Cylinder
    const cylGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.3, 32);
    const cylMat = new THREE.MeshStandardMaterial({
      color: 0xd1ffca,
      roughness: 0.2,
    });
    const cylMesh = new THREE.Mesh(cylGeo, cylMat);
    cylMesh.position.set(1.6, 0.9, 0.5);
    cylMesh.rotation.z = Math.PI / 4;
    cylMesh.castShadow = true;
    group.add(cylMesh);

    // 3. Voltage Yellow Glossy Sphere
    const sphereGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xfff100,
      roughness: 0.1,
      metalness: 0.1,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(-1.5, -0.7, 0.7);
    sphereMesh.castShadow = true;
    group.add(sphereMesh);

    // 4. Metallic Pink Pyramid Accent
    const coneGeo = new THREE.ConeGeometry(0.65, 1.2, 4);
    const coneMat = new THREE.MeshStandardMaterial({
      color: 0xfd79a8,
      roughness: 0.3,
    });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.set(0.7, -1.4, -0.6);
    coneMesh.rotation.x = Math.PI / 6;
    coneMesh.castShadow = true;
    group.add(coneMesh);

    // 5. Floating White Secondary Box (ORACLE / SAP)
    const smallBoxGeo = new THREE.BoxGeometry(1.3, 0.75, 0.75);
    const smallBoxMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
    });
    const smallBox = new THREE.Mesh(smallBoxGeo, smallBoxMat);
    smallBox.position.set(-1.4, 1.3, -0.9);
    smallBox.castShadow = true;
    group.add(smallBox);

    // 6. Floating 3D Spark Particles
    const sparkCount = 120;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount * 3; i += 3) {
      sparkPositions[i] = (Math.random() - 0.5) * 8;
      sparkPositions[i + 1] = (Math.random() - 0.5) * 8;
      sparkPositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0xd1ffca,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparkPoints);

    // Mouse Parallax Physics
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 1.4;
      targetRotX = ny * 0.9;
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

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Damped rotation interpolation
      group.rotation.y += (targetRotY + elapsedTime * 0.15 - group.rotation.y) * 0.06;
      group.rotation.x += (targetRotX + Math.sin(elapsedTime * 0.4) * 0.08 - group.rotation.x) * 0.06;

      // Floating object animations
      sphereMesh.position.y = -0.7 + Math.sin(elapsedTime * 2.2) * 0.1;
      cylMesh.rotation.y = elapsedTime * 0.9;
      smallBox.rotation.x = Math.sin(elapsedTime * 1.5) * 0.2;
      sparkPoints.rotation.y = elapsedTime * 0.05;

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
    <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] flex items-center justify-center pointer-events-auto">
      <div ref={containerRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
