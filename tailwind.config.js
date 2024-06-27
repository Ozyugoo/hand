/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        light: "#F5F4F6",
        customYellow: "#FDCA09",        
        gray: "#5A6675",
        darkBtn: "#0B0B0B",
        darkMeet: "#101010",
        brownish: "#FEF1E0",
        lightFoot: "#F5F5F5",
        copyRight: "#525D6A",
        iconBg: "#1E1E1E",
        figures: "#FEC00A",
        focus: "#C82090",
      },
    },
    plugins: [],
  },
};
