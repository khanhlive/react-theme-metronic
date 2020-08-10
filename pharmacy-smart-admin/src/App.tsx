import React, { Component } from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from "./store/configureStore";
// import { authRoutes } from "./routes";
// import { Layout } from "./common/layout";
import { inject, observer } from 'mobx-react';

@inject('storeapp')
@observer
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  changeValue() {
    this.props.storeapp.setModel('khanhnd2222');
  }
  render() {
    return (
      <React.Fragment>
        {/* <Provider store={store}>
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
        </Provider> */}
        <div>
          name: {this.props.storeapp.name}
          <button type="button" onClick={this.changeValue.bind(this)}>change</button>
        </div> </React.Fragment>
    );
  }
}

export default App;
