export const EVENTS_ADD_EXTERNAL = 'EVENTS_ADD_EXTERNAL';
export const EVENTS_REMOVE_EXTERNAL = 'EVENTS_REMOVE_EXTERNAL';
export const EVENTS_DROP_EXTERNAL = 'EVENTS_DROP_EXTERNAL';
export const EVENTS_TOGGLE_REMOVE_ON_DROP = 'EVENTS_TOGGLE_REMOVE_ON_DROP';


export function addExternal(_event) {
  const event = Object.assign({}, {
    title: "Untitled Event",
    description: "no description",
    className: "bg-color-darken txt-color-white",
    icon: "fa-info"
  }, _event);
  return {
    type: EVENTS_ADD_EXTERNAL,
    payload: event
  }
}

export function removeExternal(event) {
  return {
    type: EVENTS_REMOVE_EXTERNAL,
    payload: event
  }
}

export function dropExternal(event) {
  return (dispatch, getState) => {
    if(getState().events.removeAfterDrop){
      dispatch(removeExternal(event))
    }
    return dispatch({
      type: EVENTS_DROP_EXTERNAL,
      payload: event
    })

  }
}

export function toggleRemoveOnDrop() {
  return {
    type: EVENTS_TOGGLE_REMOVE_ON_DROP
  }
}