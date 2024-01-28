/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "black",
				secondary: "pink",
			},
		},
	},
	plugins: [],
};
