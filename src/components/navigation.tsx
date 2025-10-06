import { type PropsWithChildren, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "@/routes/__root";
import { Menu, Moon, Sun, Image, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import contacts from "../asset/contacts.json";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";

type ContactItemProps = {
  label: string;
  link: string;
  icon: string;
};
const ContactItem = ({ link, label, icon }: ContactItemProps) => {
  return (
    <SubMenuItem
      labelKey={label}
      __type="link"
      to={link}
      // className={twMerge(
      //   "flex items-center gap-4 px-3 py-2 rounded-xl transition-colors opacity-100 level-5",
      //   "active:bg-gray-200/50",
      //   "dark:active:bg-gray-700/50",
      // )}
    >
      {icon === "mail" ? (
        <Mail size={16} />
      ) : icon === "instagram" ? (
        <SiInstagram size={16} />
      ) : icon === "github" ? (
        <SiGithub size={16} />
      ) : icon === "unsplash" ? (
        <Image size={16} />
      ) : (
        <></>
      )}
    </SubMenuItem>
    // <a
    //   className={twMerge(
    //     "flex items-center gap-4 px-3 py-2 rounded-xl transition-colors opacity-100 level-5",
    //     "active:bg-gray-200/50",
    //     "dark:active:bg-gray-700/50",
    //   )}
    //   href={link}
    //   target="_blank"
    //   rel="noreferrer"
    // >
    //   {icon === "mail" ? (
    //     <Mail size={20} />
    //   ) : icon === "instagram" ? (
    //     <Instagram size={20} />
    //   ) : icon === "github" ? (
    //     <Github size={20} />
    //   ) : icon === "unsplash" ? (
    //     <Image size={20} />
    //   ) : (
    //     <></>
    //   )}
    //   <p className="">{label}</p>
    // </a>
  );
};

const SettingsSubMenu = () => {
  const theme = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <SubMenuItem
        labelKey={"language"}
        __type="button"
        action={() =>
          document.startViewTransition(() => {
            flushSync(() => {
              i18n.changeLanguage(currentLanguage === "en" ? "ko" : "en");
            });
          })
        }
      >
        {currentLanguage === "en" ? "한국어" : "Eng"}
      </SubMenuItem>
      <SubMenuItem
        labelKey={"theme"}
        __type="button"
        action={() => {
          document.startViewTransition(() => {
            flushSync(() => {
              theme?.setTheme(theme?.theme === "dark" ? "light" : "dark");
            });
          });
        }}
      >
        {(theme?.theme ?? "light") === "light" ? (
          <Moon key={"moon"} size={16} />
        ) : (
          <Sun key={"sun"} size={16} />
        )}
      </SubMenuItem>
    </>
  );
};

type SubMenuItemProps = {
  labelKey: string;
} & (
  | {
      __type: "button";
      action: () => void;
    }
  | {
      __type: "link";
      to: string;
    }
);

const SubMenuItem = ({
  children,
  labelKey,

  ...props
}: PropsWithChildren<SubMenuItemProps>) => {
  const { t } = useTranslation();
  return props.__type === "button" ? (
    <button
      type="button"
      className={twMerge(
        "flex gap-4 items-center border border-gray-400 rounded-lg p-2 opacity-60 transition-[opacity,colors]",
        "hover:opacity-100",
        "dark:border-gray-800",
      )}
      onClick={props.action}
    >
      <p className="text-sm">{t(labelKey)}</p>
      {children}
    </button>
  ) : (
    <Link
      {...props}
      className={twMerge(
        "flex gap-4 items-center border border-gray-400 rounded-lg p-2 opacity-60 transition-[opacity,colors]",
        "hover:opacity-100",
        "dark:border-gray-800",
      )}
    >
      <p className="text-sm">{t(labelKey)}</p>
      {children}
    </Link>
  );
};

type SubMenuKind = "settings" | "contact" | "none";

type MenuPaneItemProps = {
  subMenu: SubMenuKind;
  setSubMenu: (fn: (kind: SubMenuKind) => SubMenuKind) => void;
  kind: SubMenuKind;
  labelKey: string;
};
const MenuPaneItem = ({
  subMenu,
  kind,
  setSubMenu,
  labelKey,
}: MenuPaneItemProps) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={twMerge(
        "level-5 text-start transition-[transform,colors] ",
        subMenu === kind ? "translate-x-1 accent" : "translate-x-0",
      )}
      onClick={() => {
        setSubMenu((x) => (x === kind ? "none" : kind));
      }}
    >
      {t(labelKey)}
    </button>
  );
};

type MenuPaneProps = {
  showMenu: boolean;
  setShowMenu: (showSettings: boolean) => void;
};
const MenuPane = ({ showMenu, setShowMenu }: MenuPaneProps) => {
  const { t } = useTranslation();
  const [subMenu, setSubMenu] = useState<SubMenuKind>("none");
  useEffect(() => {
    if (!showMenu) {
      setSubMenu("none");
    }
  }, [showMenu]);

  return (
    <div
      className={twMerge(
        "fixed bottom-0 my-4 flex flex-col gap-4 rounded-2xl  max-w-[calc(100%-48px)] w-full z-[9] transition-[transform,opacity] overflow-hidden  ",
        `${showMenu ? "-translate-y-16" : "translate-y-0 opacity-0 pointer-events-none"}`,
        "left-1/2 -translate-x-1/2",
        "lg:max-w-screen-md",
      )}
      style={{ viewTransitionName: "nav-settings" }}
    >
      <div
        className={twMerge(
          "py-3 px-4 flex flex-col  gap-4 bg-white rounded-2xl z-[1] transition-transform border border-gray-200",
          "dark:text-white/80 dark:bg-gray-800 dark:border-gray-800",
          subMenu === "none" ? "translate-y-16" : "translate-y-2",
        )}
      >
        <Link
          to={"/posts"}
          className="level-5"
          onClick={() => setShowMenu(false)}
        >
          {t("Posts")}
        </Link>
        <Link
          to={"/cv"}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          CV
        </Link>
        <Link
          to={"/gallery"}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          {t("Gallery")}
        </Link>
        <MenuPaneItem
          subMenu={subMenu}
          setSubMenu={setSubMenu}
          kind="contact"
          labelKey="Contact me"
        />
        <MenuPaneItem
          subMenu={subMenu}
          setSubMenu={setSubMenu}
          kind="settings"
          labelKey="settings"
        />
      </div>
      <div
        className={twMerge(
          "flex gap-4 w-full px-4 py-3 rounded-2xl level-6 h-12 bg-gray-100 overflow-x-scroll no-scrollbar",
          "dark:bg-gray-900",
        )}
        style={{
          viewTransitionName: "nav-subsettings",
        }}
      >
        {subMenu === "settings" && <SettingsSubMenu />}
        {subMenu === "contact" && (
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          <>
            {contacts.map((contact) => (
              <ContactItem key={contact.label} {...contact} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export const Navigation = () => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <button
        type="button"
        className={twMerge(
          "fixed bottom-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md w-screen h-screen z-[8] transition-all duration-300 ease-out print:hidden",
          `${showSettings ? "pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        )}
        onClick={() => {
          setShowSettings(false);
        }}
      />
      {/*<Glass />*/}
      <div
        className={twMerge(
          "fixed bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 pr-2 flex gap-2 items-center max-w-[calc(100%-48px)] justify-between rounded-2xl border border-gray-200 w-full backdrop-blur-sm bg-white/90 z-[10] transition-all",
          "lg:max-w-screen-md",
          "dark:text-white/80 dark:bg-gray-800/80 dark:border-gray-700/50",
          "print:hidden",
        )}
        style={{ viewTransitionName: "nav" }}
      >
        <div className="inline-flex items-center gap-4">
          <Link
            to={"/"}
            style={{
              viewTransitionName: "navHome",
            }}
            onClick={() => {
              setShowSettings(false);
            }}
          >
            {t("name")}
          </Link>
        </div>

        <button
          type="button"
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
      <MenuPane showMenu={showSettings} setShowMenu={setShowSettings} />
      <div className="h-16" />
    </>
  );
};
