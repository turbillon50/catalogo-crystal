import type { Config } from "tailwindcss";

// El look del kit Crystal (cr-*) vive en app/crystal-ui.css, fuera de Tailwind.
// Este config solo cubre el layout de la pagina showcase (grids, spacing).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

export default config;
