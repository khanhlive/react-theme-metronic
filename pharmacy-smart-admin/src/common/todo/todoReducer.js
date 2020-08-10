import moment from "moment";

import {
  TOGGLE_NEW_TODO,
  TOGGLE_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "./TodoActions";

export function todoReducer(
  state = {
    newTodo: false,
    todos: [
      {
        id: "542d47f5e3355bf80ebdf83f",
        type: "Critical",
        title: "Inbox",
        completedAt: null,
        createdAt: moment().subtract(2, "days")
      },
      {
        id: "542d4835e3355bf80ebdf840",
        type: "Important",
        title: "Animations",
        completedAt: null,
        createdAt: moment().startOf("day")
      },
      {
        id: "542d483ee3355bf80ebdf841",
        type: "Important",
        title: "Directives",
        completedAt: null,
        createdAt: moment().add(1, "days")
      }
    ]
  },
  action
) {
  switch (action.type) {
    case TOGGLE_NEW_TODO:
      return { ...state, newTodo: !state.newTodo };
    case TOGGLE_TODO:
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id !== action.payload.id) {
            return item;
          } else {
            return {
              ...item,
              ...action.payload
            };
          }
        })
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(_ => _.id !== action.payload.id)
      };

    default:
      return state;
  }
}
