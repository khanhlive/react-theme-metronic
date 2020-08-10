import React from "react";
import classnames from "classnames";

import { JarvisWidget } from "../../widgets";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodoActions from "../TodoActions";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class TodoWidget extends React.Component {
  render() {
    return (
      <JarvisWidget editbutton={false} color="blue" id="todo-widget">
        <header>
          <span className="widget-icon">
            <i className="fa fa-check txt-color-white" />
          </span>

          <h2> ToDo's </h2>

          <div className="widget-toolbar">
            <button
              className={classnames([
                "btn btn-xs btn-default",
                {
                  active: this.props.newTodo
                }
              ])}
              onClick={this.props.toggleNewTodo}
            >
              <i
                className={classnames({
                  "fa fa-plus": !this.props.newTodo,
                  "fa fa-times": this.props.newTodo
                })}
              />
              Add
            </button>
          </div>
        </header>
        <div>
          <div className="widget-body no-padding smart-form">
            <div
              className={classnames({
                hidden: !this.props.newTodo
              })}
            >
              <h5 className="todo-group-title">
                <i className="fa fa-plus-circle" /> New Todo
              </h5>
              <TodoForm />
            </div>

            <TodoList
              type="Critical"
              title="Critical Tasks"
              icon="warning"
              items={this.props.todos.filter(item => item.type === "Critical")}
            />

            <TodoList
              type="Important"
              title="Important Tasks"
              icon="exclamation"
              items={this.props.todos.filter(item => item.type === "Important")}
            />

            <TodoList
              type="Completed"
              title="Completed Tasks"
              icon="check"
              items={this.props.todos.filter(item => item.type === "Completed")}
            />
          </div>
        </div>
      </JarvisWidget>
    );
  }
}

export default connect(
  store => store.todo,
  dispatch => bindActionCreators(TodoActions, dispatch)
)(TodoWidget);
