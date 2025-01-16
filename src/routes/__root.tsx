import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { createContext, useState } from "react";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
} | null>(null);

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={twMerge("w-screen", "bg-gray-200", "dark:bg-gray-900")}
        data-mode={theme}
      >
        <div
          className={twMerge(
            "mx-auto max-w-screen-lg min-h-screen flex flex-col",
          )}
        >
          <Navigation />
          <Outlet />
          <Footer />
          {/* <TanStackRouterDevtools position="bottom-right" /> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
