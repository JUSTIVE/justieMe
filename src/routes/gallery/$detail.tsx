import { createFileRoute } from "@tanstack/react-router";
import { gallery } from "@/asset/gallery.json";
import type { PhotoMeta } from "@/data/gallery";

export const Route = createFileRoute("/gallery/$detail")({
  component: RouteComponent,
});

const MetaInfos = ({
  iso,
  aperture,
  shutterSpeed,
  focalLength,
  body,
  lens,
}: PhotoMeta) => {
  return (
    <div className="flex flex-col items-start px-2">
      <div className="flex flex-col items-start level-7 gap-0 opacity-80 font-semibold">
        <div className="accent">{body}</div>
        <div>{lens}</div>
      </div>
      <div className="flex flex-wrap items-center level-7 gap-2 opacity-50 font-semibold">
        <div>ISO: {iso}</div>
        <div>{aperture}</div>
        <div>{shutterSpeed}</div>
        <div>{focalLength}</div>
      </div>
    </div>
  );
};

function RouteComponent() {
  const { detail } = Route.useParams();
  const file = gallery
    .flatMap((x) => x.photos)
    .find((x) => x.filename === detail);
  if (!file) return null;

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => {
          window.history.back();
        }}
        className="border border-gray-100 rounded-lg overflow-hidden dark:border-gray-600 w-full"
        style={{ viewTimelineName: "photoFrame" }}
      >
        <img
          src={`/asset/gallery/${detail}.webp`}
          alt={detail}
          style={{
            viewTransitionName: detail.split("/").at(-1)?.split(".")[0] ?? "",
          }}
          loading="eager"
        />
      </button>
      <div
        style={{ viewTimelineName: file.title }}
        className="whitespace-pre-line py-2 italic text-start level-6 px-2"
      >
        {file.title}
      </div>
      <div
        style={{ viewTimelineName: file.title }}
        className="whitespace-pre-line py-2 italic text-start level-7 px-2"
      >
        {file.description}
      </div>
      <MetaInfos {...file.meta} />
    </div>
  );
}
