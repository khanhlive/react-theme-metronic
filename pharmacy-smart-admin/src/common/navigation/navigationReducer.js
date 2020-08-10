import { NAVIGATION_INIT, OPEN_SHORTCUT, CLOSE_SHORTCUT } from "./NavigationActions";

export function navigationReducer(
  state = {
    shortcutOpen: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case NAVIGATION_INIT:
      return {
        ...state,
        items: action.payload
      };

    case OPEN_SHORTCUT:
      return {
        ...state,
        shortcutOpen: true
      };
    case CLOSE_SHORTCUT:
      return {
        ...state,
        shortcutOpen: false
      };


    default:
      return state;
  }
}
