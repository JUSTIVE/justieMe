import { PropsWithChildren, useContext, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { FooterContext, ThemeContext } from "@/routes/__root";
import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <button
      type="button"
      className="level-5"
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
  const theme = useContext(ThemeContext);
  return (
    <button
      type="button"
      className=""
      onClick={() => {
        document.startViewTransition(() => {
          flushSync(() => {
            theme?.setTheme(theme?.theme === "dark" ? "light" : "dark");
          });
        });
      }}
    >
      {(theme?.theme ?? "light") === "light" ? (
        <Moon key={"moon"} />
      ) : (
        <Sun key={"sun"} />
      )}
    </button>
  );
};

type SettingsItemProps = {
  labelKey: string;
};

const SettingsItem = ({
  labelKey,
  children,
}: PropsWithChildren<SettingsItemProps>) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 justify-between w-full items-center">
      <p className="text-sm">{t(labelKey)}</p>
      {children}
    </div>
  );
};

type SettingsPaneProps = {
  showSettings: boolean;
};
const SettingsPane = ({ showSettings }: SettingsPaneProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={twMerge(
        "fixed my-4 py-3 px-4 flex flex-col gap-4 rounded-2xl border border-gray-200 max-w-[calc(100%-32px)] w-full backdrop-blur-md bg-white/80 z-[9] transition-[transform,opacity]  translate-x-4 overflow-hidden",
        `${showSettings ? "translate-y-16" : "translate-y-0 opacity-0 pointer-events-none"}`,
        "lg:max-w-screen-lg lg:translate-x-0",
        "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-800",
      )}
      style={{ viewTransitionName: "nav-settings" }}
    >
      <Link to={"./posts"}>나의 글</Link>
      <div className="level-4">{t("settings")}</div>
      <div className="flex flex-col gap-6 w-full">
        <SettingsItem labelKey={"language"}>
          <TranslateButton />
        </SettingsItem>
        <SettingsItem labelKey={"theme"}>
          <ThemeButton />
        </SettingsItem>
      </div>
    </div>
  );
};

const Glass = () => {
  return (
    <div className="gradient-blur">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const Navigation = () => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);
  const fo = useContext(FooterContext);

  return (
    <>
      <div
        className={twMerge(
          "fixed top-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md w-screen h-screen z-[8] transition-all duration-300 ease-out",
          `${showSettings ? "" : "opacity-0 pointer-events-none"}`,
        )}
        style={{ viewTransitionName: "nav-overlay" }}
        onClick={() => {
          setShowSettings(false);
        }}
      />
      <Glass />
      <div
        className={twMerge(
          "fixed my-4 py-2 px-4 pr-2 flex gap-2 items-center max-w-[calc(100%-32px)] justify-between rounded-2xl border border-gray-200 w-full backdrop-blur-md bg-white/80 z-[10] transition-transform translate-x-4",
          "lg:max-w-screen-lg lg:translate-x-0",
          "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-700/50",
        )}
        style={{ viewTransitionName: "nav" }}
      >
        <div className="inline-flex items-center gap-4">
          <button
            type={"button"}
            style={{
              viewTransitionName: "navHome",
            }}
            onClick={(e) => {
              fo?.setFooterOpen(true);
              e.stopPropagation();
            }}
          >
            {t("name")}
          </button>
        </div>

        <button
          onClick={() => {
            setShowSettings(!showSettings);
          }}
          className={twMerge(
            "p-1 rounded-xl transition-colors",
            showSettings ? "bg-gray-900/10 dark:bg-white/10" : "",
          )}
        >
          <Menu />
        </button>
      </div>
      <SettingsPane showSettings={showSettings} />
      <div className="h-16" />
    </>
  );
};
