import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"open-sans": "'Open Sans', sans-serif",
			},
			colors: {
				"primary-green": "#4eba7d",
				"primary-yellow": "#fec22f",
				"primary-dark": "#141416",
				"secondary-dark": "#333333",
				"tertiary-dark": "#090910",
				"dark-gray": "#3E3E3E",
				"semi-dark-gray": "#718096",
				"secondary-gray": "#929292",
				"primary-gray": "#F5F5F5",
				"light-gray": "#E2E8F0",
				white: "#FFFFFF",
				"primary-light": "#F3F5F6",
				"secondary-light": "#F9F9F9",
				"primary-orange": "#ff4d4d",
				"primary-red": "#D61C4E",
				"prussian-blue": "#007cf0",
				"blue-hue": "#01dfd8",
				"dark-purple": "#7d00d9",
				"dark-pink": "#ff0080",
				"rose-pink": "#e2008e",
				"semi-transparent": "rgba(0, 0, 0, 0.6)",
			},
		},
	},
	plugins: [],
};
export default config;
