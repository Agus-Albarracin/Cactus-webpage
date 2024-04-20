import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        primaryDark: "#9B9B9B",
        secondary: "#C9F3AE",
      },
      backgroundImage: {
        radialBlack:"linear-gradient(225.95deg, rgba(0, 0, 0, 0) 0%, #6d6d6d 0%, #0000 91.61%)",
        limeRadial:
          "linear-gradient(90deg, #36B200 0%, #C9F3AE)",
        limeLight:
          "linear-gradient(90deg, #B25C00 0%, #FFA341)",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
