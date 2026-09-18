import { createContext, useContext, useState } from 'react'
import translations from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => setLanguage((l) => (l === 'es' ? 'en' : 'es'))

  // t('about.title') -> texto en el idioma actual; si falta la clave devuelve la clave
  const t = (key) => {
    let value = translations[language]
    for (const part of key.split('.')) {
      value = value?.[part]
      if (value === undefined) return key
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
