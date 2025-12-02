/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4CF57',
          dark: '#B48F17',
        },
        nile: {
          DEFAULT: '#1E40AF',
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        sand: {
          DEFAULT: '#E8D5B7',
          light: '#F5E6D3',
          dark: '#D8C5A7',
        },
        papyrus: {
          DEFAULT: '#F9F7F2',
          dark: '#EFEBDD',
        },
        emerald: {
          DEFAULT: '#10B981', // Sustainable green
          dark: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'],
        heading: ['Cinzel', 'Cairo', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
