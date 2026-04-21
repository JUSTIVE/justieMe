/// <reference types="vite/client" />

import type { PostMetaData } from "./data/postMetaData";

declare module "*.mdx" {
  let MDXComponent: (props: unknown) => ReactElement;
  let metaData: PostMetaData;
  export default MDXComponent;
}
