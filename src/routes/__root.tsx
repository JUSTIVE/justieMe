import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "../components/navigation";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-screen-lg min-h-screen",
        "dark:bg-gray-900",
      )}
      data-mode={"dark"}
    >
      <Navigation />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
