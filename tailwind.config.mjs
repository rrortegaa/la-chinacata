/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'home-hero': 'url("/src/assets/home/hero/appetizers.jpeg")',
        'about-hero': 'url("/src/assets/about/la-chinacata.png")',
        'gallery-hero': 'url("/src/assets/gallery/corporate-buffet.jpeg")',
        'contact-hero': 'url("/src/assets/gallery/chinacata-cooking.jpeg")',
      },
      colors: {
        'french-rose-50': '#FEF2F5',
        'french-rose-300': '#F9A8BF',
        'french-rose-400': '#F35E8C', // rose primary
        'french-rose-500': '#EC477E',
        'french-rose-900': '#83184B',
        'french-rose-950': '#490825',
        'green-leaf-50': '#F9FFE2',
        'green-leaf-100': '#F1FFC0',
        'green-leaf-500': '#90F500',
        'green-leaf-800': '#417100',
        'green-leaf-900': '#386106', // green primary
        'green-leaf-950': '#1B3700',
        'shark-950': '#262626', // black primary
        'vista-white': '#FFFBFB', // white background
      },
      fontFamily: {
        serif: ['Kurale', ...defaultTheme.fontFamily.serif],
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'hero-sm': ['3.5rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.005em',
        }],
        'hero-md': ['4.5rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.005em',
        }],
        'hero-lg': ['6rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.005em',
        }],
        'heading-sm': ['3rem', {
          lineHeight: '0.95',
          letterSpacing: '-0.01em',
        }],
        'heading-lg': ['5rem', {
          lineHeight: '0.95',
          letterSpacing: '-0.01em',
        }],
      }
    },
	},
	plugins: [],
}
