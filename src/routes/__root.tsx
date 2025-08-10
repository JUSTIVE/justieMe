import { Outlet, createRootRoute } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { createContext, useState } from "react";
import { Helmet } from "@/components/helmet";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
} | null>(null);

export const FooterContext = createContext<{
  setFooterOpen: (open: boolean) => void;
  footerOpen: boolean;
} | null>(null);

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [footerOpen, setFooterOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet themeColor={theme === "dark" ? "rgb(17 24 39)" : "#fff"} />
      <FooterContext.Provider value={{ setFooterOpen, footerOpen }}>
        <div
          className={twMerge(
            "w-screen level-5 ",
            "bg-gray-200",
            "dark:bg-gray-900 dark:text-gray-100",
          )}
          data-mode={theme}
        >
          <div
            className={twMerge(
              "mx-auto max-w-screen-lg min-h-screen flex flex-col",
            )}
          >
            <Outlet />
            <Footer />
            <Navigation />

            {/* <TanStackRouterDevtools position="bottom-right" /> */}
          </div>
        </div>
      </FooterContext.Provider>
    </ThemeContext.Provider>
  );
}
