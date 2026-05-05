/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nova: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#111111',
          800: '#161616',
          muted: '#a3a3a3',
          gold: '#c9a227',
          'gold-bright': '#e8c547',
          'gold-dim': '#8b6914',
          'gold-pale': '#f5e6b3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, #050505 100%), linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,162,39,0.25), transparent), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(201,162,39,0.12), transparent)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201, 162, 39, 0.25), 0 20px 50px -20px rgba(201, 162, 39, 0.35)',
        'gold-sm': '0 0 20px rgba(201, 162, 39, 0.15)',
      },
    },
  },
  plugins: [],
}
