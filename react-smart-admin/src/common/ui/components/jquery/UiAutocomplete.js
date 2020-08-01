import React from "react";

import $ from "jquery";
import "smartadmin-plugins/es6/jquery-ui.min";

export default class UiAutocomplete extends React.Component {
  componentDidMount() {
    $(this.refs.input).autocomplete({
      source: this.props.source
    });
  }
  render() {
    const { source, ...props } = { ...this.props };

    return <input type="text" {...props} ref="input" />;
  }
}
