import {
  ADD_MESSAGE,
  SET_MESSAGES,
  LAST_MESSAGE,
  LIST_CHATS,
} from "../../constants/Chats";
import { updateObject } from "../../../utils/updateObject";

const initialState = {
  messages: [],
  lastMessag: {},
  WSchatList: [],
  icomingChatList: [],
};

const addMessage = (state, action) => {
  return {
    messages: [action.message, ...state.messages],
  };
};

const setMessages = (state, action) => {
  return {
    messages: action.messages,
  };
};

const lastMessage = (state, action) => {
  return {
    lastMessag: action.lastMessage,
  };
};

const wschatlist = (state, action) => {
  return {
    WSchatList: action.chatListws,
  };
};
const wscIncominghatlist = (state, action) => {
  return {
    icomingChatList: action.icomingChatList,
  };
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action);

    case SET_MESSAGES:
      return setMessages(state, action);

    case LAST_MESSAGE:
      return lastMessage(state, action);

    // case WS_CHAT_LIST:
    //   return wschatlist(state, action);
    default:
      return state;
  }
};

export const lastChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAST_MESSAGE:
      return lastMessage(state, action);
    default:
      return state;
  }
};

export const WSChatListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CHATS:
      return wschatlist(state, action);
    default:
      return state;
  }
};
export const incomingChatListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CHATS:
      return wscIncominghatlist(state, action);
    default:
      return state;
  }
};
