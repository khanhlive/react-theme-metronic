import { I18N_INIT, I18N_SELECT } from "./I18nActions";

export function i18nReducer(
  state = {
    language: {
      key: "us",
      alt: "United States",
      title: "English (US)"
    },
    languages: [],
    phrases: {}
  },
  action
) {
  switch (action.type) {
    case I18N_INIT:
      return { ...state, languages: action.payload };
    case I18N_SELECT:
      return {
        ...state,
        language: action.payload.language,
        phrases: action.payload.phrases
      };
    default:
      return state;
  }
}
