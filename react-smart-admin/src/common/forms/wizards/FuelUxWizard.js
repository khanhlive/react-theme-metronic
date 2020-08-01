import React from "react";
import $ from "jquery";
import "fuelux/js/wizard.js";

export default class FuelUxWizard extends React.Component {
  componentDidMount() {
    this.wizard();
  }

  wizard() {
    const element = $(this.refs.wizard);
    const wizard = element.wizard();

    const $form = element.find("form");

    wizard.on("actionclicked.fu.wizard", (e, data) => {
      if ($form.data("validator")) {
        if (!$form.valid()) {
          $form.data("validator").focusInvalid();
          e.preventDefault();
        }
      }
    });

    wizard.on("finished.fu.wizard", (e, data) => {
      const formData = {};
      $form.serializeArray().forEach(field => {
        formData[field.name] = field.value;
      });
      if (this.props.onComplete) {
        this.props.onComplete(formData);
      }
    });
  }

  render() {
    const { children, onComplete, ...props } = this.props;
    return (
      <div {...props} ref="wizard">
        {children}
      </div>
    );
  }
}
