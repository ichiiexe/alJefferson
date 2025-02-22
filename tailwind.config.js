/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // header: "clamp(1rem, 2vw, 1.8rem)",
        largeheader: "clamp(1rem, 5vw, 5rem) ",
        title: "clamp(1.5rem, 2vw, 2.2rem)",
        subtitle: "clamp(1rem, 2vw, 1.8rem)",
        p: "clamp(1rem,2vw,1.5rem)",
      },
    },
    screens: {
      fourk: { max: "1440px" },

      xl: { max: "1379px" },
      // => @media (max-width: 1279px) { ... }

      laptop: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      tablet: { max: "778px" },
      // => @media (max-width: 767px) { ... }

      mobilem: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      mobiles: { max: "400px" },
    },
  },
  plugins: [],
};
