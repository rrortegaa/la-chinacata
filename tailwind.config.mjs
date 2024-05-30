/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
    },
	},
	plugins: [],
}
