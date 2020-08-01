import React from "react";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget,
  getJSON
} from "../../../common";

import { ChartJsGraph } from "../../../common/graphs/chartjs";

export default class ChartJs extends React.Component {
  state = {};

  componentDidMount() {
    getJSON("assets/api/graphs/chartjs.json").then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["ChartJs"]}
            icon="fa fa-fw fa-bar-chart-o"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <JarvisWidget id="wid-id-0" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Line Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph type="line" data={this.state["line-chart"]} />
                  </div>
                </div>
              </JarvisWidget>

              <JarvisWidget id="wid-id-1" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Radar Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph
                      type="radar"
                      data={this.state["radar-chart"]}
                    />
                  </div>
                </div>
              </JarvisWidget>

              <JarvisWidget id="wid-id-2" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Polar Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph
                      type="polarArea"
                      data={this.state["polar-chart"]}
                    />
                  </div>
                </div>
              </JarvisWidget>
            </article>

            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <JarvisWidget id="wid-id-3" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Bar Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph type="bar" data={this.state["bar-chart"]} />
                  </div>
                </div>
              </JarvisWidget>

              <JarvisWidget id="wid-id-4" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Doughnut Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph
                      type="doughnut"
                      data={this.state["doughnut-chart"]}
                    />
                  </div>
                </div>
              </JarvisWidget>

              <JarvisWidget id="wid-id-5" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-bar-chart-o" />
                  </span>
                  <h2>Pie Chart</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <ChartJsGraph type="pie" data={this.state["pie-chart"]} />
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
