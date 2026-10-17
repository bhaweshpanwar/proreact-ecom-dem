/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#0E1218',
          900: '#151B24',
          800: '#1E2633',
          600: '#3A4658',
          bg: '#010207',
          violet: '#150727',
          plum: '#2d0b4e',
        },
        muted: '#647285',
        paper: '#F5F3EE',
        mist: '#EDF0F3',
        stone: '#E9E6DF',
        frost: '#E4EAF0',
        ember: '#E4572E',
        sand: '#E2DDD5',
        steel: '#5B7C99',
        'clay-rose': '#B8737A',
        pillar: {
          marketing: '#D9593A',
          marketplaces: '#B7A27D',
          websites: '#5B7C99',
          creative: '#B8737A',
          sand: '#E2DDD5'
        }
      },
      fontFamily: {
        serif: ['"Cormorant"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      borderRadius: {
        'container': '28px',
        'card': '24px'
      }
    },
  },
  plugins: [],
}
