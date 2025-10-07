import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/$detail")({
  component: RouteComponent,
});

function RouteComponent() {
  const { detail } = Route.useParams();
  const filename = detail.split("/").at(-1)?.split(".")[0] ?? "";
  return (
    <div>
      <img
        src={`${detail.replaceAll("/thumbs", "")}.jpg`}
        alt={filename}
        style={{
          viewTransitionName: detail.split("/").at(-1)?.split(".")[0] ?? "",
        }}
        className="rounded-2xl"
        loading="eager"
      />
    </div>
  );
}
