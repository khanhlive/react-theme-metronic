import React from "react";

export default class ChatForm extends React.Component {
  state = {
    message: "",
    replyTo: null,
    enterToSend: false
  };

  onKeyDown = event => {
    if (event.which === 13 && !event.shiftKey && this.state.enterToSend) {
      this.props.onMessageSend(this.state.message);
    } else {
      // this.onMessageSend()
    }
  };



  componentDidUpdate(prevProps) {
    if (
      this.props.replyTo &&
      (!prevProps.replyTo ||
        this.props.replyTo.username !== prevProps.replyTo.username)
    ) {
      this.setMessage(`${this.props.replyTo.username}, ${this.state.message}`);
    }
  }

  setMessage = value => {
    this.setState({
      message: value
    });
  };

  onSendTypeChange(value) {
    this.setState({
      enterToSend: value
    });
  }

  onSendMessage = () => {
    this.props.onMessageSend(this.state.message);
    this.setMessage("");
  };

  render() {
    return (
      <div className="chat-footer">
        {/* CHAT TEXTAREA */}
        <div className="textarea-div">
          <div className="typearea">
            <textarea
              onKeyPress={this.onKeyDown}
              placeholder="Write a reply..."
              id="textarea-expand"
              className="custom-scroll"
              value={this.state.message}
              onChange={event => this.setMessage(event.target.value)}
            />
          </div>
        </div>

        {/* CHAT REPLY/SEND */}
        <span className="textarea-controls">
          <button
            className="btn btn-sm btn-primary pull-right"
            onClick={this.onSendMessage}
          >
            Reply
          </button>
          <span
            className="pull-right smart-form"
            style={{ marginTop: "3px", marginRight: "10px" }}
          >
            <label className="checkbox pull-right">
              <input
                type="checkbox"
                name="subscription"
                id="subscription"
                value={this.state.enterToSend}
                onChange={event => this.onSendTypeChange(event.target.value)}
              />
              <i />
              Press <strong> ENTER </strong> to send
            </label>
          </span>
          <a href="#/" className="pull-left">
            <i className="fa fa-camera fa-fw fa-lg" />
          </a>
        </span>
      </div>
    );
  }
}
