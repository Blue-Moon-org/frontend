import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { socketUrl } from "../utils/Socket/";
import { addMessage, setMessages } from "../Redux/actions/Chat/Chats";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [currentUser, updateCurrentUser] = useState({
    email: "",
    username: "",
    phone: "",
  });

  const getData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const savedToken = await AsyncStorage.getItem("userTokens");
      const currentToken = JSON.parse(savedToken);
      const current_user = JSON.parse(savedUser);
      updateCurrentUser(current_user);
      setToken(currentToken);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentUser]);

  const ref = useRef();

  const dispatch = useDispatch();

  let cb = {};

  const connect = () => {
    const path = `${socketUrl}/ws/chats/${currentUser?.id}/`;
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

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        updateCurrentUser,
        state,
        addCallbacks,
        disconnect,
        socketNewMessage,
        connect,
        ref,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
