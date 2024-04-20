/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
      },
      colors: {
        primary: "#F83838",
        secondary: "#930505",
      },
    },
    epic: (theme) => ({
      components: {
        ".logo": {
          fontSize: theme("fontSize.2xl[0]"),
          lineHeight: theme("fontSize.2xl[1].lineHeight"),
          fontWeight: theme("fontWeight.semibold"),
        },
        ".content": {
          "h1, h2, h3, h4, h5, h6": {
            fontWeight: theme("fontWeight.semibold"),
          },
        },
      },
    }),
  },
  plugins: [require("../src")({})],
};
