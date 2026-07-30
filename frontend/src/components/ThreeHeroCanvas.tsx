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
    camera.position.set(0, 1.5, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xd1ffca, 1.0);
    fillLight.position.set(-5, -2, -2);
    scene.add(fillLight);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Helper: Create procedural Canvas Texture for Brand Badge Label
    const createBadgeTexture = (text: string, bgColor: string, textColor: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = textColor;
        ctx.font = 'bold 44px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 128);
      }
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // Main Textured Cube (Concrete / Carbon Black feel)
    const cubeGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f29,
      roughness: 0.3,
      metalness: 0.2,
    });
    const mainCube = new THREE.Mesh(cubeGeo, cubeMat);
    mainCube.castShadow = true;
    mainCube.receiveShadow = true;
    group.add(mainCube);

    // Brand Label Front Badge
    const badgeMat = new THREE.MeshStandardMaterial({
      map: createBadgeTexture('DAYOS AI', '#d1ffca', '#000000'),
      roughness: 0.2,
    });
    const badgeGeo = new THREE.PlaneGeometry(1.6, 0.8);
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
    badgeMesh.position.set(0, 0, 1.11);
    mainCube.add(badgeMesh);

    // Protruding Geometric Shape 1: Mint Chip Cylinder
    const cylGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32);
    const cylMat = new THREE.MeshStandardMaterial({
      color: 0xd1ffca,
      roughness: 0.2,
    });
    const cylMesh = new THREE.Mesh(cylGeo, cylMat);
    cylMesh.position.set(1.4, 0.8, 0.4);
    cylMesh.rotation.z = Math.PI / 4;
    cylMesh.castShadow = true;
    group.add(cylMesh);

    // Protruding Geometric Shape 2: Voltage Yellow Sphere
    const sphereGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xfff100,
      roughness: 0.1,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(-1.3, -0.6, 0.6);
    sphereMesh.castShadow = true;
    group.add(sphereMesh);

    // Protruding Geometric Shape 3: Pink Accent Pyramid
    const coneGeo = new THREE.ConeGeometry(0.6, 1.1, 4);
    const coneMat = new THREE.MeshStandardMaterial({
      color: 0xfd79a8,
      roughness: 0.3,
    });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.set(0.6, -1.2, -0.5);
    coneMesh.rotation.x = Math.PI / 6;
    coneMesh.castShadow = true;
    group.add(coneMesh);

    // Secondary Small Floating Badge Box (SAP / ORACLE)
    const smallBoxGeo = new THREE.BoxGeometry(1.2, 0.7, 0.7);
    const smallBoxMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
    });
    const smallBox = new THREE.Mesh(smallBoxGeo, smallBoxMat);
    smallBox.position.set(-1.2, 1.2, -0.8);
    smallBox.castShadow = true;
    group.add(smallBox);

    // Mouse Tracking Physics
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
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

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Damped rotation interpolation
      group.rotation.y += (targetRotY + elapsedTime * 0.2 - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotX + Math.sin(elapsedTime * 0.5) * 0.1 - group.rotation.x) * 0.05;

      // Subtle float animation
      sphereMesh.position.y = -0.6 + Math.sin(elapsedTime * 2) * 0.08;
      cylMesh.rotation.y = elapsedTime * 0.8;

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
    <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center pointer-events-auto">
      <div ref={containerRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
}
