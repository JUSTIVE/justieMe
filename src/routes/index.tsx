import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Career } from "@/components/career";
import { Publication } from "@/components/publication";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className={twMerge("py-5 flex-1 flex flex-col pt-24")}>
      <h2
        className={twMerge("px-5 level-1 md:level-0 flex flex-col gap-10 mb-8")}
      >
        <div className="min-h-fit flex flex-col gap-4 relative">
          <div
            style={{
              viewTransitionName: "title1",
            }}
            key="title1"
            className="text-balance break-keep accent saturate-150 whitespace-pre-line animate-fade-in-up ease-material font-semibold z-[1]"
          >
            {t("title1")}
          </div>
          <div className="text-balance break-keep accent whitespace-pre-line animate-fade-in-up ease-material font-semibold absolute !translate-x-1 !translate-y-1 !opacity-40 -hue-rotate-60">
            {t("title1")}
          </div>
        </div>
      </h2>
      <div className="level-5 whitespace-pre-wrap break-keep w-full md:w-[60%] px-5 mb-24 opacity-50 animate-fade-in">
        <div className="mr-1 accent font-semibold mb-1.5">
          "{t("familiarWithNovelty")}".
        </div>
        <div className="opacity-70">
          <Trans
            t={t}
            i18nKey={"introductionDescription"}
            components={{
              Highlight: <span className="accent" />,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Career />
        <Publication />
      </div>
    </div>
  );
}
