import twTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "mdx-components.tsx"],
  theme: {
    extend: {},
  },
  plugins: [twTypography],
};
export default config;
