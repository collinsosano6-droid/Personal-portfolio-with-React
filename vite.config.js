import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Settings for Vitest
  test: {
    environment: "jsdom", // a fake browser for tests
    globals: true, // lets us use test() and expect() without importing them
    setupFiles: "./src/setupTests.js",
  },
});