import React from "react";

import { BigBreadcrumbs, WidgetGrid } from "../../../common";

export default class PricingTables extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Misc", "Pricing Tables"]}
            icon="home"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>

        <WidgetGrid>
          <div className="row">
            <div className="col-sm-12">
              <div className="well well-light">
                <h1>
                  Professional, <small>4 Plans</small>
                </h1>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-success pricing-big">
                      <div className="panel-heading">
                        <h3 className="panel-title">Light version</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            <strong>FREE</strong>
                          </h1>
                        </div>
                        <div className="price-features">
                          <ul className="list-unstyled text-left">
                            <li>
                              <i className="fa fa-check text-success" /> 2 years
                              access <strong> to all storage locations</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> storage
                            </li>
                            <li>
                              <i className="fa fa-check text-success" /> Limited
                              <strong> download quota</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Cash on Delivery</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" /> All
                              time <strong> updates</strong>
                            </li>
                            <li>
                              <i className="fa fa-times text-danger" />
                              <strong>Unlimited</strong> access to all files
                            </li>
                            <li>
                              <i className="fa fa-times text-danger" />
                              <strong>Allowed</strong> to be exclusing per sale
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-footer text-align-center">
                        <button className="btn btn-primary btn-block">
                          Download <span> now!</span>
                        </button>
                        <div>
                          Or <a href="#/" onClick={this.onClick}>Sign up</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-teal pricing-big">
                      <div className="panel-heading">
                        <h3 className="panel-title">Personal Project</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $99<span className="subscript">/ mo</span>
                          </h1>
                        </div>
                        <div className="price-features">
                          <ul className="list-unstyled text-left">
                            <li>
                              <i className="fa fa-check text-success" /> 2 years
                              access <strong> to all storage locations</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> storage
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              Superbig <strong> download quota</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Cash on Delivery</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" /> All
                              time <strong> updates</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> access to all files
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Allowed</strong> to be exclusing per sale
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-footer text-align-center">
                        <button className="btn btn-primary btn-block">
                          Purchase <span>via Paypal</span>
                        </button>
                        <div>
                          <a href="#/" onClick={this.onClick}>
                            <i>We accept all major credit cards</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                      <img
                        src="assets/img/ribbon.png"
                        className="ribbon"
                        alt=""
                      />
                      <div className="panel-heading">
                        <h3 className="panel-title">Developer Bundle</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $350<span className="subscript">/ mo</span>
                          </h1>
                        </div>
                        <div className="price-features">
                          <ul className="list-unstyled text-left">
                            <li>
                              <i className="fa fa-check text-success" /> 2 years
                              access <strong> to all storage locations</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> storage
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              Superbig <strong> download quota</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Cash on Delivery</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" /> All
                              time <strong> updates</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> access to all files
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Allowed</strong> to be exclusing per sale
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-footer text-align-center">
                        <button className="btn btn-primary btn-block">
                          Purchase <span>via Paypal</span>
                        </button>
                        <div>
                          <a href="#/" onClick={this.onClick}>
                            <i>We accept all major credit cards</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-darken pricing-big">
                      <div className="panel-heading">
                        <h3 className="panel-title">Premium Package</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $999<span className="subscript">/ mo</span>
                          </h1>
                        </div>
                        <div className="price-features">
                          <ul className="list-unstyled text-left">
                            <li>
                              <i className="fa fa-check text-success" />
                              Lifetime access
                              <strong> to all storage locations</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> storage
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              Superbig <strong> download quota</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Cash on Delivery</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" /> All
                              time <strong> updates</strong>
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Unlimited</strong> access to all files
                            </li>
                            <li>
                              <i className="fa fa-check text-success" />
                              <strong>Allowed</strong> to be exclusing per sale
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-footer text-align-center">
                        <button className="btn btn-primary btn-block">
                          Purchase <span>via Paypal</span>
                        </button>
                        <div>
                          <a href="#/" onClick={this.onClick}>
                            <i>We accept all major credit cards</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <h1>
                  Simple, <small>4 Plans</small>
                </h1>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-darken">
                      <div className="panel-heading">
                        <h3 className="panel-title">Bronze</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $10<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>1 Account</td>
                            </tr>
                            <tr className="active">
                              <td>1 Project</td>
                            </tr>
                            <tr>
                              <td>100K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>100MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer text-align-center">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-success"
                          role="button"
                        >
                          Sign Up
                        </a>
                        1 month FREE trial
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary">
                      <img
                        src="assets/img/ribbon.png"
                        className="ribbon"
                        alt=""
                      />
                      <div className="panel-heading">
                        <h3 className="panel-title">Silver</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $20<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>2 Account</td>
                            </tr>
                            <tr className="active">
                              <td>5 Project</td>
                            </tr>
                            <tr>
                              <td>100K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>200MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer text-align-center">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-success"
                          role="button"
                        >
                          Sign Up
                        </a>
                        1 month FREE trial
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-greenLight">
                      <div className="panel-heading">
                        <h3 className="panel-title">Gold</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $35<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>5 Account</td>
                            </tr>
                            <tr className="active">
                              <td>20 Project</td>
                            </tr>
                            <tr>
                              <td>300K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>500MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer text-align-center">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-success"
                          role="button"
                        >
                          Sign Up
                        </a>
                        1 month FREE trial
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary">
                      <div className="panel-heading bg-color-blueDark txt-color-white">
                        <h3 className="panel-title">Diamond</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $99<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Unlimited Account</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Project</td>
                            </tr>
                            <tr>
                              <td>3000K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer text-align-center">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-success"
                          role="button"
                        >
                          Sign Up
                        </a>
                        1 month FREE trial
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <h1>
                  Simple, <small>6 Plans</small>
                </h1>
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-orange">
                      <div className="panel-heading">
                        <h3 className="panel-title">Bronze</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $10<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>1 Account</td>
                            </tr>
                            <tr className="active">
                              <td>1 Project</td>
                            </tr>
                            <tr>
                              <td>100K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>100MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-orange txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-purple">
                      <img
                        src="assets/img/ribbon.png"
                        className="ribbon"
                        alt=""
                      />
                      <div className="panel-heading">
                        <h3 className="panel-title">Silver</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $20<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>2 Account</td>
                            </tr>
                            <tr className="active">
                              <td>5 Project</td>
                            </tr>
                            <tr>
                              <td>100K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>200MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-purple txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-greenLight">
                      <div className="panel-heading">
                        <h3 className="panel-title">Gold</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $35<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>5 Account</td>
                            </tr>
                            <tr className="active">
                              <td>20 Project</td>
                            </tr>
                            <tr>
                              <td>300K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>500MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-greenLight txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-blue">
                      <div className="panel-heading">
                        <h3 className="panel-title">Diamond</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $99<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Unlimited Account</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Project</td>
                            </tr>
                            <tr>
                              <td>3000K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-blue txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-redLight">
                      <div className="panel-heading">
                        <h3 className="panel-title">Gold</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $35<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>5 Account</td>
                            </tr>
                            <tr className="active">
                              <td>20 Project</td>
                            </tr>
                            <tr>
                              <td>300K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>500MB Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-redLight txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="panel panel-pink">
                      <div className="panel-heading">
                        <h3 className="panel-title">Diamond</h3>
                      </div>
                      <div className="panel-body no-padding text-align-center">
                        <div className="the-price">
                          <h1>
                            $99<span className="subscript">/mo</span>
                          </h1>
                          <small>1 month FREE trial</small>
                        </div>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Unlimited Account</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Project</td>
                            </tr>
                            <tr>
                              <td>3000K API Access</td>
                            </tr>
                            <tr className="active">
                              <td>Unlimited Storage</td>
                            </tr>
                            <tr>
                              <td>Custom Cloud Services</td>
                            </tr>
                            <tr className="active">
                              <td>Weekly Reports</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="panel-footer no-padding">
                        <button className="btn bg-color-pink txt-color-white btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
