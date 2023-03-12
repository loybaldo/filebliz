import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./assets/fontawesome/css/all.css"
import "./assets/fontawesome/js/all";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
