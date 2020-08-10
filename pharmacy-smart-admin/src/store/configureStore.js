import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { config } from "../config/config";
import {
  handleBodyClasses,
  dumpLayoutToStorage,
  layoutReducer,
  layoutInit
} from "../common/layout";

import { userReducer, requestUserInfo } from "../common/user";
import { navigationReducer } from "../common/navigation";
import { chatReducer, chatInit } from "../common/chat";
import { eventsReducer } from "../common/calendar";
import { todoReducer } from "../common/todo";
import { i18nReducer, i18nInit } from "../common/i18n";
import { outlookReducer } from "../views/outlook";

import {
  voiceReducer,
  VoiceMiddleware,
  voiceControlOn
} from "../common/voice-control";

export const rootReducer = combineReducers({
  layout: layoutReducer,
  navigation: navigationReducer,
  outlook: outlookReducer,
  user: userReducer,
  chat: chatReducer,
  events: eventsReducer,
  voice: voiceReducer,
  todo: todoReducer,
  i18n: i18nReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      handleBodyClasses,
      dumpLayoutToStorage,
      VoiceMiddleware
    )
  )
);

store.dispatch(layoutInit());
store.dispatch(chatInit());
store.dispatch(requestUserInfo());

store.dispatch(i18nInit());



if (config.voice_command_auto) {
  store.dispatch(voiceControlOn());
}

export default store;
