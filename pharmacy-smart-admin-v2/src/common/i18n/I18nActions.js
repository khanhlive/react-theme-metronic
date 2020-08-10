import { getJSON } from "../utils/functions";

export const I18N_INIT = "I18N_INIT";
export const I18N_SELECT = "I18N_SELECT";

export function i18nInit() {
  return dispatch => {
    return getJSON("assets/api/langs/languages.json").then(data => {
      dispatch({
        type: I18N_INIT,
        payload: data
      });
    });
  };
}

export function i18nSelect(language) {
  return dispatch => {
    return getJSON("assets/api/langs/" + language.key + ".json").then(data => {
      dispatch({
        type: I18N_SELECT,
        payload: {
          language,
          phrases: data
        }
      });
    });
  };
}
