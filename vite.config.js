import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
    base: "/dzcontrol/",
    optimizeDeps: {
        include: ["react/jsx-runtime"],
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: "src", replacement: "".concat(__dirname, "/src") },
            { find: "assets", replacement: "".concat(__dirname, "/src/assets") },
            { find: "app", replacement: "".concat(__dirname, "/src/app") },
            { find: "api", replacement: "".concat(__dirname, "/src/api") },
            { find: "ui", replacement: "".concat(__dirname, "/src/ui") },
            { find: "constants", replacement: "".concat(__dirname, "/src/constants") },
            { find: "config", replacement: "".concat(__dirname, "/src/config") },
            { find: "hooks", replacement: "".concat(__dirname, "/src/hooks") },
            { find: "models", replacement: "".concat(__dirname, "/src/models") },
            { find: "services", replacement: "".concat(__dirname, "/src/services") },
            { find: "stores", replacement: "".concat(__dirname, "/src/stores") },
            { find: "styles", replacement: "".concat(__dirname, "/src/styles") },
            { find: "utils", replacement: "".concat(__dirname, "/src/utils") },
            { find: "components", replacement: "".concat(__dirname, "/src/components") },
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "@use \"styles/index.scss\" as *;",
            },
        },
    },
});
