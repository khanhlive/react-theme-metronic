import "./polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
//import initializeStores from './stores/storeInitializer';
//import Utils from './utils/utils';
//import abpUserConfigurationService from './services/abpUserConfigurationService';
import StoreApp from './stores/StoreApp';
//import AuthenticationStore from './stores/authenticationStore'
//import { observable } from 'mobx'

//var abp = window['abp'];
//Utils.setLocalization();
//const stores = initializeStores();const storeapp = new StoreApp();
// setTimeout(() => {
//   storeapp.name = 'khanhnd1111'
// }, 1000)
const storeapp = new StoreApp();
ReactDOM.render(
  (
    <Provider storeapp={storeapp}>
      <App />
    </Provider>
  ),
  document.getElementById("smartadmin-root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();