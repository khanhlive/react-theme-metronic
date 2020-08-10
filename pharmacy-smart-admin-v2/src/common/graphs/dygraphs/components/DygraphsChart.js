import React from "react";
import Dygraph from "dygraphs/index.es5";

const defaultOptions = {};
export default class DygraphsChart extends React.Component {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      this.renderChart(this.props.data);
    }
  }
  renderChart(data) {
    if (data) {
      new Dygraph(
        this.refs.dygraph,
        data,
        this.props.options
          ? {
              ...defaultOptions,
              ...this.props.options
            }
          : defaultOptions
      );
    }
  }

  render() {
    return <div style={this.props.style} ref="dygraph" />;
  }
}
