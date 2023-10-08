import { TouchableOpacity, View, Platform, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AppHeader } from "../../../components/primary";
import { Feature } from "./Feature";
import { topData } from "./data";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Ankara } from "./Ankara";
import { Fits } from "./Fits";
import { Suits } from "./Suits";
import { Senator } from "./Senator";
import { All } from "./All";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";
import { Lodaing } from "../../../components/primary";
import { CartView } from "../../../Redux/actions/Market/CartView";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home = () => {
  const [type, updateType] = useState("All");
  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();
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
    let subscribe = true;

    if (subscribe) {
      dispatch(CartView(navigate));
      getData();
    }

    return () => (subscribe = false);
  }, []);

  return (
    <View style={[SharedStyles.container]}>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(295) + Constants.statusBarHeight + add
              : scale.height * 0.338 + Constants.statusBarHeight,

          zIndex: 2,
        }}
      >
        <AppHeader />
        <Text
          text={"Featured"}
          textStyle={[styles.featuredText, Fontscales.labelSmallMedium]}
        />
        <View style={styles.featuredContainer}>
          <Feature />
        </View>

        <View style={styles.headerOptionContainer}>
          {topData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.options,
                  {
                    borderColor:
                      item.name === type ? colors.mainPrimary : colors.grey2,
                  },
                ]}
                onPress={() => {
                  updateType(item.name);
                }}
                key={item.id}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  textStyle={[
                    styles.optionsText,
                    {
                      color:
                        item.name === type ? colors.mainPrimary : colors.grey1,
                      paddingLeft:
                        item.name === type
                          ? scale.pixelSizeHorizontal(5)
                          : scale.pixelSizeHorizontal(5),
                    },
                  ]}
                  text={item.name}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.height -
                (scale.heightPixel(380) + Constants.statusBarHeight) -
                add
              : scale.height * 0.594 + Constants.statusBarHeight - 94,
        }}
      >
        {type === "All" ? (
          <All />
        ) : type === "Men" ? (
          <Senator />
        ) : type === "Women" ? (
          <Suits />
        ) : type === "Native" ? (
          <Fits />
        ) : (
          <Ankara />
        )}
        {user?.account_type === "Designer" && (
          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "PostCreate",
              })
            }
            activeOpacity={0.8}
            style={styles.plusSign}
          >
            <Feather name="plus" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
