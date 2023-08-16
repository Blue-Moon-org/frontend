import { Platform, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../common";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";
import { Fontscales } from "../../styles";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

export const FindHeader = ({ state, updateState }) => {
  const { navigate } = useNavigation();
  return Platform.OS === "ios" ? (
    <>
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.headerContainer,
            { paddingTop: Constants.statusBarHeight },
          ]}
        >
          <View style={styles.imageConatiner}>
            <Image
              contentFit="cover"
              style={styles.image}
              cachePolicy={"memory-disk"}
              source={{
                uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000&t=st=1688497523~exp=1688498123~hmac=231d6292720e943c2a7e81a88bbb01be8748b8129b28e86495ab70df0f302c89",
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              returnKeyType="search"
              onSubmitEditing={() =>
                navigate("RootStack", {
                  screen: "Search",
                })
              }
              style={[styles.textInput, Fontscales.labelSmallRegular]}
              placeholder="Enter a location"
              // onChangeText={(text) => {
              //   updateState({ ...state, searchText: text });
              // }}
              // value={state.searchText}
            />
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.cartBargeContainer}>
              <Text text={4} textStyle={styles.text} />
            </View>
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
    </>
  ) : (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View
          style={[
            styles.headerContainer,
            // { paddingTop: Constants.statusBarHeight },
          ]}
        >
          <View style={styles.imageConatiner}>
            <Image
              contentFit="cover"
              style={styles.image}
              cachePolicy={"memory-disk"}
              source={{
                uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000&t=st=1688497523~exp=1688498123~hmac=231d6292720e943c2a7e81a88bbb01be8748b8129b28e86495ab70df0f302c89",
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              returnKeyType="search"
              onSubmitEditing={() =>
                navigate("RootStack", {
                  screen: "Search",
                })
              }
              // onChangeText={(text) => {
              //   updateState({ ...state, searchText: text });
              // }}
              // value={state.searchText}
              style={[styles.textInput, Fontscales.labelSmallRegular]}
              placeholder="Enter a location"
            />
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.cartBargeContainer}>
              <Text text={4} textStyle={styles.text} />
            </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height:
      Platform.OS === "ios" ? scale.heightPixel(140) : scale.heightPixel(120),
    borderBottomRightRadius: scale.fontPixel(20),
    borderBottomLeftRadius: scale.fontPixel(20),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
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
    borderRadius: scale.fontPixel(12),
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(12),
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
    width: "95%",
  },
  icon: {},
});
