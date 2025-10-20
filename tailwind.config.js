/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
				inter: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
				montserrat: ['var(--font-montserrat)', 'system-ui', '-apple-system', 'sans-serif'],
			},
		},
	},
	plugins: [],
}


