import { View, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { ChatHeader } from "../../../components/primary/ChatHeader";
import { Interactions } from "./Interactions";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useKeyboardHeight } from "../../../customHooks";
import { scale } from "../../../utils/scale";
import { chatData } from "./data";
import { RenderChat } from "./RenderChat";
import { ChatHeading } from "./ChatHeading";
import { Measurements } from "./Measurements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import { Websocket } from "../../../utils/Socket/Websocket";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

export const Chat = () => {
  const { keyboardHeight, show } = useKeyboardHeight();
  const [isMeasurementModalActive, setIsMeasurementModalActive] =
    useState(false);
  const [measurs, setMeasurs] = useState([
    {
      part: "",
      size: "",
      id: 1,
    },
    {
      part: "",
      size: "",
      id: 2,
    },
    {
      part: "",
      size: "",
      id: 3,
    },
  ]);

  const [msg, updateMsg] = useState("");

  const scrollRef = useRef();

  const scroll = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  };
  const layout = () => {
    scrollRef.current.scrollToOffset({ offset: 0, animated: false });
  };
  const { params } = useRoute();

  const shiftValue =
    Platform.OS === "ios"
      ? scale.pixelSizeVertical(95)
      : scale.pixelSizeVertical(40);

  const [user, updateUser] = useState("");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      updateUser(JSON.parse(jsonValue));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    let sub = true;
    if (sub) {
      getData();
    }

    return () => (sub = false);
  }, [user]);

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

  const fetchMessages = (chatId) => {
    sendMessage({
      command: "fetch_messages",
      chatId: chatId,
    });
  };

  const newMessage = (from, chatId, message) => {
    sendMessage({
      command: "new_message",
      from: from,
      msg_type: "text",
      chatId: chatId,
      message: message,
    });
    updateMsg("");
  };

  const newMeasureMessage = (from, chatId, message) => {
    sendMessage({
      command: "new_message",
      from: from,
      msg_type: "measure",
      chatId: chatId,
      message: message,
    });
    updateMsg("");
  };

  const {
    addCallbacks,
    cb,
    connect,
    disconnect,
    socketNewMessage,
    ref,
    state,
    chatData: dataChat,
  } = Websocket(params.item.room_name);

  // console.warn(dataChat);

  const chatInitialization = () => {
    waitForSocketConnection(() => {
      fetchMessages(params.item.id);
    });
    connect();
  };

  useEffect(() => {
    let sub = true;
    if (sub) {
      chatInitialization();
    }

    return () => (sub = false);
  }, [params.item.id]);

  const waitForSocketConnection = (callb) => {
    setTimeout(() => {
      if (state() === 1) {
        console.warn("connection established");
        callb();
        return;
      } else {
        console.warn("waiting for connection");
        waitForSocketConnection(callb);
      }
    }, 100);
  };

  // console.warn("socketRef", ref);
  const _messageHandler = () => {
    newMessage(user.id, params.item?.id, msg);
    // updateMsg("");
  };

  const _measureHandler = () => {
    // const newMeasure = measurs.map(({ id, ...rest }) => rest);
    // newMeasure.map((each, index) => {
    //   if (each.part === "") {
    //     console.warn("object");
    //   } else {
    //     console.warn("n0");
    //   }
    // });
    if (newMeasure[0].part === "" || newMeasure[0].size === "") {
      Toast.show({
        type: "warn",
        text1: "Warning",
        text2: "At least fisrt body part and its size must be filled",
        position: "bottom",
      });
    } else {
      newMeasureMessage(user.id, params.item?.id, newMeasure);
      setIsMeasurementModalActive(false);
    }
    // console.warn(newMeasure);
  };
  // console.warn(user.id);
  const chatD = useSelector((state) => state.chats);


  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          overflow: "hidden",
          paddingBottom: 2,
        }}
      >
        <ChatHeader user={user} otherUser={params.otherUser} />
      </View>
      <View
        style={{
          flex: Platform.OS === "android" ? 14 : 9,
          marginBottom:
            Platform.OS === "android"
              ? scale.pixelSizeVertical(20)
              : Platform.OS === "ios" && show
              ? scale.pixelSizeVertical(keyboardHeight - 10)
              : 1,
          opacity:
            Platform.OS === "ios" && isMeasurementModalActive
              ? 0.2
              : Platform.OS === "android" && isMeasurementModalActive
              ? 0.5
              : 1,
        }}
      >
        {chatData && (
          <FlatList
            ref={scrollRef}
            ListFooterComponent={ChatHeading}
            data={chatD.messages}
            renderItem={({ item, index, separators }) => (
              <RenderChat
                user={params.otherUser[0]}
                item={item}
                index={index}
                separator={separators}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: scale.pixelSizeHorizontal(16),
            }}
            inverted={-1}
            scrollEventThrottle={16}
            // onLayout={() => layout()}
            // contentOffset={{ y: 2000 }}
            // onContentSizeChange={() => scroll()}
          />
        )}
      </View>
      {isMeasurementModalActive && (
        <View
          style={[
            styles.interactContainer,
            {
              width: "100%",
              justifyContent: "center",
              // alignItems: "center",
              bottom:
                Platform.OS === "ios" && show
                  ? scale.pixelSizeVertical(keyboardHeight + 60)
                  : Platform.OS === "android" && show
                  ? scale.pixelSizeVertical(40)
                  : shiftValue,
            },
          ]}
        >
          <Measurements
            _measureHandler={_measureHandler}
            measurs={measurs}
            setMeasurs={setMeasurs}
            isMeasurementModalActive={isMeasurementModalActive}
            setIsMeasurementModalActive={setIsMeasurementModalActive}
          />
        </View>
      )}
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={[
            styles.interactContainer,
            {
              bottom:
                Platform.OS === "ios" && show
                  ? scale.pixelSizeVertical(keyboardHeight - 20)
                  : scale.pixelSizeVertical(15),
              opacity:
                Platform.OS === "ios" && isMeasurementModalActive
                  ? 0.2
                  : Platform.OS === "android" && isMeasurementModalActive
                  ? 0.5
                  : 1,
            },
          ]}
        >
          <Interactions
            _messageHandler={_messageHandler}
            isMeasurementModalActive={isMeasurementModalActive}
            setIsMeasurementModalActive={setIsMeasurementModalActive}
            msg={msg}
            updateMsg={updateMsg}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
