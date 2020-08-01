import moment from "moment";

export const TOGGLE_NEW_TODO = "TOGGLE_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function toggleNewTodo() {
  return {
    type: TOGGLE_NEW_TODO
  };
}

export function toggleTodo(todo) {
  if (todo.completedAt) {
    todo.completedAt = null;
    todo.type = "Important";
  } else {
    todo.completedAt = moment();
    todo.type = "Completed";
  }
  return {
    type: TOGGLE_TODO,
    payload: todo
  };
}

export function addTodo(todo) {
  todo.createdAt = moment();
  todo.id = "todo-item-" + todo.createdAt.toDate();
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function updateTodo(todo) {
  switch (todo.type) {
    default:
    case "Critical":
      todo.completedAt = null;
      break;
    case "Important":
      todo.completedAt = null;
      break;
    case "Completed":
      todo.completedAt = moment();
      break;
  }
  return {
    type: UPDATE_TODO,
    payload: todo
  };
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  };
}
