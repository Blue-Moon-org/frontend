import {
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
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

export const Chat = () => {
  const { keyboardHeight, show } = useKeyboardHeight();
  const [isMeasurementModalActive, setIsMeasurementModalActive] =
    useState(false);

  const scrollRef = useRef();

  const scroll = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  };
  const layout = () => {
    scrollRef.current.scrollToOffset({ offset: 0, animated: false });
  };

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


  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={{
          overflow: "hidden",
          paddingBottom: 2,
        }}
      >
        <ChatHeader user={user} />
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
            data={chatData}
            renderItem={RenderChat}
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
            isMeasurementModalActive={isMeasurementModalActive}
            setIsMeasurementModalActive={setIsMeasurementModalActive}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
