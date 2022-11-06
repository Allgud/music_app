import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { ThemeProvider } from './providers/ThemeProvider';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
