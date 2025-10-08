import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery/$detail")({
  component: RouteComponent,
});

function RouteComponent() {
  const { detail } = Route.useParams();

  const filename = detail.split("/").at(-1)?.split(".")[0] ?? "";
  return (
    <button
      type="button"
      onClick={() => {
        window.history.back();
      }}
      className="border border-gray-100 rounded-2xl overflow-hidden dark:border-gray-600 w-full"
      style={{ viewTimelineName: "photoFrame" }}
    >
      <img
        src={`/asset/gallery/${detail}.webp`}
        alt={filename}
        style={{
          viewTransitionName: detail.split("/").at(-1)?.split(".")[0] ?? "",
        }}
        loading="eager"
      />
    </button>
  );
}
