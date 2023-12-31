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
      transparent: "transparent",
      "footer-bg": "#DCD1CD",
      "footer-bg-2": "#A182764F",
      "bg-grad": "#A0BFFA",
      "rent-color": "#051107",
      "home-text-color": "#FD7F3A",
      "counter-color": "#E1743E0A",
      // #FD7F3A

      // gray: { #F7F5F4 }
      // background: #FFFFFF;
      // background: #E1CA96;
      // #F7F5F4
      // btn-color :#DF976E
    },
  },
  plugins: [],
};
