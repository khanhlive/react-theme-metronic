import React, { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";
import LoginModel from '../../../../models/Login/loginModel'

@inject('storeapp', Stores.AccountStore, Stores.AuthenticationStore, Stores.SessionStore)
@observer
class PhongBan extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentWillMount = () => {
    console.log("PhongBan will mount");
  };

  componentDidMount = () => {
    console.log("PhongBan mounted");
  };

  componentDidUpdate = () => {
    console.log("PhongBan did update");
  };

  componentWillUnmount = () => {
    console.log("PhongBan will unmount");
  };

  onHandleChangeStore() {
    this.props.storeapp.changeName('khanhnd');
    let model = new LoginModel();
    model.userNameOrEmailAddress = 'khanhndsdsdds';
    this.props.authenticationStore.loginModel = model;

    // model = {
    //   userNameOrEmailAddress: "admin",
    //   password: "123qwe",
    //   rememberClient: true,
    // };
    // //this.props.storeapp.setModel(model == "khanhnd" ? "dungtt" : "khanhnd");
    // this.props.storeapp.login(model);
    // this.props.authStore.login(model);
  }

  render() {
    return (
      <div className="PhongBanWrapper">
        PhongBanWrapper storeapp:{this.props.storeapp.name}
        <br />
        PhongBanWrapper authStore:{" "}
        <br></br>
        email: {this.props.authenticationStore.loginModel ? this.props.authenticationStore.loginModel.userNameOrEmailAddress : ''}
        <button type="button" onClick={this.onHandleChangeStore.bind(this)}>
          Change Value
        </button>
      </div>
    );
  }
}

export default PhongBan;
