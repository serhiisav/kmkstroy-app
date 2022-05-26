import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "ua",
        supportedLngs: ['ua', 'en'],
        backend: {
            loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json'
        },
        // debug: true,
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
            lookupLocalStorage: 'i18nextLng',
        },
        // react: { useSuspense: false }
    });


export default i18n;