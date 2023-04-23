/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		container: {
			center: true,
			padding: "20px",
		},
		extend: {
			fontFamily: {
				overlock: "Overlock",
			},
			colors: {
				primary: "#0ea5e9",
				secondary: "#64748b",
				dark: "#0f172a",
			},
			screens: {
				"2xl": "1320px",
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
				hi: "keyHi 1s ease-in-out infinite",
			},
			keyframes: {
				keyHi: {
					"0%, 100%": {
						transform: "rotate(-15deg)",
					},
					"50%": {
						transform: "rotate(1deg)",
					},
				},
			},
		},
	},
	plugins: [],
};
