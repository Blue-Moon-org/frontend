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
import { useSelector, useDispatch } from "react-redux";
import { fetchFeeds } from "../../../Redux/actions";
import { Lodaing } from "../../../components/primary";

export const Home = () => {
  const [type, updateType] = useState("All");
  const [page, updatePage] = useState(1);
  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeeds(type, page, navigate));
    }

    return () => (subscribe = false);
  }, [type]);

  const state = useSelector((state) => state.fetchFeeds);

  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View style={[SharedStyles.container]}>
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? scale.heightPixel(295) + Constants.statusBarHeight + add
                : scale.height * 0.343 + Constants.statusBarHeight,

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
                  onPress={() => updateType(item.name)}
                  key={item.id}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[
                      styles.optionsText,
                      {
                        color:
                          item.name === type
                            ? colors.mainPrimary
                            : colors.grey1,
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
                : scale.height * 0.581 + Constants.statusBarHeight - 94,
          }}
        >
          {state.data?.response?.data?.data?.categoryData.category === "All" ? (
            <All
              page={page}
              type={type}
              updatePage={updatePage}
              state={state}
              postData={state.data?.response?.data?.data?.categoryData}
            />
          ) : state.data?.response?.data?.data?.categoryData.category ===
            "Men" ? (
            <Senator
              page={page}
              updatePage={updatePage}
              state={state}
              MenData={state.data?.response?.data?.data?.categoryData}
            />
          ) : state.data?.response?.data?.data?.categoryData.category ===
            "Women" ? (
            <Suits
              page={page}
              updatePage={updatePage}
              state={state}
              womenData={state.data?.response?.data?.data?.categoryData}
            />
          ) : state.data?.response?.data?.data?.categoryData.category ===
            "Native" ? (
            <Fits
              page={page}
              updatePage={updatePage}
              state={state}
              nativeData={state.data?.response?.data?.data?.categoryData}
            />
          ) : (
            <Ankara
              page={page}
              updatePage={updatePage}
              state={state}
              ankaraData={state.data?.response?.data?.data?.categoryData}
            />
          )}
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
        </View>
      </View>
    </>
  );
};
