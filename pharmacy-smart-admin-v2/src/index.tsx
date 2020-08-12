import "./polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import AuthStore from './stores/AuthStore';
import StoreInit from './stores/storeInitializer'
const storeapp = StoreInit()
ReactDOM.render(
  <Provider {...storeapp}>
    <App />
  </Provider>,
  document.getElementById("smartadmin-root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
