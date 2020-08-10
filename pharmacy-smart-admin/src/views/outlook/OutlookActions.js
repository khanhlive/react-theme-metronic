import { getJSON } from "../../common/utils";

export const OUTLOOK_INIT = "OUTLOOK_INIT";
export const OUTLOOK_FETCH_FOLDER = "OUTLOOK_FETCH_FOLDER";
export const OUTLOOK_FETCH_MESSAGE = "OUTLOOK_FETCH_MESSAGE";

export function outlookInit() {
  return dispatch => {
    return getJSON("assets/api/outlook/outlook.json").then(res => {
      dispatch({
        type: OUTLOOK_INIT,
        payload: {
          data: res.data
        }
      });
    });
  };
}

export function outlookFetchFolder(folder) {
  return dispatch => {
    return getJSON(`assets/api/outlook/${folder}.json`).then(res => {
      dispatch({
        type: OUTLOOK_FETCH_FOLDER,
        payload: {
          data: res.data,
          key: folder
        }
      });
    });
  };
}

export function outlookFetchMeesage(id) {
  return dispatch => {
    return getJSON(`assets/api/outlook/message.json`).then(res => {
      dispatch({
        type: OUTLOOK_FETCH_MESSAGE,
        payload: {
          data: res.data,
          key: id
        }
      });
    });
  };
}
