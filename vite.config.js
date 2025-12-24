import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],

          motion: ["motion/react"],

          "swiper-vendor": ["swiper", "swiper/react"],

          data: ["./src/data/project", "./src/data/studio"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "swiper", "motion/react"],
  },
});
