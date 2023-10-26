import { UPDATE_CHAT_LOG } from "../../constants/SendAndUpdateChat";
const initialState = {
  chatLog: [],
};

export const chatLogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CHAT_LOG:
      return {
        ...state,
        chatLog: payload,
      };

    default:
      return state;
  }
};
