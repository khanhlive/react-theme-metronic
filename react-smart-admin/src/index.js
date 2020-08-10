import "./polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import initializeStores from './stores/storeInitializer';
import Utils from './utils/utils';
import abpUserConfigurationService from './services/abpUserConfigurationService';
import StoreApp from './stores/StoreApp';
import AuthenticationStore from './stores/authenticationStore'
import { observable } from 'mobx'

var abp = window.abp;
Utils.setLocalization();
const stores = initializeStores();
const storeapp = observable(StoreApp);
const authStore = new AuthenticationStore();
// setInterval(function () {
//     storeapp.add(12)
//     // {
//     //     userNameOrEmailAddress: "admin111",
//     //     password: "123qwe",
//     //     rememberClient: true,
//     // }
// }, 1000)
ReactDOM.render(
    (
        <Provider {...stores} storeapp={storeapp} authStore={authStore}>

            <App />
        </Provider>
    ),
    document.getElementById("smartadmin-root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();