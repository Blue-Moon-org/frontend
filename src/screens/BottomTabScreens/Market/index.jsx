import { View, TouchableOpacity, Platform } from "react-native";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { Feature } from "./Feature";
import { styles } from "./styles";
import { topData } from "./data";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { All } from "./All";
import { Men } from "./Men";
import { Women } from "./Women";
import { Children } from "./Children";
import { Native } from "./Native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { fetchMarkets } from "../../../Redux/actions/Market/MarketList";
import { useDispatch, useSelector } from "react-redux";
import { Lodaing } from "../../../components/primary";
import { CartView } from "../../../Redux/actions/Market/CartView";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Market = () => {
  const [type, updateType] = useState("All");
  const [page, updatePage] = useState(1);
  const dispatch = useDispatch();

  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

  const { navigate, addListener } = useNavigation();

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
      dispatch(fetchMarkets(type, page, navigate));
      dispatch(CartView(navigate));
      getData();
    }

    return () => (sub = false);
  }, [type]);

  // useEffect(() => {
  //   let sub = addListener("focus", () => {
  //     dispatch(CartView(navigate));
  //   });

  //   return sub;
  // }, [type]);

  const marketlist = useSelector((state) => state.marketList);

  return (
    <>
      {marketlist.loading ? <Lodaing /> : null}
      <View style={SharedStyles.container}>
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? scale.heightPixel(255) + Constants.statusBarHeight + add
                : scale.height * 0.302 + Constants.statusBarHeight,

            zIndex: 2,
          }}
        >
          <AppHeader />
          <View style={styles.featuredContainer}>
            <Feature />
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.headerOptionContainer}>
              {topData.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.options,
                      {
                        borderColor:
                          item.name === type
                            ? colors.mainPrimary
                            : colors.grey2,
                      },
                    ]}
                    onPress={() => {
                      updateType(item.name);
                      updatePage(1);
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
            <View>
              {user.account_type === "Designer" && (
                <TouchableOpacity
                  onPress={() =>
                    navigate("RootStack", {
                      screen: "MarketCreate",
                    })
                  }
                  activeOpacity={0.8}
                  style={styles.plusSign}
                >
                  <Feather
                    name="plus"
                    size={scale.fontPixel(20)}
                    color="white"
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? scale.height -
                  (scale.heightPixel(349) + Constants.statusBarHeight) -
                  add
                : scale.height * 0.522 + Constants.statusBarHeight,
            zIndex: 1,
          }}
        >
          {marketlist.category === "All" ? (
            <All
              type={type}
              page={page}
              updatePage={updatePage}
              state={marketlist}
              data={marketlist.dataAll}
            />
          ) : marketlist.category === "Men" ? (
            <Men
              type={type}
              page={page}
              updatePage={updatePage}
              state={marketlist}
              data={marketlist.dataMen}
            />
          ) : marketlist.category === "Women" ? (
            <Women
              type={type}
              page={page}
              updatePage={updatePage}
              state={marketlist}
              data={marketlist.dataWomen}
            />
          ) : marketlist.category === "Ankara" ? (
            <Children
              type={type}
              page={page}
              updatePage={updatePage}
              state={marketlist}
              data={marketlist.dataAnkara}
            />
          ) : (
            <Native
              type={type}
              page={page}
              updatePage={updatePage}
              state={marketlist}
              data={marketlist.dataNative}
            />
          )}
        </View>
      </View>
    </>
  );
};
