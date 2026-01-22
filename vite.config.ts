import mdx from "@mdx-js/rollup";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import tsconfigPaths from "vite-tsconfig-paths";
// import remarkEmbedder from "@remark-embedder/core";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    cssMinify: false,
  },

  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
    }),
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
        remarkPlugins: [remarkMath, remarkGfm],
      }),
    },

    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  assetsInclude: ["src/posts/imgs/**/*.{png,jpg,jpeg,gif,svg,webp}"],
});
