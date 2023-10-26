import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChatLog } from "../Redux/actions/Chat/SendChat";
import { connect } from "socket.io-client";
import { socket } from "../utils/Socket/";

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

  // let socket;
  let ws;

  const dispatch = useDispatch();

  const sendMessage = (command, from, chatId, message, room_name) => {
    const payload = {
      command,
      from,
      chatId,
      message,
    };
    socket.emit(
      `ws://212.71.235.37:8000/ws/chat/${room_name}/`,
      JSON.stringify(payload)
    );
    dispatch(updateChatLog(payload));
  };

  // if (!socket) {
  //   socket = connect(socket);

  // socket.on("event://get-message", (msg) => {
  //   const payload = JSON.parse(msg);
  //   dispatch(updateChatLog(payload));
  // });

  ws = {
    socket,
    sendMessage,
  };
  // }
  return (
    <AuthContext.Provider value={{ currentUser, updateCurrentUser, ws }}>
      {children}
    </AuthContext.Provider>
  );
};

// export default ({ children }) => {

//     const sendMessage = (roomId, message) => {
//         const payload = {
//             roomId: roomId,
//             data: message
//         }
//         socket.emit("event://send-message", JSON.stringify(payload));
//         dispatch(updateChatLog(payload));
//     }

//     if (!socket) {
//         socket = io.connect(WS_BASE)

//         socket.on("event://get-message", (msg) => {
//             const payload = JSON.parse(msg);
//             dispatch(updateChatLog(payload));
//         })

//         ws = {
//             socket: socket,
//             sendMessage
//         }
//     }
