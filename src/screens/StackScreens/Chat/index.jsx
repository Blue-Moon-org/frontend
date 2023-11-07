import {
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  BackHandler,
  Alert,
} from "react-native";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { ChatHeader } from "../../../components/primary/ChatHeader";
import { Interactions } from "./Interactions";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useKeyboardHeight } from "../../../customHooks";
import { scale } from "../../../utils/scale";
import { RenderChat } from "./RenderChat";
import { ChatHeading } from "./ChatHeading";
import { Measurements } from "./Measurements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { AuthContext } from "../../../Context";
import * as Progress from "react-native-progress";
import { colors } from "../../../constants/colorpallette";
import { setMessages } from "../../../Redux/actions/Chat/Chats";

export const Chat = () => {
  const { keyboardHeight, show } = useKeyboardHeight();
  const [isMeasurementModalActive, setIsMeasurementModalActive] =
    useState(false);

  const [progress, updateProgress] = useState(0);

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
  const { addListener, goBack } = useNavigation();

  const dispatch = useDispatch();

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

  const fetchMessages = (chatId) => {
    sendMessage({
      command: "fetch_messages",
      chatId: chatId,
      room_name: params.item.room_name,
    });
  };

  const newMessage = useCallback(
    (from, chatId, message) => {
      const PasRep = message.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
      sendMessage({
        command: "new_message",
        from: from,
        msg_type: "text",
        chatId: chatId,
        message: PasRep,
        room_name: params.item.room_name,
      });
      updateMsg("");
    },
    [user.id, params.item?.id, msg]
  );

  const newMeasureMessage = (from, chatId, message) => {
    sendMessage({
      command: "new_message",
      from: from,
      msg_type: "measure",
      chatId: chatId,
      message: message,
      room_name: params.item?.room_name,
    });
  };

  const {
    addCallbacks,
    cb,
    connect,
    disconnect,
    socketNewMessage,
    state: chatState,
    ref,
  } = useContext(AuthContext);

  useEffect(() => {
    let sub = true;
    if (sub) {
      fetchMessages(params.item.id, params.item.room_name);
    }

    return () => (sub = false);
  }, [params?.item?.room_name]);

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

  // console.warn("socketRef", ref);
  const _messageHandler = useCallback(() => {
    newMessage(user.id, params.item?.id, msg);
    updateMsg("");
  });

  const _measureHandler = () => {
    const newMeasure = measurs.map(({ id, ...rest }) => rest);

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
  };
  const chatD = useSelector((state) => state.chats);
  const imageD = useSelector((state) => state.chatImage);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          overflow: "hidden",
          paddingBottom: 2,
        }}
      >
        <ChatHeader
          user={user}
          otherUser={params.otherUser}
          goBack={goBack}
          updateMsg={updateMsg}
        />
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
        <FlatList
          ref={scrollRef}
          ListFooterComponent={ChatHeading}
          data={chatD.messages}
          renderItem={({ item, index, separators }) => (
            <RenderChat
              progress={progress}
              updateProgress={updateProgress}
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
          keyExtractor={(item, index) => item.id + index + item.timestamp}
          ListHeaderComponent={() =>
            !imageD.loading ? null : (
              <View style={{ alignSelf: "center" }}>
                <Progress.Bar
                  color={colors.mainPrimary}
                  unfilledColor={colors.lightPrimary}
                  borderWidth={scale.fontPixel(1)}
                  borderColor={colors.mainPrimary}
                  progress={progress / 100}
                  width={scale.widthPixel(250)}
                  height={scale.heightPixel(7)}
                />
              </View>
            )
          }
          // onLayout={() => layout()}
          // contentOffset={{ y: 2000 }}
          // onContentSizeChange={() => scroll()}
        />
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
            progress={progress}
            updateProgress={updateProgress}
            innerRef={ref}
            id={params.item?.id}
            userId={user.id}
            room_name={params.item.room_name}
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
