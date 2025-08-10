import { MDXProvider } from "@mdx-js/react";
import { createFileRoute } from "@tanstack/react-router";
import Hello from "@/posts/hello.mdx";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

const components = {};

function RouteComponent() {
  return (
    <MDXProvider components={components}>
      <Hello />
    </MDXProvider>
  );
}
