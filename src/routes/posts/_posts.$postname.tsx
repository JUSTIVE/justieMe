import { createFileRoute } from "@tanstack/react-router";
import type { PostMetaData } from "@/data/postMetaData";
import { useContext, type ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { twMerge } from "tailwind-merge";
import { PostTags } from "@/components/postTags";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeContext } from "../__root";

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
  const theme = useContext(ThemeContext);
  if (!theme) return <></>;

  const components: MDXComponents = {
    h1(props) {
      return (
        <div
          {...props}
          className="level-1 mb-4 w-fit"
          style={{
            viewTransitionName: postname,
          }}
        />
      );
    },
    h2(props) {
      return (
        <div
          {...props}
          className={twMerge(props.className, "level-2 font-semibold")}
          id={props.defaultValue as string}
        />
      );
    },
    h3(props) {
      return <div {...props} className={twMerge(props.className, "level-3")} />;
    },
    hr() {
      return <hr className="opacity-50" />;
    },
    p(props) {
      return <p {...props} className={twMerge(props.className, "mb-4")} />;
    },
    code({ className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      if (match?.[1]) {
        //@ts-ignore
        return (
          <SyntaxHighlighter
            language={match[1]}
            {...props}
            style={theme.theme === "dark" ? atomOneDark : atomOneLight}
            showLineNumbers
            PreTag={"div"}
            customStyle={{
              borderRadius: "12px",
              backgroundColor: theme.theme === "dark" ? "#1f2937" : "#f3f4f6",
            }}
          />
        );
      }
      return <code className={className} {...props} />;
    },
    img(props) {
      return <img {...props} className="w-full text-center" alt="" />;
    },
  };

  const post = posts.find((x) => x.metaData.link === postname);
  return (
    <div className="flex flex-col gap-4">
      <div
        className="level-1 mb-4"
        style={{
          viewTransitionName: post?.metaData.link,
        }}
      >
        {post?.metaData.title}
      </div>
      <PostTags tags={post?.metaData.tags ?? []} viewTransition />

      {post ? post?.default({ components }) : <></>}
    </div>
  );
}
