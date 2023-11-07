import React, { useContext, useEffect } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { BottomTabStack } from "./BottomTabStack";
import { RootStack } from "./RootStack";
import { AuthContext } from "../Context";

const Stack = createSharedElementStackNavigator();

const Stacks = () => {
  const {
    addCallbacks,
    cb,
    connect,
    disconnect,
    socketNewMessage,
    state: chatState,
    ref,
    currentUser,
  } = useContext(AuthContext);

  useEffect(() => {
    let sub = true;
    if (sub) {
      chatInitialization();
    }
    return () => (sub = false);
  }, [currentUser?.id]);

  const waitForSocketConnection = (callb) => {
    setTimeout(() => {
      if (chatState() === 1) {
        console.warn("connection established");
        callb();
        return;
      } else {
        console.warn("waiting for connection");
        waitForSocketConnection(callb);
      }
    }, 100);
  };
  const chatInitialization = () => {
    waitForSocketConnection(() => {
      fetchChatList();
    });
    connect(currentUser?.id);
  };

  const sendMessage = (data) => {
    if (ref.current) {
      try {
        ref.current.send(JSON.stringify({ ...data }));
        // console.warn("Message sent successfully");
      } catch (error) {
        console.warn(error.message);
      }
    } else {
      console.warn("connection issue");
    }
  };

  const fetchChatList = () => {
    sendMessage({
      command: "chat_list",
    });
  };

  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="RootStack" component={RootStack} />
    </Stack.Navigator>
  );
};

export default Stacks;
