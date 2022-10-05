import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App'

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
=======
import { createRoot } from 'react-dom/client'
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
// import './css/style.css'

const root = createRoot(document.querySelector('.root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
>>>>>>> 81fd5e99b3554f2798a27ce24fbb1f9b141885d5
