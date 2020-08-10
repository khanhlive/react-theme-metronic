import React from "react";

import {
  Stats,
  BigBreadcrumbs,
  WidgetGrid,
  JarvisWidget,
  getJSON
} from "../../../common";
import { DygraphsChart } from "../../../common/graphs/dygraphs";

export default class Dygraphs extends React.Component {
  state = {};
  componentDidMount() {
    getJSON("assets/api/graphs/dygraphs.json").then(data => {
      this.setState(data);
    });
  }
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Dygraphs"]}
            icon="fa fa-fw fa-bar-chart-o"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12 col-md-12 col-lg-12">
              <div className="alert alert-info">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 className="no-margin">
                      Dygraphs is a fast, flexible open source JavaScript
                      charting library.
                    </h3>
                    <h5>Features</h5>
                    <ul>
                      <li>
                        Handles <strong>huge data sets</strong>: dygraphs plots
                        millions of points without getting bogged down.
                      </li>
                      <li>
                        <strong>Interactive out of the box</strong>: zoom, pan
                        and mouseover are on by default.
                      </li>
                      <li>
                        Strong support for <strong>error bars</strong> /
                        confidence intervals.
                      </li>
                      <li>
                        <strong>Highly customizable</strong>: using options and
                        custom callbacks, you can make dygraphs do almost
                        anything.
                      </li>
                      <li>
                        dygraphs is <strong>highly compatible</strong>: it works
                        in all major browsers (including IE8). You can even{" "}
                        <strong>pinch to zoom</strong> on mobile/tablet devices!
                      </li>
                      <li>
                        There's an <strong>active community</strong> developing
                        and supporting dygraphs.
                      </li>
                    </ul>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h4>JSX Example</h4>
                    <pre className="prettyprint margin-top-10">
                      {`<DygraphsChart data={this.state.data} options={{
    customBars: true,
    title: 'Daily Temperatures in New York vs. San Francisco',
    ylabel: 'Temperature (F)',
    legend: 'always',
    showRangeSelector: true
}} style={{width: '100%', height: '300px'}}/>`}
                    </pre>
                  </div>
                </div>
              </div>

              <JarvisWidget id="wid-id-0" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    {" "}
                    <i className="fa fa-bar-chart-o" />{" "}
                  </span>
                  <h2>No roll period</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <DygraphsChart
                      data={this.state.data}
                      options={{
                        customBars: true,
                        title:
                          "Daily Temperatures in New York vs. San Francisco",
                        ylabel: "Temperature (F)",
                        legend: "always",
                        showRangeSelector: true
                      }}
                      style={{ width: "100%", height: "300px" }}
                    />
                  </div>
                </div>
              </JarvisWidget>

              <JarvisWidget id="wid-id-1" editbutton={false}>
                <header>
                  <span className="widget-icon">
                    {" "}
                    <i className="fa fa-bar-chart-o" />{" "}
                  </span>
                  <h2>No roll (timestamp)</h2>
                </header>
                <div>
                  <div className="widget-body">
                    <p className="alert alert-success">
                      Roll period of 14 timesteps, custom range selector height
                      and plot color.
                    </p>
                    {/* this is what the user will see */}

                    <DygraphsChart
                      data={this.state.data}
                      options={{
                        rollPeriod: 14,
                        showRoller: true,
                        customBars: true,
                        ylabel: "Temperature (F)",
                        legend: "always",

                        showRangeSelector: true,
                        rangeSelectorHeight: 30,
                        rangeSelectorPlotStrokeColor: "yellow",
                        rangeSelectorPlotFillColor: "lightyellow"
                      }}
                      style={{ width: "100%", height: "300px" }}
                    />
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
