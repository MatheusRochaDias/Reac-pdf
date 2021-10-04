import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { printPlugin, RenderPrintProps } from '@react-pdf-viewer/print';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

