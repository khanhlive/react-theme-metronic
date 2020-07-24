import React, { Component } from "react";
import NavTopNotificationComponent from "./navbar-top-components/NavTopNotificationComponent";
import NavTopInboxComponent from "./navbar-top-components/NavTopInboxComponent";
import NavTopTaskComponent from './navbar-top-components/NavTopTaskComponent';
import NavTopUserComponent from './navbar-top-components/NavTopUserComponent';

export default class HeaderTopMenuComponent extends Component {
  render() {
    return (
      <div className="top-menu">
        <ul className="nav navbar-nav pull-right">
          {/* BEGIN NOTIFICATION DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li
            className="dropdown dropdown-extended dropdown-notification"
            id="header_notification_bar"
          >
            <NavTopNotificationComponent></NavTopNotificationComponent>
          </li>
          {/* END NOTIFICATION DROPDOWN */}
          {/* BEGIN INBOX DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li
            className="dropdown dropdown-extended dropdown-inbox"
            id="header_inbox_bar"
          >
            <NavTopInboxComponent></NavTopInboxComponent>
          </li>
          {/* END INBOX DROPDOWN */}
          {/* BEGIN TODO DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li
            className="dropdown dropdown-extended dropdown-tasks"
            id="header_task_bar"
          >
              <NavTopTaskComponent></NavTopTaskComponent>
            </li>
          {/* END TODO DROPDOWN */}
          {/* BEGIN USER LOGIN DROPDOWN */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li className="dropdown dropdown-user">
            <NavTopUserComponent></NavTopUserComponent>
            </li>
          {/* END USER LOGIN DROPDOWN */}
          {/* BEGIN QUICK SIDEBAR TOGGLER */}
          {/* DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte */}
          <li className="dropdown dropdown-quick-sidebar-toggler">
            <a href="javascript:;" className="dropdown-toggle">
              <i className="icon-logout" />
            </a>
          </li>
          {/* END QUICK SIDEBAR TOGGLER */}
        </ul>
      </div>
    );
  }
}
