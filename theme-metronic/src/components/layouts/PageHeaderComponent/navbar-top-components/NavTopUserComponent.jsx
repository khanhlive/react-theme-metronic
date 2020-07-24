import React, { Component } from "react";

export default class NavTopUserComponent extends Component {
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
          <img
            className="img-circle"
            src="/assets/admin/layout/img/avatar3_small.jpg"
          />
          <span className="username username-hide-on-mobile">Nick </span>
          <i className="fa fa-angle-down" />
        </a>
        <ul className="dropdown-menu dropdown-menu-default">
          <li>
            <a href="extra_profile.html">
              <i className="icon-user" /> My Profile{" "}
            </a>
          </li>
          <li>
            <a href="page_calendar.html">
              <i className="icon-calendar" /> My Calendar{" "}
            </a>
          </li>
          <li>
            <a href="inbox.html">
              <i className="icon-envelope-open" /> My Inbox{" "}
              <span className="badge badge-danger">3 </span>
            </a>
          </li>
          <li>
            <a href="page_todo.html">
              <i className="icon-rocket" /> My Tasks{" "}
              <span className="badge badge-success">7 </span>
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="extra_lock.html">
              <i className="icon-lock" /> Lock Screen{" "}
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="icon-key" /> Log Out{" "}
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
