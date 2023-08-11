import { FlatList, View } from "react-native";
import React from "react";
import { SharedStyles, Fontscales } from "../../../styles";
import { Text } from "../../../components/common";
import { data } from "./data";
import { Image } from "expo-image";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const Favorites = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.eachContainer}>
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{ uri: item.imageUrl }}
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
                text={item.title}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item.brandName}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={`Price : ${item.price}`}
            />
          </View>
          <View style={styles.iconTextContainer}>
            <Ionicons
              name="heart-sharp"
              size={scale.fontPixel(20)}
              color={colors.mainPrimary}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
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
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
    </View>
  );
};
