import { ReactNode } from "react";
import { PostMetaData } from "./postMetaData";

export const posts = await Promise.all(
  Object.values(import.meta.glob("../../posts/*.mdx"))?.map(
    async (x) =>
      (await x()) as unknown as ReactNode & { metaData: PostMetaData },
  ) ?? [],
);
