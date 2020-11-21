import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './utils/reportWebVitals';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
