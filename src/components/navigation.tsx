import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="absolute text-lg bottom-0 bg-black w-full max-w-screen-lg text-white pb-safe">
      <div className="flex gap-2 items-center p-2">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>
      </div>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage(currentLanguage === "en" ? "ko" : "en");
        }}
      >
        {currentLanguage === "en" ? "한국어" : "English"}
      </button>
    </div>
  );
};
