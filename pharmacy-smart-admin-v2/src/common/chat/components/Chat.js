import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as ChatActions from "../ChatActions";

import ChatUsers from "./ChatUsers";
import ChatBody from "./ChatBody";
import ChatForm from "./ChatForm";

class Chat extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ChatUsers users={this.props.users} />

        <ChatBody
          onMessageTo={this.props.messageTo}
          messages={this.props.messages}
        />

        <ChatForm
          replyTo={this.props.replyTo}
          onMessageSend={this.props.messageSend}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default connect(
  state => state.chat,
  dispatch => bindActionCreators(ChatActions, dispatch)
)(Chat);
