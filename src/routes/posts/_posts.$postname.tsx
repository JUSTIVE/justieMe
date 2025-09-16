import { createFileRoute } from "@tanstack/react-router";
import type { PostMetaData } from "@/data/postMetaData";
import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";

export const Route = createFileRoute("/posts/_posts/$postname")({
  component: RouteComponent,
});

const posts = await Promise.all(
  Object.values(import.meta.glob("../../posts/*.mdx"))?.map(
    async (x) =>
      (await x()) as unknown as ReactNode & {
        metaData: PostMetaData;
        default: (mdxComponents: MDXComponents) => ReactNode;
      },
  ) ?? [],
);

function RouteComponent() {
  const components: MDXComponents = {
    h1(props) {
      return <h1 {...props} className="level-1 mb-4" />;
    },
    hr() {
      return <hr className="opacity-50" />;
    },
    code({ className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter language={match[1]} {...props} />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  return (
    <>
      {Route.useParams().postname ? (
        posts
          .find((x) => x.metaData.link === Route.useParams().postname)
          ?.default({ components })
      ) : (
        <></>
      )}
    </>
  );
}
