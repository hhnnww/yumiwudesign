import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tsconfigPaths from "vite-tsconfig-paths";
installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    cjsInterop({
      dependencies: ["@mui/icons-material/*"],
    }),
  ],
});
