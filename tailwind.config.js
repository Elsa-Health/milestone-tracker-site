module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media", // 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"accent-1": "#333",
				"elsa-blue": "#4665AF",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms')],
};
