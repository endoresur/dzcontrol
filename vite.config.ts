import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: "src", replacement: `${__dirname}/src` },
      { find: "assets", replacement: `${__dirname}/src/assets` },
      { find: "app", replacement: `${__dirname}/src/app` },
      { find: "api", replacement: `${__dirname}/src/api` },
      { find: "ui", replacement: `${__dirname}/src/ui` },
      { find: "constants", replacement: `${__dirname}/src/constants` },
      { find: "config", replacement: `${__dirname}/src/config` },
      { find: "hooks", replacement: `${__dirname}/src/hooks` },
      { find: "models", replacement: `${__dirname}/src/models` },
      { find: "services", replacement: `${__dirname}/src/services` },
      { find: "stores", replacement: `${__dirname}/src/stores` },
      { find: "styles", replacement: `${__dirname}/src/styles` },
      { find: "utils", replacement: `${__dirname}/src/utils` },
      { find: "components", replacement: `${__dirname}/src/components` },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "styles/index.scss" as *;`,
      },
    },
  },
});
