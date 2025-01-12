import { Link } from "@tanstack/react-router";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const Navigation = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <div
        className={twMerge(
          "fixed my-2 py-2 px-4 flex gap-2 items-center text-lg justify-between rounded-2xl border border-gray-200 w-full max-w-[calc(100%-32px)] backdrop-blur-xl bg-white/80 z-[10] rotate-0 transition-transform translate-x-4",
          "lg:max-w-screen-lg lg:translate-x-0",
          "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-800",
        )}
      >
        <div className="inline-flex items-center gap-4">
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            style={{
              viewTransitionName: "navHome",
            }}
            activeOptions={{ exact: true }}
          >
            {t("name")}
          </Link>
          {/* <Link
            to="/about"
            activeProps={{
              className: "font-bold",
            }}
            style={{
              viewTransitionName: "navAbout",
            }}
          >
            {t("navAbout")}
          </Link> */}
        </div>
        <button
          type="button"
          className="text-sm"
          onClick={() => {
            document.startViewTransition(() => {
              flushSync(() => {
                i18n.changeLanguage(currentLanguage === "en" ? "ko" : "en");
              });
            });
          }}
        >
          {currentLanguage === "en" ? "한국어" : "Eng"}
        </button>
      </div>
      <div className="h-16" />
    </>
  );
};
