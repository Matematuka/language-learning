import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/language-learning/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
