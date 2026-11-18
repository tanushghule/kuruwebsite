import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [waves, setWaves] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only activate on fine-pointer desktop devices
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target;
      const interactive =
        target &&
        target.closest &&
        target.closest('a, button, input, select, textarea, [role="button"]');
      setIsHovering(Boolean(interactive));
    };

    const onMouseDown = (e) => {
      const id = Date.now() + Math.random();
      setWaves((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setWaves((prev) => prev.filter((w) => w.id !== id));
      }, 650);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Smooth trailing circle */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-[#FE5A00]/80 transition-[width,height,opacity,background-color] duration-200 ease-out will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering
            ? 'w-9 h-9 bg-[#FE5A00]/15 border-[#FE5A00]'
            : 'w-6 h-6 bg-[#FE5A00]/[0.06]'
        }`}
      />
      {/* Crisp center point */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FE5A00] shadow-[0_0_8px_#FE5A00] transition-opacity duration-150 will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Expanding wave ripples on click */}
      {waves.map((w) => (
        <span
          key={w.id}
          style={{ left: w.x, top: w.y }}
          className="fixed -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-[#FE5A00] animate-[cursorWave_0.65s_ cubic-bezier(0.16,1,0.3,1)_forwards]"
        />
      ))}
      <style>{`
        @keyframes cursorWave {
          0% {
            width: 10px;
            height: 10px;
            opacity: 0.9;
            border-width: 2px;
          }
          100% {
            width: 64px;
            height: 64px;
            opacity: 0;
            border-width: 1px;
          }
        }
      `}</style>
    </div>
  );
}
