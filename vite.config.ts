import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Pages from "vite-plugin-pages";
import path from "node:path";

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
        rehypePlugins: [rehypeKatex],
        remarkPlugins: [remarkMath],
      }),
    },

    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  assetsInclude: ["src/posts/imgs/**/*.{png,jpg,jpeg,gif,svg,webp}"],
});
