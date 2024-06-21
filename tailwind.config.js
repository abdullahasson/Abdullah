/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({

        "*": {
          "@apply box-border no-underline scroll-smooth m-0 p-0 border-[none] outline-none": {}
        },

        "html": {
          "@apply text-[62.5%]": {}
        },

        "body": {
          "@apply bg-[var(--bg-color)] text-[var(--text-color)]": {}
        },

        "section": {
          "@apply min-h-[100vh] pt-[10rem] px-[9%] pb-[5rem]": {},
        },

        ".btn": {
          "@apply inline-block text-[1.6rem] text-[color:var(--second-bg-color)] tracking-[0.1rem] font-semibold px-[2.8rem] py-4 rounded-[4rem] hover:shadow-none bg-[var(--main-color)]": {},
        },

        ".active": {
          "@apply bg-[#686c9e] rounded-[50px]": {}
        },

        "span": {
          "@apply text-[var(--main-color)]": {}
        }

      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
}

