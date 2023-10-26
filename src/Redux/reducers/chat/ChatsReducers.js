import { ADD_MESSAGE, SET_MESSAGES } from "../../constants/Chats";
import { updateObject } from "../../../utils/updateObject";

const initialState = {
  messages: [],
};

const addMessage = (state, action) => {
  return updateObject(state, {
    messages: [action.message, ...state.messages],
  });
};

const setMessages = (state, action) => {
  return updateObject(state, {
    messages: action.messages,
  });
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action);
    case SET_MESSAGES:
      return setMessages(state, action);
    default:
      return state;
  }
};
