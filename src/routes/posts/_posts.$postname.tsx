import { createFileRoute } from "@tanstack/react-router";
import type { PostMetaData } from "@/data/postMetaData";
import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { twMerge } from "tailwind-merge";

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
  const postname = Route.useParams().postname;
  const components: MDXComponents = {
    h1(props) {
      return (
        <h1
          {...props}
          className="level-1 mb-4"
          style={{
            viewTransitionName: postname,
          }}
        />
      );
    },
    hr() {
      return <hr className="opacity-50" />;
    },
    p(props) {
      return <p {...props} className={twMerge(props.className, "mb-4")} />;
    },
    code({ className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return match?.[1] ? (
        <SyntaxHighlighter language={match[1]} {...props} />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  return (
    <div className="flex flex-col gap-4">
      {postname ? (
        posts.find((x) => x.metaData.link === postname)?.default({ components })
      ) : (
        <></>
      )}
    </div>
  );
}
