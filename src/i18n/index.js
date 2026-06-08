import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import fr from './fr.json'

const stored =
  typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null

const browserLang =
  typeof navigator !== 'undefined' && navigator.language?.startsWith('en')
    ? 'en'
    : 'fr'

const initialLang = stored || browserLang

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: initialLang,
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang
}

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') document.documentElement.lang = lng
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lng)
})

export default i18n
