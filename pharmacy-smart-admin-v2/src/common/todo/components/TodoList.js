import React from "react";
import classnames from "classnames";

import { Moment } from "../../utils";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodoActions from "../TodoActions";

class TodoList extends React.Component {
  toggleItem = item => {
    this.props.toggleTodo(item);
  };
  deleteItem = item => {
    this.props.deleteTodo(item);
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.items.length !== this.props.items.length;
  }
  render() {
    return (
      <div>
        <h5 className="todo-group-title">
          <i className={classnames("fa", "fa-" + this.props.icon)} />
          {this.props.title}(
          <small className="num-of-tasks">{this.props.items.length}</small>)
        </h5>
        <ul className="todo" ref="todoList">
          {this.props.items.map((item, idx) => {
            return (
              <li
                className={classnames({ complete: item.completedAt })}
                key={item.id}
                data-todo-id={item.id}
              >
                <span className="handle">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onClick={()=>this.toggleItem(item)}
                      defaultChecked={item.completedAt}
                      name="checkbox-inline"
                    />
                    <i />
                  </label>
                </span>
                <p>
                  <strong>Ticket #{idx + 1}</strong>
                  <em> - </em>
                  <big>{item.title}</big>
                  <span className="text-muted">{item.description}</span>
                  <span className="date">
                    <Moment date={item.createdAt} />
                  </span>
                  <button
                    onClick={()=>this.deleteItem(item)}
                    className="btn btn-link btn-xs"
                  >
                    <i className="fa fa-trash" />
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default connect(
  store => store.todo,
  dispatch => bindActionCreators(TodoActions, dispatch)
)(TodoList);
