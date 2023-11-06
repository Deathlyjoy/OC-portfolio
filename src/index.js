import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */
window.$secondaryLanguage = 'fr';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

