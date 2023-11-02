import {
  actionTypesCreateChat,
  actionTypesChatList,
  actionTypesChatImage,
} from "../../constants/Chat";

const initialState = {
  data: {},
  error: "",
  loading: false,

  // chatlist
  dataChatList: {},
  errorChatList: "",
  loadingChatList: false,
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

export const chatListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypesChatList.CHAT_LIST_LOADING:
      return {
        ...state,
        dataChatList: null,
        errorChatList: "",
        loadingChatList: true,
      };

    case actionTypesChatList.CHAT_LIST_SUCCESS:
      return {
        ...state,
        dataChatList: payload.response.data.data,
        errorChatList: "",
        loadingChatList: false,
      };

    case actionTypesChatList.CHAT_LIST_ERROR:
      return {
        ...state,
        dataChatList: null,
        errorChatList: payload,
        loadingChatList: false,
      };

    default:
      return state;
  }
};

export const chatImageReducer = (
  state = { data: null, loading: "", error: "" },
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesChatImage.CHAT_IMAGE_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesChatImage.CHAT_IMAGE_SUCCESS:
      return {
        ...state,
        data: payload.response?.data?.data,
        loading: false,
        error: "",
      };

    case actionTypesChatImage.CHAT_IMAGE_ERROR:
      return {
        ...state,
        data: "null",
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
