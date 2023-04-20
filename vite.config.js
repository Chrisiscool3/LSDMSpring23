import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    outDir: "build",
    assetsDir: "assets",
    // Copy the images folder to the build output
    // so they are available at runtime
    copy: [
      {
        from: "images",
        to: "assets/images",
      },
    ],
  },
});
