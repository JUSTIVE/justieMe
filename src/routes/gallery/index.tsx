import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { gallery } from "@/asset/gallery.json";
import type { PhotoGroup } from "@/data/gallery";

// const images = Object.values(
//   import.meta.glob("@/asset/gallery/thumbs/*.webp", {
//     eager: true,
//     query: "?url",
//     import: "default",
//   }),
// ) as string[];

const GalleryItem = ({ filepath }: { filepath: string }) => {
  return (
    <Link
      to={"/gallery/$detail"}
      params={{
        detail: filepath,
      }}
      className="relative group cursor-pointer"
      viewTransition
      replace
    >
      <div className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-sm z-[1]" />
      <img
        src={`/asset/gallery/thumbs/${filepath}.webp`}
        alt=""
        className="aspect-square object-cover transition-all group-hover:brightness-50 "
        style={{
          viewTransitionName: filepath,
        }}
        loading="lazy"
      />
    </Link>
  );
};

const PhotoGroupE = ({ name, datetime, photos }: PhotoGroup) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="font-semibold">{name}</div>
        <div className="opacity-50 level-6">{datetime}</div>
      </div>
      <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
        {photos
          .map((x) => x.filename)
          .map((image) => {
            return <GalleryItem filepath={image} key={image} />;
          })}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/gallery/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-semibold h-7 mb-8">{t("Gallery")}</div>
      <div className="flex flex-col gap-8">
        {gallery.map((x) => (
          <PhotoGroupE {...x} key={x.name} />
        ))}
      </div>
    </>
  );
}
