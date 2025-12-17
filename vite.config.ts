import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MapBoundaryEditor",
      fileName: "map-boundary-editor",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        globals: {
          leaflet: "L",
        },
      },
    },
  },
});
