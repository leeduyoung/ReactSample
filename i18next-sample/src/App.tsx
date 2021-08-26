import './App.css'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_TYPES } from './language/i18n'

function App() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  const onChangeLanguage = () => {
    i18n.changeLanguage(currentLang === LANGUAGE_TYPES.KO ? LANGUAGE_TYPES.EN : LANGUAGE_TYPES.KO)
  }

  return (
    <div className="App">
      <button onClick={onChangeLanguage}>
        {currentLang === LANGUAGE_TYPES.KO ? '영어로 전환' : '한국어로 전환'}
      </button>
      <p>{t('test')}</p>
    </div>
  )
}

export default App
