import React, { Component } from "react";

export default class NavTopNotificationComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <a
          href="javascript:;"
          className="dropdown-toggle"
          data-toggle="dropdown"
          data-hover="dropdown"
          data-close-others="true"
        >
          <i className="icon-bell" />
          <span className="badge badge-default">7 </span>
        </a>
        <ul className="dropdown-menu">
          <li className="external">
            <h3>
              <span className="bold">12 pending</span> notifications
            </h3>
            <a href="extra_profile.html">view all</a>
          </li>
          <li>
            <ul
              className="dropdown-menu-list scroller"
              style={{ height: 250 }}
              data-handle-color="#637283"
            >
              <li>
                <a href="javascript:;">
                  <span className="time">just now</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-success">
                      <i className="fa fa-plus" />
                    </span>
                    New user registered.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">3 mins</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span>
                    Server #12 overloaded.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">10 mins</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-warning">
                      <i className="fa fa-bell-o" />
                    </span>
                    Server #2 not responding.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">14 hrs</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-info">
                      <i className="fa fa-bullhorn" />
                    </span>
                    Application error.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">2 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span>
                    Database overloaded 68%.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">3 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span>
                    A user IP blocked.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">4 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-warning">
                      <i className="fa fa-bell-o" />
                    </span>
                    Storage Server #4 not responding dfdfdfd.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">5 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-info">
                      <i className="fa fa-bullhorn" />
                    </span>
                    System Error.{" "}
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="time">9 days</span>
                  <span className="details">
                    <span className="label label-sm label-icon label-danger">
                      <i className="fa fa-bolt" />
                    </span>
                    Storage server failed.{" "}
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
