/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "380px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      DmSans: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: { blue: "#ff5733" },
      backgroundColor: {
        btnBg: "#262626",
      },
      textColor: {
        fontBlack: "#262626",
        whiteColor: "#ffffff",
      },
      borderRadius: {
        round: "2rem",
      },
      height: {
        view: "100vh",
      },
      borderColor: {
        border: "red",
        main: "#464646",
      },
    },
  },
  plugins: [require("daisyui")],
};
