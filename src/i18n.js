import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpApi from 'i18next-http-backend';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ChainedBackend from 'i18next-chained-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
// import Backend from 'i18next-chained-backend'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    // .use(HttpApi)
    // .use(Backend)
    .use(ChainedBackend)
    .init({
        // lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "ua",
        supportedLngs: ['ua', 'en'],
        backend: {
            backends: [
                resourcesToBackend((lng, namespace, callback) => {
                    // import(`./locales/${language}/${namespace}.json`)
                    import(`../public/assets/locales/${lng}/${namespace}.json`)
                        .then((resources) => {
                            // console.log(namespace);
                            // console.log(lng);
                            // console.log(resources.about);
                            callback(null, resources)
                        })
                        .catch((error) => {
                            callback(error, null)
                        })
                }),
                HttpBackend
            ],
            backendOptions: [{
                loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json'
            }]
        },
        // backend: {
        //     loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json'
        // },
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