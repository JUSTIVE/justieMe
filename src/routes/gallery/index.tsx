import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { gallery } from "@/asset/gallery.json";
import type { GalleryPhoto, PhotoGroup } from "@/data/gallery";

const GalleryItem = ({ filename, title }: GalleryPhoto) => {
  return (
    <Link
      to={"/gallery/$detail"}
      params={{
        detail: filename,
      }}
      className="relative group cursor-pointer"
      viewTransition
      style={{
        viewTransitionName: filename,
      }}
    >
      <div
        className="absolute w-full h-full top-0 left-0 z-[2] opacity-0 group-hover:opacity-100 grid place-items-center p-4 pointer-events-none transition-opacity text-white text-center level-7 italic whitespace-pre-line"
        style={{
          viewTransitionName: title,
        }}
      >
        {title}
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-[1] group-hover:backdrop-blur-sm group-hover:brightness-50 pointer-events-none" />
      <img
        src={`/asset/gallery/thumbs/${filename}.webp`}
        alt=""
        className="object-cover w-full aspect-square group-hover:z-[1]"
        loading="lazy"
      />
    </Link>
  );
};

const PhotoGroupE = ({ name, datetime, photos }: PhotoGroup) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="font-semibold level-6">{name}</div>
        <div className="opacity-50 level-7">{datetime}</div>
      </div>
      <div
        className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-600"
        style={{ viewTimelineName: "photoFrame" }}
      >
        {photos.map((image) => {
          return <GalleryItem {...image} key={image.filename} />;
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
