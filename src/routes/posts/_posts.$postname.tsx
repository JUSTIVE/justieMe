import { createFileRoute } from "@tanstack/react-router";
import type { PostMetaData } from "@/data/postMetaData";
import { type ReactElement, useContext } from "react";
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
      (await x()) as unknown as ReactElement & {
        metaData: PostMetaData;
        default: (mdxComponents: MDXComponents) => ReactElement;
      },
  ) ?? [],
);

function RouteComponent() {
  const postname = Route.useParams().postname;
  const theme = useContext(ThemeContext);
  if (!theme) return null;

  const components: MDXComponents = {
    a({ ref, ...props }) {
      return (
        <a
          {...props}
          className="accent underline decoration-2 decoration-orange-500"
        />
      );
    },
    h1({ ref, ...props }) {
      return (
        <div
          {...props}
          className="level-1 mb-4 w-fit accent"
          style={{
            viewTransitionName: postname,
          }}
        />
      );
    },
    h2({ ref, ...props }) {
      return (
        <div
          {...props}
          className={twMerge(props.className, "level-2 font-semibold accent")}
          id={props.children as string}
        />
      );
    },
    h3({ ref, ...props }) {
      return (
        <div
          {...props}
          className={twMerge(props.className, "level-3 accent")}
        />
      );
    },
    hr() {
      return <hr className="opacity-50" />;
    },

    p({ ref, ...props }) {
      return (
        <p
          {...props}
          className={twMerge(props.className, "mb-4 [blockquote_&]:mb-0")}
        />
      );
    },
    blockquote({ ref, className, ...props }) {
      return (
        <blockquote
          {...props}
          className={twMerge(
            className,
            "bg-gray-100 dark:bg-gray-800 p-2 italic border-l border-l-4  border-l-orange-500 break-keep rounded",
          )}
        />
      );
    },
    code({ className, ref, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      if (match?.[1]) {
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
          >
            {children as string | string[]}
          </SyntaxHighlighter>
        );
      }
      return (
        <code
          {...props}
          className={twMerge(
            className,
            "bg-gray-100 dark:bg-gray-700 p-1 rounded level-6 accent ",
          )}
        >
          {children}
        </code>
      );
    },
    table({ ref, ...props }) {
      return (
        <table
          {...props}
          className="mb-4 w-full bg-gray-100 dark:bg-gray-800 rounded overflow-hidden"
        />
      );
    },
    th({ ref, ...props }) {
      return (
        <th
          {...props}
          className="p-2 text-left font-semibold bg-gray-100 dark:bg-gray-800"
        />
      );
    },
    td({ ref, ...props }) {
      return <td {...props} className="p-2 opacity-50" />;
    },
    img({ ref, ...props }) {
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

      {post ? post?.default({ components }) : null}
    </div>
  );
}
