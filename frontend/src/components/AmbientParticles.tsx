import { useEffect, useRef } from 'react';

interface AmbientParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  angle: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
}

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      '#8052ff', // Electric Iris
      '#ffb829', // Saffron Spark
      '#15846e', // Deep Verdant
      '#e056fd', // Magenta
      '#48dbfb', // Cyan
    ];

    const particleCount = 75;
    const particles: AmbientParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.35 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.rotationSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = p.opacity;

        const r = p.size;
        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(r * 0.866, r * 0.5);
        ctx.lineTo(-r * 0.866, r * 0.5);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
