import React, { Component } from "react";

export default class NavTopNotificationComponent extends Component {
  constructor(props) {
    super(props);
    let source = [
      {
        id: 1,
        time: "just now",
        labelColor: "label label-sm label-icon label-success",
        icon: "fa fa-plus",
        message: "New user registered. ",
      },
      {
        id: 2,
        time: "3 mins",
        labelColor: "label label-sm label-icon label-danger",
        icon: "fa fa-bolt",
        message: "Server #12 overloaded. ",
      },
      {
        id: 3,
        time: "10 mins",
        labelColor: "label label-sm label-icon label-warning",
        icon: "fa fa-bell-o",
        message: "Server #2 not responding. ",
      },
      {
        id: 4,
        time: "14 hrs",
        labelColor: "label label-sm label-icon label-info",
        icon: "fa fa-bullhorn",
        message: "Application error. ",
      },
      {
        id: 5,
        time: "2 days",
        labelColor: "label label-sm label-icon label-danger",
        icon: "fa fa-bolt",
        message: "Database overloaded 68%. ",
      },
      {
        id: 6,
        time: "3 days",
        labelColor: "label label-sm label-icon label-danger",
        icon: "fa fa-bolt",
        message: "A user IP blocked. ",
      },
      {
        id: 7,
        time: "4 days",
        labelColor: "label label-sm label-icon label-warning",
        icon: "fa fa-bell-o",
        message: "Storage Server #4 not responding dfdfdfd. ",
      },
      {
        id: 8,
        time: "5 days",
        labelColor: "label label-sm label-icon label-info",
        icon: "fa fa-bullhorn",
        message: "System Error. ",
      },
      {
        id: 9,
        time: "9 days",
        labelColor: "label label-sm label-icon label-danger",
        icon: "fa fa-bolt",
        message: "Storage server failed. ",
      },
    ];
    this.state = {
      dataSource: source,
    };
  }
  renderItems() {
    return (
      <ul
        className="dropdown-menu-list scroller"
        style={{ height: 250 }}
        data-handle-color="#637283"
      >
        {this.state.dataSource.map((item) => (
          <li key={`notification-item-${item.id}`}>
            <a href="javascript:;">
              <span className="time">{item.time}</span>
              <span className="details">
                <span className={item.labelColor}>
                  <i className={item.icon} />
                </span>
                {item.message}
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
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
          <span className="badge badge-default">
            {this.state.dataSource.length}
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="external">
            <h3>
              <span className="bold">
                {this.state.dataSource.length} pending
              </span>{" "}
              notifications
            </h3>
            <a href="extra_profile.html">view all</a>
          </li>
          <li>{this.renderItems()}</li>
        </ul>
      </React.Fragment>
    );
  }
}
