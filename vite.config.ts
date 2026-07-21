import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Relative asset URLs keep the static build portable across root domains,
  // preview deployments, and repository subpaths such as GitHub Pages.
  base: "./",
  plugins: [react()],
  server: {
    port: 6767,
    strictPort: true,
  },
});
