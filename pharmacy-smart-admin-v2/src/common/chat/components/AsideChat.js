import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import $ from "jquery";
import * as ChatActions from "../ChatActions";
import AsideChatUser from "./AsideChatUser";

class AsideChatWidget extends React.Component {
  state = {
    open: false,
    filter: ""
  };

  UNSAFE_componentWillMount() { }

  openToggle = e => {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
    $(this.refs.chatUsersList).slideToggle();
  };

  onFilterChange = value => {
    this.setState({
      filter: value
    });
  };

  render = () => {
    const users = this.props.chat.users || [];

    return (

      <li
        className={classnames({
          "chat-users": true,
          "top-menu-invisible": true,
          open: this.state.open
        })}
      >
        <a href="#/" onClick={this.openToggle}>
          <i className="fa fa-lg fa-fw fa-comment-o">
            <em className="bg-color-pink flash animated">!</em>
          </i>
            &nbsp;
            <span className="menu-item-parent">
            Smart Chat API <sup>beta</sup>
          </span>
        </a>
        <ul ref="chatUsersList">
          <li>
            <div className="display-users">
              <input
                className="form-control chat-user-filter"
                placeholder="Filter"
                type="text"
                value={this.state.filter}
                onChange={event => this.onFilterChange(event.target.value)}
              />
              <dl>
                {users
                  .filter(user => {
                    const filter = this.state.filter.trim();
                    return (
                      !filter ||
                      user.username
                        .toLowerCase()
                        .search(filter.toLowerCase()) > -1
                    );
                  })
                  .map((user, idx) => {
                    return (
                      <AsideChatUser
                        key={"aside-chat-user-" + idx}
                        user={user}
                      />
                    );
                  })}
              </dl>
            </div>
          </li>
        </ul>
      </li>

    );
  };
}

export default connect(
  state => {
    const { chat, user } = { ...state };
    return {
      chat,
      user
    };
  },
  dispatch => {
    return bindActionCreators(ChatActions, dispatch);
  }
)(AsideChatWidget);
