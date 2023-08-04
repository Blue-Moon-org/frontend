import { View, FlatList, Platform } from "react-native";
import React from "react";
import { dataAnkara } from "../Home/data";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import {  Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const Men = () => {
  const renderItem = ({ item, index, separator }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: item.imageUrl }}
            contentFit="cover"
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
          <Ionicons
            name={item.like ? "cart" : "cart-outline"}
            size={scale.fontPixel(18)}
            color={"white"}
            style={styles.likeIcon}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text
            textStyle={styles.text}
            ellipsizeMode={"tail"}
            numberOfLines={1}
            text={item.name}
          />
          <Text
            text={item.subText}
            textStyle={styles.subText}
            ellipsizeMode={"tail"}
            numberOfLines={2}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        height:
          Platform.OS === "ios"
            ? scale.height - scale.heightPixel(398)
            : scale.height < 715
            ? scale.height - scale.heightPixel(385)
            : scale.height - scale.heightPixel(335),
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={dataAnkara}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
        }}
      />
    </View>
  );
};
