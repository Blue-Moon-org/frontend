import { View, FlatList, Platform } from "react-native";
import React from "react";
import { dataSenator } from "./data";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { colors } from "../../../constants/colorpallette";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

export const Senator = () => {
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
          <AntDesign
            name={item.like ? "heart" : "hearto"}
            size={scale.fontPixel(18)}
            color={colors.mainPrimary}
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
            ? scale.height - scale.heightPixel(430)
            : scale.height - scale.heightPixel(390),
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={dataSenator}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
          // width: "100%",
        }}
      />
      {/* <View style={{ height: scale.heightPixel(30) }} /> */}
    </View>
  );
};
