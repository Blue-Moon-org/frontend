import { UPDATE_CHAT_LOG } from "../../constants/SendAndUpdateChat";

export function updateChatLog(update) {
  return {
    type: UPDATE_CHAT_LOG,
    payload: update,
  };
}
