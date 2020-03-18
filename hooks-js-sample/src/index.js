import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeContext } from './context/ThemeContext';
import ToastUI from './context/ToastContext';

ReactDOM.render(
  <ToastUI>
    <ThemeContext.Provider value={"primary"}>
      <App />
    </ThemeContext.Provider>
  </ToastUI>, 
  document.getElementById('root')
);

serviceWorker.unregister();
