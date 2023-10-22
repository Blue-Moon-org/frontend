import { actionTypesCreateChat } from "../../constants/Chat";

const initialState = {
  data: {},
  error: "",
  loading: false,
};

export const createChatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesCreateChat.CREATE_CHAT_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesCreateChat.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesCreateChat.CREATE_CHAT_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
