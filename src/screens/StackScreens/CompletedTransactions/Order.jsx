import { FlatList, View, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SharedStyles, Fontscales } from "../../../styles";
import { Text } from "../../../components/common";
import { order } from "./data";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { Ionicons } from "@expo/vector-icons";

export const Order = () => {
  const { navigate } = useNavigation();
  const render = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigate("OrderDetails", {
            item: item,
          });
        }}
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{ uri: item.productImage }}
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
                text={item.productName}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item.designer}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={`Arrived on ${item.dateArrived}`}
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
                Fontscales.labelLargeRegular,
                {
                  color: colors.mainPrimary,
                },
              ]}
              text={item.orderId}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        SharedStyles.container,
        {
          paddingBottom:
            Platform.OS === "ios"
              ? scale.pixelSizeVertical(30)
              : scale.pixelSizeVertical(1),
        },
      ]}
    >
      <FlatList
        data={order}
        renderItem={render}
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};