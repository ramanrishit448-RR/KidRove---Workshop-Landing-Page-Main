import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;

    const app = new Application(canvas);
    appRef.current = app;

    app
      .load(scene)
      .then(() => {
        if (!disposed) setLoading(false);
      })
      .catch((err: unknown) => {
        console.error('[SplineScene] Failed to load scene:', err);
        if (!disposed) {
          setLoading(false);
          setError(true);
        }
      });

    return () => {
      disposed = true;
      try {
        appRef.current?.dispose();
      } catch (_) {
        /* ignore */
      }
      appRef.current = null;
    };
  }, [scene]);

  return (
    <div className={`relative w-full h-full ${className ?? ''}`}>
      {/* Loading spinner */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-400 animate-spin" />
            <span className="text-purple-300 text-xs font-medium tracking-wider">Loading 3D scene…</span>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
          <p className="text-white/50 text-sm">Could not load 3D scene</p>
        </div>
      )}

      {/* The canvas Spline renders into */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
