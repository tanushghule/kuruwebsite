import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

const ViewportContext = createContext({
  width: 390,
  breakpoint: 'mobile', // 'xs' | 'mobile' | 'tablet' | 'desktop'
});

export function useDynamicViewport() {
  return useContext(ViewportContext);
}

/**
 * DynamicScreenContainer
 * Uses a live ResizeObserver to measure the exact container width on any device
 * (iPhone SE 320px, iPhone 15 393px, iPhone Pro Max 430px, iPad, Desktop)
 * and enforces a strict zero-horizontal-overflow box so the user NEVER has to
 * scroll left or right with their thumb.
 */
export function DynamicScreenContainer({
  children,
  className,
  as: Component = 'div',
}) {
  const containerRef = useRef(null);
  const [metrics, setMetrics] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 390,
    breakpoint: 'mobile',
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = (w) => {
      const bp =
        w < 360
          ? 'xs'
          : w < 640
          ? 'mobile'
          : w < 1024
          ? 'tablet'
          : 'desktop';
      setMetrics({ width: Math.round(w), breakpoint: bp });
    };

    updateSize(el.getBoundingClientRect().width || window.innerWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect?.width || el.clientWidth;
        if (w > 0) updateSize(w);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ViewportContext.Provider value={metrics}>
      <Component
        ref={containerRef}
        data-viewport={metrics.breakpoint}
        style={{ '--dynamic-w': `${metrics.width}px` }}
        className={cn(
          '@container w-full max-w-full min-w-0 overflow-x-clip box-border mx-auto px-3 sm:px-6 lg:px-8',
          className
        )}
      >
        {children}
      </Component>
    </ViewportContext.Provider>
  );
}

/**
 * DynamicAutoGrid
 * Automatically fits cards into the exact number of columns that fit on screen
 * using `repeat(auto-fit, minmax(min(100%, minColWidth), 1fr))`.
 * Never overflows horizontally on any screen width.
 */
export function DynamicAutoGrid({
  children,
  minColWidth = '280px',
  className,
}) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minColWidth}), 1fr))`,
      }}
      className={cn('grid w-full max-w-full min-w-0 gap-3 sm:gap-5', className)}
    >
      {children}
    </div>
  );
}

/**
 * DynamicPillGrid
 * Fits all filter buttons / tabs inside the container using a responsive grid
 * or wrapped flex layout so the user NEVER has to scroll left or right.
 */
export function DynamicPillGrid({
  children,
  minPillWidth = '105px',
  className,
}) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minPillWidth}), 1fr))`,
      }}
      className={cn('grid w-full max-w-full min-w-0 gap-1.5 sm:gap-2', className)}
    >
      {children}
    </div>
  );
}
