import { Link } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "../routes/__root";

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
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
  );
};

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      className="text-sm"
      onClick={() => {
        document.startViewTransition(() => {
          flushSync(() => {
            setTheme(theme === "dark" ? "light" : "dark");
          });
        });
      }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export const Navigation = () => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div
        className={twMerge(
          "fixed bottom-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md w-screen h-screen z-[8] transition-all duration-300 ease-out",
          `${showSettings ? "" : "opacity-0 pointer-events-none"}`,
        )}
        style={{ viewTransitionName: "nav-overlay" }}
        onClick={() => {
          setShowSettings(false);
        }}
      />
      <div
        className={twMerge(
          "fixed my-4 py-2 px-4 flex gap-2 items-center text-lg justify-between rounded-2xl border border-gray-200 w-full max-w-[calc(100%-32px)] backdrop-blur-md bg-white/80 z-[10] transition-transform translate-x-4",
          "lg:max-w-screen-lg lg:translate-x-0",
          "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-800",
        )}
        style={{ viewTransitionName: "nav" }}
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
          onClick={() => {
            setShowSettings(!showSettings);
          }}
        >
          설정
        </button>
      </div>
      <div
        className={twMerge(
          "fixed my-4 py-2 px-4 flex gap-2 items-center text-lg justify-between rounded-2xl border border-gray-200 w-fit backdrop-blur-md bg-white/80 z-[9] transition-[transform,opacity]  translate-x-4 overflow-hidden",
          `${showSettings ? "translate-y-16" : "translate-y-0 opacity-0"}`,
          "lg:max-w-screen-lg lg:translate-x-0",
          "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-800",
        )}
        style={{ viewTransitionName: "nav-settings" }}
      >
        <TranslateButton />
        <ThemeButton />
      </div>
      <div className="h-16" />
    </>
  );
};
