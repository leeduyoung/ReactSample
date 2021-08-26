import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import langEn from './lang.en.json'
import langKo from './lang.ko.json'

export const LANGUAGE_TYPES = {
  EN: 'en-US',
  KO: 'ko-KR',
}

const resources = {
  [LANGUAGE_TYPES.EN]: {
    translations: langEn,
  },
  [LANGUAGE_TYPES.KO]: {
    translations: langKo,
  },
}

i18n.use(initReactI18next).init({
  resources: resources,
  lng: LANGUAGE_TYPES.EN,
  fallbackLng: {
    en: [LANGUAGE_TYPES.EN],
    default: [LANGUAGE_TYPES.KO],
  },
  debug: true,
  defaultNS: 'translations',
  ns: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
