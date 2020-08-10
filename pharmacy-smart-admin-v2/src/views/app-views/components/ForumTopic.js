import React from "react";

import { BigBreadcrumbs, Stats } from "../../../common";

export default class ForumTopic extends React.Component {
  onClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={["Forum", "Topic"]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
          <Stats />
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="well">
              <table className="table table-striped table-forum">
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <a href="#/views/forum-general"> Projects </a> &gt;
                      Business Requirement Docs
                    </th>
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
                    <th className="hidden-xs hidden-sm" style={{ width: 200 }}>
                      Last Post
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* TR */}
                  <tr className="warning">
                    <td className="text-center" style={{ width: 40 }}>
                      <i className="glyphicon glyphicon-pushpin fa-2x text-danger" />
                    </td>
                    <td>
                      <h4>
                        <a href="#/views/forum-post">Welcome message</a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr className="warning">
                    <td className="text-center" style={{ width: 40 }}>
                      <i className="glyphicon glyphicon-pushpin fa-2x text-danger" />
                    </td>
                    <td>
                      <h4>
                        <a href="#/views/forum-post">Latest Updates</a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr>
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">
                          Nam quam nunc blandit vel
                        </a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr>
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">
                          Maecenas nec odio et ante tincidun
                        </a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr>
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">
                          Donec sodales sagittis magna
                        </a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr>
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">
                          Sed consequat, leo eget bibendum sodales
                        </a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr>
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">
                          Consectetuer adipiscing elit
                        </a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr className="locked">
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">This is a locked topic!</a>
                        <small>
                          <a href="#/views/profile">John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
                  {/* TR */}
                  <tr className="closed">
                    <td colSpan={2}>
                      <h4>
                        <a href="#/views/forum-post">This is a closed topic!</a>
                        <small>
                          <a href="#/" onClick={this.onClick}>John Doe</a> on{" "}
                          <em>January 1, 2014</em>
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
              <div className="text-center">
                <ul className="pagination pagination-sm">
                  <li className="disabled">
                    <a href="#/" onClick={this.onClick}>Prev</a>
                  </li>
                  <li className="active">
                    <a href="#/" onClick={this.onClick}>1</a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick}>2</a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick}>3</a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick}>...</a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick}>99</a>
                  </li>
                  <li>
                    <a href="#/" onClick={this.onClick}>Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
