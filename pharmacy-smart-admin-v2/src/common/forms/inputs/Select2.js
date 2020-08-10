import React from "react";
import $ from "jquery";

//import "select2/dist/js/select2.min";

export default class Select2 extends React.Component {
  componentDidMount() {
    $(this.refs.select).select2();
  }

  componentWillUnmount() {
    $(this.refs.select).select2("destroy");
  }

  render() {
    let { children, ...props } = this.props;
    return (
      <select {...props} ref="select">
        {children}
      </select>
    );
  }
}
