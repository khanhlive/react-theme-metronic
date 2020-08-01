import { USER_INFO } from "./UserActions";

export function userReducer(
  state = {
    username: null,
    picture: null,
    activity: null
  },
  action
) {
  switch (action.type) {
    case USER_INFO:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
