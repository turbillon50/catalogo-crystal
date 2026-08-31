import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        cx: "var(--cx-radius, 18px)",
        "cx-lg": "var(--cx-radius-lg, 28px)",
      },
    },
  },
  plugins: [],
};

export default config;
