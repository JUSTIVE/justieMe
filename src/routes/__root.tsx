import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/navigation";

import { createContext, useState } from "react";
import { Helmet } from "@/components/helmet";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
} | null>(null);

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet themeColor={theme === "dark" ? "rgb(17 24 39)" : "#fff"} />

      <div
        className={twMerge(
          "w-screen level-5 ",
          "dark:bg-gray-900 dark:text-gray-100",
        )}
        data-mode={theme}
      >
        <div
          className={twMerge(
            "mx-auto max-w-screen-md min-h-screen flex flex-col pt-8 px-5 min-h-screen",
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
