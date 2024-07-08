/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: {
        'home-hero': 'url("/src/assets/appetizers-copy.jpeg")',
      },
      colors: {
        'french-rose-50': '#FEF2F5',
        'french-rose-100': '#FEE5EB',
        'french-rose-200': '#FCCFDC',
        'french-rose-300': '#F9A8BF',
        'french-rose-400': '#F35E8C',
        'french-rose-500': '#EC477E',
        'french-rose-600': '#D8266A',
        'french-rose-700': '#B61A5A',
        'french-rose-800': '#991851',
        'french-rose-900': '#83184B',
        'french-rose-950': '#490825',
        'lavender-blush': '#FEF2F5',
        'vista-white': '#FFFBFB',
        'carnation-50': '#FFF1F2',
        'carnation-100': '#FFE1E3',
        'carnation-200': '#FFC7CB',
        'carnation-300': '#FFA0A7',
        'carnation-400': '#FF5865',
        'carnation-500': '#F83B4A',
        'carnation-600': '#E51D2D',
        'carnation-700': '#C11421',
        'carnation-800': '#A0141F',
        'carnation-900': '#841820',
        'carnation-950': '#48070C',
        'green-leaf-50': '#F9FFE2',
        'green-leaf-100': '#F1FFC0',
        'green-leaf-200': '#E1FF88',
        'green-leaf-300': '#C9FF44',
        'green-leaf-400': '#B0FF0D',
        'green-leaf-500': '#90F500',
        'green-leaf-600': '#6EC500',
        'green-leaf-700': '#529500',
        'green-leaf-800': '#417100',
        'green-leaf-900': '#386106',
        'green-leaf-950': '#1B3700',
        'shark-50': '#F6F6F6',
        'shark-100': '#E7E7E7',
        'shark-200': '#D1D1D1',
        'shark-300': '#B0B0B0',
        'shark-400': '#888888',
        'shark-500': '#6D6D6D',
        'shark-600': '#5D5D5D',
        'shark-700': '#4F4F4F',
        'shark-800': '#454545',
        'shark-900': '#3D3D3D',
        'shark-950': '#262626',

      },
      fontFamily: {
        serif: ['Kurale', ...defaultTheme.fontFamily.serif],
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-sm': ['3.25rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }],
        'hero-sm': ['3.75rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '400'
        }],
        'hero-md': ['4.5rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '400'
        }],
        'heading-lg': ['5.125rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }],
        'hero-lg': ['6rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '400'
        }],
      }
    },
	},
	plugins: [],
}
