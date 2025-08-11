import { MDXProvider } from "@mdx-js/react";
import { createFileRoute } from "@tanstack/react-router";
import Hello from "@/posts/hello.mdx";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MDXProvider
      components={{
        h1(props) {
          return <h1 {...props} className="level-1" />;
        },
        hr() {
          return <hr className="opacity-50" />;
        },
      }}
    >
      <div className="p-4">
        <Hello />
      </div>
    </MDXProvider>
  );
}
