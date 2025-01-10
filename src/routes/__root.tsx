import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Navigation />
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
