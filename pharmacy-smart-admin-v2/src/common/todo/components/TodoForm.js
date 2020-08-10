import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodoActions from "../TodoActions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "Important"
    };
  }
  addTodo = () => {
    if (!this.state.title) return;
    this.props.addTodo(this.state);
    this.setState({
      title: "",
      type: "Important"
    });

    this.props.toggleNewTodo();
  };

  onTitleChange = value => {
    this.setState({
      title: value
    });
  };
  onTypeChange = value => {
    this.setState({
      type: value
    });
  };
  render() {
    return (
      <form name="newTodoForm" className="smart-form">
        <fieldset>
          <section>
            <label className="input">
              <input
                type="text"
                required
                className="input-lg"
                value={this.state.title}
                onChange={event => this.onTitleChange(event.target.value)}
                placeholder="What needs to be done?"
              />
            </label>
          </section>
          <section>
            <div className="col-xs-6">
              <label className="select">
                <select
                  className="input-sm"
                  value={this.state.type}
                  onChange={event => this.onTypeChange(event.target.value)}
                >
                  <option value="Critical">Critical</option>
                  <option value="Important">Important</option>
                  <option value="Completed">Completed</option>
                </select>{" "}
              </label>
            </div>
          </section>
        </fieldset>
        <footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addTodo}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.toggleNewTodo}
          >
            Cancel
          </button>
        </footer>
      </form>
    );
  }
}

export default connect(
  store => store.todo,
  dispatch => bindActionCreators(TodoActions, dispatch)
)(TodoForm);
