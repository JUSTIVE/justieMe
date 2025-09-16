import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-8 px-5">
      <Outlet />
    </div>
  );
}
