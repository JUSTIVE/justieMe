import { createFileRoute } from "@tanstack/react-router";
import { useTranslation, Trans } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Career } from "@/components/career";
import { Publication } from "@/components/publication";
import { Educations } from "@/components/education";
import { Projects } from "@/components/projects";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div className={twMerge("py-5 flex-1 flex flex-col pt-8 gap-12")}>
      <div className="px-5">
        <h1 className="level-3 font-semibold">{t("name")}</h1>
        <div className="level-6 text-gray-500">{t("role")}</div>
      </div>
      <div className="level-6 break-keep w-full px-5">
        <div className="mr-1 level-5 accent font-semibold mb-1.5">
          {t("familiarWithNovelty")}.
        </div>
        <div className="">
          <Trans
            t={t}
            i18nKey={"introductionDescription"}
            components={{
              Highlight: <span className="accent font-semibold" />,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Career />
        <Projects />
        <Publication />
        <Educations />
      </div>
    </div>
  );
}
