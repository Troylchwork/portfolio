import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import en from "./locales/en";
import zh from "./locales/zh";

i18n.use(initReactI18next)
    // .use(LanguageDetector)
    // .use(Backend)
    .init({
        lng: 'en',
        fallbackLng: "zh",
        resources: {
            en: { translation: en },
            "zh-HK": { translations: zh },
            "zh-TW": { translations: zh },
            zh: { translations: zh },
        },
        debug: true,
        defaultNs: "translations",
    });

export default i18n;
