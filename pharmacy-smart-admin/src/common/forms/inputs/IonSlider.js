import React from "react";
import $ from "jquery";
import "ion-rangeslider/js/ion.rangeSlider.min.js";

export default class IonSlider extends React.Component {
  componentDidMount() {
    $(this.refs.input).ionRangeSlider();
  }

  render() {
    return <input {...this.props} ref="input" />;
  }
}
