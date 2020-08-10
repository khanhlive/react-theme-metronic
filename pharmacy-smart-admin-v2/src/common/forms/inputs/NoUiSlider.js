import React from "react";
import $ from "jquery";
import noUiSlider from "nouislider";

export default class NoUiSlider extends React.Component {
  componentDidMount() {
    const slider = this.refs.slider;
    const element = $(slider);
    const props = this.props;
    element.addClass("noUiSlider");

    const options = {
      range: {
        min: props.rangeMin ? parseInt(props.rangeMin, 10) : 0,
        max: props.rangeMax ? parseInt(props.rangeMax, 10) : 1000
      },
      start: props.start
    };

    if (props.step) options.step = parseInt(props.step, 10);

    // if (props.connect) options.connect = props.connect == 'true' ? true : props.connect;

    noUiSlider.create(slider, options);

    slider.noUiSlider.on("change", () => {
      if (props.update) {
        $(props.update).text(JSON.stringify(element.val()));
      }
    });
  }

  render() {
    return <div ref="slider" />;
  }
}
