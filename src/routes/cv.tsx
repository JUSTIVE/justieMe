import { Career } from "@/components/career";
import { Educations } from "@/components/education";
import { Projects } from "@/components/projects";
import { Publication } from "@/components/publication";
import { Talks } from "@/components/talk";
import { createFileRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Trans, useTranslation } from "react-i18next";

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <div className={twMerge("flex-1 flex flex-col gap-12 print:saturate-150")}>
      <div className="">
        <h1 className="level-3 font-semibold">{t("name")}</h1>
        <div className="level-6 text-gray-500">{t("role")}</div>
        <div className="screen:hidden text-gray-500 level-6 mt-2 grid grid-cols-[64px_1fr]">
          <div className="font-semibold">phone</div>
          <div>+82 10 9757 3783</div>
          <div className="font-semibold">email</div>
          <div>ben399399@gmail.com</div>
          <div className="font-semibold">github</div>
          <div>JUSTIVE</div>
        </div>
      </div>
      <div className="level-6 break-keep w-full">
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
        <Talks />
        <Publication />
        <Educations />
      </div>
    </div>
  );
}
