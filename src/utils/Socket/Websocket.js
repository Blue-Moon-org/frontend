import { socketUrl } from "./index";
import { useRef, useState } from "react";
import { addMessage, setMessages } from "../../Redux/actions/Chat/Chats";
import { useDispatch } from "react-redux";

export const Websocket = (room_name) => {
  const ref = useRef();

  const [chatData, updateChatData] = useState([]);
  const dispatch = useDispatch();

  let cb = {};

  const connect = (room_name) => {
    const path = `${socketUrl}/ws/chat/${room_name}/`;
    ref.current = new WebSocket(path);

    ref.current.onopen = () => {
      console.warn("Websocket opened");
    };

    ref.current.onmessage = (e) => {
      socketNewMessage(e.data);
    };

    ref.current.onerror = (e) => {
      console.warn(e);
    };

    ref.current.onclose = () => {
      console.warn("websocket closed");
      connect();
    };
  };

  const disconnect = () => {
    try {
      ref.current.close();
    } catch (error) {
      console.warn(error);
    }
  };

  const socketNewMessage = (data) => {
    const parsedData = JSON.parse(data);
    const command = parsedData.command;
    if (parsedData.command === "messages") {
      dispatch(setMessages(parsedData.messages));
    } else {
      dispatch(addMessage(parsedData.message));
    }

    if (Object.keys(cb).length === 0) {
      return;
    }
    if (command === "messages") {
      cb[command](parsedData.messages);
      // console.warn(parsedData.messages);
    }
    if (command === "new_message") {
      cb[command](parsedData.message);
      // chatData.push(parsedData.message);
    }
  };

  const addCallbacks = (msgCallback, newMsgCllback) => {
    cb["messages"] = msgCallback;
    cb["new_message"] = newMsgCllback;
  };

  const state = () => {
    return ref.current.readyState;
  };

  return {
    state,
    addCallbacks,
    disconnect,
    connect,
    cb,
    socketNewMessage,
    ref,
    chatData,
  };
};
