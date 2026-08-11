/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F5A623',   // Primary Warm Gold / Amber (#F5A623)
          secondary: '#1A1D23', // Dark Charcoal Card Container (#1A1D23)
          tertiary: '#10B981',  // Emerald Green (#10B981)
          neutral: '#0F1115',   // Deep Canvas Background (#0F1115)
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          cardBorderActive: 'rgba(245, 166, 35, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
