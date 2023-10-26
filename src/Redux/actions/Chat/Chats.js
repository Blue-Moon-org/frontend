import { ADD_MESSAGE, SET_MESSAGES } from "../../constants/Chats";

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message,
  };
};

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages: messages,
  };
};

// const getUserChatsSuccess = (chats) => {
//   return {
//     type: actionTypes.GET_CHATS_SUCCESS,
//     chats: chats,
//   };
// };

// export const getUserChats = (username, token) => {
//   return (dispatch) => {
//     axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//     axios.defaults.xsrfCookieName = "csrftoken";
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`,
//     };
//     axios
//       .get(`${HOST_URL}/chat/?username=${username}`)
//       .then((res) => dispatch(getUserChatsSuccess(res.data)));
//   };
// };