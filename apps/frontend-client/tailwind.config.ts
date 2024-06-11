import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/ms-ui-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'background-image': "url('/images/homeImg.jpg')",
      },
      colors: {
        "purpleColor":"#6B4EFF",
        "silabColor":"#AAB9CA",
        "quartzColor":"#E4D9F2",
        "purple300":"#B77DEB",
        "purple900":"#6F5FC8"
      },
    },
  },
  plugins: [],
};
export default config;
