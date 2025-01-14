import { A } from "@mobily/ts-belt";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <div className="p-5 flex-1 flex flex-col">
      <h2
        className={twMerge(
          "text-2xl leading-9 tracking-tighter",
          "dark:text-gray-100",
        )}
      >
        {A.intersperse(
          [
            <span style={{ viewTransitionName: "title1" }}>{t("title1")}</span>,
            <span
              style={{ viewTransitionName: "title2" }}
              className="opacity-30"
            >
              {t("title2")}
            </span>,
            <span
              style={{ viewTransitionName: "title3" }}
              className="opacity-30"
            >
              {t("title3")}
            </span>,
          ],
          <>{"  "}</>,
        )}
      </h2>
      <div></div>
    </div>
  );
}
