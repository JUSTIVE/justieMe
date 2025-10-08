import { createFileRoute } from "@tanstack/react-router";
import type { MDXComponents } from "mdx/types";
import { type ReactElement, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { twMerge } from "tailwind-merge";
import { PostTags } from "@/components/postTags";
import type { PostMetaData } from "@/data/postMetaData";
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
    a(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <a
          {...rest}
          className="accent underline decoration-2 decoration-orange-500"
        />
      );
    },
    h1(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <div
          {...rest}
          className="level-1 mb-4 w-fit accent"
          style={{
            viewTransitionName: postname,
          }}
        />
      );
    },
    h2(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <div
          {...rest}
          className={twMerge(props.className, "level-2 font-semibold accent")}
          id={props.children as string}
        />
      );
    },
    h3(props) {
      const { ref: _ref, ...rest } = props;

      return (
        <div {...rest} className={twMerge(props.className, "level-3 accent")} />
      );
    },
    hr() {
      return <hr className="opacity-50" />;
    },

    p(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <p
          {...rest}
          className={twMerge(props.className, "mb-4 [blockquote_&]:mb-0")}
        />
      );
    },
    blockquote(props) {
      const { ref: _ref, className, ...rest } = props;
      return (
        <blockquote
          {...rest}
          className={twMerge(
            className,
            "bg-gray-100 dark:bg-gray-800 p-2 italic border-l border-l-4  border-l-orange-500 break-keep rounded",
          )}
        />
      );
    },
    code(props) {
      const { className, ref: _ref, children, ...rest } = props;
      const match = /language-(\w+)/.exec(className || "");
      if (match?.[1]) {
        return (
          <SyntaxHighlighter
            language={match[1]}
            {...rest}
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
          {...rest}
          className={twMerge(
            className,
            "bg-gray-100 dark:bg-gray-700 p-1 rounded level-6 accent ",
          )}
        >
          {children}
        </code>
      );
    },
    table(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <table
          {...rest}
          className="mb-4 w-full bg-gray-100 dark:bg-gray-800 rounded overflow-hidden"
        />
      );
    },
    th(props) {
      const { ref: _ref, ...rest } = props;
      return (
        <th
          {...rest}
          className="p-2 text-left font-semibold bg-gray-100 dark:bg-gray-800"
        />
      );
    },
    td(props) {
      const { ref: _ref, ...rest } = props;
      return <td {...rest} className="p-2 opacity-50" />;
    },
    img(props) {
      const { ref: _ref, ...rest } = props;
      return <img {...rest} className="w-full text-center" alt="" />;
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
