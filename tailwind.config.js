/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#4A5D4E',
          deep: '#334537',
          light: '#6E8573',
          bg: '#EAF0EC',
        },
        champagne: {
          DEFAULT: '#DBCBB0',
          dark: '#695D47',
          gold: '#F5A623',
        },
        ivory: {
          DEFAULT: '#F9F7F2',
          light: '#FCF9F8',
          card: '#FFFFFF',
          border: '#E5E0D5',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          dark: '#1B1C1C',
          muted: '#636863',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Newsreader"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
