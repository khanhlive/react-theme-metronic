import React from "react";
import UiValidate from "../../../common/forms/validation/UiValidate";
import { inject, observer } from "mobx-react";
import Stores from "../../../stores/storeIdentifier";

const Login = inject(
  Stores.AuthenticationStore,
  Stores.SessionStore,
  Stores.AccountStore,
  "storeapp"
)(
  observer(
    class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          loginModel: this.props.authenticationStore.loginModel || {},
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }
      onClick = (e) => {
        e.preventDefault();
      };
      onChange(e) {
        let _state = this.state;
        _state.loginModel[e.target.name] = e.target.value;
        this.setState(_state);
      }
      async onSubmit(e) {
        e.preventDefault();
        debugger;
        let loginModel = this.state.loginModel;
        //const { loginModel } = this.props.authenticationStore;
        await this.props.authenticationStore.login(loginModel);
        sessionStorage.setItem("rememberMe", loginModel.rememberMe ? "1" : "0");
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : "/";
      }
      onHandleChangeStore() {
        
        this.props.storeapp.add(1);
        // const { state } = this.props.location;
        // window.location = state ? state.from.pathname : "/";
      }
      render() {
        return (
          <div id="extr-page">
            <header id="header" className="animated fadeInDown">
              <div id="logo-group">
                <span id="logo">
                  <img src="assets/img/logo.png" alt="SmartAdmin" />
                </span>
              </div>

              <span id="extr-page-header-space">
                <span className="hidden-mobile hiddex-xs">
                  Need an account?
                </span>
                &nbsp;
                <a href="#/register" className="btn btn-danger">
                  Create account
                </a>
              </span>
            </header>
            <div id="main" role="main" className="animated fadeInDown">
              <div id="content" className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                    <h1 className="txt-color-red login-header-big">
                      SmartAdmin
                    </h1>

                    <div className="hero">
                      <div className="pull-left login-desc-box-l">
                        <h4 className="paragraph-header">
                          It's Okay to be Smart. Experience the simplicity of
                          SmartAdmin, everywhere you go!
                        </h4>

                        <div className="login-app-icons">
                          <a
                            href="#/dashboard/analytics"
                            className="btn btn-danger btn-sm"
                          >
                            Frontend Template
                          </a>
                          <span> </span>
                          <a
                            href="#/smartadmin/different-versions.html"
                            className="btn btn-danger btn-sm"
                          >
                            Find out more
                          </a>
                        </div>
                      </div>
                      <img
                        src="assets/img/demo/iphoneview.png"
                        className="pull-right display-image"
                        alt=""
                        style={{ width: "210px" }}
                      />
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h5 className="about-heading">
                          About SmartAdmin - Are you up to date?
                        </h5>

                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa.
                        </p>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h5 className="about-heading">
                          Not just your average template!
                        </h5>

                        <p>
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi voluptatem accusantium!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                    <div className="well no-padding">
                      <UiValidate ref={(ref) => (this.formLogin = ref)}>
                        <form
                          ref={(ref) => (this.formLogin1 = ref)}
                          id="login-form"
                          onSubmit={this.onSubmit}
                          className="smart-form client-form"
                        >
                          <header>Sign In</header>
                          <fieldset>
                            <section>
                              <label className="label">E-mail</label>
                              <label className="input">
                                <i className="icon-append fa fa-user" />
                                <input
                                  type="text"
                                  name="userNameOrEmailAddress"
                                  //data-smart-validate-input=""
                                  data-required=""
                                  //data-email=""
                                  onChange={this.onChange}
                                  data-message-required="Please enter your email address"
                                  //data-message-email="Please enter a VALID email address"
                                />
                                <b className="tooltip tooltip-top-right">
                                  <i className="fa fa-user txt-color-teal" />
                                  Please enter email address/username
                                </b>
                              </label>
                            </section>
                            <section>
                              <label className="label">Password</label>
                              <label className="input">
                                <i className="icon-append fa fa-lock" />
                                <input
                                  type="password"
                                  name="password"
                                  data-smart-validate-input=""
                                  data-required=""
                                  onChange={this.onChange}
                                  data-minlength="3"
                                  data-maxnlength="20"
                                  data-message="Please enter your email password"
                                />
                                <b className="tooltip tooltip-top-right">
                                  <i className="fa fa-lock txt-color-teal" />{" "}
                                  Enter your password
                                </b>
                              </label>

                              <div className="note">
                                <a href="#/forgot">Forgot password?</a>
                              </div>
                            </section>
                            <section>
                              <label className="checkbox">
                                <input
                                  type="checkbox"
                                  onChange={this.onChange}
                                  name="rememberMe"
                                  defaultChecked={true}
                                />
                                <i />
                                Stay signed in
                              </label>
                            </section>
                          </fieldset>
                          <footer>
                            <button type="submit" className="btn btn-primary">
                              Sign in
                            </button>
                            <button onClick={this.onHandleChangeStore.bind(this)} type="button" className="btn btn-primary">
                              Login
                            </button>
                          </footer>
                        </form>
                      </UiValidate>
                    </div>
                    <h5 className="text-center"> - Or sign in using -</h5>
                    <ul className="list-inline text-center">
                      <li>
                        <a
                          href="#/"
                          onClick={this.onClick}
                          className="btn btn-primary btn-circle"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          onClick={this.onClick}
                          className="btn btn-info btn-circle"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#/"
                          onClick={this.onClick}
                          className="btn btn-warning btn-circle"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  )
);
export default Login;
