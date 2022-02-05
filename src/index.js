import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import ThemeProvider from './func/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import store from './toolkitRedux/index';

// /////////////////////

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById('root'),
);
