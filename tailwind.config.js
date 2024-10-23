/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        c1: '#050505',
        c2: '#0ef',
        c3: '#b1b1b1',
        c4: '#242424',
      },
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
          "@apply bg-[#050505] text-[var(--text-color)]": {}
        },

        "section": {
          "@apply min-h-[100vh] pt-[10rem] px-64 pb-[5rem]": {},
        },

        "hr": {
          "@apply w-[60%] ml-auto mr-auto my-0 bg-[#242424] border-none h-[2px]": {},
        },

        ".txt": {
          "@apply text-c3 text-center pt-11 text-5xl font-normal leading-[1.2]": {},
        },

        ".btn": {
          "@apply inline-block text-[1.6rem] text-[color:var(--second-bg-color)] tracking-[0.1rem] font-semibold px-[2.8rem] py-4 rounded-[4rem] hover:shadow-none bg-[var(--main-color)]": {},
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

