import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/navigation";
import { useSearch } from "@tanstack/react-router";

import { createContext, useEffect, useState } from "react";
import { Helmet } from "@/components/helmet";
import { Cursor } from "@/components/Cursor";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
} | null>(null);

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const isDriveQuery = Object.hasOwn(useSearch({ from: Route.id }), "00");

  const isDriveMode = localStorage.getItem("drive");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "dark" | "light");
    }
  }, []);

  useEffect(() => {
    if (isDriveQuery) localStorage.setItem("drive", "true");
  }, [isDriveQuery]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (newValue) => {
          localStorage.setItem("theme", newValue);
          setTheme(newValue);
        },
      }}
    >
      <Helmet themeColor={theme === "dark" ? "rgb(17 24 39)" : "#fff"} />
      {isDriveMode && <Cursor />}

      <div
        className={twMerge(
          "w-screen level-5 ",
          "dark:bg-gray-900 dark:text-gray-100",
        )}
        data-mode={theme}
      >
        <div
          className={twMerge(
            "mx-auto max-w-(--breakpoint-md) min-h-screen flex flex-col pt-8 px-5",
          )}
        >
          <Outlet />
          <Navigation />

          {/* <TanStackRouterDevtools position="bottom-right" /> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
