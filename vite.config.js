import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://mak16.github.io/LYMM/",
  plugins: [react()],
});
