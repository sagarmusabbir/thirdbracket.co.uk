import type { Config } from "tailwindcss";

const { bracketuiPlugin } = require("@thirdbracket/bracketui");
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-accent":

        //"gradient-accent":
        //"conic-gradient(at bottom right,  #f3d7e5, #f3f7fa, #f3d7e5 )",
        // "gradient-accent-dark":
        //"conic-gradient(at bottom right, #431423,  #292d3d, #6f2c42)",
        "gradient-accent":
          "conic-gradient(at bottom right,  #f3d7e5, #f3f7fa )",
        "gradient-accent-dark":
          "conic-gradient(at bottom right, #431423,  #292d3)",
        "gradient-primary-dark":
          "conic-gradient(at bottom left, #e8ecef, #f3f7fa, #f6fafb)",
        "gradient-primary":
          "conic-gradient(at bottom left, #101014, #292d3d, #353942)",
        "gradient-secondary-dark":
          "conic-gradient(at bottom left, #f6fafb, #f3f7fa, #e9eff6)",
        "gradient-secondary":
          // "conic-gradient(at bottom left, #212429, #292d3d, #464d69)",
          "conic-gradient(at_bottom_right,_var(--tw-gradient-stops)) ",
      },
      colors: {
        mix: "from-[#8697c4] via-[#fbf4f7] to-[#e9eff6]",
        accent: {
          "50": "#fbf4f7",
          "100": "#f8ebf1",
          "200": "#f3d7e5",
          "300": "#eab7cf",
          "400": "#dc8aae",
          "500": "#ce6691",
          "600": "#ba4872",
          "700": "#ac3b61",
          "800": "#84304b",
          "900": "#6f2c42",
          "950": "#431423",
        },

        secondary: {
          "50": "#f3f7fa",
          "100": "#e9eff6",
          "200": "#d7e2ee",
          "300": "#bfcee2",
          "400": "#a4b5d5",
          "500": "#8697c4",
          "600": "#7582b6",
          "700": "#636e9f",
          "800": "#525b81",
          "900": "#464d69",
          "950": "#292d3d",
        },

        primary: {
          "50": "#f6fafb",
          "100": "#e8ecef",
          "200": "#dee1e6",
          "300": "#cfd3dc",
          "400": "#aeb5bd",
          "500": "#8e96a3",
          "600": "#7d8493",
          "700": "#707685",
          "800": "#353942",
          "900": "#212429",
          "950": "#101014",
        },

        // accent: {
        //   "50": "#f4f7f9",
        //   "100": "#eceff3",
        //   "200": "#dce2e9",
        //   "300": "#c6cfdb",
        //   "400": "#aeb9cb",
        //   "500": "#939fb8",
        //   "600": "#828ca9",
        //   "700": "#6f7793",
        //   "800": "#5b6278",
        //   "900": "#4d5262",
        //   "950": "#2d3039",
        // },
        // accent: {
        //   "50": "#fff1f3",
        //   "100": "#ffe4e8",
        //   "200": "#fecdd6",
        //   "300": "#fea3b4",
        //   "400": "#fc708d",
        //   "500": "#f63d69",
        //   "600": "#e31b54",
        //   "700": "#d0124d",
        //   "800": "#a01141",
        //   "900": "#89123f",
        //   "950": "#4d041e",
        // },
        // primary: {
        //   "50": "#f7f7f7",
        //   "100": "#e6e6e6",
        //   "200": "#dbdbdb",
        //   "300": "#b2b2b2",
        //   "400": "#a1a1a1",
        //   "500": "#828282",
        //   "600": "#707070",
        //   "700": "#4a4a4a",
        //   "800": "#383838",
        //   "900": "#1a1a1a",
        //   "950": "#111111",
        // },
        // primary: {
        //   "50": "#f6f6f6",
        //   "100": "#e7e7e7",
        //   "200": "#d1d1d1",
        //   "300": "#b0b0b0",
        //   "400": "#888888",
        //   "500": "#6d6d6d",
        //   "600": "#5d5d5d",
        //   "700": "#4f4f4f",
        //   "800": "#454545",
        //   "900": "#383838",
        //   "950": "#262626",
        // },
      },
    },
  },
  plugins: [bracketuiPlugin],
};
export default config;
