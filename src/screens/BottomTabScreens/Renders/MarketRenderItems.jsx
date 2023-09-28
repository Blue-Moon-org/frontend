import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { styles } from "../Home/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { baseURL } from "../../../utils/request";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/actions/Market/AddToCart";
import { CartView } from "../../../Redux/actions/Market/CartView";
import { colors } from "../../../constants/colorpallette";

export const MarketRenderItems = ({ item, index, separator }) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const [hasCarted, updateHasCarted] = useState(item.user_has_carted);

  const detailHandler = () => {
    navigate("RootStack", {
      screen: "MarketDetail",
      params: {
        item,
        hasCarted,
      },
    });
  };

  const cartHandler = () => {
    dispatch(AddToCart(item.slug, navigate));
    updateHasCarted(!hasCarted);
  };

  const { loading, error } = useSelector((state) => state.cartView);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => detailHandler()}
      style={styles.itemContainer}
    >
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: `${baseURL + item?.images[0]?.image}` }}
          contentFit="cover"
          cachePolicy={"memory-disk"}
          style={styles.image}
        />
        {loading ? (
          <ActivityIndicator
            style={styles.likeIcon}
            color={colors.grey1}
            size={scale.fontPixel(25)}
          />
        ) : (
          <Ionicons
            name={hasCarted ? "cart" : "cart-outline"}
            size={scale.fontPixel(18)}
            color={"white"}
            style={styles.likeIcon}
            onPress={() => cartHandler()}
          />
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Text
          textStyle={styles.text}
          ellipsizeMode={"tail"}
          numberOfLines={1}
          text={item.title}
        />
        <Text
          text={item.description}
          textStyle={styles.subText}
          ellipsizeMode={"tail"}
          numberOfLines={2}
        />
      </View>
    </TouchableOpacity>
  );
};
