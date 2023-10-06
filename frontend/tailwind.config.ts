import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1440px" },

    backgroundColor: {
      white: "#ffffff",
      blue: "#BAE2FF",
      green: "#B9FFDD",
      yellow: "#FFE8AC",
      orange: "#FFCAB9",
      red: "#F99494",
      lightBlue: "#9DD6FF",
      purple: "#ECA1FF",
      lightGreen: "#DAFF8B",
      lightRed: "#FFA285",
      gray: "#CDCDCD",
      darkGray: "#979797",
      brown: "#A99A7C",
    },

    textColor: {
      black: "black",
      white: "white",
    },

    extend: {},
  },
  plugins: [],
};
export default config;
