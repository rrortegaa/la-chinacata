/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'french-rose': '#F35E8C',
        'lavender-blush': '#FEF2F5',
        'vista-white': '#FFFBFB',
        'carnation': '#FF5865',
        'green-leaf': '#417100',
        'shark': '#262626',

      },
      fontFamily: {
        serif: ['Kurale', ...defaultTheme.fontFamily.serif],
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
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
        'hero-lg': ['6rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '400'
        }],
        'heading-sm': ['3.25rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }],
        'heading-lg': ['5.125rem', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '400'
        }],
      }
    },
	},
	plugins: [],
}
