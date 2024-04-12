/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: {
          50: "rgba(255,255,255,0.3)",
        },
      },
      width: {
        myW: "343px",
      },
    },
  },
  plugins: [],
};
