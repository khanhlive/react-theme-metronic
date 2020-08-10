import React from 'react';
import logo from './logo.svg';
import './App.css';
import TinhThanh from './components/TinhThanh/TinhThanh'
import PhongBan from './components/PhongBan/PhongBan'
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/configureStore";
import { authRoutes } from "./routes";
import { Layout } from "./common/layout";

function App() {
  return (


    <React.Fragment>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {authRoutes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  //name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}

            <Route path="/" name="Home" component={Layout} />
          </Switch>
        </HashRouter>
      </Provider>
      <div style={{ textAlign: 'center' }}>

        <TinhThanh></TinhThanh>
        <PhongBan></PhongBan>
      </div>
    </React.Fragment>
  );
}

export default App;
