import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../common";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";
import { Fontscales } from "../../styles";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../utils/request";

export const AppHeader = () => {
  const { navigate } = useNavigation();

  const state = useSelector((state) => state.cartView);
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

  // console.warn(user);

  return Platform.OS === "ios" ? (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.headerContainer,
          { paddingTop: Constants.statusBarHeight },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate("Profile")}
          style={styles.imageConatiner}
        >
          <Image
            contentFit="cover"
            style={styles.image}
            cachePolicy={"memory-disk"}
            source={{
              uri: `${baseURL + user?.image}`,
            }}
          />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <Ionicons
            name="search-outline"
            size={scale.fontPixel(24)}
            color={colors.blackText}
            style={styles.icon}
          />
          <TextInput
            returnKeyType="search"
            onSubmitEditing={() =>
              navigate("RootStack", {
                screen: "Search",
              })
            }
            style={[styles.textInput, Fontscales.labelSmallRegular]}
            placeholder="Search for anything"
          />
        </View>

        <View style={styles.iconContainer}>
          {state.data && (
            <View style={styles.cartBargeContainer}>
              <Text text={state.data?.length} textStyle={styles.text} />
            </View>
          )}
          <Ionicons
            name="cart-outline"
            size={scale.fontPixel(30)}
            color="black"
            onPress={() =>
              navigate("RootStack", {
                screen: "Cart",
              })
            }
          />
        </View>
      </View>
    </View>
  ) : (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={[
          styles.headerContainer,
          // { paddingTop: Constants.statusBarHeight },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate("Profile")}
          style={styles.imageConatiner}
        >
          <Image
            contentFit="cover"
            style={styles.image}
            cachePolicy={"memory-disk"}
            source={{
              uri: `${baseURL + user?.image}`,
            }}
          />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <Ionicons
            name="search-outline"
            size={scale.fontPixel(24)}
            color={colors.blackText}
            style={styles.icon}
          />
          <TextInput
            returnKeyType="search"
            onFocus={() =>
              navigate("RootStack", {
                screen: "Search",
              })
            }
            style={[styles.textInput, Fontscales.labelSmallRegular]}
            placeholder="Search for anything"
          />
        </View>

        <View style={styles.iconContainer}>
          {state.data && (
            <View style={styles.cartBargeContainer}>
              <Text text={state.data?.length} textStyle={styles.text} />
            </View>
          )}
          <Ionicons
            name="cart-outline"
            size={scale.fontPixel(30)}
            color="black"
            onPress={() =>
              navigate("RootStack", {
                screen: "Cart",
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height:
      Platform.OS === "ios" ? scale.heightPixel(140) : scale.heightPixel(120),
    borderBottomRightRadius: scale.fontPixel(20),
    borderBottomLeftRadius: scale.fontPixel(20),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:
      Platform.OS === "android"
        ? scale.pixelSizeVertical(10)
        : scale.pixelSizeVertical(10),
  },
  imageConatiner: {
    height: Platform.OS === "ios" ? "76%" : "76%",
    width: "13%",
    borderRadius: scale.fontPixel(8),
    backgroundColor: colors.lightPrimary,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "8%",
  },
  text: {
    paddingVertical: scale.fontPixel(3),
    paddingHorizontal: scale.fontPixel(7),
    fontSize: scale.fontPixel(11),
    color: "white",
    zIndex: 1,
  },
  cartBargeContainer: {
    position: "absolute",
    backgroundColor: colors.mainPrimary,
    right: -scale.fontPixel(7),
    top: -scale.fontPixel(5),
    borderRadius: scale.fontPixel(50),
    zIndex: 1,
  },
  textInputContainer: {
    width: "70%",
    flexDirection: "row",
    backgroundColor: colors.grey2,
    height: "70%",
    alignItems: "center",
    paddingLeft: scale.pixelSizeHorizontal(10),
    borderRadius: scale.fontPixel(10),
  },
  icon: {},
  textInput: {
    paddingLeft: scale.pixelSizeHorizontal(8),
    width: "85%",
  },
  icon: {},
});
