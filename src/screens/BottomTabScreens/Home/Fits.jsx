import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../../../utils/request";
import { HomeListComponentEmpty } from "../../../components/primary";

export const Fits = ({ nativeData, state }) => {
  const { navigate } = useNavigation();
  const renderItem = ({ item, index, separator }) => {
    const _detailHandler = () => {
      navigate("RootStack", {
        screen: "PostDetail",
        params: {
          item,
        },
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
            source={{ uri: `${baseURL + item?.images[0]?.image}` }}
            contentFit="cover"
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
          <AntDesign
            name={item.user_has_liked ? "heart" : "hearto"}
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
            text={item.title}
          />
          <Text
            text={item.body}
            textStyle={styles.subText}
            ellipsizeMode={"tail"}
            numberOfLines={2}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={nativeData?.posts}
        renderItem={renderItem}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
          // width: "100%",
        }}
      />
    </View>
  );
};
