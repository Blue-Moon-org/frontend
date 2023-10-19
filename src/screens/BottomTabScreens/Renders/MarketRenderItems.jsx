import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { styles } from "../Home/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { baseURL } from "../../../utils/request";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/actions/Market/AddToCart";
import { colors } from "../../../constants/colorpallette";
import { AuthContext } from "../../../Context";

export const MarketRenderItems = ({
  item,
  index,
  separator,
  profile,
  designerDetail,
  personalProfile,
}) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const [hasCarted, updateHasCarted] = useState(item.user_has_carted);
  const { currentUser } = useContext(AuthContext);

  const detailHandler = () => {
    !personalProfile
      ? profile
        ? navigate("ProfileMarketDetail", {
            item,
            hasCarted,
            designerDetail,
          })
        : navigate("RootStack", {
            screen: "MarketDetail",
            params: {
              item,
              hasCarted,
            },
          })
      : navigate("RootStack", {
          screen: "PersonalMarketPostDetail",
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

  const { loading, error, data } = useSelector((state) => state.cartView);

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
            name={
              data
                ? data.find((e) => e.product.id === item.id)
                  ? "cart"
                  : "cart-outline"
                : null
            }
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
