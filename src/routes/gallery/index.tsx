import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const images = Object.values(
  import.meta.glob("@/asset/gallery/thumbs/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

const GalleryItem = ({ filepath }: { filepath: string }) => {
  return (
    <Link
      to={"/gallery/$detail"}
      params={{
        detail: filepath.split(".")[0] ?? "",
      }}
      className="relative group cursor-pointer"
      viewTransition
    >
      <div className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-sm z-[1]" />
      <img
        src={filepath}
        alt=""
        className="aspect-square object-cover transition-all group-hover:brightness-50 "
        style={{
          viewTransitionName: filepath.split("/").at(-1)?.split(".")[0] ?? "",
        }}
        loading="lazy"
      />
    </Link>
  );
};

export const Route = createFileRoute("/gallery/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-bold h-7">{t("Gallery")}</div>
      <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden">
        {images.map((image) => {
          return <GalleryItem filepath={image} key={image} />;
        })}
      </div>
    </>
  );
}
