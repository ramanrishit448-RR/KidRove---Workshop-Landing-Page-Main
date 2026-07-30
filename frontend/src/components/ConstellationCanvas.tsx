import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  angle: number;
  rotationSpeed: number;
  alpha: number;
}

export default function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Color palette according to Dala spec
    const colors = [
      '#8052ff', // Electric Iris (Violet)
      '#8052ff', // Electric Iris (Weighted dominant)
      '#ffb829', // Saffron Spark (Amber)
      '#15846e', // Deep Verdant (Teal)
      '#e056fd', // Magenta
      '#48dbfb', // Cyan / Light Blue
      '#ffffff', // Bone White
    ];

    const particleCount = 1400;
    const particles: Particle[] = [];

    // Generate 3D organic brain points
    for (let i = 0; i < particleCount; i++) {
      const isBrainstem = Math.random() < 0.12;
      const isLeftHemisphere = Math.random() < 0.44;
      let bx: number, by: number, bz: number;

      if (isBrainstem) {
        const t = Math.random();
        bx = (Math.random() - 0.5) * 40 * (1 - t * 0.5);
        by = 80 + t * 110;
        bz = (Math.random() - 0.5) * 40 * (1 - t * 0.5);
      } else {
        const u = Math.random() * Math.PI;
        const v = Math.random() * 2 * Math.PI;
        
        const rx = 140;
        const ry = 105;
        const rz = 120;

        bx = rx * Math.sin(u) * Math.cos(v);
        by = ry * Math.cos(u) - 20;
        bz = rz * Math.sin(u) * Math.sin(v);

        const gap = 14;
        if (isLeftHemisphere) {
          bx = -Math.abs(bx) - gap;
        } else {
          bx = Math.abs(bx) + gap;
        }

        const foldNoise = Math.sin(bx * 0.08) * Math.cos(by * 0.08) * Math.sin(bz * 0.08) * 22;
        bx += foldNoise * Math.sin(u);
        by += foldNoise * Math.cos(u);
        bz += foldNoise;
      }

      particles.push({
        x: bx,
        y: by,
        z: bz,
        baseX: bx,
        baseY: by,
        baseZ: bz,
        size: Math.random() * 2.8 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.8;
      targetRotX = -ny * 0.6;
      mouseX = (e.clientX - rect.left - rect.width / 2);
      mouseY = (e.clientY - rect.top - rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;

      currentRotY += (targetRotY + Math.sin(time * 0.5) * 0.15 - currentRotY) * 0.05;
      currentRotX += (targetRotX + Math.cos(time * 0.4) * 0.1 - currentRotX) * 0.05;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 450;

      const projectedCoords: { x: number; y: number; z: number; color: string }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const wave = Math.sin(time * 2 + p.baseY * 0.05) * 3;
        let px = p.baseX + wave * 0.5;
        let py = p.baseY + wave;
        let pz = p.baseZ;

        let x1 = px * cosY - pz * sinY;
        let z1 = px * sinY + pz * cosY;

        let y1 = py * cosX - z1 * sinX;
        let z2 = py * sinX + z1 * cosX;

        const dx = (x1 - mouseX);
        const dy = (y1 - mouseY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const factor = (120 - dist) / 120;
          x1 += (dx / dist) * factor * 18;
          y1 += (dy / dist) * factor * 18;
        }

        const scale = fov / (fov + z2 + 200);
        const projX = centerX + x1 * scale;
        const projY = centerY + y1 * scale;

        projectedCoords.push({ x: projX, y: projY, z: z2, color: p.color });

        p.angle += p.rotationSpeed;
        const r = p.size * scale * 1.3;

        ctx.save();
        ctx.translate(projX, projY);
        ctx.rotate(p.angle);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = Math.max(0.15, Math.min(1, scale * p.alpha));

        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(r * 0.866, r * 0.5);
        ctx.lineTo(-r * 0.866, r * 0.5);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedCoords.length; i += 16) {
        for (let j = i + 1; j < projectedCoords.length; j += 16) {
          const p1 = projectedCoords[i];
          const p2 = projectedCoords[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 45) {
            ctx.strokeStyle = '#8052ff';
            ctx.globalAlpha = (1 - d / 45) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center pointer-events-auto overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
    </div>
  );
}
