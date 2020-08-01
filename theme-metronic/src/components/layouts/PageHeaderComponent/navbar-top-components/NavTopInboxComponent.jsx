import React, { Component } from "react";

export default class NavTopInboxComponent extends Component {
  constructor(props) {
    super(props);
    let source = [
      {
        id: 1,
        url: "inbox.html?a=view",
        imageUrl: "/assets/admin/layout/img/avatar2.jpg",
        fromUser: "Lisa Wong",
        date: "Just Now",
        message:
          "Vivamus sed auctor nibh congue nibh. auctor nibh auctornibh...",
      },
      {
        id: 2,
        url: "inbox.html?a=view",
        imageUrl: "/assets/admin/layout/img/avatar3.jpg",
        fromUser: "Richard Doe",
        date: "16 mins",
        message:
          "Vivamus sed auctor nibh congue nibh. auctor nibh auctornibh...",
      },
      {
        id: 3,
        url: "inbox.html?a=view",
        imageUrl: "/assets/admin/layout/img/avatar1.jpg",
        fromUser: "Bob Nilson",
        date: "2 hrs",
        message:
          "Vivamus sed congue nibh auctor nibh congue nibh. auctor nibhauctor nibh...",
      },
      {
        id: 4,
        url: "inbox.html?a=view",
        imageUrl: "/assets/admin/layout/img/avatar2.jpg",
        fromUser: "Lisa Wong",
        date: "40 mins",
        message: "Vivamus sed auctor 40% nibh congue nibh...",
      },
      {
        id: 5,
        url: "inbox.html?a=view",
        imageUrl: "/assets/admin/layout/img/avatar2.jpg",
        fromUser: "Richard Doe",
        date: "40 mins",
        message: "Vivamus sed auctor 40% nibh congue nibh...",
      },
    ];
    this.state = {
      dataSource: source,
    };
    this.renderMessages = this.renderMessages.bind(this);
  }
  renderMessages() {
    return (
      <ul
        className="dropdown-menu-list scroller"
        style={{ height: 275 }}
        data-handle-color="#637283"
      >
        {this.state.dataSource.map((item) => (
          <li key={`inbox-item-${item.id}`}>
            <a href={item.url}>
              <span className="photo">
                <img src={item.imageUrl} className="img-circle" />
              </span>
              <span className="subject">
                <span className="from">{item.fromUser}</span>
                <span className="time">{item.date}</span>
              </span>
              <span className="message">{item.message}</span>
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
          <i className="icon-envelope-open" />
          <span className="badge badge-default">
            {this.state.dataSource.length}
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="external">
            <h3>
              You have{" "}
              <span className="bold">{this.state.dataSource.length}</span>{" "}
              Messages
            </h3>
            <a href="page_inbox.html">view all</a>
          </li>
          <li>{this.renderMessages()}</li>
        </ul>
      </React.Fragment>
    );
  }
}
