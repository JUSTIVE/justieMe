import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({}),
    tsconfigPaths(),
    Pages({
      dirs: ["src/posts"],
    }),
    {
      enforce: "pre",
      ...mdx({
        format: "mdx",
        include: /\.(mdx|md)$/,
        providerImportSource: "@mdx-js/react",
      }),
    },

    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
});
