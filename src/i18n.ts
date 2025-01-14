import i18n, { Resource, ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./i18n/ko.json";
import en from "./i18n/en.json";
const resources: Resource = {
  en: en as ResourceLanguage,
  ko: ko as ResourceLanguage,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
