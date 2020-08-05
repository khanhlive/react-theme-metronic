import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import Stores from "../../../../stores/storeIdentifier";

const PhongBan = inject(
  Stores.AuthenticationStore,
  Stores.SessionStore,
  Stores.AccountStore,
  "storeapp"
)(
  //Stores.AuthenticationStore,Stores.SessionStore, Stores.AccountStore)(
  observer(
    class PhongBan extends PureComponent {
      constructor(props) {
        super(props);
        debugger;
        this.state = {
          hasError: false,
        };
      }

      componentWillMount = () => {
        console.log("PhongBan will mount");
      };

      componentDidMount = () => {
        console.log("PhongBan mounted");
      };

      componentWillReceiveProps = (nextProps) => {
        console.log("PhongBan will receive props", nextProps);
      };

      componentWillUpdate = (nextProps, nextState) => {
        console.log("PhongBan will update", nextProps, nextState);
      };

      componentDidUpdate = () => {
        console.log("PhongBan did update");
      };

      componentWillUnmount = () => {
        console.log("PhongBan will unmount");
      };

      onHandleChangeStore() {
        let model = this.props.storeapp.loginModel;
        model = {
          userNameOrEmailAddress: "admin",
          password: "123qwe",
          rememberClient: true,
        };
        //this.props.storeapp.setModel(model == "khanhnd" ? "dungtt" : "khanhnd");
        this.props.storeapp.login(model);
      }

      render() {
        return (
          <div className="PhongBanWrapper">
            PhongBanWrapper storeapp:{" "}
            {this.props.storeapp.loginModel
              ? this.props.storeapp.loginModel.userNameOrEmailAddress
              : ""}
            <br></br>
            {/* userNameOrEmailAddress:
            {this.props.authenticationStore.loginModel.userNameOrEmailAddress} */}
            <button type="button" onClick={this.onHandleChangeStore.bind(this)}>
              Change Value
            </button>
          </div>
        );
      }
    }
  )
);

PhongBan.propTypes = {
  // bla: PropTypes.string,
};

PhongBan.defaultProps = {
  // bla: 'test',
};

export default PhongBan;
