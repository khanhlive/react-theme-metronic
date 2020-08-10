import React, { PureComponent } from "react";
import { inject, observer } from "mobx-react";
//import Stores from "../../../../stores/storeIdentifier";
@inject("storeapp")
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
    this.props.storeapp.setModel('khanhnd');
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
        {this.props.storeapp.loginModel
          ? this.props.storeapp.loginModel!.userNameOrEmailAddress
          : ""}
        <br />
        PhongBanWrapper authStore:{" "}
        {/* {this.props.authStore.loginModel
          ? this.props.authStore.loginModel?.userNameOrEmailAddress
          : ""} */}
        <br></br>
        <ul>
          {this.props.storeapp.items!.map((item: any) => (
            <li>{item}</li>
          ))}
        </ul>
        {/* userNameOrEmailAddress:
            {this.props.authenticationStore.loginModel.userNameOrEmailAddress} */}
        <button type="button" onClick={this.onHandleChangeStore.bind(this)}>
          Change Value
        </button>
      </div>
    );
  }
}

export default PhongBan;
