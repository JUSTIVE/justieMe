import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div
      className={twMerge("w-screen", "bg-gray-100", "dark:bg-gray-900")}
      // data-mode={"dark"}
    >
      <div
        className={twMerge(
          "mx-auto max-w-screen-lg min-h-screen flex flex-col",
        )}
      >
        <Navigation />
        <Outlet />
        <Footer />
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
      </div>
    </div>
  );
}
