import './index.scss';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   }
    // },
    lng: "ua", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    supportedLngs: ['ua', 'en'],
    backend: {
      loadPath: process.env.PUBLIC_URL + '/assets/locales/{{lng}}/translation.json'
    },

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    // react: { useSuspense: true }
  });

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,

);

// reportWebVitals();
