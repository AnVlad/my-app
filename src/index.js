import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import ThemeProvider from './func/ThemeProvider/ThemeProvider';

// /////////////////////

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

  document.getElementById('root'),
);
