import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './App';
import { setUpDarkMode } from './components/DarkMode';

setUpDarkMode()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
