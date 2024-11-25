import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".d-flex": { display: "flex" },
        ".d-inline-flex": { display: "inline-flex" },
        ".d-block": { display: "block" },
        ".d-inline-block": { display: "inline-block" },
        ".d-none": { display: "none" },
        ".flex-column": { flexDirection: "column" },
        ".flex-row": { flexDirection: "row" },
        ".justify-center": { justifyContent: "center" },
        ".align-center": { alignItems: "center" },
        ".align-start": { alignItems: "flex-start" },
        ".align-end": { alignItems: "flex-end" },
        ".justify-between": { justifyContent: "space-between" },
        ".justify-around": { justifyContent: "space-around" },
        ".justify-evenly": { justifyContent: "space-evenly" },
      });
    }),
  ],
};

export default config;
