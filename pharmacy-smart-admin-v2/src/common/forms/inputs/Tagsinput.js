import React from "react";
import $ from "jquery";
import "bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js";

export default class Tagsinput extends React.Component {
  componentDidMount() {
    $(this.refs.input).tagsinput();
  }

  render() {
    return <input type="text" {...this.props} ref="input" />;
  }
}
