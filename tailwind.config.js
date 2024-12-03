/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'cyber-glitch': 'cyber-glitch 1s steps(2, end) infinite',
        'text-shimmer': 'text-shimmer 3s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'brightness(100%) blur(4px)' },
          '50%': { filter: 'brightness(150%) blur(8px)' },
        },
        'cyber-glitch': {
          '0%': { clipPath: 'inset(50% 0 30% 0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)' },
          '40%': { clipPath: 'inset(40% 0 40% 0)' },
          '60%': { clipPath: 'inset(80% 0 5% 0)' },
          '80%': { clipPath: 'inset(10% 0 85% 0)' },
          '100%': { clipPath: 'inset(40% 0 50% 0)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};