/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#2E5C6E', // Deep Slate Teal
          orange: '#E08A66', // Soft Coral
          purple: '#866690', // Muted Purple
          bg: '#F8FBFC', // Very light cool mist
          text: '#2D3748',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2E5C6E 0%, #866690 50%, #E08A66 100%)',
        'gradient-soft': 'linear-gradient(to right, #EEF2F6, #FDF2F0)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
      }
    }
  },
  plugins: [],
}