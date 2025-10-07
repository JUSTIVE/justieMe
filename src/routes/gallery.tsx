import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const thumbnails = Object.values(
  import.meta.glob("@/asset/gallery/*.{webp}", {
    eager: true,
    as: "url",
  }),
);

const images = thumbnails.map((x) => x.replaceAll(".webp", ".png"));

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-bold h-7">{t("Gallery")}</div>
      <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden">
        {thumbnails.map((image) => {
          return (
            <img
              src={image}
              alt=""
              key={image}
              className="aspect-square object-cover"
              style={{
                viewTransitionName: image,
              }}
              loading="lazy"
            />
          );
        })}
      </div>
    </>
  );
}
