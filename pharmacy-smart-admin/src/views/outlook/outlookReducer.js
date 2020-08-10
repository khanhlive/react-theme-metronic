import {
  OUTLOOK_INIT,
  OUTLOOK_FETCH_MESSAGE,
  OUTLOOK_FETCH_FOLDER
} from "./OutlookActions";

const initialState = {
  folders: [],
  labels: [],
  space: {},
  folder: {
    labels: []
  },
  message: {
    contact: {}
  },
  messages: []
};

export function outlookReducer(state = initialState, action) {
  switch (action.type) {
    case OUTLOOK_INIT:
      return {
        ...state,
        folders: action.payload.data.folders,
        space: action.payload.data.space,
        labels: action.payload.data.labels
      };

    case OUTLOOK_FETCH_FOLDER:
      return {
        ...state,
        folder: state.folders.find(it => it.key === action.payload.key) || {
          labels: []
        },
        messages: action.payload.data
      };

    case OUTLOOK_FETCH_MESSAGE:
      return {
        ...state,
        message: action.payload.data
      };

    default:
      return state;
  }
}
