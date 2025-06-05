/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				visible: {
					'0%': { opacity: '0' },
					'100%': { opacity: '100' },
				},
			},
			animation: {
				visible: 'visible 0.3s  ',
			},
		},
	},
	plugins: [],
}
