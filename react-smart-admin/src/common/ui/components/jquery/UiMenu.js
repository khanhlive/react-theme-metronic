import React from "react";
import ReactDOM from "react-dom";

import $ from "jquery";
import "smartadmin-plugins/es6/jquery-ui.min";

export default class UiMenu extends React.Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).menu();
  }
  render() {
    return this.props.children;
  }
}
