import './index.css'
import './language/i18n'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function reactRender() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

window.onload = () => {
  console.log('language :: ', window.navigator.language)
  reactRender()
}
