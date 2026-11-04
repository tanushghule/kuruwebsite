import React from 'react';

/**
 * Official FLAME Kurukshetra 2027 Circular Primary Logo Emblem
 * Recreated as a high-precision vector SVG from Page 2 of the Brand Guidelines PDF:
 * - Solid black circular badge
 * - Iconic triple-tongue orange flame (#FE5A00 / #F26D26)
 * - Twin white architectural peaks (FLAME Lavale Pavilion motif)
 * - "FLAME" & Devanagari-bar "kurukshetra" wordmark inside the emblem
 */
export default function KurukshetraLogo({ className = 'h-11 w-11' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="FLAME Kurukshetra 2027 Official Logo"
    >
      <defs>
        <linearGradient id="kuruFlameGrad" x1="60" y1="10" x2="60" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF7A1A" />
          <stop offset="55%" stopColor="#FE5A00" />
          <stop offset="100%" stopColor="#D84629" />
        </linearGradient>
      </defs>

      {/* Outer Black Circle with subtle warm rim */}
      <circle cx="60" cy="60" r="58" fill="#050507" stroke="#FE5A00" strokeWidth="2.2" strokeOpacity="0.65" />
      <circle cx="60" cy="60" r="54" fill="#000000" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />

      {/* Center Flame Tongue (Tallest) */}
      <path
        d="M60 13C60 13 50.5 24.5 52.5 35.5C53.8 42.5 58.5 46.5 60 50C61.5 46.5 66.2 42.5 67.5 35.5C69.5 24.5 60 13 60 13Z"
        fill="url(#kuruFlameGrad)"
      />
      {/* Left Flame Wing */}
      <path
        d="M47.5 25.5C47.5 25.5 42.5 33.5 45.5 41.5C47.5 46.8 53 49.5 56.5 51.5C53.5 47 51 41.5 51.5 35.5C51.8 31.2 47.5 25.5 47.5 25.5Z"
        fill="#FE5A00"
      />
      {/* Right Flame Wing */}
      <path
        d="M72.5 25.5C72.5 25.5 77.5 33.5 74.5 41.5C72.5 46.8 67 49.5 63.5 51.5C66.5 47 69 41.5 68.5 35.5C68.2 31.2 72.5 25.5 72.5 25.5Z"
        fill="#F26D26"
      />

      {/* Twin White Architectural Peaks (From Brand Guidelines Page 2) */}
      <path
        d="M20 66L43 47L60 60.5L77 47L100 66L84 66L75.5 57.5L60 68.5L44.5 57.5L36 66H20Z"
        fill="#FFFFFF"
      />

      {/* "FLAME" Serif-Inspired Tracked Subhead */}
      <text
        x="60"
        y="79.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="8.8"
        letterSpacing="3.2"
      >
        FLAME
      </text>

      {/* Devanagari Shirorekha (Top Horizontal Bar) for "kurukshetra" */}
      <line x1="23" y1="85.5" x2="97" y2="85.5" stroke="#FE5A00" strokeWidth="1.8" strokeLinecap="round" />

      {/* "kurukshetra" Stylized Wordmark inside Circle */}
      <text
        x="60"
        y="96.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="10.2"
        letterSpacing="0.6"
      >
        kurukshetra
      </text>

      {/* Bottom 2027 Pill Dot Accent */}
      <text
        x="60"
        y="107"
        textAnchor="middle"
        fill="#FE5A00"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="6.5"
        letterSpacing="1.8"
      >
        2027
      </text>
    </svg>
  );
}
