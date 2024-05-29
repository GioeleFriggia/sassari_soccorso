import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (warning.code === "UNRESOLVED_IMPORT") {
          console.error("Unresolved import:", warning.source);
        }
        warn(warning);
      },
    },
  },
});
