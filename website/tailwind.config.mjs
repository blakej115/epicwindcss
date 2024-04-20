/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
      },
    },
  },
  plugins: [
    require("../src")({
      styles: {
        components: {
          ".logo": {
            display: "inline-flex",
          },
        },
      },
    }),
  ],
};

// text-2xl font-semibold