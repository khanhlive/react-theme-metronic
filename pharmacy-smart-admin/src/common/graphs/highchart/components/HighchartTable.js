import React from "react";

import $ from "jquery";
import Highcharts from "highcharts";
window["Highcharts"] = Highcharts;

require("smartadmin-plugins/bower_components/highchartTable/jquery.highchartTable");

class HighchartTable extends React.Component {
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps) {
    this.renderChart();
  }

  renderChart() {
    $(this.refs.table).highchartTable();
  }

  render() {
    let { children, ...props } = { ...this.props };
    return (
      <table {...props} ref="table">
        {children}
      </table>
    );
  }
}

export default HighchartTable;
