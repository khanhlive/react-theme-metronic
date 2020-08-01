import React from "react";
import $ from "jquery";
import "smartadmin-plugins/es6/jarvis.widget.es6";

import {widgetDefaults} from "./WidgetDefaults";


export default class WidgetGrid extends React.Component {
  render() {
    return (
      <section id="widget-grid" ref={grid => (this.grid = grid)}>
        {this.props.children}
      </section>
    );
  }
  componentDidMount() {
    $(this.grid).jarvisWidgets(widgetDefaults);
  }
}
