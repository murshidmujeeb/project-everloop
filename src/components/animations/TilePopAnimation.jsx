import { useEffect, useMemo, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const FPS = 30;

function frameSrc(basePath, frame) {
  const padded = String(frame).padStart(3, '0');
  // Support base paths with spaces (served by Vite as URL-encoded).
  const safeBase = basePath.split('/').map(encodeURIComponent).join('/');
  return `${safeBase}/ezgif-frame-${padded}.png`;
}

export default function TilePopAnimation({
  basePath = '/tile-animation-png',
  fps = FPS,
  totalFrames = TOTAL_FRAMES,
  maxDpr = 2,
  className = '',
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const frameRef = useRef(1);
  const imagesRef = useRef([]);
  const loadedRef = useRef(new Array(totalFrames).fill(false));
  const resizeObserverRef = useRef(null);
  const [ready, setReady] = useState(false);

  const sources = useMemo(() => {
    const arr = new Array(totalFrames);
    for (let i = 0; i < totalFrames; i++) arr[i] = frameSrc(basePath, i + 1);
    return arr;
  }, [basePath, totalFrames]);

  useEffect(() => {
    imagesRef.current = new Array(totalFrames);
    loadedRef.current = new Array(totalFrames).fill(false);
    setReady(false);

    let cancelled = false;

    const startIdx = 0;
    const first = new Image();
    first.decoding = 'async';
    first.src = sources[startIdx];
    first.onload = () => {
      if (cancelled) return;
      imagesRef.current[startIdx] = first;
      loadedRef.current[startIdx] = true;
      setReady(true);

      // Preload the rest in the background.
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        img.decoding = 'async';
        img.src = sources[i];
        img.onload = () => {
          loadedRef.current[i] = true;
        };
        imagesRef.current[i] = img;
      }
    };

    return () => {
      cancelled = true;
    };
  }, [sources, totalFrames]);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const container = canvas.parentElement;
    const interval = 1000 / fps;

    const draw = () => {
      const img = imagesRef.current[frameRef.current - 1];
      if (!img || !img.naturalWidth || !img.naturalHeight) return;

      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const containerW = container?.clientWidth || img.naturalWidth;
      const containerH = container?.clientHeight || img.naturalHeight;

      // Fit within the container while preserving aspect.
      const scale = Math.min(containerW / img.naturalWidth, containerH / img.naturalHeight);
      const drawW = Math.max(1, Math.floor(img.naturalWidth * scale));
      const drawH = Math.max(1, Math.floor(img.naturalHeight * scale));

      const targetW = Math.max(1, Math.floor(containerW * dpr));
      const targetH = Math.max(1, Math.floor(containerH * dpr));

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvas.style.width = `${containerW}px`;
        canvas.style.height = `${containerH}px`;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, containerW, containerH);

      const x = Math.floor((containerW - drawW) / 2);
      const y = Math.floor((containerH - drawH) / 2);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, x, y, drawW, drawH);
    };

    const tick = (ts) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const elapsed = ts - lastTimeRef.current;

      if (elapsed >= interval) {
        const next = frameRef.current >= totalFrames ? 1 : frameRef.current + 1;
        frameRef.current = next;
        lastTimeRef.current = ts - (elapsed % interval);
      }

      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleResize = () => draw();
    if (container && 'ResizeObserver' in window) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener('resize', handleResize);
    }

    draw();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener('resize', handleResize);
      lastTimeRef.current = null;
    };
  }, [fps, ready, totalFrames]);

  return (
    <div className={`tile-pop-wrapper ${className}`.trim()}>
      <canvas ref={canvasRef} className="tile-pop-frame" aria-label="Tile anatomy animation" role="img" />
    </div>
  );
}
