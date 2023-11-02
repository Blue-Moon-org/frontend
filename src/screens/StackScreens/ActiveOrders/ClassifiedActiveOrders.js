import { View, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { GetOrders } from "../../../Redux/actions/Market/GetOrders";
import { Lodaing } from "../../../components/primary";
import { baseURL } from "../../../utils/request";

export const ClassifiedActiveOrders = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeOrder);

  const { navigate, addListener } = useNavigation();

  useEffect(() => {
    addListener("focus", () => {
      dispatch(GetOrders(navigate));
    });
    // let sub = true;
    // if (sub) {
    // }

    // return () => (sub = false);
  }, []);
  // console.warn(state?.data?.map((each) => each.order.order_products));

  const RenderItem = ({ item, index }) => {
    console.warn(item);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigate("ActiveOrders", {
            item: item,
          })
        }
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{
              uri: item?.seller?.brand_image,
            }}
            contentFit="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={Fontscales.headingSmallMedium}
                text={item?.seller?.brand_name}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item?.seller?.account_type ?? "Designer"}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={`${item?.quantity} item(s) ordered`}
            />
          </View>
          <View style={styles.iconTextContainer}>
            <Ionicons
              name="chevron-forward"
              size={scale.fontPixel(20)}
              color={colors.mainPrimary}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              textStyle={[
                Fontscales.labelSmallBold,
                {
                  color: colors.mainPrimary,
                },
              ]}
              text={item?.tracking_number}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View style={SharedStyles.container}>
        <View
          style={{
            paddingBottom:
              Constants.statusBarHeight > 30
                ? scale.pixelSizeVertical(30)
                : scale.pixelSizeVertical(1),
          }}
        >
          <FlatList
            data={state.data}
            renderItem={({ item, index, separators }) => {
              return <RenderItem item={item} index={index} />;
            }}
            // renderItem={({ item, index }) => (
            //   <RenderItem item={item} index={index} />
            // )}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};
