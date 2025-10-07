import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/$detail")({
  component: RouteComponent,
});

function RouteComponent() {
  const { detail } = Route.useParams();
  const filename = detail.split("/").at(-1)?.split(".")[0] ?? "";
  return (
    <Link to={"/gallery"} viewTransition replace>
      <img
        src={`/asset/gallery/${detail}.webp`}
        alt={filename}
        style={{
          viewTransitionName: detail.split("/").at(-1)?.split(".")[0] ?? "",
        }}
        className="rounded-2xl"
        loading="eager"
      />
    </Link>
  );
}
