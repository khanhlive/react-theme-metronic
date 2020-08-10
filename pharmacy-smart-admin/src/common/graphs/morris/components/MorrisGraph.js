import React from "react";

const Raphael = require("raphael");
window["Raphael"] = Raphael;
require("morris.js/morris.min");
const Morris = window["Morris"];
export default class MorrisGraph extends React.Component {
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
      let options = {
        element: this.refs.morris,
        data: data
      };

      let keys = [
        "xkey",
        "ykeys",
        "labels",
        "pointSize",
        "hideHover",
        "stacked",
        "grid",
        "barColors",
        "formater",
        "events",
        "units",
        "xLabels",
        "xLabelFormat",
        "parseTime"
      ];

      keys.forEach(key => {
        if (!!this.props[key]) {
          options[key] = this.props[key];
        }
      });

      switch (this.props.type) {
        case "area":
          Morris.Area(options);
          break;
        case "bar":
          Morris.Bar(options);
          break;
        case "line":
          Morris.Line(options);
          break;
        case "donut":
          Morris.Donut(options);
          break;

        default:
          break;
      }
    }
  }

  render() {
    return <div className="chart no-padding" ref="morris" />;
  }
}
