import { MDXProvider } from "@mdx-js/react";
import { Outlet } from "@tanstack/react-router";

const components = {};

export function RouteComponent() {
  return (
    <MDXProvider components={components}>
      <Outlet />
    </MDXProvider>
  );
}
