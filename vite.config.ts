import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({}),
    tsconfigPaths(),
    {
      enforce: "pre",
      ...mdx({
        format: "mdx",
        include: /\.(mdx|md)$/,
      }),
    },

    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
});
