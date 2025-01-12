import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      name: "Minsang Kim",
      title1: "Want to make the world a better place.",
      title2: "Want to be more happy and fulfilled.",
      title3: "Want to make a product that makes customers happy.",
      navHome: "Home",
      navAbout: "About",
    },
  },
  ko: {
    translation: {
      name: "김민상",
      title1: "더 나은 제품으로 세상을 바꾸고 싶은 개발자.",
      title2: "늘 같이 즐겁게 일하고 싶은 동료.",
      title3: "고객을 위한 제품을 만드는 제작자.",
      navHome: "홈",
      navAbout: "소개",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
