import { getJSON } from "../../common/utils/functions";

export const CHAT_INIT = 'CHAT_INIT';
export const CHAT_MESSAGE_TO = 'CHAT_MESSAGE_TO';
export const CHAT_MESSAGE_SEND = 'CHAT_MESSAGE_SEND';


export function chatInit(){
  return dispatch => {
    return getJSON('assets/api/chat/chat.json')
      .then(data=>{
        dispatch({
          type: CHAT_INIT,
          payload: data
        })
      })
  }
}

export function messageTo(user){
  return {
    type: CHAT_MESSAGE_TO,
    payload: user
  }
}

export function messageSend(message){
  return (dispatch, getState)=>{
    return dispatch({
      type: CHAT_MESSAGE_SEND,
      payload: {
        user: getState().user,
        message
      }
    })
  }

}
