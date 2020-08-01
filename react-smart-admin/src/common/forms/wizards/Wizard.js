import React from "react";
import $ from "jquery";

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      validSteps: []
    };
  }

  componentDidMount() {
    this.$element.on("click", "[data-smart-wizard-tab]", (e, el) => {
      e.preventDefault();
      const step = parseInt($(el).data("smartWizardTab"), 10);
      this.setStep(step);
    });

    this.$next.on("click", this.next);
    this.$prev.on("click", this.prev);

    this.setStep(1);
  }

  next = e => {
    e.preventDefault();

    const { validSteps, currentStep } = { ...this.state };

    if (this.$form.data("validator") && !this.$form.valid()) {
      if (validSteps.indexOf(currentStep) > -1) {
        validSteps.splice(validSteps.indexOf(currentStep), 1);
      }
      this.$form.data("validator").focusInvalid();
    } else {
      if (validSteps.indexOf(currentStep) === -1) {
        validSteps.push(currentStep);
      }
      this.$element
        .find("[data-smart-wizard-tab=" + currentStep + "]")
        .addClass("complete")
        .find(".step")
        .html('<i class="fa fa-check"></i>');
    }

    this.setState({
      validSteps
    });

    if (
      validSteps.length < this.stepsCount &&
      validSteps.indexOf(currentStep) > -1
    ) {
      const nextStep = currentStep <= this.stepsCount ? currentStep + 1 : 1;
      this.setStep(nextStep);
    } else if (validSteps.indexOf(currentStep) > -1) {
      this.complete();
    } else {
      return false;
    }
  };

  prev = e => {
    e.preventDefault();
    if (this.state.currentStep > 1) {
      this.setStep(this.state.currentStep - 1);
    }
  };

  setStep(step) {
    this.setState({
      currentStep: step
    });
    $("[data-smart-wizard-pane=" + step + "]", this.$element)
      .addClass("active")
      .siblings("[data-smart-wizard-pane]")
      .removeClass("active");
    $("[data-smart-wizard-tab=" + step + "]", this.$element)
      .addClass("active")
      .siblings("[data-smart-wizard-tab]")
      .removeClass("active");

    if (step === 1) {
      this.$prev.find("button").attr("disabled", "disabled");
    } else {
      this.$prev.find("button").removeAttr("disabled");
    }
  }

  complete = () => {
    const formData = {};
    this.$form.serializeArray().forEach(field => {
      formData[field.name] = field.value;
    });
    if (this.props.onComplete) {
      this.props.onComplete(formData);
    }
  };

  get $element() {
    return $(this.refs.wizard);
  }
  get $prev() {
    return $("[data-smart-wizard-prev]", this.$element);
  }
  get $next() {
    return $("[data-smart-wizard-next]", this.$element);
  }
  get $form() {
    return this.$element.closest("form");
  }
  get stepsCount() {
    return $("[data-smart-wizard-tab]", this.$element).length;
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
