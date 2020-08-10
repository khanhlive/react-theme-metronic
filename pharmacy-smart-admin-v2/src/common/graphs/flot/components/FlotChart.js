import React from "react";
import $ from "jquery";

import "smartadmin-plugins/es6/flot-bundle.min";

export default class FlotChart extends React.Component {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      this.renderChart(this.props.data);
    }
  }

  renderChart(data) {
    if (data && this.container && this.container.offsetParent) {
      $.plot(this.container, data, this.props.options);
    }
  }

  render() {
    let className = this.props.className || "chart";
    return (
      <div
        ref={container => (this.container = container)}
        className={className}
      />
    );
  }
}
