import "./polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import StoreInit from './stores/storeInitializer';
import Utils from './utils/utils';
import abpUserConfigurationService from './services/abpUserConfigurationService';
import * as moment from 'moment';
import registerServiceWorker from './serviceWorker';

declare var abp: any;

Utils.setLocalization();

abpUserConfigurationService.getAll().then(data => {
  Utils.extend(true, abp, data.data.result);
  abp.clock.provider = Utils.getCurrentClockProvider(data.data.result.clock.provider);

  moment.locale(abp.localization.currentLanguage.name);

  if (abp.clock.provider.supportsMultipleTimezone) {
    moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
  }

  const storeapp = StoreInit()
  ReactDOM.render(
    <Provider {...storeapp}>
      <App />
    </Provider>,
    document.getElementById("smartadmin-root")
  );

  registerServiceWorker();
});



// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
