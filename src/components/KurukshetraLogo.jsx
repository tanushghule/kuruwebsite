import React from 'react';
import { cn } from '../utils/cn';

/**
 * Official FLAME Kurukshetra 2027 Logo Component
 * Renders the official `kurukshetralogo_official.png` asset from the workspace root.
 */
export default function KurukshetraLogo({ className = 'h-11 w-11' }) {
  return (
    <img
      src="/kurukshetralogo_official.png"
      alt="FLAME Kurukshetra Official Logo"
      className={cn('object-contain select-none shrink-0', className)}
    />
  );
}
