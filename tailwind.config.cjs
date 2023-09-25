/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"light-blue": "#7badee",
				"royal-blue": "#002658",
				"warm-blue": "#0056AA",
				"world-blue": "#0170bc"
			}
		},
		fontFamily: {
			"sans": "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif"
		}
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
