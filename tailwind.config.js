/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mtscript: ["Matura MT Script Capitals", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      langar: ["Langar", "sans-serif"],
    },
    colors: {
      "bg-1": "#F7F5F4",
      "bg-2": "#FFFFFF",
      "bg-3": "#E1CA96",
      "bg-btn": "#DF976E",
      black: "black",
      gray: "#B2BEB5",
      "review-colo": "#88030C",
      // gray: { #F7F5F4 }
      // background: #FFFFFF;
      // background: #E1CA96;
      // #F7F5F4
      // btn-color :#DF976E
    },
  },
  plugins: [],
};
