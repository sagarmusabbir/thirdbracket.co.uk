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
      colors: {
        accent: {
          "50": "#fff1f3",
          "100": "#ffe4e8",
          "200": "#fecdd6",
          "300": "#fea3b4",
          "400": "#fc708d",
          "500": "#f63d69",
          "600": "#e31b54",
          "700": "#d0124d",
          "800": "#a01141",
          "900": "#89123f",
          "950": "#4d041e",
        },
        primary: {
          "50": "#f7f7f7",
          "100": "#e6e6e6",
          "200": "#dbdbdb",
          "300": "#b2b2b2",
          "400": "#a1a1a1",
          "500": "#828282",
          "600": "#707070",
          "700": "#4a4a4a",
          "800": "#383838",
          "900": "#1a1a1a",
          "950": "#111111",
        },
      },
    },
  },
  plugins: [bracketuiPlugin],
};
export default config;
