import React from "react";

import { BigBreadcrumbs, Stats, WidgetGrid } from "../../../common";

import SparklineContainer from "../../../common/graphs/inline/components/SparklineContainer";

export default class Timeline extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["App Views", "Timeline"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <SparklineContainer>
          <WidgetGrid>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="well well-sm">
                  {/* Timeline Content */}
                  <div className="smart-timeline">
                    <ul className="smart-timeline-list">
                      <li>
                        <div className="smart-timeline-icon">
                          <img
                            src="assets/img/avatars/sunny.png"
                            width={32}
                            height={32}
                            alt="user"
                          />
                        </div>
                        <div className="smart-timeline-time">
                          <small>just now</small>
                        </div>
                        <div className="smart-timeline-content">
                          <p>
                            <a href="#/" onClick={this.onClick}>
                              <strong>Trip to Adalaskar</strong>
                            </a>
                          </p>
                          <p>Check out my tour to Adalaskar</p>
                          <p>
                            <a href="#/"
                              onClick={this.onClick}
                              className="btn btn-xs btn-primary"
                            >
                              <i className="fa fa-file" /> Read the post
                            </a>
                          </p>
                          <img
                            src="assets/img/superbox/superbox-thumb-4.jpg"
                            alt="img"
                            width={150}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="smart-timeline-icon">
                          <i className="fa fa-file-text" />
                        </div>
                        <div className="smart-timeline-time">
                          <small>1 min ago</small>
                        </div>
                        <div className="smart-timeline-content">
                          <p>
                            <strong>
                              Meeting invite for "GENERAL GNU" [
                              <a href="#/" onClick={this.onClick}>
                                <i>Go to my calendar</i>
                              </a>
                              ]
                            </strong>
                          </p>
                          <div className="well well-sm display-inline">
                            <p>
                              Will you be able to attend the meeting -{" "}
                              <strong> 10:00 am</strong> tomorrow?
                            </p>
                            <button className="btn btn-xs btn-default">
                              Confirm Attendance
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="smart-timeline-icon bg-color-greenDark">
                          <i className="fa fa-bar-chart-o" />
                        </div>
                        <div className="smart-timeline-time">
                          <small>5 hrs ago</small>
                        </div>
                        <div className="smart-timeline-content">
                          <p>
                            <strong className="txt-color-greenDark">
                              24hrs User Feed
                            </strong>
                          </p>
                          <div
                            className="sparkline"
                            data-sparkline-type="compositeline"
                            data-sparkline-spotradius-top={5}
                            data-sparkline-color-top="#3a6965"
                            data-sparkline-line-width-top={3}
                            data-sparkline-color-bottom="#2b5c59"
                            data-sparkline-spot-color="#2b5c59"
                            data-sparkline-minspot-color-top="#97bfbf"
                            data-sparkline-maxspot-color-top="#c2cccc"
                            data-sparkline-highlightline-color-top="#cce8e4"
                            data-sparkline-highlightspot-color-top="#9dbdb9"
                            data-sparkline-width="170px"
                            data-sparkline-height="40px"
                            data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]"
                            data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]"
                          />
                          <br />
                        </div>
                      </li>
                      <li>
                        <div className="smart-timeline-icon">
                          <i className="fa fa-user" />
                        </div>
                        <div className="smart-timeline-time">
                          <small>yesterday</small>
                        </div>
                        <div className="smart-timeline-content">
                          <p>
                            <a href="#/" onClick={this.onClick}>
                              <strong>Update user information</strong>
                            </a>
                          </p>
                          <p>
                            Curabitur ullamcorper ultricies nisi. Nam eget dui.
                            Etiam rhoncus. Maecenas tempus, tellus eget
                            condimentum rhoncus, sem quam semper libero, sit
                            amet adipiscing sem neque sed ipsum. Nam quam nunc,
                            blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus. Donec
                            vitae sapien ut libero venenatis faucibus.
                          </p>
                          Tellus eget condimentum rhoncus, sem quam semper
                          libero, sit amet adipiscing sem neque sed ipsum. Nam
                          quam nunc, blandit
                          <ul className="list-inline">
                            <li>
                              <img
                                src="assets/img/superbox/superbox-thumb-6.jpg"
                                alt="img"
                                width={50}
                              />
                            </li>
                            <li>
                              <img
                                src="assets/img/superbox/superbox-thumb-5.jpg"
                                alt="img"
                                width={50}
                              />
                            </li>
                            <li>
                              <img
                                src="assets/img/superbox/superbox-thumb-7.jpg"
                                alt="img"
                                width={50}
                              />
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="smart-timeline-icon">
                          <i className="fa fa-pencil" />
                        </div>
                        <div className="smart-timeline-time">
                          <small>12 Mar, 2013</small>
                        </div>
                        <div className="smart-timeline-content">
                          <p>
                            <a href="#/" onClick={this.onClick}>
                              <strong>Nabi Resource Report</strong>
                            </a>
                          </p>
                          <p>
                            Ean vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis.
                          </p>
                          <a href="#/"
                            onClick={this.onClick}
                            className="btn btn-xs btn-default"
                          >
                            Read more
                          </a>
                        </div>
                      </li>
                      <li className="text-center">
                        <a href="#/"
                          onClick={this.onClick}
                          className="btn btn-sm btn-default"
                        >
                          <i className="fa fa-arrow-down text-muted" /> LOAD
                          MORE
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* END Timeline Content */}
                </div>
              </div>
            </div>
          </WidgetGrid>
        </SparklineContainer>
      </div>
    );
  }
}
