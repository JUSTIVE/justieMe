import { A } from "@mobily/ts-belt";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { Career } from "@/components/career";
// import Hello from "@/posts/hello.mdx";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <div className={twMerge("py-5 flex-1 flex flex-col")}>
      <h2
        className={twMerge(
          "text-2xl leading-9 tracking-tighter px-5",
          "dark:text-gray-100",
        )}
      >
        {A.intersperse(
          [
            <span style={{ viewTransitionName: "title1" }} key="title1">
              {t("title1")}
            </span>,
            <span
              style={{ viewTransitionName: "title2" }}
              className="opacity-30"
              key="title2"
            >
              {t("title2")}
            </span>,
            <span
              style={{ viewTransitionName: "title3" }}
              className="opacity-30"
              title="title3"
            >
              {t("title3")}
            </span>,
          ],
          <>{"  "}</>,
        )}
      </h2>
      <div>
        <Career />
        {/* <Hello /> */}
      </div>
    </div>
  );
}
