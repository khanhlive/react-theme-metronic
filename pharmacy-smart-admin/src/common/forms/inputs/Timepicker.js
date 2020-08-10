import React from "react";
import $ from "jquery";
import "bootstrap-timepicker/js/bootstrap-timepicker.min.js";

export default class Timepicker extends React.Component {
  componentDidMount() {
    $(this.refs.input).timepicker();
  }

  render() {
    return <input type="text" {...this.props} ref="input" />;
  }
}
