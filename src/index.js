import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/mukta-600.ttf'
import './index.css';

import '../src/styles/layout.css'
import '../src/styles/products.css'
import '../src/styles/authenticate.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


