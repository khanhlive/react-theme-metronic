import React from "react";

import { BigBreadcrumbs, Stats, WidgetGrid } from "../../../common";

export default class Forum extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forum", "General"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <div className="col-sm-12">
              <div className="well">
                <table className="table table-striped table-forum">
                  <thead>
                    <tr>
                      <th colSpan={2}>Introduction</th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Topics
                      </th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Posts
                      </th>
                      <th
                        className="hidden-xs hidden-sm"
                        style={{ width: 200 }}
                      >
                        Last Post
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-globe fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">
                            Hello, welcome to SmartAdmin Forum!
                          </a>
                          <small>You can introduce yourself here</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-microphone fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">
                            News &amp; Announcements
                          </a>
                          <small>Latest news and reports</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-pencil fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">Forum Rules</a>
                          <small>
                            Please read carefully our forum rules before you
                            post
                          </small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                  </tbody>
                </table>
                <table className="table table-striped table-forum">
                  <thead>
                    <tr>
                      <th colSpan={2}>Projects</th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Topics
                      </th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Posts
                      </th>
                      <th
                        className="hidden-xs hidden-sm"
                        style={{ width: 200 }}
                      >
                        Last Post
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-table fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">
                            Business Requirement Docs
                          </a>
                          <small>Latest BRD docs</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-bar-chart-o fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">Project Discussions</a>
                          <small>Post all project related topics here</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-user fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">Clients</a>
                          <small>Client forum posts</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-dollar fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">Budget Meetings</a>
                          <small>Project budget discussions</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                  </tbody>
                </table>
                <table className="table table-striped table-forum">
                  <thead>
                    <tr>
                      <th colSpan={2}>Support</th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Topics
                      </th>
                      <th
                        className="text-center hidden-xs hidden-sm"
                        style={{ width: 100 }}
                      >
                        Posts
                      </th>
                      <th
                        className="hidden-xs hidden-sm"
                        style={{ width: 200 }}
                      >
                        Last Post
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-book fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">How to...</a>
                          <small>Maecenas nec odio et</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-question-circle fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">Questions and FAQs</a>
                          <small>Luctus pulvinar hendrerit id lorem</small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                    {/* TR */}
                    <tr>
                      <td className="text-center" style={{ width: 40 }}>
                        <i className="fa fa-user-md fa-2x text-muted" />
                      </td>
                      <td>
                        <h4>
                          <a href="#/views/forum-topic">User Guideline</a>
                          <small>
                            Cras dapibus vivamus elementum semper nisi
                          </small>
                        </h4>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>431</a>
                      </td>
                      <td className="text-center hidden-xs hidden-sm">
                        <a href="#/" onClick={this.onClick}>1342</a>
                      </td>
                      <td className="hidden-xs hidden-sm">
                        by
                        <a href="#/" onClick={this.onClick}>John Doe</a>
                        <br />
                        <small>
                          <i>January 1, 2014</i>
                        </small>
                      </td>
                    </tr>
                    {/* end TR */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
