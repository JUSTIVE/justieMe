import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Career } from "@/components/career";
import { Publication } from "@/components/publication";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div className={twMerge("py-5 flex-1 flex flex-col gap-8 pt-12")}>
      <h2 className={twMerge("px-5 level-2 flex flex-col gap-4")}>
        <div className="min-h-fit flex flex-col gap-4">
          <div
            style={{
              viewTransitionName: "title1",
              fontSize: "3rem",
              lineHeight: i18n.language === "en" ? "3rem" : "3.5rem",
            }}
            key="title1"
            className="text-balance break-keep font-semibold accent"
          >
            {t("title1")}
          </div>
        </div>

        <div className="level-5 opacity-50 whitespace-pre-wrap break-keep">
          {t("introDescription")}
        </div>

        {
          // <span
          //   style={{ viewTransitionName: "title2" }}
          //   className="opacity-30"
          //   key="title2"
          // >
          //   {t("title2")}
          // </span>,
          // <span
          //   style={{ viewTransitionName: "title3" }}
          //   className="opacity-30"
          //   title="title3"
          // >
          //   {t("title3")}
          // </span>
        }
      </h2>
      <div className="flex flex-col gap-8">
        <Career />
        <Publication />
      </div>
    </div>
  );
}
