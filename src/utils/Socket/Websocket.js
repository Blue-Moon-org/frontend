import { socketUrl } from "./index";
import { useRef, useState, useContext } from "react";
import { addMessage, setMessages } from "../../Redux/actions/Chat/Chats";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../Context/index";

export const Websocket = (id) => {
  const ref = useRef();

  const [chatData, updateChatData] = useState([]);
  const dispatch = useDispatch();

  const { currentUser } = useContext(AuthContext);

  let cb = {};

  const connect = (room_name) => {
    const path = `${socketUrl}/ws/chat/${id}/`;
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
      // connect();
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
  return () => {
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
};
