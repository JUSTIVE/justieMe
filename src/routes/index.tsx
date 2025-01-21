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
    <div className={twMerge("py-5 flex-1 flex flex-col gap-8 pt-12")}>
      <h2
        className={twMerge(
          "px-5 level-2 flex flex-col gap-4",
          "dark:text-gray-100",
        )}
      >
        <img
          src={"./src/asset/profile.png"}
          className="mix-blend-luminosity w-1/2 max-w-[280px] self-center"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 120%)",
            viewTransitionName: "profile",
          }}
        />
        <div
          style={{ viewTransitionName: "title1" }}
          key="title1"
          className="text-balance break-keep font-semibold"
        >
          {t("title1")}
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
      <div>
        <Career />
        {/* <Hello /> */}
      </div>
    </div>
  );
}
