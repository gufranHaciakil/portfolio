/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 0.5s ease",
      },

      keyframes: {
        rotate: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
