/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        header: "clamp(1rem, 2vw, 1.8rem)",
        largeheader: "clamp(1rem, 5vw, 5rem) ",
        title: "clamp(1.5rem, 2vw, 2.2rem)",
        subtitle: "clamp(1rem, 2vw, 1.8rem)",
        p: "clamp(1rem, 2vw, 1.2rem)",
      },
    },
    screens: {
      xl: { max: "1379px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "400px" },
    },
  },
  plugins: [],
};
