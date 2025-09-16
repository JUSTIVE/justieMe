/// <reference types="vite/client" />

import type { PostMetaData } from "./data/postMetaData";
import type { ReactNode } from "react";

declare module "*.mdx" {
  let MDXComponent: (props: unknown) => JSX.Element;
  let metaData: PostMetaData;
  export default MDXComponent;
}
