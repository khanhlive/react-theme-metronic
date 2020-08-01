import React from "react";
import { Moment, HtmlRender } from "../../../common/utils/components";

export default class ChatBody extends React.Component {
  componentDidUpdate() {
    this.refs.body.scrollTop = this.refs.body.scrollHeight;
  }
  render() {
    let messages = this.props.messages || [];

    return (
      <div id="chat-body" className="chat-body custom-scroll" ref="body">
        <ul>
          {messages.map((message, idx) => {
            return (
              <li className="message" key={"chat-message-" + idx}>
                <img
                  className="message-picture online"
                  src={message.user.picture}
                  alt={message.user.username}
                />

                <div className="message-text">
                  <time>
                    <Moment date={message.date} />
                  </time>

                  <a href="#/"
                    onClick={this.props.onMessageTo.bind(this, message.user)}
                    className="username"
                  >
                    {message.user.username}
                  </a>

                  <HtmlRender html={message.body} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
