import { View, FlatList, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { data } from "./data";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const All = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item, index, separator }) => {
    const _detailHandler = () => {
      navigate("RootStack", {
        screen: "PostDetail",
      });
    };

    return (
      <TouchableOpacity
        onPress={() => _detailHandler()}
        activeOpacity={0.8}
        style={styles.itemContainer}
      >
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
            color={"white"}
            style={styles.likeIcon}
            onPress={() => console.warn("object")}
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
      </TouchableOpacity>
    );
  };
  return (
    <View
    // style={{
    //   height:
    //     Platform.OS === "ios"
    //       ? scale.height - scale.heightPixel(430)
    //       : scale.height < 717
    //       ? scale.height - scale.heightPixel(415)
    //       : scale.height - scale.heightPixel(390),
    // }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={data}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(5),
          // width: "100%",
        }}
      />
      {/* <View style={{ paddingBottom: scale.heightPixel(40) }} /> */}
    </View>
  );
};
