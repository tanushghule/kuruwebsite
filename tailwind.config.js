import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        flame: {
          DEFAULT: "var(--color-primary-flame)",
          burnt: "var(--color-burnt-orange)",
          persimmon: "var(--color-persimmon)",
          copper: "var(--color-copper)",
          brick: "var(--color-brick-red)",
          amber: "var(--color-amber-glow)",
          dark: "var(--color-accent-dark-orange)",
          yellow: "var(--color-accent-yellow)",
        },
      },
      fontFamily: {
        horizon: ["var(--font-header-horizon)"],
        header: ["var(--font-header-spartan)"],
        body: ["var(--font-body-dm-sans)"],
        handwriting: ["'Caveat'", "cursive"],
        pixel: ["'Silkscreen'", "monospace"],
      },
    },
  },
  plugins: [containerQueries],
};
