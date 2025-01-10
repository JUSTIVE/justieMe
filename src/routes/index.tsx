import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h1 className="font-bold mb-4">{t("name")}</h1>
      <h2 className="text-3xl font-bold leading-9 tracking-tighter">
        <span>{t("title1")}</span>
        <span className="opacity-30">{t("title2")}</span>
        <span className="opacity-30">{t("title3")}</span>
      </h2>
    </div>
  );
}
