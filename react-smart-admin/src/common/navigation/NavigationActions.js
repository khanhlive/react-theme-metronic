export const NAVIGATION_INIT = 'NAVIGATION_INIT';
export const OPEN_SHORTCUT = 'OPEN_SHORTCUT';
export const CLOSE_SHORTCUT = 'CLOSE_SHORTCUT';

export function navigationInit(items) {
  return dispatch => {
    return dispatch({
      type: NAVIGATION_INIT,
      payload: items
    })
  }
}

export function openShortcut() {
  return {
    type: OPEN_SHORTCUT
  };
}

export function closeShortcut() {
  return {
    type: CLOSE_SHORTCUT
  };
}