import React from "react";
import $ from "jquery";
import { newid } from "../../utils/functions";

export default class XEditable extends React.Component {
  componentDidMount() {
    import("x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js").then(
      () => {
        this.xEditable();
      }
    );
  }

  componentDidUpdate() {
    this.xEditable();
  }

  xEditable = () => {
    const element = $(this.refs.input);
    const props = this.props;

    const options = { ...props };

    // $log.log(initOptions);
    element.editable("destroy");
    element.editable(options);

    element.on("save", (e, params) => {
      if (this.props.onChange) {
        this.props.onChange(params.newValue);
      }
    });
  };

  onClick = e => {
    e.preventDefault();
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const { children, ...props } = this.props;
    const id = props.id || newid("x-editable");
    return (
      <a href="#/" onClick={this.onClick} id={id} ref="input">
        {children}
      </a>
    );
  }
}
