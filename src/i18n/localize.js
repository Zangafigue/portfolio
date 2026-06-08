import { useTranslation } from 'react-i18next'

// Les champs de contenu bilingues dans src/data/*.js sont des objets
// { en: ..., fr: ... } (la valeur peut être une chaîne OU un tableau).
// pick() renvoie la variante de la langue courante ; les valeurs simples
// (chaînes, nombres) sont renvoyées telles quelles.
export function pick(value, lang) {
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    ('en' in value || 'fr' in value)
  ) {
    return value[lang] ?? value.en ?? value.fr
  }
  return value
}

// Hook : renvoie une fonction loc() liée à la langue active.
export function useLoc() {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage === 'en' ? 'en' : 'fr'
  return (value) => pick(value, lang)
}
