import { Platform, StyleSheet, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../common";
import { scale } from "../../utils/scale";
import { colors } from "../../constants/colorpallette";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../utils/request";
import { useSelector } from "react-redux";

export const FindHeader = ({}) => {
  //state, updateState
  const { navigate } = useNavigation();

  const [user, updateUser] = useState("");
  const state = useSelector((state) => state.cartView);

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
                uri: `${baseURL + user?.image}`,
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <GooglePlacesAutocomplete
              style={{}}
              styles={{
                textInputContainer: styles.textInputContainer,
                textInput: styles.textInput,
              }}
              onFail={(err) => console.warn(err)}
              placeholder="Find my location"
            />
            {/* <TextInput
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
            /> */}
          </View>

          <View style={styles.iconContainer}>
            <View style={styles.cartBargeContainer}>
              <Text text={state.data?.length} textStyle={styles.text} />
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
                uri: `${baseURL + user?.image}`,
              }}
            />
          </View>
          {/* <View style={styles.textInputContainer}> */}
          <GooglePlacesAutocomplete
            style={{}}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
            }}
            onFail={(err) => console.warn(err)}
            placeholder="Find my location"
          />

          {/* <TextInput
              returnKeyType="search"
              // onSubmitEditing={() =>
              //   navigate("RootStack", {
              //     screen: "Search",
              //   })
              // }
              // onChangeText={(text) => {
              //   updateState({ ...state, searchText: text });
              // }}
              // value={state.searchText}
              style={[styles.textInput, Fontscales.labelSmallRegular]}
              placeholder="Enter a location"
            /> */}
          {/* </View> */}
          <View style={styles.iconContainer}>
            <View style={styles.cartBargeContainer}>
              <Text text={state.data?.length} textStyle={styles.text} />
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
    backgroundColor: colors.mainPrimary,
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
    width: "89%",
    flexDirection: "row",
    backgroundColor: "white",
    height: "70%",
    alignItems: "center",
    borderRadius: scale.fontPixel(10),
    // backgroundColor: "red",
    zIndex: 100,
    marginHorizontal: scale.pixelSizeHorizontal(20),
    marginTop: scale.pixelSizeVertical(5),
  },
  icon: {},
  textInput: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(8),
    backgroundColor: colors.grey2,
  },
  icon: {},
});
