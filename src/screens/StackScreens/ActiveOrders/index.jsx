import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { baseURL } from "../../../utils/request";

export const ActiveOrders = () => {
  const { params } = useRoute();

  const { navigate } = useNavigation();

  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigate("OrderDetail", {
            orderId: item.tracking_number,
            item: params.item,
            productItem: item,
          })
        }
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{
              uri: `${baseURL + item.product?.images[0]?.image}`,
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
                text={item?.product?.title}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={params.item?.seller?.brand_name}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={` Quantity : ${params.item?.quantity}`}
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
              text={params.item?.tracking_number}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
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
            data={params.item.products}
            renderItem={({ item, index }) => (
              <RenderItem item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};
