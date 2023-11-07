import {
  StyleSheet,
  View,
  Platform,
  Pressable,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { Text } from "../common";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";
import { Fontscales } from "../../styles";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { baseURL } from "../../utils/request";
import { useDispatch } from "react-redux";
import { setMessages } from "../../Redux/actions/Chat/Chats";

export const ChatHeader = ({
  user,
  otherUser,
  goBack,
  // disconnect,
  updateMsg,
}) => {
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: "Block user",
      pressAction: () => {},
    },
    {
      id: 2,
      title: "Clear chat",
      pressAction: () => {},
    },
    {
      id: 3,
      title: "Report user",
      pressAction: () => {},
    },
    {
      id: 4,
      title: "Mute notification",
      pressAction: () => {},
    },
    {
      id: 5,
      title: "Disable calling",
      pressAction: () => {},
    },
  ];

  useEffect(() => {
    const backAction = () => {
      dispatch(setMessages([]));
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageTextContainer}>
        <Entypo
          name="chevron-left"
          size={scale.fontPixel(30)}
          color="black"
          style={{ marginRight: scale.pixelSizeHorizontal(5) }}
          onPress={() => {
            goBack();
            dispatch(setMessages([]));
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${baseURL + otherUser[0]?.profile_pic}`,
            }}
            contentFit="cover"
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text
            text={otherUser[0]?.fullname}
            textStyle={[styles.name, Fontscales.labelLargeMedium]}
          />
        </View>
      </View>
      <View style={styles.imageTextContainer}>
        {/* <Pressable
          // onPress={() => {
          //   console.warn("object");
          // }}
          style={styles.callIconContainer}
        >
          <Ionicons
            name="ios-call-outline"
            size={scale.fontPixel(18)}
            color="black"
          />
        </Pressable> */}
        <Pressable
          // onPress={() => {
          //   console.warn("object");
          // }}
          style={styles.lineTextContainer}
        >
          <Menu style={{}}>
            <MenuTrigger
              customStyles={{
                triggerWrapper: {
                  top: -1,
                },
              }}
            >
              <Entypo
                name="dots-three-vertical"
                size={scale.fontPixel(24)}
                color="black"
              />
            </MenuTrigger>
            <MenuOptions
              style={{
                backgroundColor: "white",
                overflow: "hidden",
                borderRadius: scale.fontPixel(8),
              }}
            >
              {data.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={{ marginVertical: scale.pixelSizeVertical(5) }}
                  >
                    <MenuOption onSelect={item.pressAction}>
                      <Text
                        textStyle={Fontscales.labelSmallRegular}
                        text={item.title}
                      />
                    </MenuOption>
                    {data.length === index + 1 ? null : (
                      <View style={styles.divider} />
                    )}
                  </View>
                );
              })}
            </MenuOptions>
          </Menu>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    borderBottomRightRadius: scale.fontPixel(20),
    borderBottomLeftRadius: scale.fontPixel(20),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop:
      Platform.OS === "ios" ? scale.heightPixel(10) : scale.heightPixel(20),
    paddingBottom:
      Platform.OS === "ios" ? scale.heightPixel(10) : scale.heightPixel(10),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "android" ? 0.6 : 0.22,
    shadowRadius: 1.0,
    elevation: 5,
  },
  imageContainer: {
    height: scale.heightPixel(40),
    width: scale.widthPixel(40),
    borderRadius: scale.fontPixel(8),
    backgroundColor: colors.mainPrimary,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  name: {
    marginLeft: scale.pixelSizeHorizontal(8),
  },
  nameContainer: {},
  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callIconContainer: {
    paddingVertical: scale.pixelSizeVertical(5),
    paddingHorizontal: scale.pixelSizeHorizontal(5),
    backgroundColor: colors.fadedPrimary,
    borderRadius: scale.fontPixel(4),
  },
  lineTextContainer: {
    marginLeft: scale.fontPixel(10),
  },
  menuContainer: {
    // flex: 1,
    backgroundColor: "#f00",
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 30,
    // flexDirection: "column",
  },
  divider: {
    borderColor: colors.grey2,
    marginHorizontal: scale.pixelSizeHorizontal(5),
    borderTopWidth: 1,
  },
});
