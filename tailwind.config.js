import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f08c00",
        primaryDarker: "#d77d00",
        secondary: "#009b9b",
        secondaryDarker: "#008c8c",
        complementary: "#ce1a1c",
        accent: "#E1F5F5",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [forms],
};
