import {
  CHAT_INIT,
  CHAT_MESSAGE_TO,
  CHAT_MESSAGE_SEND
} from "./ChatActions";

import { USER_INFO } from "../user/UserActions";

const initialState = {
  user: null,
  users: [],
  replyTo: null,
  messages: []
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INFO: 
      return {
        ...state,
        user: action.payload
      }
    case CHAT_INIT:
      return {
        ...state,
        messages: action.payload.messages,
        users: action.payload.users
      };

    case CHAT_MESSAGE_TO:
      return {
        ...state,
        replyTo: action.payload
      };

    case CHAT_MESSAGE_SEND:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            user: action.payload.user,
            body: action.payload.message,
            date: new Date()
          }
        ]
      };

    default:
      return state;
  }
}
