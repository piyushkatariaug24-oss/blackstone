'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

export function useTilt(maxDeg = 7) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxDeg;
    const rotateY = ((x - centerX) / centerX) * maxDeg;
    setStyle({ transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)` });
  }, [maxDeg, prefersReduced]);

  const handleLeave = useCallback(() => {
    setStyle({ transform: 'perspective(800px) rotateX(0) rotateY(0) scale(1)', transition: 'transform 0.4s ease' });
    setTimeout(() => setStyle((s) => ({ ...s, transition: undefined })), 400);
  }, []);

  return { ref, style, onMouseMove: handleMove, onMouseLeave: handleLeave };
}