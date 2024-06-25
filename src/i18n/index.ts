import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from '../store';
import en from './translations/en.json';
import ar from './translations/ar.json';

const languageResources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: store.getState().general?.appLanguage,
  fallbackLng: 'en',
  resources: languageResources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
