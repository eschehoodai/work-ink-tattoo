/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#000000',
          base: '#0a0a0a',
          layer1: '#131313',
          card: '#1b1b1b',
          border: '#2a2a2a',
          hover: '#353535',
        },
        brand: {
          black: '#000000',
          dark: '#131313',
          card: '#1b1b1b',
          border: 'rgba(255, 255, 255, 0.12)',
          gray: '#8e9192',
          light: '#e2e2e2',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.15em',
        mega: '0.25em',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      }
    },
  },
  plugins: [],
}
