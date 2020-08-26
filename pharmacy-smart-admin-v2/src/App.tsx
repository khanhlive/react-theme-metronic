import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import './lib/css/dx.generic.kd-theme-v3.css'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import SignalRAspNetCoreHelper from './lib/signalRAspNetCoreHelper';
import { Provider } from "react-redux";
import { inject } from 'mobx-react';

import store from "./store/configureStore";
import { authRoutes } from "./routes";
import { Layout } from "./common/layout";
import SessionStore from './stores/sessionStore';
import Stores from './stores/storeIdentifier';
import ProtectedRoute from './ProtectedRoute';
import Login from './views/auth/components/Login';
import Logout from './views/auth/components/Logout';

export interface IAppProps {
  sessionStore?: SessionStore;
}

@inject(Stores.SessionStore)
class App extends React.Component<IAppProps> {
  async UNSAFE_componentWillMount() {
    await this.props.sessionStore!.getCurrentLoginInformations();

    if (!!this.props.sessionStore!.currentLogin.user && this.props.sessionStore!.currentLogin.application.features['SignalR']) {
      if (this.props.sessionStore!.currentLogin.application.features['SignalR.AspNetCore']) {
        SignalRAspNetCoreHelper.initSignalR();
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <HashRouter>
            <Switch>

              {/* {authRoutes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    //name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })} */}
              {/* <Route path="/login" name="login" component={Login} /> */}
              <Route key="login" path="/login" render={(props) => <Login {...props}></Login>} />
              {/* <Route path="/logout" name="logout" component={Logout} /> */}
              <Route key="logout" path="/logout" render={(props) => <Logout {...props}></Logout>} />
              {/* <Route path="/" name="Home" component={Layout} /> */}
              {/* <ProtectedRoute path="/" render={(props: any) => <Layout {...props} exact />} /> */}
              <ProtectedRoute path="/" component={Layout} />
            </Switch>
          </HashRouter>
        </Provider>
        {/* <div style={{ textAlign: 'center' }}>

          <TinhThanh></TinhThanh>
          <PhongBan></PhongBan>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
