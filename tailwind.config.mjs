import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["WorkSans", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        title: ["BoldGroove", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        primary: '#FFA89A',
        secondary: '#ABE5BC',
        accent: {
          yellow: '#FFD787',
          violet: '#CFADE8',
          orange: '#FFA776',
        },
        neutral: {
          white: '#FFFAF0',
          gray: '#505050',
          black: '#1E1E1E',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
